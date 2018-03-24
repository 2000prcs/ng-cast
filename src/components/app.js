angular.module('video-player')
  .component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function (youTube) { 
    this.search = youTube;
    this.videos;
    this.currentVideo;
    this.text = '';   
    
    this.selectVideo = () => {
      
    };

    this.searchResults = (response) => {
      this.videos = response;
      this.currentVideo = response[0];
    };

    this.onClick = (e) => {
      this.currentVideo = e;
    };

    this.result = (text) => {
      this.text = text;
      youTube.search({maxResults: 5, query: this.text, key: window.YOUTUBE_API_KEY}, this.searchResults.bind(this));
    };

    this.searchClick = (text) => {
      youTube.search({maxResults: 5, query: text, key: window.YOUTUBE_API_KEY}, this.searchResults.bind(this));
    };
      
    youTube.search({maxResults: 5, query: 'cats', key: window.YOUTUBE_API_KEY}, this.searchResults.bind(this));    
    
  }
});

