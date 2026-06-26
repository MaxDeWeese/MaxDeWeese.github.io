---
title: FTC Competition Robot | INTO THE DEEP (2024-2025)
description: Award-winning FTC competition robot.
gallery: 
    - type: image
      src: /images/itd-bot-render.png
      caption: Render of the Robot
    - type: image
      src: /images/itd-arm.png
      caption: Render of the differential scoring arm  
    - type: image
      src: /images/itd-vslides.png
      caption: Render of the vertical slides 
    - type: image
      src: /images/itd-claw.png
      caption: Render of the claw's 3 iterations
    - type: image
      src: /images/itd-clawIntake.png
      caption: Render of the first intake version
    - type: image
      src: /images/itd-activeIntake.png
      caption: Render of the second intake version
    - type: image
      src: /images/itd-chasis-below.png
      caption: Render of the chasis
    - type: image
      src: /images/itd-otos.png
      caption: Overview of the OTOS odometry system
images:
    - /images/itd-bot-render.png
year: "98"
---

## Overview

FTC INTO THE DEEP requires bots collect samples (small red and yellow bricks) from a central structure, score them into elevated baskets, and hook onto scoring chambers. The robot features a differential deposit arm, vertical telescoping deposit slides, motorized horizontal extension, active intake, optical odometry localization, and a custom belt-driven drivetrain.

Tech used:
- CAD (Onshape, Fusion 360), DFM/DFA, GD&T, FEA
- CNC Machining, 3D Printing, Electronics Assembly
- Java, Sensor Fusion, PID Control

## Requirements

- Score game elements in the High Chamber and Basket from multiple orientations.
- Collect and transfer samples from the Submersible rapidly and consistently.
- Achieve a reliable autonomous routine with accurate localization.
- Maintain mechanical reliability, serviceability, and modularity 
- Minimize weight and actuator count without sacrificing functionality.

## Mechanical Overview 

### Drivetrain & Chasis 

A compact belt-driven drivetrain was designed to maximize maneuverability while efficiently packaging multiple scoring mechanisms within the robot footprint.

- 12.5in x 12.5in chassis optimized for movement around the field and weight mitigation.
- Belt-driven holonomic mechanum drivetrain.

### Differential Deposit Arm & Vertical Slides

A custom reverse differential arm enables independent wrist and pivot control while minimizing actuator count, weight, and packaging constraints.

- Reverse differential controls both arm and wrist motion using only two servos.
- Constructed from polycarbonate and 3D-printed components to reduce moving mass.
- Dual 435 RPM motor-driven slides extend over 45 inches vertically in approximately one second.

### Active Intake & Horizontal Extension 

Intake and extension system was designed to rapidly reach and collect samples from deep within the central structure and automate the transfer process.

- Linkage-driven horizontal extension which reaches full deployment in approximately 0.6 seconds.
- Roller&flap-based active intake improved acquisition speed and consistency compared to claw-based solutions.
- Color sensor automatically detects collected samples and initiates intake retraction.


## Control Overview 

### Localization & Pathing

A combination of optical odometry, trajectory generation, and closed-loop control achieves consistent autonomous performance.

- OTOS optical odometry provides field localization with less than 1 inch of error after a full autonomous routine.
- Pedro Pathing generates smooth trajectories and reliable autonomous scoring paths.
- PID and feedforward control loops regulate slide and mechanism motion.
- Enabled a successful 4+0 autonomous routine in competition.

## Competition Performance
### Saratoga Qualifying Tournament
- Control Award (1st of 25 teams)
### Folsom Qualifying Tournament
- Inspire Award 3rd Place (3rd of 25 teams)
- Qualified for the Northern California Championship
