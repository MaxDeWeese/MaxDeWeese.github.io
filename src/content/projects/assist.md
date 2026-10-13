---
title: Robot Desk Assitant
description: 5 dof arm desk assistant controlled by Qwen
gallery: 
    - type: youtube
      id: rMIYvukoOf4    
      caption: Demo

    - type: image
      src: /images/assist-front.png
      caption: Front of the Robot
    - type: image
      src: /images/assist-turret.png
      caption: Back of the robot
    - type: image
      src: /images/assist-vision.png
      caption: CV filters
    - type: image
      src: /images/assist-UI.png
      caption: Picture of the UI
images:
    - /images/assist-front.png
year: "100"
---

## Overview

Assist is a 5-DOF robotic arm designed to help individuals with physical disabilities perform everyday desk tasks through natural language commands. The system integrates computer vision, large language models, inverse kinematics, and closed-loop dc motor control to autonomously identify, manipulate, and relocate objects within a workspace exceeding 130,000 cm³.

Tech used:
- CAD, 3D Printing, Mechanical Design, Electronics Assembly, Counterbalancing
- Raspberry Pi, Python, OpenCV, I²C, Qwen Endpoint
- Inverse Kinematics, PID Control, Computer Vision, Sensor Feedback

## Mechanical Overview 

### 5 DOF Arm

A custom robotic arm designed to maximize workspace coverage while maintaining a compact desktop footprint.

- 25.4 cm upper arm, 32 cm forearm, and bearing turret provide extended reach
- DC gearmotors with potentiometer and encoder feedback drive the turret, shoulder, and elbow joints
- Servo-actuated wrist and gripper enable object orientation and grasping

### Actuation & Feedback

- Dual N20 gearmotors power the elbow and turret
- B10k Potentiometers provide shoulder and elbow position feedback
- AS5600 magnetic encoder tracks turret rotation
- TB6612FNG and DRV8876 motor drivers regulate joint movement
- Counterbalancing reduces gravitational loading on the elbow and shoulder

## Control Overview

### Motion Control

Closed loop PID control and inverse kinematics enables exact end effector position control. Computer vision determines claw angle of attack, orientation, and grip width.  

### Computer Vision

An OpenCV-based perception pipeline identifies and localizes objects within the workspace.

- USB camera captures images of the workspace
- HSV color segmentation detects and distinguishes target objects
- Contour analysis identifies object dimensions, orientation, and position
- Repeated image capture at various turret angles expands the observable workspace

### LLM control

A private Qwen endpoint translates user isntructions into robotic actions.

- LLM selects predefined actions for grasping, releasing, and relocating objects
- Local web interface provides camera monitoring and robot interaction

