
import JwtVerify from "./jwtVerify.js";

const jwtVerify = new JwtVerify("security")
export const verifyTokenEmployee = (req, res, next) => {

    if (!req.headers.authorization) {
        res.status(401).json("No User Logged In!")
    } else {
        try {
            jwtVerify.verfyJwtEmployee(req.headers.authorization, (err, payload) => {
                if (payload) {
                    req.currentUser = payload;
                    next();
                } else {
                    res.status(401).json("Not Authorized!")
                }
            });
        }
        catch (err) {
            res.status(401).json("Not Authorized!")
        }
    }
};


export const verifyTokenMentor = (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).json("No User Logged In!")
    } else {
        try {
            jwtVerify.verfyJwtMentor(req.headers.authorization, (err, payload) => {
                if (payload) {
                    req.currentUser = payload;
                    next();
                } else {
                    res.status(401).json("Not Authorized!")
                }
            });
        }
        catch (err) {
            res.status(401).json("Not Authorized!")
        }
    }

};

