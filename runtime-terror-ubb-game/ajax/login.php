<?php include("../db.php");
  if(isset($_POST["login"])){
    $username = mysqli_real_escape_string($conn,$_POST["user"]);
    $password = md5(mysqli_real_escape_string($conn,$_POST["pass"]));
    $res = mysqli_query($conn,"SELECT * FROM 3978188_gamedb.users WHERE `username`='".$username."' AND `password`='".$password."';");
    if(mysqli_num_rows($res) > 0){ 
        session_start();
        $_SESSION["username"] = $username;
        echo 1;
        mysqli_free_result($res);
        mysqli_close($conn);
        exit;
    } else echo 0;
    mysqli_free_result($res);
  }
  mysqli_close($conn);
?>