---
title: U-Net Pixel Art Interpolation Model
description: U-Net encoder-decoder architecture for pixel art frame interpolation with Tensorflow.
gallery: 
    - type: image
      src: /images/PAG-exp.png
      caption: Model input and output demonstration
    - type: image
      src: /images/PAG-model.png
    - type: image
      src: /images/PAG-train.png
      caption: Training the U-Net
    - type: image
      src: /images/PAG-graph.png
      caption: Training loss at the end of every epoch
    - type: image
      src: /images/PAG-postproscess.png
      caption: Post Processing and Blur Reduction
images:
    - /images/PAG-exp.png
year: "99"
---

## Overview

Designed and trained a U-Net image-to-image U-Net model to create pixel art from image inputs, enabling interpolation of missing visual detail while preserving sprite structure and pixel-art characteristics. The project focused on building an end-to-end TensorFlow training pipeline, custom dataset preprocessing, and postprocessing.

Tech used:
- TensorFlow
- Keras
- Python
- Pandas
- Numpy


## Requirements

- Generate visually consistent pixel art animation interpolations from image inputs (Generate frame 2 when given frame 1 & 3)
- Preserve sprite silhouettes, edges, and colors without introducing excessive smoothing or visual noise.
- Build a reproducible training and inference pipeline with deployable model formats.

## Dataset
The model was trained using a custom dataset of pixel-art character sprite animations collected from publicly available sprite sheets.
- Images wered loaded via PIL and converted into a tensor, and normalized.
- Over 5000 input & output pairs were generated for the dataset, these were split between training, validation, and testing


## Model Architecture
### Network Design
- Convolutional U-Net with encoder-decoder topology. 
- 2 Seperate encoders convert tensors from (96,96,4) to (200), these are then concatenated and fed into a decoder which produces a tensor in the shape of (96,96,4).
- ReLU activation

### Training 
- Adam optimizer and mse loss are used. 
- The model is trained over 35 epochs, with the loss flattening out around 30 epochs. 

## Post Proscessing
One of the major issues with the current model is that outputs are blurry and a multitude of similar colors are used; in contrast, traditional pixel art uses a color pallate of a few very different colors and has defined edges. A blur reduction algorithim is used to help mitigate these issues. 
- A histogram of the colors found within the input images is generated, colors too similar are omitted. 
- Optionally, a border color and background color are put into the histogram manually. 
- Then, each color within the output image is swapped with the closest match in the histogram. If no match is found within a certain range, the color is left as is. 

