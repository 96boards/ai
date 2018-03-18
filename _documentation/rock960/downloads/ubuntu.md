---
title: ROCK960 - Ubuntu Downloads
layout: container-breadcrumb-tabs
permalink: /documentation/rock960/downloads/ubuntu.md.html
---
# Ubuntu

**Ubuntu Linux** is a desktop/window or console (command line) based development environment comprised of some basic programs and utilities. Development can happen directly on the board, and within the OS. While applications and programs can be built directly on the board, they can also be built remotely and cross-compiled for the particular system.

***

## SD Card/eMMC image

|   SD Card/eMMC Image   |    Download     |
|:------------------|:------------------------------------|
|All-in-one image with bootloader/kernel/rootfs     |[Ubuntu 16.04 Server arm64](https://dl.vamrs.com/products/rock960/images/ubuntu/rock960_ubuntu_server_16.04_arm64_20180115.tar.gz)                             |

This image can be flashed to eMMC from USB or write and run on a SD card. Continue to [Installation page](../installation/)

***

## Partition files

|   Bootloader |    Download            |
|:-------------|:-----------------------|
| Miniloader(flash helper) | [rk3399_loader_v1.08.106.bin](https://dl.vamrs.com/products/rock960/images/ubuntu/partitions/u-boot/rk3399_loader_v1.08.106.bin)           |
| IDB loader(U-boot SPL)  | [idbloader.img](https://dl.vamrs.com/products/rock960/images/ubuntu/partitions/u-boot/idbloader.img)           |
| ARM Trustzone firmware  | [trust.img](https://dl.vamrs.com/products/rock960/images/ubuntu/partitions/u-boot/trust.img)           |
| U-boot                  | [uboot.img](https://dl.vamrs.com/products/rock960/images/ubuntu/partitions/u-boot/uboot.img)           |

|   Boot image      |    Download        |
|:------------------|:-----------------------|
|FAT32 filesystem with kernel and dtb     |[boot.img.gz](https://dl.vamrs.com/products/rock960/images/ubuntu/partitions/boot.img.gz)                |

|   Rootfs image    |    Download                    |
|:------------------|:----------------------------------|
|Ubuntu 16.04 Server rootfs arm64     |[ubuntu_16.04_server_rootfs.img.gz](https://dl.vamrs.com/products/rock960/images/ubuntu/rock960_ubuntu_server_16.04_arm64_20180115.tar.gz)                           |

Continue to [Installation page](../installation/)
