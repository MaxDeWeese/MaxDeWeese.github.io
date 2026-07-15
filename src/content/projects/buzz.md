---
title: BuzzBuddy
description: An iOS app using behavioral testing, mobile sensors, and machine learning to estimate impairment and promote safer decisions.
gallery: 
    - type: image
      src: /images/bb-result.png
    - type: image
      src: /images/bb-event.png
      caption: Page to plan events and designated drivers
    - type: image
      src: /images/bb-reason.png
      caption: Model's reasoning inbetween tests
    - type: image
      src: /images/bb-cont.png
    - type: image
      src: /images/bb-mem.png
      caption: Memory test
images:
    - /images/bb-event.png
year: "97"
---

## Overview

BuzzBuddy is an iOS application that uses behavioral testing, mobile sensing, biometric data, and agentic AI to estimate changes in user impairment. The project was built during DigitalOcean's AI for Social Good Hack where it placed 3rd Overall.

## System Architecture

BuzzBuddy was built with a SwiftUI frontend and a Python backend. The iOS application handles user interaction, cognitive assessments, and sensor collection, while the backend processes data and communicates with an agentic AI framework.

The app collects multiple data streams, including reaction time, memory performance, biometric data, balance, and walking stability from the iPhone's built-in 6-axis IMU. These measurements are compared against personalized sober baselines to identify changes in mental impairment.

## Recognition

BuzzBuddy earned 3rd Place Overall at AI for Social Good: Hack, hosted by Major League Hacking (MLH) and DigitalOcean.