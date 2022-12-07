

# 静态核批

# 动态核批

# GPUInstance

# SRP Batcher

SRP Batch无视材质球，只要Shader和变体一样就可以

# Unity FrameDebug

- object are lightmapped
Lightmap index

在Lightmap相同的情况下，如果对应的unity_LightmapST不一样，也是不能合批的。这里有两种方法解决，一种是用Static Batching，这样会让unity_LightmapST变成同一种，具体的UV会变成顶点数据（本来子Mesh的UV都是（0,1）的，合并Combined Mesh后会变成类似于（0.3,0.5）这样的区间），就是说顶点里面的UV本来存储的是Local空间的，变成Combined Mesh后，合体的Mesh数据里面存储的是World空间的，这样外在的unity_LightmapST对于不同的子Mesh就会变成共用的（1,1,0,0）这样的共同属性，也就可以合批了。另外一种是开启GPU Instancing，这样unity_LightmapST会变成CBuffer，这样也是会合批的

动态创建物体的静态合批的方法可以参考StaticBatchingUtility.Combine的API，这是一项运行时静态合批的做法；其次如果使用了多个Pass的Shader，想要使用GPU Instancing进行合批，每个Pass都要设置成GPU Instancing才能正常合批

- Objects have different materials
