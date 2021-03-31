var Mailchimp = require('mailchimp-api-v3')
var mailchimp = new Mailchimp('87dfe97539c640193a46faf50ca5d434-us3')

module.exports = async (req, res) => {
  let data = req.body
  if (!data.email) res.status(400).send('No email given')

  mailchimp.post('/lists/164d39e146/members', {
    email_address: data.email,
    status: 'subscribed'
  })
  .then(function(result) {
    res.status(200).send(result)
  })
  .catch(function (err) {
    res.status(400).send(err)
  })
}