const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');    // 静态资源操作
// const router = require('koa-router')(); // 注意 router 的引入方式
const fs = require('fs');   // 文件操作
const router = require('./routes');
const app = new Koa();

const port = 3030;
app.use(require('koa-static')('dist', { index: 'index.html', defer: true }));

// const main = serve(path.join(__dirname, "../dist"));
// app.use(main);

app.use(async (ctx, next) => {
    console.log(`req-url: ${ctx.url}`);
    await next();
})

app.use(async (ctx, next) => {
    // 如果路由以 '/api' 开头，进入路由匹配; 否则返回 'index.html'
    if ((/^\/api/.test(ctx.url))) {
        return next();
    }
    // 通过 ctx.url 我们可以获取浏览器请求的文件
    const fileName = (/\.html|\.js$/.test(ctx.url));
    // 如果浏览器请求的文件为 html、js 类型，就返回相应类型，否则返回 index.html
    if (fileName) {
        console.log('filename: ', ctx.url.replace(/^\//, ''));
        ctx.body = fs.createReadStream(path.join(__dirname, "../dist", ctx.url.replace(/^\//, '')));
    } else {
        ctx.type = "html";
        ctx.body = fs.createReadStream(path.join(__dirname, "../dist", "index.html"));

        return next();
    }

    await next();
})

app.use(router.routes()).use(router.allowedMethods());   // 注意 router 使用方式
app.listen(port);
console.log(`\nserver is start at port ${port}...\n`);

// 自动打开浏览器并填入地址
const openBrower = require('child_process');
openBrower.exec(`start http://127.0.0.1:${port}`);