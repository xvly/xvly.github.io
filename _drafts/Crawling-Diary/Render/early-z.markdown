https://zhuanlan.zhihu.com/p/53092784




第一个问题，针对不透明物体，Unity默认由近往远绘制（离相机的距离），所以如果想要相同的材质球是连续绘制的，可以通过调整RenderQueue来强行连续绘制，不过可能会导致渲染效果不符合预期（遮挡关系错乱），另外的坏处是会破坏Early-Z的功能，尤其在没有HSR功能的低端机上，Overdraw会造成高复杂度的Shader带来的GPU高压力，所以需要权衡CPU提交Batch的耗时和GPU的压力。