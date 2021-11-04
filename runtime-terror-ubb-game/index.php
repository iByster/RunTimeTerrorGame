<?php
    session_start();
    if (!isset($_SESSION['username'])){
        header("Location: login.php");
        exit;
    } else {
?>
<!doctype html>
<html>
  <head>
    <title>UbbGame</title>
    <link type="text/css" rel="stylesheet" href="css/index.css"/>
    <link type="image/png" rel="icon" href="img/ubbsign.png"/>
    <link href="css/bootstrap.min.css" rel="stylesheet"/>
  </head>
  <body>
    <h1>Hello World !</h1>
    <div class="mx-auto" style="width: 60px;">
        <button type="button" class="btn btn-outline-primary mr-1" onclick="logout()">Logout</button>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.10.2.js"></script> 
    <script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
  </body>
</html>
<? } ?>