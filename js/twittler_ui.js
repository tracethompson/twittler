$(document).ready(function(){


  function addLivestamp(){
    $(".timeago").each(function() {
    $(this).attr('title', (new Date()).toISOString());
    $(this).attr('id', "1");
    $(this).timeago();
    });
  };


  function streamer(){
    var $body = $('#tweets');
    $body.html('');

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div id="tweet"></div>');
      //$tweet.text('@' + tweet.user + ': ' + tweet.message);
      //$tweet.appendTo($body);
      $body.append("<div id='tweet'>" + '<a href="#" class="tweetname">' + '@' + tweet.user +'</a> <span class="timeago" title="" id="">' + '</span> <div class="message">' + tweet.message +'</div>' + "</div>");
      index -= 1;
    }
  }
  streamer();
  addLivestamp();

  $('button').click( function(){
    streamer();
    $(".timeago").each(function() {
      if(($(this).attr('id')) !== "1"){  
        $(this).attr('title', (new Date()).toISOString());
        $(this).attr('id', "fuck");
        $(this).timeago();
      } else {return;}
    });
  });

});