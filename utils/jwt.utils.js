//Import
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '$2b$05$lgxXK6NBU/zA5OZQc7V/6eZRycp8Ba/7LaPdYZnDO4SKIawfndm6K';
//Fonction exporter
module.exports = {
    generateTokenForUser: function(userData){
        return jwt.sign({
            userEmail: userData.userEmail
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h'
        })
    }
}