import jwt from "jsonwebtoken";


class JwtVerify {
    jwtKey;
    constructor(jwtKey) {
        this.jwtKey = jwtKey;
    }
     decodeJwt(token){
        try {
            const payload = jwt.decode(token);
            return payload;
        } catch (error) {
            console.error(
                "-------------ERROR:: decoding the token :: Start-----------"
            );
            console.error(error);
            throw new Error("Error decoding the payload");
        }
    }

    verfyJwtEmployee(token, next) {
        const payload= this.decodeJwt(token);
        const verifyOptions = {
            issuer: "sachin-employee",
            subject: payload.sub,
            audience: payload.aud, 
            algorithms: ["HS256"],
        };

        jwt.verify(token, this.jwtKey, verifyOptions, (err, decodeJwt) => {
            if (err) {
                next(err);
            } else {
                next(null, decodeJwt);
            }
        });
    }

    verfyJwtMentor(token, next) {
        const payload = this.decodeJwt(token);
        const verifyOptions = {
            issuer: "sachin-mentor",
            subject: payload.sub,
            audience: payload.aud, 
            algorithms: ["HS256"],
        };
        jwt.verify(token, this.jwtKey, verifyOptions, (err, decodeJwt) => {
            if (err) {
                next(err);
            } else {
                next(null, decodeJwt);
            }
        });
    }
}

export default JwtVerify;
