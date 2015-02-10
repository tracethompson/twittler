$(document).ready(function(){




  function streamer(){
    var $body = $('#tweets');
    $body.html('');

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div id="tweet"></div>');
      //$tweet.text('@' + tweet.user + ': ' + tweet.message);
      //$tweet.appendTo($body);
      $body.append("<div id='tweet'>" + '@' + '<a href="#" class="tweetname">' + tweet.user +'</a> <span class="timeago" title="'+tweet.created_at+'"> </span> <div class="message">' + tweet.message +'</div>' + "</div>");
      index -= 1;
    }
    $('.timeago').timeago();
  }
  streamer();

  $('button').click( function(){
    streamer();
  });

  $('.tweetname').click( function(){
    var $profile = $('<div id="profile"></div>')
    var fuck = $('.tweetname').html();
    //while(streams.users.fuck)
    console.log(streams.users[fuck]);
    $profile.text(streams.users[fuck])
    $profile.appendTo('body');
  });

});