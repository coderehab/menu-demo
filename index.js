require('./sass/site.scss');

var Menu = require('advanced-menus');

var menu = new Menu({
  selectors:{
    toggle_button: ".menu-toggle-button",
  },
  options:{
    disable_scroll: true,
    use_handles:true,
  },
  events:{
    swipeLeft: function(){
      this.close();
    },
    swipeRight: function(){
      this.open();
    }
  }
});

var innermenu = new Menu({
  options:{
    use_handles:true,
  },
  selectors:{
    menu_id: 'page-menu'
  }
});

var allmenusbyclass = document.querySelectorAll(".some-menu")
for(var i = 0; i< allmenusbyclass.length; i++){
  var id = allmenusbyclass[i].id;
  if (!id) {
    id = "am-menu-" + i;
    allmenusbyclass[i].id = id;
  }

  var somemenu = new Menu({
    selectors: {
      menu_id: id
    }
  })
}
