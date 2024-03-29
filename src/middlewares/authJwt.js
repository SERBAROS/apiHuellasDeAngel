import jwt from 'jsonwebtoken'
import config from '../config'


export const verifyToken = async (req,res,next) =>{
    try {
        const token = req.headers["x-access-token"]
        console.log(token)
        if(!token) return res.status(403).json({msg:'No token válido.'})

        const decoded = jwt.verify(token,config.SECRET_JWT)
        req.query.userIdActive = decoded.id
        
        next()
        
    } catch (error) {
        return res.status(401).json({msg:'No autorizado'})
    }
    
}