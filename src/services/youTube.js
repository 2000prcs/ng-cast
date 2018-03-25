angular.module('video-player')
  .service('youTube', function($http){

    this.search = function(data, callback){
      $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: data.query,
          maxResults: data.maxResults,
          key: data.key,
          videoEmbeddable: 'true',
          type: 'video'
        }
      })
      .then(function (response) {
        callback(response.data.items);
        console.log('Data sent');
      })
      .catch(function (response) {
        console.log('Data failed');
      });
    };
  }
);
