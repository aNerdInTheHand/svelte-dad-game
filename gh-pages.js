const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  () => console.log('Deploy Complete!')
)