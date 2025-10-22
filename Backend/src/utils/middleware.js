const nameMiddleware = async (err,req, res, next) =>{
    try{
        const {name} = req.body;
        
        const containsNumber = /\d/.test(name); 
      if (containsNumber) {
         return res.status(500).json("Name can not contain numbers.");
     }
     next();

    }catch{err}{
        console.error(error);
        return res.status(500).json("Error while Testing name");
    }
      
}
module.exports = nameMiddleware;