const multer = require("multer")
const path = require("path")
const fs = require("fs")


const storage = multer.diskStorage({
    destination: function(req:any, file:any, cb:any){
        cb(null, "Frontend/src/assets/uploads") 
    },
    filename: function(req:any,file:any, cb:any){
        let fileN = file.originalname;
        const ext = path.extname(file.originalname);
        if(ext == '.tiff' || ext == '.jpeg')
        {
            fileN = fileN.slice(0, -5); 
            
        }
        else{
            fileN = fileN.slice(0, -4);

        }
        const myFileName = fileN+path.extname(file.originalname)
        cb(null, myFileName)
    }
})
const upload= multer ({
    storage,
    limits:{fileSize:20000000},
    
    fileFilter: function (req:any, file:any, cb:any) {
        const ext = path.extname(file.originalname);
        try{
            if(ext !== '.png' && ext !== '.jpg' && ext !== '.tiff' && ext !== '.jpeg') {
                return cb(new Error('Only images are allowed'))
            }
            cb(null, true)
        }catch(e){
            return cb(true,null)
        }
        },

        
    
})

module.exports=upload