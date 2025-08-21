const Auth = (req, res, next) => {
    // add item into food menu
    // Authentication krna prega ki kya ye admin he hai..(cover in next video)
    // for nuw dummy code:--
    const token = "ABCDEF"
    const Access = token === "ABCDEF"? 1 : 0;

    if(!Access){
        res.status(403).send("No Permission");
    }

    next();
}

module.exports = {Auth}