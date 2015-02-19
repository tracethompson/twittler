$(document).ready(function(){


  $("#profile").hide()

  function streamer(){
    var $body = $('#tweets');
    $body.html('');

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      $body.append("<div id='tweet'>" +'<a>' + '@'  + '</a><a href="#" class="tweetname">' + tweet.user +'</a>' + ' - ' + '<span class="timeago" title="'+tweet.created_at+'"> </span> <div class="message">' + tweet.message +'</div>' + "</div>");
      index -= 1;
    }
    $('.timeago').timeago();
  }
  streamer();


   $('button').click( function(){
    streamer();
  });

  //call the profile div into view
  $(document).on('click', '.tweetname', function(e){
    console.log("registered click");
    var clickedUser = $(this).text().toString();
    profileRender(clickedUser);
    showProfile();
    se.preventDefault();
  });

  function profileRender(clickedUser){
    var tweet = streams.users[clickedUser];
    console.log("entered profile render");
    for(var i = tweet.length-1; i>=0; i--){
        $("#profile").append("<div id='tweet'>" +'<a>' + '@'  + '</a><a href="#" class="tweetname">' +  tweet[i]["user"] +'</a>' + ' - ' + '<span class="timeago" title="'+tweet.created_at+'"> </span> <div class="message">' + tweet[i]["message"] +'</div>' + "</div>");
      };
  }

  //hide the profile (called when the user clicks off the div)
  function hideProfile() {
    $('#profile').hide();
    $('#profile').empty();
  }    
  

  //Show the username profile (called when username is clicked)      
  function showProfile() {
    $('#profile').show();
    $('#profile').fadeIn("slow");


    $(document).mouseup(function (e){
      var container = $("#profile");
      if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0){ // ... nor a descendant of the container
      hideProfile();
      }
    });
  }  


});