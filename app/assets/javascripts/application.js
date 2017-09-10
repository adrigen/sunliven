// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
// turbolinks
//= require_tree .
//= require foundation
//= require foundation_init
//= require vue




var app4 = new Vue({
  el: '#inventory',
  data: {
    appliances: [
      { id: 0, name: 'Fridge', wh_per_day: 1000 },
      { id: 1, name: 'Kettle', wh_per_day:50 },
      { id: 2, name: 'Blender', wh_per_day: 20 }
    ]
  },
  computed: {
    total: function(){
      return this.appliances.reduce(function(sum, appliance){
        return sum + appliance.wh_per_day; 
      },0);
    }
  }
})





