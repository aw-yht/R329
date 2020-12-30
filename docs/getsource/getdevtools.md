# 开发工具获取



以下是我们推荐使用的一些研发工具，您也可以根据您个人的嵌入式开发喜好选择您喜欢的开发工具。



## Windows开发工具



### ADB

ADB全称Android debug bridge，顾名思义，即连接安卓的桥梁，原来是通过USB连接PC和Android设备的调试工具，现也被移植到全志Tina Linux系统上，所以您可以是使用ADB进行设备调试，可以进行命令行操作、push文件、pull文件、设备查看等操作。

[ADB友情下载](http://onlinedoc.allwinnertech.com/f/fc29696bec0b4099b92b/?dl=1)

安装和使用方法：将adb.exe文件放到任意目录下，建议是比较浅的路径，如D:\adb.exe，然后将该路径添加到系统环境变量中，即可在cmd下直接进行adb操作。详细方法和高阶操作在互联上有大量介绍，可自行搜索学习。

参考博文：

<https://blog.csdn.net/weixin_43927138/article/details/90477966>

<https://www.cnblogs.com/lsdb/p/9438215.html>

![ADB截图](../assets/img/ADB%E6%88%AA%E5%9B%BE.png)

同时全志的部分产测工具，如DragonMAT等都是通过ADB与设备进行通信的。



### 串口驱动

您可以使用USB转串口线对设备进行调试，我们推荐的串口线有CH341SER，驱动如下：

[CH341SER串口线驱动下载](http://onlinedoc.allwinnertech.com/f/7f4ddce050e246f8a4d5/?dl=1)

波特率：115200

线序：黑-GND，红-3.5V，绿-RX，红-TX

![串口线截图](../assets/img/%E4%B8%B2%E5%8F%A3%E7%BA%BF%E6%88%AA%E5%9B%BE.jpg)



### MobaXterm

MobaXtermbackup是一款强大好用的远端电脑工具箱，您可以用来进行串口调试、连接远程服务器等。

您可到MobaXterm官方下载和使用，友情链接：<https://mobaxterm.mobatek.net/download.html>

[MobaXterm友情下载](http://onlinedoc.allwinnertech.com/f/8b35678a4ffd4019ab8c/?dl=1)



![串口工具截图](../assets/img/%E4%B8%B2%E5%8F%A3%E5%B7%A5%E5%85%B7%E6%88%AA%E5%9B%BE.png)



## Ubuntu开发工具

正在更新，敬请期待