angular.module('video-player')
.component('videoPlayer', {
  bindings: {
  // '<' -> angular interpreter interpretes it as a JS variable (code)
    video: '<'
  },
  controller: function(){
    
  },
  templateUrl: "src/templates/videoPlayer.html"
});
