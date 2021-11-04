<?php include("../db.php");
  if(isset($_POST["register"])){
    $username = mysqli_real_escape_string($conn,$_POST["user"]);
    $password = md5(mysqli_real_escape_string($conn,$_POST["pass"]));
    $passwordConfirm = md5(mysqli_real_escape_string($conn,$_POST["passConfirm"]));
    if($password !== $passwordConfirm) echo 0;
    elseif(mysqli_query($conn,"INSERT INTO 3978188_gamedb.users (`username`,`password`) VALUES ('".$username."','".$password."');") === false) echo 2;
    else echo 1;
  }
  mysqli_close($conn);
?>