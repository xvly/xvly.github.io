https://developer.android.com/guide/app-bundle

https://developers.google.com/unity/packages

https://dl.google.com/games/registry/unity/com.google.android.performancetuner/android-performance-tuner-1.1.2.unitypackage

https://developer.android.com/guide/app-bundle/asset-delivery/build-unity

##
- 150m
- aab + pad()

## 分包
install-time 资源包在用户安装应用时分发。这些资源包以拆分 APK（APK 集的一部分）的形式提供。它们也称为“预先”资源包；您可以在应用启动时立即使用这些资源包。这些资源包会增加 Google Play 商店上列出的应用大小。用户无法修改或删除这些资源包。

fast-follow 资源包会在用户安装应用后立即自动下载；用户无需打开应用即可开始 fast-follow 下载。此类下载不会阻止用户访问应用。这些资源包会增加 Google Play 商店上列出的应用大小。

on-demand 资源包会在应用运行时下载。

Google Play 商店会以归档文件（而非拆分 APK）的形式提供配置为 fast-follow 和 on-demand 的资源包。这些资源包随后会在应用的内部存储空间中展开。您可以使用 Play Core API 查询以这种方式提供的资源包的位置。应用无法假设这些文件的存在或其位置，因为它们可能会被用户删除，或由 Play Core SDK 在游戏会话之间移动。尽管这些文件可由应用写入，您也应将其视为只读文件，因为资源包补丁程序依赖于这些文件的完整性。

下载大小上限
Asset Pack 因具有较高的大小上限而成为大型游戏的理想之选：

每个 fast-follow 和 on-demand Asset Pack 的下载大小上限为 512 MB。
所有 install-time Asset Pack 的总下载大小上限为 1 GB。
一个 Android App Bundle 中的所有 Asset Pack 的总下载大小上限为 2 GB。
一个 Android App Bundle 中最多可以使用 50 个资源包。

## 本地测试，命令行安装


## QA:
 
Q: Unable to initialize unity engine, log: globalmanager
environment: unity 2019.4.37

A: lz4/lz4hc => lzma



