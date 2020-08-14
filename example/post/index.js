const router = require('koa-router')()
router.post('/', async (ctx) => {
    const { name } = ctx.request.body

    ctx.body = { name }
})


module.exports = router