
const redis = require('redis');

const redisClient = redis.createClient({
    username: 'default',
    password: 'yy6XSBmnwlUf1AtKFvFhlbmuCdWzZ9Yg',
    socket: {
        host: 'redis-10588.c73.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 10588
    }
});

const connectReddis = async()=> {
await redisClient.connect();
console.log("Connected to redis");
}

//connectReddis();







module.exports = redisClient;