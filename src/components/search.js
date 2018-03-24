angular.module('video-player')

.component('search', {
  bindings: {
    searchClick: '<',
    result: '<'
  },
  
  templateUrl: 'src/templates/search.html'

});
