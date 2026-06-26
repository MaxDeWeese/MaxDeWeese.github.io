---
title: FTC Competition Robot | CENTERSTAGE (2023-2024)
description: Award-winning FTC competition robot.
gallery: 
    - type: image
      src: /images/cs-bot.png
      caption: Picture of robot performing a hang
    - type: image
      src: /images/cs-end.png
      caption: End effector CAD
    - type: image
      src: /images/cs-arm.png
      caption: Overview of telescoping arm
    - type: image
      src: /images/cs-insert.png
      caption: Telescoping arm insert iterations
    - type: image
      src: /images/cs-odo-real.png
      caption: Picture of dead wheel odometry pod
    - type: image
      src: /images/cs-odo.png
      caption: Overview of dead wheel odometry
images:
    - /images/cs-bot.png
year: "96"
---

## Overview

FTC CENTERSTAGE requires robots to collect pixels(multicolored hexagonal slabs), score on a multi-level backdrop, launch paper airplanes, and perform an endgame hang. The robot features a custom triple-layer telescoping slider, active intake & deposit end effector, and precision autonomous navigation.

Technologies used:
- CAD (Onshape, Fusion 360), DFM/DFA, GD&T, FEA
- CNC Machining, 3D Printing, Electronics Assembly
- Java, Computer Vision, Sensor Fusion, PID Control

## Requirements

- Intake and store multiple game elements efficiently
- Score game elements on all backdrop levels, including the highest row
- Launch a drone into the designated scoring zone
- Reliably perform an endgame hang
- Maintain mechanical reliability, serviceability, and modularity 
- Minimize subsystem count and points of failure

## Mechanical & Control Overview 

### Triple-Layer Telescoping Slider 

- Custom triple-stage telescoping architecture maximizes extension while minimizing packaging volume
- Provides vertical reach to all scoring locations on the backdrop
- Full extension achieved in under 1.5 seconds
- Frictionless rack-and-pinion drive converts motor rotation into linear motion

### Active Intake & Deposit End Effector
- Enables rapid collection and scoring of multiple game elements per cycle
- Dual side-compression wheel intake design provides consistent acquisition from stacks
- Vertically stacked game element storage minimizes footprint while maintaining capacity

### Paper Airplane Launcher
- Rubber band launches the paper airplane with consistent trajectory and release velocity
- An adjustable alignment roof enables fine tuning during the competition

### Localization & Motion Control

- Three-wheel odometry estimates robot position and heading
- Custom PID controllers regulate translational and rotational movement

## Competition Performance
### Santa Clara Qualifying Tournament
- Connect Award 1st Place (1st of 16 teams)
- Control Award 2nd Place (2nd of 16 teams)
### San Jose Qualifying Tournament
- Inspire Award 2nd Place ( 2nd of 16 teams)
- Finalist Alliance Captain (3rd of 16 teams)
- Connect Award 1st Place (1st of 16 teams)
- Qualified for the Northern California Championship
