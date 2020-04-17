//= require materialize

/** Event listeners */

// document.addEventListener("turbolinks:load", ()=> {
//     initHamburger();
//  });

document.addEventListener('DOMContentLoaded', function() {
       var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  // Initilise sidebar menu
//   function initHamburger(){
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, {});
//   }