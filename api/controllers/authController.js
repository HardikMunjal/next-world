var jwt = require('jsonwebtoken');
var auth = {

  validateCredential: function (req, res, next) {

    if (!req.body.name || !req.body.email) {
      return res.json({ 'error': 'Name & Email is mandatory to authenticate' })
    }
    

    let name = req.body.name;
    let email = req.body.email;

    let token = jwt.sign({
      data: email
    }, 'mysecretkey', { expiresIn: '1h' });

    res.json(token)
  },
  getTokenDetails: function (req, res, next) {
    let token = req.body.token;
    console.log(token)
    jwt.verify(token, 'mysecretkey', function (err, decoded) {
      if (err) {
        return res.json({ 'error': "invalid token" })
      }
      return res.json(decoded)
    });
  }
}
module.exports = auth;