# 录音和播放

R329 EVB5开发板背面贴了3颗麦克风，可组成麦克风阵列，配合降噪算法调试语音识别类产品。

![image-20210108172926836](../assets/img/image-20210108172926836.png)

同时接出了SPK L/R，可以接喇叭进行音频相关的调试。

![image-20210108184002507](../assets/img/image-20210108184002507.png)

*另需注意图中所示的跳线帽需要接上，否则喇叭播放会不出声音



## 录音

Tina Linux中的音频子系统采用ALSA架构实现。ALSA全称 **Advanced Linux Sound Architecture**，是目前主流的Linux音频体系结构。

ALSA在内核设备驱动层提供了驱动框架alsa-driver，同时在应用层提供了音频接口库alsa-lib，应用程序只要调用alsa-lib提供的API，即可以完成对底层音频硬件的控制。

内置的固件中，已经封装好了音频相关模块，可以直接使用demo录音和播放。



```bash
root@TinaLinux:/# arecord test.wav
[   53.158988] sunxi-codec-machine sndcodec: sunxi_hifi_sndcodec_startup
[   53.166483] sunxi-codec-machine sndcodec: sunxi_hifi_sndcodec_hw_params
[   53.173967] sunxi-internal-cpudai cpudai: ======== hw_params ========
[   53.181212] sunxi-internal-cpudai cpudai: pcm_params->format:2
[   53.187771] sunxi-internal-cpudai cpudai: pcm_params->channels:5
[   53.194529] sunxi-internal-cpudai cpudai: pcm_params->rate:16000
[   53.201281] sunxi-internal-cpudai cpudai: pcm_params->period_size:1024
[   53.208622] sunxi-internal-cpudai cpudai: pcm_params->periods:4
[   53.215276] sunxi-internal-cpudai cpudai: pcm_params->pcm_frames:1024
[   53.222513] sunxi-internal-cpudai cpudai: pcm_params->buffer_size:4096
[   53.229849] sunxi-internal-cpudai cpudai: ===========================
[   53.253756] sunxi-internal-cpudai cpudai: sunxi_hifi_pcm_hw_params
Recording WAVE 'test.wav' : Unsigned 8 bit, Rate 8000 Hz, Mono
^CAborted by signal Interrupt...
[   64.045853] sunxi-internal-cpudai cpudai: sunxi_hifi_pcm_hw_free
arecord: pcm_read:2072: read error: Interrupted system call
[   64.090576] sunxi-codec-machine sndcodec: sunxi_hifi_sndcodec_shutdown
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



![image-20210108184756865](../assets/img/image-20210108184756865.png)



## 播放



```bash
root@TinaLinux:/# aplay test.wav
[  125.270510] sunxi-codec-machine sndcodec: sunxi_hifi_sndcodec_startup
[  125.278025] sunxi-codec-machine sndcodec: sunxi_hifi_sndcodec_hw_params
[  125.285477] sunxi-internal-cpudai cpudai: ======== hw_params ========
[  125.292722] sunxi-internal-cpudai cpudai: pcm_params->format:2
[  125.299283] sunxi-internal-cpudai cpudai: pcm_params->channels:2
[  125.306043] sunxi-internal-cpudai cpudai: pcm_params->rate:48000
[  125.312797] sunxi-internal-cpudai cpudai: pcm_params->period_size:1024
[  125.320138] sunxi-internal-cpudai cpudai: pcm_params->periods:4
[  125.326795] sunxi-internal-cpudai cpudai: pcm_params->pcm_frames:1024
[  125.334034] sunxi-internal-cpudai cpudai: pcm_params->buffer_size:4096
[  125.341369] sunxi-internal-cpudai cpudai: ===========================
[  125.490383] sunxi-internal-cpudai cpudai: sunxi_hifi_pcm_hw_params
Playing WAVE 'test.wav' : Unsigned 8 bit, Rate 8000 Hz, Mono
[  136.190698] sunxi-internal-cpudai cpudai: sunxi_hifi_pcm_hw_free
[  136.370445] sunxi-codec-machine sndcodec: sunxi_hifi_sndcodec_shutdown
```



![image-20210108184859972](../assets/img/image-20210108184859972.png)



## 查看音频文件



```bash
adb pull test.wav
```



![image-20210108185913812](../assets/img/image-20210108185913812.png)





![image-20210108190102548](../assets/img/image-20210108190102548.png)