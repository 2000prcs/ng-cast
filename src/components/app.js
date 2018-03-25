angular.module('video-player')
  .component('app', {
  templateUrl: 'src/templates/app.html',
// too debug angular, put 'debugger' keyword in controller and run it 
  controller: function (youTube) { 
    this.search = youTube;
    this.videos;
    this.currentVideo;
    this.text = '';   
    
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };

    this.searchResults = (response) => {
      this.videos = response;
      this.currentVideo = response[0];
    };

    // this.result = (text) => {
    //   this.text = text;
    //   youTube.search({maxResults: 5, query: this.text, key: window.YOUTUBE_API_KEY}, this.searchResults);
    // };

    this.searchClick = (text) => {
      youTube.search({maxResults: 5, query: text, key: window.YOUTUBE_API_KEY}, this.searchResults);
    };

    youTube.search({maxResults: 5, query: 'korea', key: window.YOUTUBE_API_KEY}, this.searchResults);    
    
  }
});

