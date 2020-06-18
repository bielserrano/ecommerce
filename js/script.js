(function() {
  'use strict';

  function app() {
    return {
       hi: function() {
         return 'hi';
       }
    };
  }

  window.app = app();
})();
