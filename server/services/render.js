const axios=require('axios');


exports.homeRoutes = (req, res) => {
    axios.get('https://cruddb18.herokuapp.com/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}
exports.add_user=(req,res)=>{
    res.render('add_user');
    
}

exports.update_user=(req,res)=>{
    axios.get('https://cruddb18.herokuapp.com/api/users',{params:{id:req.query.id}})
    .then(function(user_data){
        res.render("update_user",{user:user_data.data})
    })
    .catch(err=>{
        res.send(err);
    })
    
}
