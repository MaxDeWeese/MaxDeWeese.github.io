---
title: FTC Competition Robot | DECODE (2025-2026)
description: Award-winning FTC competition robot. 
gallery: 
    - type: image
      src: /images/decode-bot-real.png
      caption: Picture of the robot infront of it's poster
    - type: youtube
      id: RTulXf2DZi8    
      caption: practice solo match
    - type: youtube
      id: ayaWUqa-RHU    
      caption: practice solo auto
    - type: image
      src: /images/decode-bot.png
      caption: Render of the robot
    - type: image
      src: /images/decode-barrel.png
      caption: Render of the 3 barrel shooter 
    - type: image
      src: /images/decode-intake.png
      caption: Render of the intake
    - type: image
      src: /images/decode-tsf-side.png
      caption: Render of the transfer and storage from the side
    - type: image
      src: /images/decode-tsf-top.png
      caption: Render of the transfer and storage from the top
    - type: image
      src: /images/decode-gate.png
      caption: Render of the transfer gate 
    - type: image
      src: /images/decode-dt.png
      caption: Render of the chasis and drivetrain
    - type: image
      src: /images/decode-pid.png
      caption: Overview of the flywheel PID
    - type: image
      src: /images/decode-cv.png
      caption: Overview of the CV algorithm
    - type: image
      src: /images/decode-pedro.png
      caption: Overview of the pathing algorithm
images:
    - /images/decode-bot-real.png
year: "100"
---

## Overview

FTC DECODE required robots to rapidly intake, sort, and score artifacts (purple and green whiffle balls) while maintaining cycle efficiency under defense. The robot features vision-assisted targeting, autonomous driving, an active intake, servo-powered transfer system, 3 barrel flywheel shooter, and a modular aluminum/polycarbonate chassis. 

Tech used:
- CAD (Onshape, Fusion 360), DFM/DFA, GD&T, FEA
- CNC Machining, 3D Printing, Electronics Assembly
- Java, Computer Vision, Sensor Fusion, PID Control

## Goals & Requirements

- Intake and sort artifacts at high throughput
- Store and selectively score artifacts into goal
- Score from multiple field locations without sacrificing speed or accuracy
- Execute high scoring and reliable and autonomous driving
- Maintain mechanical reliability throughout tournament play
- Support rapid iteration, maintenance, modularity, and repairs
- Minimize subsystem count and points of failure

## Mechanical Overview 

### 3 Barrel Shooter

An integrated sorting and scoring mechanism designed to maximize cycle efficiency by launching all three artifacts simultaneously while minimizing subsystem count.

- 6000 RPM flywheel shooter with three independent launch barrels
- Adjustable hood driven through a geared dual-servo system for variable launch trajectories
- Centering rails provide consistent artifact compression and alignment
- Combines sorting and scoring functionality into a single subsystem

### Intake

A high-throughput active intake designed to rapidly acquire and align artifacts while minimizing jams and possession penalties.

- Custom intake wheels orient artifacts before entering the transfer system
- Independently powered upper and lower rollers enable selective artifact clearing
- Optimized intake geometry reduces side jams and improves indexing reliability
- Polycarbonate protection shields drivetrain components during robot contact

### Transfer

A servo-powered indexing system that stores, sorts, and feeds artifacts into the shooter.

- Three-channel transfer architecture with independent storage locations
- Integrated color sensors automate artifact identification and sorting
- Bistable linkage gates protect servo splines and reduce holding loads
- Anti-jam geometry prevents artifacts from becoming trapped between channels

### Chassis

A modular aluminum and polycarbonate structure optimized for durability, serviceability, and rapid iteration.

- Belt-driven holonomic mechanum drivetrain.
- Aluminum internal frame maximizes rigidity while maintaining low weight
- Polycarbonate outer structure improves impact resistance and accessibility
- Centralized electronics and modular mounting architecture simplify maintenance

## Control Overview

### Flywheel Control

A closed-loop flywheel control system designed to maintain launch velocity and scoring consistency during rapid-fire operation.

- PID-controlled flywheel velocity regulation using motor encoder feedback
- Real-time RPM compensation maintains consistent shot trajectories
- Achieved sub-150 ms flywheel recovery between consecutive shots
- Increased match-speed shooting consistency from ~82% to ~94%

### Autonomous Path Following

A motion-planning system enabling accurate autonomous navigation and repeatable positioning.

- Pedro Pathing Bezier-curve path following library
- Tunable velocity limits, curvature weighting, and pose tolerances
- Autonomous paths executed 0.8-1.2 seconds faster than equivalent driver-controlled routes
- Improved shooting alignment through precise robot positioning

### Vision & Driver Assistance

A vision-assisted targeting system that automates localization and shot parameter calculation.

- Custom OpenCV AprilTag detection pipeline
- Real-time robot pose and distance estimation
- Dynamic flywheel RPM adjustment based on shooting distance
- Automated heading correction and odometry relocalization
- Increased vision-assisted shooting accuracy from ~80% to ~95%

### Sensor Integration

A distributed sensing architecture used for game-piece management and autonomous decision making.

- Color sensors embedded within transfer channels for artifact identification
- Encoder feedback used for flywheel velocity control and localization
- Vision and odometry fused for robust field positioning
- Automated sorting and indexing reduce driver workload during matches

## Competition Performance
### Saratoga Qualifying Tournament
- Finalist Alliance Captain (3rd of 27 teams)
- Qualified for the Northern California Championship
### Folsom Qualifying Tournament
- Inspire Award 2nd Place (2nd of 28 teams)
- Qualified for the Northern California Championship
### Northern California Championship
- Innovate Award 3rd Place (3rd of 64 teams)
### Performance Metrics:
- Ranked within the Top 20 robots in California during January-February 2026
- Peak OPR (Offensive Power Rating): 103.4
- Ranked within the Top 60 autonomous programs worldwide during January 2026
- Auto OPR: 40.26
- Maximum Solo Match Score: 167 points
- Average Match Score: ~150 points
- Autonomous Score: 54 points
