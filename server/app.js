const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const fs = require('fs')
const path = require('path')
const routerPath = './routes'

// register all routers
const files = fs.readdirSync(routerPath)
files.forEach(router => {
    const r = require(path.resolve(routerPath, router))
    app.use(r.routes(), r.allowedMethods())
})

app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

module.exports = app