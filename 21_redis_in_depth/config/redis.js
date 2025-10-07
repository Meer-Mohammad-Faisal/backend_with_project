
const redis = require('redis');

const redisClient = redis.createClient({
    username: 'default',
    password: 'oiFFIoDZiObXZnsKmNZXFXZ4xXDoMUvO',
    socket: {
        host: 'redis-18704.c212.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 18704
    }
});

// const connectReddis = async()=> {
// await redisClient.connect();
// console.log("Connected to redis");
// }

// connectReddis();







module.exports = redisClient;