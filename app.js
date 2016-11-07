var recastai = require('recastai')

var client = new recastai.Client('ab017b5e2062f1a29a0e1e5950120fbd', 'en');


client.textConverse('hi')
  .then(function(res) {
    // get the next reply your bot can respond
    var reply = res.reply()

    console.log(reply);

    // Do your code
  }).catch(function(err) {
    console.log(err);
  })
