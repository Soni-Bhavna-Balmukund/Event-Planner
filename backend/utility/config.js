require('dotenv').config();

module.exports = {
    MONGODB_URL:process.env.MONGODB_URL,
    email:process.env.email,
    password:process.env.password
}