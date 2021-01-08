# 上手第二步：控制开发板

等成功用串口或者ADB连接开发板之后，就可以通过终端命令对开发板进行控制了。

下面介绍Tina Linux系统封装几个模块，您可以通过命令启动这几个模块的demo，操控终端几个模块的软硬件。

## 点灯

R329支持LEDC，LEDC全称“Light Emitting Diode Controller”，是借助Linux LED标准子系统实现的LED控制模块，可以对LED灯进行点亮、亮度调节、闪烁、阵列控制灯操作。LEDC模块在无屏幕智能音箱上用得很多，比如在等待配对、唤醒、音乐播放灯场景，LED灯会以不同的效果表示当前状态。

内置固件已经编译好了LEDC模块，可以直接对LED节点进行控制从而点亮LED灯。

### 进入LED灯路径

首先，我们可以进入LED节点的位置查看一个LED灯三个颜色的节点（R G B）：

```bash
root@TinaLinux:/# cd /sys/class/leds/
root@TinaLinux:/sys/class/leds# ls
sunxi_led0b  sunxi_led0g  sunxi_led0r
```

![image-20210108100703719](../assets/img/image-20210108100703719.png)

### 查看LED灯的配置

三个节点分别代三个颜色，我们可以进入一个颜色节点，比如红色（R）：

```bas
root@TinaLinux:/sys/class/leds# cd sunxi_led0r/
root@TinaLinux:/sys/devices/platform/soc/ledc/leds/sunxi_led0r# ls
brightness      device          subsystem
delay_off       max_brightness  trigger
delay_on        power           uevent
```

![image-20210108102644309](../assets/img/image-20210108102644309.png)

可以看到LEDC已经做好了很多LEDC的基本操作，包括亮度调节、闪烁、延时等。

### 点亮一个灯

如果我们要点亮其中一个颜色，可以把亮度值写到 **brightness** 里，亮度值最高为255：

```bash
root@TinaLinux:/sys/devices/platform/soc/ledc/leds/sunxi_led0r# echo 255 > brightness
```

此时LED灯会被点亮。

## 调节亮度

如果要调节亮度值的话，只需调节写到 **brightness** 的值即可，亮度值范围为0~255，0代表熄灭，255代表最亮：

```ba
root@TinaLinux:/sys/devices/platform/soc/ledc/leds/sunxi_led0r# echo 255 > brightness
root@TinaLinux:/sys/devices/platform/soc/ledc/leds/sunxi_led0r# echo 100 > brightness
root@TinaLinux:/sys/devices/platform/soc/ledc/leds/sunxi_led0r# echo 10 > brightness
root@TinaLinux:/sys/devices/platform/soc/ledc/leds/sunxi_led0r# echo 0 > brightness
```

![image-20210108110804554](../assets/img/image-20210108110804554.png)

## 点亮其它颜色的灯

如果要点亮其它颜色的灯 ，只需要参照红灯，将亮度值写到绿灯和蓝灯的 **brightness**里即可：

````ba
root@TinaLinux:/sys/class/leds# echo 255 > sunxi_led0g/brightness
root@TinaLinux:/sys/class/leds# echo 0 > sunxi_led0g/brightness
root@TinaLinux:/sys/class/leds# echo 255 > sunxi_led0b/brightness
root@TinaLinux:/sys/class/leds# echo 0 > sunxi_led0b/brightness
````



![image-20210108112821449](../assets/img/image-20210108112821449.png)

## 闪烁

如果要实现LED灯闪烁的效果，可以把 **timer** 写到 **trigger** ，即可实现闪烁效果：

```bas
root@TinaLinux:/sys/class/leds# echo timer > sunxi_led0r/trigger
```



LED灯阵列操作、模块配置、源码结构、内外部接口等进阶操作请见开发文档《Tina Linux LED》。



## Wifi连网





## 录音和播放