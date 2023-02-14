require('dotenv').config()
const redis = require('redis')

const client = redis.createClient({
  url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
})

client.connect()

module.exports = client
