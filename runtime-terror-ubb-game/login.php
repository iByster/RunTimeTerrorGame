<?php session_start();
  if(isset($_SESSION["username"]))
    header("Location: ./");
  else {
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>UbbGame</title>
    <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css"/>
    <link type="text/css" rel="stylesheet" href="css/login.css"/>
    <link type="image/png" rel="icon" href="img/ubbsign.png"/>
  </head>
<body>
<br />
<div id="header">
  <img src="img/ubbsign.png"/>
  <h1>Ubb Game</h1>
</div>
<form action="/" id="loginForm">
  <div class="mb-3">
    <input type="text" placeholder="Username" id="user" required=""/>
  </div>
  <div class="mb-3">
    <input type="password" placeholder="Password" id="pass" required=""/>
  </div>
  <div class="mb-3" id="passConfirmSection">
    <input type="password" placeholder="Confirm password" id="passConfirm"/>
  </div>
  <div class="mb-3">
    <input type="submit" value="Login" id="loginBtn" login="1"/>
  </div>
  <div class="mb-3" id="registerSection">
    <input type="button" value="Register" id="registerBtn"/>
  </div>
</form>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.10.2.js"></script> 
<script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>
<script type="text/javascript" src="js/login.js"></script>
</body>
</html>
<?php } ?>