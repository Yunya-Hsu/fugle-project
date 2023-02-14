const { time, zAddRateLimiter } = require('../models/rateLimiter_model')

const timeWindowInSecond = 60
const timeWindowInMilliseconds = timeWindowInSecond * 1000000
const ipUpperLimit = 10
const userIdUpperLimit = 5


const rateLimiter = async (req, res, next) => {
  // get req IP & user ID
  const currentTime = await time()
  const userId = req.query.user
  const ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'] : req.ip

  // record ip & userId req history in redis
  const ipRequest = await zAddRateLimiter(ip, currentTime, timeWindowInMilliseconds, timeWindowInSecond)
  const userIdRequest = await zAddRateLimiter(userId, currentTime, timeWindowInMilliseconds, timeWindowInSecond)

  if (ipRequest > ipUpperLimit || userIdRequest > userIdUpperLimit) {
    return res.status(429).json({ ip: ipRequest, id: userIdRequest })
  }
  next()
}

module.exports = rateLimiter
