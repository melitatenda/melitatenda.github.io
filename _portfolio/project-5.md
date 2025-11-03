---
title: "GAN-based Cross-Modality Medical Image Synthesis for Prostate Cancer"
# excerpt: "Designing a framework to transfer skilled motions from casually captured videos of humans and animals to legged robots, including quadrupeds and humanoids, to eliminate the need for expensive motion capture systems and expert animators."
collection: portfolio
github_url: "https://github.com/francistate/GAN-based-scan-image-translation"
date: 2024-12-06
share: false
---

This project presents a GAN-based approach for cross-modality medical image synthesis for prostate cancer diagnosis, using the BicycleGAN architecture to translate ADC MRI scans into high-quality T2-weighted (T2W) MRI images. The proposed method addresses the limitations of multi-sequence MRI acquisition by
generating diagnostic-quality T2W images from ADC MRI scans, reducing the need for costly and time-intensive multi-sequence MRI image acquisition. Using a
curated dataset of paired ADC and T2W MRI images, we trained the model and evaluated its performance using metrics including PSNR, SSIM, and L1 loss. Our
results demonstrate that the enhanced model, incorporating self-attention mechanisms, perceptual loss, and gradient penalties, significantly improves structuralfidelity and pixel-wise accuracy. The model achieved a PSNR of 26.48 dB and L1 loss of 0.05 which is a considerable improvement from the baseline approach with PNSR of 25.57 dB and L1 loss of 0.39. This technique holds promise for streamlining prostate cancer diagnosis, particularly in low-resource settings, by reducing the need for multiple scans during diagnosis
