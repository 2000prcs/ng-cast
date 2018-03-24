angular.module('video-player')
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function () {
    this.selectVideo = () => {
    
    };
    this.searchResults = () => {

    };
    this.onClick = (e) => {
      console.log("clicked");
      console.log(e);
      this.currentVideo = e;
      
    };
    this.result = () => {

    };
    this.searchClick = () => {
      console.log("clicked")
    };
    
    this.currentVideo = window.exampleVideoData[0];

    this.videos = window.exampleVideoData; 
  }
});

