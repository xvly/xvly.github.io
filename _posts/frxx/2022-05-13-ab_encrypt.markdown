### 偏移
- 消耗低
- 可沿用 AssetBundle.LoadFromFile

### 逐字节异或
- 消耗略高
- 需改成 LoadFromStream
- 读取 StreamingAssets 资源需使用 LoadFromMemory，会导致两份内存

https://www.xuanyusong.com/archives/4607
https://www.233tw.com/unity/40402