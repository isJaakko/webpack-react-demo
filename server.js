const Koa = require('koa');
const router = require('koa-router')(); // 处理路由请求
const bodyParser = require('koa-bodyparser'); // 解析原始 request 请求，将解析参数绑定到 ctx.request.body
const path = require('path');
const fs = require('fs');
const history = require('koa2-connect-history-api-fallback');
const app = new Koa();

const port = 9090;

app.use(require('koa-static')('dist', {
    defer: true
}));

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
})

router.get('/', async (ctx, next) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream(path.join('.', 'dist', 'index.html'));
    await next();
});

router.get('/login', async (ctx, next) => {
    ctx.response.body = '<h1>hello page</h1>';
    await next();
})

app.use(bodyParser());
app.use(router.routes());
app.use(history());
app.listen(port);
console.log(`\napp started at port ${port}...\n`);