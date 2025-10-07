
const redisClient = require('../config/redis');


const rateLimiter = async(req, res, next) => {

    try{
        const ip = req.ip;

        

        const number_of_request = await redisClient.incr(ip);

        if(number_of_request > 60){
            throw new Error("User limit Exceed");
        }

        if(number_of_request == 1){
            await redisClient.expire(3600);
        }

        next();

    }
    catch(err){
        res.send("Error: "+err);
    }
}

module.exports = rateLimiter;