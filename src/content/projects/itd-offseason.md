---
title: FTC Competition Robot | INTO THE DEEP Offseason (2025)
description: Award-winning FTC competition robot.
gallery: 
    - type: image
      src: /images/itdO-real1.jpg
      caption: Picture of the robot
    - type: image
      src: /images/itdO-real2.jpg
      caption: Picture of the robot scoring
    - type: image
      src: /images/itd-claw3.png
      caption: Render of the claw end effector
    - type: image
      src: /images/cs-arm.png
      caption: Overview of the telescoping arm 
    - type: image
      src: /images/itd-otos.png
      caption: Overview of the OTOS odometry system
images:
    - /images/itdO-real1.jpg
year: "97"
---

## Overview

FTC INTO THE DEEP requires bots collect samples (small red and yellow bricks) from a central structure, score them into elevated baskets, and hook onto scoring chambers. This robot was designed to compete in the INTO THE DEEP offseason at the International Lobster Cup; additionally, a primary goal was to test out the reliability of a pivoting telescoping arm in a game where horizontal extension is necessity. The robot features a custom triple-layer telescoping slider, claw end effector, optical odometry localization, and a custom gear-driven drivetrain.


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

## Mechanical & Control Overview 

### Triple-Layer Telescoping Slider 

- Custom triple-stage telescoping architecture maximizes extension while minimizing packaging volume
- Provides vertical and horizontal reach to all scoring and collection locations
- Full extension achieved in under 1.5 seconds
- Frictionless rack-and-pinion drive converts motor rotation into linear motion

### Deposit Claw

- Designed to reliably acquire and score specimens from any orientation.
- Dual-bearing-supported servo architecture eliminated spline loading issues and improved durability.
- Compact geometry enabled seamless integration with the telescoping arm.
- Open-source design adopted by 34 FTC teams.

### Localization & Pathing

A combination of optical odometry, trajectory generation, and closed-loop control achieves consistent autonomous performance.

- OTOS optical odometry provides field localization with less than 1 inch of error after a full autonomous routine.
- Pedro Pathing generates smooth trajectories and reliable autonomous scoring paths.
- PID and feedforward control loops regulate slide and mechanism motion.
- Enabled a successful 5+0 autonomous routine in competition.

