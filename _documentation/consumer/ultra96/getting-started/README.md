---
title: Getting Started with the Ultra96
permalink: /documentation/consumer/ultra96/getting-started/
---

# Getting Started

Learn about your Ultra96 board as well as how to prepare and set up for basic use

## Setup - What you will need

**Need**

- [Ultra96](https://www.96boards.org/product/ultra96/)
   - Board based on Xilinx Zynq UltraScale+ MPSoC ZU3EG A484
- Power adapter
   - 96Boards specifications requires a 8V-18V with 2000mA Power adapter

**Optional**

- USB Keyboard and Mouse
   - With two USB-A connectors, all 96Boards can be equiped with a full sized keyboard and mouse
- Monitor and HDMI Cable
   - All 96Boards are equiped with a full sized HDMI connector, HDMI capable monitor is recommended
- MicroSD card with adapter
   - For quick and easy switching between operating systems and extra storage
- Mezzanine Products
   - These devices allow you to expand your experience with any 96Boards by adding peripherals and enhancing onboard components

***

# Out of the Box

The following subsections should describe how to get started with the Ultra96 using the release build shipped with your board. The Ultra96 is ready to use “out of the box” and comes with a pre-flashed microSD card which boots Linux. 

<img src="https://github.com/96boards/documentation/blob/master/consumer/ultra96/additional-docs/images/images-board/sd/ultra96-front-sd.png?raw=true" data-canonical-src="https://github.com/96boards/documentation/blob/master/consumer/ultra96/additional-docs/images/images-board/sd/ultra96-front-sd.png?raw=true" width="250" height="160" />
<img src="https://github.com/96boards/documentation/blob/master/consumer/ultra96/additional-docs/images/images-board/sd/ultra96-back-sd.png?raw=true" data-canonical-src="https://github.com/96boards/documentation/blob/master/consumer/ultra96/additional-docs/images/images-board/sd/ultra96-back-sd.png?raw=true" width="250" height="160" />

## Features

|   Component          |   Description                                                                                    |
|:---------------------|:-------------------------------------------------------------------------------------------------|
|  SoC                 | Xilinx Zynq UltraScale+ MPSoC ZU3EG A484                                                         |
|  RAM                 | Micron LPDDR4 memory provides 2 GB of RAM in a 512M x 32 configuration                           |
|  Storage             | Delkin 16 GB microSD card + adapter                                                              |
|  Wireless            | 802.11b/g/n Wi-Fi and Bluetooth 4.2 (provides both Bluetooth Classic and Low Energy (BLE))       |
|  USB                 | 1x USB 3.0 Type Micro-B upstream port<br>2x USB 3.0, 1x USB 2.0 Type A downstream ports          |
|  Display             | Mini DisplayPort (MiniDP or mDP)                                                                 |
|  Expansion Interface | 40-pin 96Boards Low-speed expansion header<br>60-pin 96Boards High speed expansion header        |
|  LED                 | 4 x user-controllable LEDs                                                                       |
|  Power Source        | 8V~18V@3A, Plug specification is inner diameter 1.7mm and outer diameter 4.8mm                   |
|  OS Support          | Linux                                                                                            |
|  Size                | 85mm x 54mm                                                                                      |

***

## Starting the board for the first time

The Ultra96 comes preloaded with Linux and can be up and running in two ways:

> NOTE: In both cases ensure the included microSD card is fully inserted in the microSD card cage.

- **Option 1**
   - Connect the power supply to the Ultra96.
   - Momentarily press the button labeled SW3 / POWER.  It is located next to the power supply jack.
   - The first sign that the boot process has begun will be an LED labeled DS6 / DONE illuminating.  This means that the bistream for the FPGA portion of Ultra96 has successfully loaded.  This happens during uboot.
   - Once LED2 begins to show a regular "heartbeat" Linux is up and running.
   - From a laptop or other device search for and connect to the WI-FI network called Ultra96_xxxxxxxxxxxx, where the 12 x's correspond to Ultra96's MAC ID.
   - From a browser, go to http://192.168.2.1
   - You will be greeted by Ultra96's homepage.

- **Option 2**
   - Connect the Ultra96 to a DisplayPort monitor with a miniDP to DisplayPort cable plugged into the connector labeled DISPLAY PORT.
   - Connect a USB keyboard and mouse to J8 and J9, or through a USB hub connected to J8 or J9.
   - Connect the power supply to the Ultra96.
   - Momentarily press the button labeled SW3 / POWER.  It is located next to the power supply jack.
   - You will be able to watch the progress of the boot process on the monitor.
   - As in Option 1, an LED labeled DS6 / DONE will illuminate at some point during boot.  This means that the bistream for the FPGA portion of Ultra96 has successfully loaded.
   - Linux will boot, launching a desktop environment.

***

## What's Next?

If you are already familiar with the Ultra96 and would like to change out the stock operating system, please proceed to one of the following pages:

- [Downloads page](../downloads): This page lists all Linaro and 3rd party operating systems available for the Ultra96
- [Installation page](../installation): If you already have the images you need, this page has information on how to install the different operating systems onto your Ultra96
- [Guides](../guides/)
- [Board Recovery](../installation/board-recovery.md)
   - If at any time your board is having unexplainable issues, it is suggested to attempt a board recovery. These instructions will guide you through a succesfull board recovery.
- [Support](../support)
   - From bug reports and current issues, to forum access and other useful resources, we want to help you find answers

Back to the [Ultra96 documentation home page](../)

***
