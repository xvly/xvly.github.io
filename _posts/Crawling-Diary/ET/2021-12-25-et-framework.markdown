# client - server
- 使用 Client-Server.sln 进行客户端和服务端编辑

## feature
- c# 双端框架
- ettask
- ecs
- 热更新
- 机器人
- ai
- kcp 网络
- 软路由

# client

## 目录结构
- 代码
    - core: 核心代码
    - module: 模块代码
    - demo: 系统逻辑代码
    - helper: 辅助
    - generate: 配置，协议
- 资源
    - Bundle: 运行时资源，会进行 assetbundle 打包
    - Resources：跟包资源
    - Res：美术原始资源

## 逻辑框架
- ecs
    - 目录结构
        - Model: 数据层，客户端服务端共用
        - ModelView: 数据层，客户端
        - Hotfix: 逻辑层，只有函数，方便热更。客户端服务端共用
        - HotfixView: 逻辑层，客户端
    - 类型
        - Entity: 实体，component 的组合
            - Unit
            - Scene
        - Component : 数据
        - ComponentSystem: 函数
            - System: 静态函数，外部调用，扩展 Component
            - ObjectSystem: 局部函数，需添加 [ObjectSystem] 属性
                - AwakeSystem
                - UpdateSystem
            - ...
- Attribute
    - ObjectSystem
    - UIEvent
- helper

## 模块实现
### 初始化流程
### Scene
- Zone
- Scene

### UI
- 资源
- 组件
- 逻辑
    - UIHelper.Create(scene, type)
    - UIEvent(type)
        - OnCreate
            - Add component
        - OnRemove
    - ComponentSystem
        - AwakeComponentSystem
            - find widget
            - register event
        - ComponentSystem
            - event
## 版本发布
### 资源发布
### app 发布

## 热更新
- 运行时更新
    
## 网络
- protobuf
- tool
- rule
    - c2r => client to remote
    - r2c => remote to client
    - g2c => gate to client
    - c2g => client to gate
    - c2m => client to mmmmm..? map
- rpc
- message
- framework
    - MessageDipatcherComponentSystem
        - 根据 MessageHandler 属性注册

    - Message
        - 属性 MessageHandler
        - 继承 AMHandler
            - public 
                - Handle
                    - Run
            - private
                - RegisterHandler

# server
- 逻辑框架
- 网络
- 数据库
- 部署

# tools

## 工具
- 导表
- 导协议

## robot
- 压测