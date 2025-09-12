logout feature?
/ // method: changing the previous cookie
        // res.cookie("token","hojsghoahgjnjnoiensdnoigjnjnomnoinairo");

        // // method: expiring the cookies(clearing the cookies)
        res.cookie("token",null,{expires: new Date(Date.now())});


disadvantage of this? anyone can copy the token(before) and paste there, they will eassly get our access 