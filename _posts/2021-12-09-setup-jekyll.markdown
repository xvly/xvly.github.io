---
layout: post
title:  "Setup jekyll with github pages"
date:   2021-12-09 20:01:27 +0800
categories: jekyll update
---

# git pages

- 创建 git page 仓库
- 已存在

# 安装 gem 和 ruby
[ruby](https://rubyinstaller.org/downloads/)
Ruby+Devkit 3.0.3-1 (x64) 

# 安装 jeykll
gem install jekyll bundler

$ jekyll new --skip-bundle .

# 配置

## 修改 GemFile
- 注释 **gem "jekyll"**开头的行，开头添加 '#'
- 打开 gem "github-pages" 开头的行，修改为 gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins，其中 GITHUB-PAGES-VERSION 需修改为 [Dependency]https://pages.github.com/versions/ 里最新的 github-pages 版本号。
- 如果启动服务失败，在 GemFile 末尾添加 gem "webrick"

# 测试
[参考](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)

启动服务: bundle exec jekyll serve

测试链接: http://localhost:4000

启动服务后，本地修改保存会触发刷新

# 发布

[参考](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)