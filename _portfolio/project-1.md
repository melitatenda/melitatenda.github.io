---
title: "From Casual Videos to Robotic Motion: A Framework for Video-Based Motion Imitation in Legged Robots"
excerpt: "Designing a framework to transfer skilled motions from casually captured videos of humans and animals to legged robots, including quadrupeds and humanoids, to eliminate the need for expensive motion capture systems and expert animators."
collection: portfolio
share: false
---

The project was focused on developing a framework that enables legged robots, including quadrupeds, to learn complex and natural movements directly from casual video recordings. Traditional motion imitation approaches rely on expensive motion capture systems, which limit accessibility and scalability. This project addressed these challenges by creating a system that extracts 3D motion data from videos and adapts it to the Unitree Go2 robot.

The framework included motion retargeting using inverse kinematics to ensure the robot could perform physically feasible movements. A real-time control system based on DIAL-MPC was integrated to allow the robot to accurately execute retargeted motions across various locomotion tasks such as trotting, turning, and cantering. Performance was evaluated against baseline methods, showing that the system could successfully transfer natural movements from video to robot.

The project demonstrated a scalable and cost-effective approach to motion imitation, combining computer vision, motion retargeting, and advanced control techniques. Its outcomes have potential applications in search and rescue, assistive robotics, and other domains requiring adaptive and agile robotic behaviors.