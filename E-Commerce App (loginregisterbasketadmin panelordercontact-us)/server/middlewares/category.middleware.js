const CategoryValidation = require("../validators/category.validation");

const category_middleware =(req,res,next)=>{
    const  {error} = CategoryValidation.validate(req.body);
if(!error){
    next()
}else{
    res.send({
         message:"This Is Error",
        error:"true"
    }
       
    )
}
} 

module.exports =category_middleware;