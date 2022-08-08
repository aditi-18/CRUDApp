$("#add_user").submit(function(event){
    alert("Data Inserted ");
})

$("#update_user").submit(function(event){
    event.preventDefault();
    var aUnindexed=$(this).serializeArray();
    var dataUser={}

    $.map(aUnindexed, function(a, i){
        dataUser[a['name']] = a['value']
    })


    console.log(dataUser);

    var request={
        "url":`https://cruddb18.herokuapp.com/api/users/${dataUser.id}`,
        "method":"PUT",
        "data":dataUser

    }
    $.ajax(request).done(function(response){
        alert("updated successfully");
    })
})

if(window.location.pathname=="/"){
    $ondelete=$(".table tbody td a.delete");
    $ondelete.click(function(){
        var idDelete=$(this).attr("data_id")
        
        var request={
            "url":`https://cruddb18.herokuapp.com/api/users/${idDelete}`,
            "method":"DELETE",
        }
        if(confirm("Confirm if you want to delete the record?")){
            $.ajax(request).done(function(response){
                alert("Data deleted successfully");
                location.reload();
            })
        }

    })
}
