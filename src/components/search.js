angular.module('video-player')
  .component('search', {
    bindings: {
      searchClick: '<',
      text: '<',
      result: '<'
    },
    contoller: function(){
      
    },
    
    templateUrl: 'src/templates/search.html';

});
