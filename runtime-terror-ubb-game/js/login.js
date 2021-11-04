// Attach a submit handler to the form
$( "#loginForm" ).submit(function( event ) {
  // Stop form from submitting normally
  event.preventDefault();
  if($("#loginBtn").attr("login") == "1"){
      url = "ajax/login.php"
      data = {
        login:1,
        user: $("#user").val(),
        pass: $("#pass").val()
      }
      // Send the data using post
      var posting = $.post( url, data );
      // Put the results in a div
      posting.done(function( res ) {
        if(res == 0) alert("Incorrect username-password combination !");
        else location.reload();
      });
  } else {
    url = "ajax/register.php"
      data = {
        register: 1,
        user: $("#user").val(),
        pass: $("#pass").val(),
        passConfirm: $("#passConfirm").val()
      }
      // Send the data using post
      var posting = $.post( url, data );
      // Put the results in a div
      posting.done(function( res ) {
        if(res == 0) alert("Passwords do not match !");
        else if(res == 2) alert("Could not create an account !");
        else {
            alert("Account created !");
            location.reload();
        }
      });
  }
});

$( "#registerBtn" ).click(function(){
    $("#registerSection").remove();
    $("#loginBtn").val("Register");
    $("#loginBtn").attr("login","0");
    $("#passConfirmSection").toggle();
    $('#passConfirm').prop('required',true);
});