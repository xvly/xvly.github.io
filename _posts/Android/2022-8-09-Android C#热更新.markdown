## 目录结构

boostrap.use_data_dir( assetDir, apkPath )

- root
    - assets_bin_Data       7.0 版本号后不可更改，硬编码写死这个目录名字的。
        - *.bin             展平 bin 结尾文件
    - *.so.new              对应 cpu 架构的 il2cpp 库文件

## 生成

### 生成 apk

### 解析 apk

- 获取 assets/bin/Data 所有文件，需递归获取，展平压缩，示例使用 8 级压缩，需保留文件夹目录。压缩后添加 .bin 后缀。
- 获取 lib/[arm]/libil2cpp.so 文件，修改为 libil2cpp.so.new
- 按目录结构压缩，示例用 9 级压缩。

## 应用

- 添加 Boostrap.InitNativeLibBeforeUnityPlay(getApplication().getApplicationContext().getFilesDir().getPath());
- 下载差异文件到读写目录
- 调用 Boostrap.use_data_dir
- 拷贝 global-meta.dat 到 il2cpp/Metadata/global-meta.dat

## 关于 AAB 包

谷歌 aab 包包含多个 apk 包，需要找到 assets/bin/Data 目录所在的 apk 进行 patch，所以执行 boostrap.use_data_dir 的时候需要传 apkPath，apkPath 的获取方式如下。非 aab 包一样可以传这个 apkPath。

```
//jar:file:///data/app/x.x.x/base.apk!/assets/
int apkPathStart = Application.streamingAssetsPath.IndexOf("/data");
int apkPathEnd = Application.streamingAssetsPath.IndexOf("!");
string apkPath = Application.streamingAssetsPath.Substring(apkPathStart,apkPathEnd - apkPathStart);
if (string.IsNullOrEmpty(apkPath))
{
    messageBox.Show("use failed. apk path not found in [" + Application.streamingAssetsPath + "]", "ok", () => { messageBox.Close(); });
    yield break;
}
```

## faq

- 执行 bootstrap.use_data_dir 时报 can't store path, no such file or directory

修改启动函数，增加 Boostrap.InitNativeLibBeforeUnityPlay(getApplication().getApplicationContext().getFilesDir().getPath());

- 执行 bootstrap.use_data_dir 时报 dup patch file failed

文件重复了，打包 assetBinData 的 bin 文件需要保留目录结构。即 zip 的时候不要加 -j

- md5 差异

压缩文件问题，-X ，不行的话使用 touch -m -t YYYYMMDDhhmm filePath 去修改修改时间。    

- aab 本地测试可以，上传谷歌内部测试，更新后启动闪退，测试手机：samsung

本地测试的时候用的 dev 版本，提交谷歌用的 release 版本，release 版本更新了 dev 的差异导致完成后闪退。

## 相关库

demo: https://github.com/noodle1983/UnityAndroidIl2cppPatchDemo

so 库: https://github.com/noodle1983/UnityAndroidIl2cppPatchDemo-libboostrap