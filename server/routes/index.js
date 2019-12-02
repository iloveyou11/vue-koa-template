const router = require('koa-router')()

router.get('/index', async(ctx, next) => {
    ctx.body = 'index'
})
router.get('/user', async(ctx, next) => {
    ctx.body = 'user'
})


module.exports = router