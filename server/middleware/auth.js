
//auth , isStudent ,isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

exports.auth= (req,res,next)=>{
    try{
        //extract JWT token
        //ways to fetch token
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");


        if(!token || token==undefined){
            return res.status(401).json({
                success:false,
                message:"Token Missing",
            })
        }
        //verify the token 
        try{
            const payload = jwt.verify(token,process.env.JWT_SECRET);
            console.log(payload);

            req.user=payload;
        }catch(error){
            return res.status(401).json({
                success:false,
                message:"token is invalid",
            })
        }
        next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:"something went wrong,while verifying the token"
        })
    }
}

exports.isStudent = (req,res,next)=>{
    try{
            if(req.user.accountType!=="Student"){
                return res.status(401).json({
                    success:false,
                    message:"This is protected route for students",
                })
            } 
            next();

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"User role is not maching"
        })
    }
    
}
exports.isInstructor = (req,res,next)=>{
    try{
            if(req.user.accountType!=="Instructor"){
                return res.status(401).json({
                    success:false,
                    message:"This is protected route for Instructor",
                })
            } 
            next();

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"User role is not maching"
        })
    }
    
}

exports.isAdmin = (req,res,next)=>{
    try{
            if(req.user.accountType !=="Admin") {
                return res.status(401).json({
                    success:false,
                    message:"This is protected route for Admin",
                })
            }
            next();

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"User role is not maching"
        })
    }
    
}

  