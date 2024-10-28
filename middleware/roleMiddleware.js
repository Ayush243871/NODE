const checkRole=(role)=>{
    return (req,res,next)=>{
        if(req.user.role!==role){
            return res.status(403).send({message:"Access denied"})
        }
        next();
    }
}

module.exports=checkRole;