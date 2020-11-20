const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/**
 * if you add any configuration then you have to return a new object
 * https://hendrixer.github.io/nextjs-course/config
 * */

const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()

module.exports = withNextEnv()
