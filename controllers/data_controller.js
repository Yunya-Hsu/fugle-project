const axios = require('axios')

const data = async (req, res) => {
  const result = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  return res.json({
    result: result.data
  })
}

module.exports = {
  data
}
