$(document).ready(function() { 
    
    var fullname = $("#fullname");

       $(document).on("keyup", "#fullname", function(e) { 
           var tgt = $(e.target);
           $("#coolTitleID").html(tgt.val());
       });
           
      $(document).on("keyup", "#aboutYou", function(e) { 
           var about = $("#aboutYou"), data = about.val();
           $("#aboutYouError").addClass("hidden");
           if ( data.length > 140 ) {
               about.val(about.val().substring(0,140));
               $("#aboutYouError").removeClass("hidden");
           }
           // TODO add error message
       });
      
       function checkUserName(username) {
           
           var url = 'http://ec2-54-201-71-63.us-west-2.compute.amazonaws.com/user/check';
           
           $.ajax({
              url: url, 
              type: 'POST',
              data: {
                  username: username
              }, 
              success: function(data) { 
                  if ( data.result === "none" ) {
                      if ( ! $("#usernameError").hasClass("hidden") ) { 
                          $("#usernameError").removeClass("hidden");
                      }
                  } else {
                      $("#usernameError").removeClass("hidden");
                  }
                  console.log("success " + JSON.stringify(data));   
              }, 
              error: function() {
                  console.log("error");   
              }   
           });
           
       }
       
       $(document).on("blur", "#username", function(e) { 
           var tgt = $(e.target);
           checkUserName(tgt.val());
       });
       
       $( "#freedays" ).datepicker();
       $( "#slider" ).slider({
           range: true,
           min: 1,
           max: 5000000000
       });
       
       // submit form
       $(document).on("click", "#submitMe", function(e) { 
           var fullname, freedays, howMuch, aboutYou, username, password, data;
           
           fullname = $("#fullname").val();
           username = $("#uesrname").val();
           password = $("password").val();
           aboutYou = $("#aboutYou").val();
           freedays =  $( "#freedays" );
           howMuch = $( "#slider" ).slider("value");
           
           data = {
               username: username, 
               password: password, 
               fullname: fullname, 
               aboutYou: aboutYou, 
               freedays: freedays.toGMTString()§, 
               howMuch: howMuch
           };
           
           $.ajax({
              url: 'http://ec2-54-201-71-63.us-west-2.compute.amazonaws.com/form',
              type: 'POST',
              data: data,
              success: function(data) { 
                  console.log("success " + JSON.stringify(data));   
              }, 
              error: function() {
                  console.log("error");   
              }
           });
           
       });
});

