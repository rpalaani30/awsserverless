$(document).ready(function() 
{
    // Handle form submission.
    $("#submit").click(function(e) 
    {
     
      //Get the access token from the url.
      var access_token = new URLSearchParams(window.location.hash).get('access_token');

      //to create uniqueID
      var d = new Date();
      var n = d.getTime();
      
      //Getting the data from the form
      var email = $("#email").val(),
          userxp = $("#userxp").val(),
          att = $("#att").val(),
          covid = $("#covid").val(),
          sugg = $("#sugg").val(),
          feedid = email + n;       
   
      //forming json data 
      var data = JSON.stringify({
            'id':feedid,
            'covid':covid,
            'email':email,
            'att':att,
            'userxp':userxp,
            'sugg':sugg    
        });
  
        //accessing API gateway to wirte DynamoDB
        $.ajax({
          type: 'POST',
          url: 'https://3o5gx7bo2d.execute-api.ap-southeast-1.amazonaws.com/default/writeDyanmodbpal',
          contentType: 'application/json',
          headers: {"Authorization": access_token},
          data: data,
          
          success: function(res) {
            location.replace("https://d3kb6zvtf87wkb.cloudfront.net/FeedbackForm/sucess.html")
          },
          error: function(jqxhr, status, exception) {
            ocation.replace("https://d3kb6zvtf87wkb.cloudfront.net/FeedbackForm/Fail.html")
          }
        });
    });
});