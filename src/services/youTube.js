angular.module('video-player')
.service('youTube', function(){
  
// var default = {
  

// }
  
$http.fetch({
  method: 'GET',
  url: 'https://www.googleapis.com/youtube/v3/search',
  headers: {
    'Content-Type': 'application/json'
  },
  data: default,

}).then(success, error);

// var searchYouTube = ({key=window.YOUTUBE_API_KEY, query='', max='5'}, callback) => {
//   var defaultMessage = {
//     part: 'snippet',
//     videoEmbeddable: 'true',
//     type: 'video',
//     maxResults: max,
//     key: key,
//     q: query
//   };
  
//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     type: 'GET',
//     contentType: 'application/json',
//     data: defaultMessage,
//     success: data => {
//       callback(data.items);
//       console.log('Data sent');
//     }, 
//     error: data => {
//       console.log('Nope');
//     }
//   });


});
