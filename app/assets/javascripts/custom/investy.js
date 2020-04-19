//= require materialize

/** Event listeners */

// document.addEventListener("turbolinks:load", ()=> {
//     initHamburger();
//  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    var dropdown1 = document.querySelector('.dropdown-trigger');
    var dropdownOptions = {
        'closeOnClick': true,
        'hover':true
    }
    var instanceDropdown1 = M.Dropdown.init(dropdown1, dropdownOptions);

    let elTab =  document.querySelector('.myTabsEl');
    var instance = M.Tabs.init(elTab, {});
  });

  // Initilise sidebar menu
//   function initHamburger(){
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, {});
//   }