function logout(){
    var posting = $.post("ajax/logout.php",{logout:1});
    posting.done(function(res){
        location.reload();
    });
}