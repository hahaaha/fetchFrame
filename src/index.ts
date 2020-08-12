import mergeConfig from './util/mergeConfig'
import Fetch from './core/Fetch'

function createInstace() {
    const context = new Fetch()
    const instance = Fetch.prototype.request.bind(context)

    return mergeConfig(context,instance)
}

const fetchFrame = createInstace()

export default fetchFrame 