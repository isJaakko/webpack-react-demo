# 教师评阅系统

## 运行环境
- nodejs（开发环境为 v10.5.0）
- sqlite3

## 运行
```
npm install

# run client
npm run dev

# run server
npm run server
```

生成模拟数据
```
npm run db
```

## 目录结构

### backend
后端代码

### src
前端代码
**component**
抽象组件

**const**
定义一些常量，如菜单项

**view**
独立页面组件

## 工作流程

查看实验报告：
    通过 nodejs ssh 远端链接服务器，向服务器发送指令启动 linuxer 系统，发送命令启动教师评阅容器，获取查看实验报告网址，提供跳转链接。