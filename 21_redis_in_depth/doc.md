<!-- logout feature?
/ // method: changing the previous cookie
        // res.cookie("token","hojsghoahgjnjnoiensdnoigjnjnomnoinairo");

        // // method: expiring the cookies(clearing the cookies)
        res.cookie("token",null,{expires: new Date(Date.now())});


disadvantage of this? anyone can copy the token(before) and paste there, they will eassly get our access 

then what is the solution?

can we make a data base where we store the token into blocklist .
and whenever token come we verify first from blocklist.
but by this method we do the DB call.
and when token expire then db se delete kro, but this method is overwalming(extra headache).

now redis come into the picture
advantage of redis over above points?
why we need redis?
what is redis?
use-case of redis? -->

redis store data in key-value pair.// that is why it is very fast (and store in RAM not secondry memory like mongodb).

mongoDb: Document
SQL:key-value. 