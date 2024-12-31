import jwt from "jsonwebtoken"
const validateToken = async(req,res,next) =>{
    const token = req.headers?.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"Token not found"});
    }
    try{
    const decoded = await jwt.verify(token,process.env.JWT_SECRET);
    // console.log(decoded);
    req.user = decoded;
    }catch(e){
        console.log(e);
        res.status(500).json({message:"Internal error"});
    }
    next();
}

export default validateToken;