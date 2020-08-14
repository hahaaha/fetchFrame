const router = require('koa-router')()
router.get('/params', async (ctx) => {
    const { name, age, date } = ctx.query
    ctx.body = { name, age, date }
})


module.exports = router