const dotenv = require('dotenv'); // Importing dotenv library

dotenv.config(); // load all the env variables from .env file

module.exports = {
    PORT: process.env.PORT ||4000, // Export PORT variable,
    DB_URL: process.env.DB_URL||'mongodb+srv://surajchauhan8545:MLyYSshcFuLvEYIt@cluster0.cfoioaw.mongodb.net/?retryWrites=true&w=majority',
    ROUTE_PREFIX: process.env.ROUTE_PREFIX || '/api/v1',
    NODE_ENV: process.env.NODE_ENV || 'development',
    JWT_CONFIG: {
        ACCESS_EXPIRY: process.env.JWT_ACCESS_EXPIRY || '1',
        ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || 'sample_key',
        REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'refresh_key',
        VERIFICATION_EXPIRY: process.env.JWT_VERIFICATION_EXPIRY || '1',
        REFRESH_EXPIRY: process.env.JWT_REFRESH_EXPIRY || '1',
    },
    EMAIL: {
        USER: process.env.MAIL_USER||'surajchauhan8960@gmail.com',
        PASS: process.env.MAIL_PASS||'tmnq plqn qrna ehkz',
        SMTP_HOST: process.env.SMTP_HOST||'smtp.gmail.com',
        SMTP_PORT: process.env.SMTP_PORT||587,
        SMTP_SERVICE: process.env.SMTP_SERVICE||'gmail'
    }
}
