# 开发板入门

R329 EVB5开发板在出厂时已经烧写了系统固件，支持Linux4.9内核的Tina Linux系统，您可以直接用于调试。


## 上手第一步：连接上位机查看终端

R329 EVB5提供了两种设备调试的方法，分别是串口和ADB。

### 配置电脑端的调试工具

首先，您需要配置电脑端的调试工具，串口及ADB的电脑配置方法见：[开发工具](https://r329.docs.allwinnertech.com/zh_CN/latest/getsource/getdevtools/)

### 串口连接

#### 设备上电并连接电脑

插上电源，串口线连接开发板和电脑USB，如图。

打开串口软件MobaXterm，Mobax
*您也可以根据自己的喜好选择喜欢串口软件，如Putty，Ubuntu的Minicom等

#### 输入第一条命令

在终端输入第一条命令 

```bash
ls
```

此时可以看到根目录下的路径及文件：

```bash
root@TinaLinux:/# ls
44100-mono-s16_le-10s.wav  rdinit
base                       rom
bin                        root
dev                        sbin
etc                        sys
lib                        test.wav
lib64                      tmp
mnt                        usr
overlay                    var
proc                       www
```

**如果看到这些，那么恭喜你，你已经拥有了操控了这个开发板的能力，现在，开始驾驭它在嵌入式的世界里征战吧！**

### ADB连接





