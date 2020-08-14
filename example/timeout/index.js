const { resolve } = require('../../webpack.common')

const router = require('koa-router')()
router.get('/timeout', async (ctx) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        },1000)
    })
    ctx.body = "timeout"
})


module.exports = router