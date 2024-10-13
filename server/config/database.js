const mongoose =require("mongoose");

require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB Connected successfully"))
    .catch((error)=>{
        console.log("DB facing connection issuse");
        console.log(error);
        process.exit(1);
    })
};


