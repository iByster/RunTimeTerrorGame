<?php
  $servername = "fdb31.runhosting.com";
  $username = "3978188_gamedb";
  $password = "FreeHosting.//123";
  // Create connection
  $conn = mysqli_connect($servername, $username, $password);
  //Check connection
  if(!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
?>