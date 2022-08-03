var Userdb=require('../model/model');

//new user function

exports.create =(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Cannot be empty"});
        return;
    }

    const user= new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    user
    .save(user)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Error while creating user"
        });
    });

}

//retrieve and return users

exports.find =(req,res)=>{

    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Error when retrieving information"})
    })

}

//update a new user by using userId

exports.update =(req,res)=>{

}

//delete user with userid
exports.delete=(req,res)=>{

}
