# tcp

# kcp

[server] AppStart_Init
AppStart
    AppType
        Server
        Watcher
            AddComponent NetInnerComponent


[server] SceneFactory.Create
[client] AppStart_init
    AddComponent NetKcpComponent
        TService
            ctor
                datas:
                    acceptor socket
                    innArgs.Complete
                
                ThreadSynchronizationContext.PostNext(AcceptAsync) 
                    OnComplete
                        ThreadSynchronizationContext.PostNext(OnAcceptComplete) 
                            new TChannel
                                ThreadSynchronizationContext.PostNext()
                                    StartRecv
                                        HandleRecv
                                            OnRead
                                                NetKcpComponent.OnRead
                                    StartSend
                            OnAccept
                            AcceptAsync

                
                OnAcceptComplete





