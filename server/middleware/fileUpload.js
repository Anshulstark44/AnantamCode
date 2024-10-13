const File = require("../models/File");
const cloudinary = require("cloudinary").v2;
const path = require("path");
//loclfileupload -> handler function

exports.localFileUpload = async (req,res) =>{
    try{
        const file = req.files.file;
        console.log("File aagyi jee ->",file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH-> ",path)

        file.mv(path , (error) =>{
            console.log(error);
        });

        res.json({
            success:true,
            message:"Local File Uplaoded Successfully",
        });

    }catch(error){
        console.log("not able to upload the file on server");
        console.log(error);
    }
}

function isFileTypeSupported(type,supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file,folder,quality){
    const options={folder};
    if(quality){
        options.quality=quality;
    }
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.imageUpload = async (req,res)=>{
    try{
        //data fetch
        const {name,tags,email} = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes =["jpg","jpeg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"file format not supported"
            })
        };
        
        const response = await uploadFileToCloudinary(file,"Anshul");
        console.log(response);

        //db me entry save krni h
        const fileData= await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image successfully uploaded",
        });

    }catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"something went wrong",
        })

    }
}

//video upload ka handler

exports.videoUpload = async (req,res)=>{
    try{
        const {name,tags,email} = req.body;
        console.log(name, tags, email);

        const file = req.files.videoFile;
        

        //validation
        const supportedTypes =["mp4","mov"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"file format not supported"
            })
        };
        const response = await uploadFileToCloudinary(file,"Anshul");
        console.log(response);

        //db me entry save krni h
        const fileData= await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"video successfully uploaded",
        });

    }catch(error){ 
        console.error(error);
        res.status(400).json({
            success:false,
            message:"Something went wrong",
        })
    }
}

//imageSizeReducer
exports.imageSizeReducer= async (req,res)=>{
    try{
        //data fetch
        const {name,tags,email} = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes =["jpg","jpeg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"file format not supported"
            })
        };
        
        const response = await uploadFileToCloudinary(file,"Anshul",30);
        console.log(response);

        //db me entry save krni h
        const fileData= await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image successfully uploaded",
        });

    }catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"something went wrong",
        })

    }
}