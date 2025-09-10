a brief about session id? why we need access token when we have session id?


jwt:token === Access Token

why do we need Token?

why do we need refresh token? when we have {expires:"2days"} in jwt token?

what if our jwt token is hacked? user change password but bcz of token expires hacker can eassly logged in.

disadvantage of jwt token? and advantage of refresh-token?

suggesion: never take expire date unlimited.

problem: invalidate kr pau? after password change? if i didn't mention the expire date

now refresh token comes into picture.

always mention expire date 

Refresh token: create both access token and refresh token (eg. access token: 20 min, refresh token: 9 days)

after every 20 min, send refresh token.

refresh token increse their time himself when deadline come closer...
it will create another refresh token

what if refresh token is also hacked.

if i change the password refrence token will get invalid(important);

but access token never invalidate. 