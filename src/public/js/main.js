
var updatePostStats = {
    Like: function (postId) {
        document.querySelector('#likes-count-' + postId).textContent++;
    },
    Unlike: function(postId) {
        document.querySelector('#likes-count-' + postId).textContent--;
    }
};

var toggleButtonText = {
    Like: function(button) {
        button.textContent = "Unlike";
    },
    Unlike: function(button) {
        button.textContent = "Like";
    }
};

var actOnPost = function (event) {
    var postId = event.target.dataset.postId;
    console.log(postId);
    var action = event.target.textContent.trim();
    console.log(action);
    console.log('using axios library');
    toggleButtonText[action](event.target);
    updatePostStats[action](postId);
    axios.post('/posts/' + postId + '/act', { action: action });
};
  
//   //Pusher.logToConsole = true;
//   var pusher = new Pusher('20235c9bc8da099a7bec', {
//     cluster: 'eu'
// });
// var socketId;
// // retrive the socket ID on successful connection
// pusher.connection.bind('connected', function() {
//     socketId = pusher.connection.sockect_id;
// });

// var channel = pusher.subscribe('post-events');
// channel.bind('postAction', function(data) {
//     // log message data to console - for debugging purposes
//     console.log(data);
//     var action = data.action;
//     console.log(action);
//     updatePostStats[action](data.postId);
// });


