const Koa = require('koa');
const router = require('koa-router')(); // 处理路由请求
const bodyParser = require('koa-bodyparser'); // 解析原始 request 请求，将解析参数绑定到 ctx.request.body
const path = require('path');
const send = require('koa-send');
const url = require('url');
const fs = require('fs');
const history = require('koa2-connect-history-api-fallback');
const app = new Koa();

const port = 9090;

app.use(require('koa-static')('dist', {
    defer: true
}));

app.use(async (ctx, next) => {
    if (/^\/api(\d)?\/*/.test(ctx.url)) {
        return next();
    }
    const parsedUrl = url.parse(ctx.url);
    let realPath = parsedUrl.pathname;
    const extname = path.extname(path.basename(parsedUrl.pathname));
    if (!extname) {
        realPath = 'index.html';
    }
    return send(ctx, realPath, { root: path.join('.', 'dist') });
})

router.get('/api/about', async (ctx, next) => {
    ctx.type = 'json';
    ctx.body = {
        status: 0,
        data: {
            msg: {
                name: "jaakko",
                age: 20
            }
        }
    };
    await next();
})

app.use(bodyParser());
app.use(router.routes());
app.use(history());
app.listen(port);
console.log(`\napp started at port ${port}...\n`);