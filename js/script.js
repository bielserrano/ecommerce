(function() {
  'use strict';

  function app() {
    return {
       hello: function() {
         return 'hi';
       }
    };
  }

  window.app = app();
})();
