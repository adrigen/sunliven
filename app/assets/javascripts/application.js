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
    newAppliance: '',
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
  },
  
  methods: {
    addAppliance: function (event) {
      var applianceName = event.target.getAttribute('data-name'); 
      var applianceWatts = event.target.getAttribute('data-watts'); 
      var applianceHrsPD = event.target.getAttribute('data-hours_per_day'); 
      var applianceWHPD = applianceWatts*applianceHrsPD
      this.appliances.push({name: applianceName, wh_per_day: applianceWHPD}); //{ item: item }
      //ASK HOW TO DO THIS ON S/E
      
      // wrap your brain around this... https://stackoverflow.com/questions/39357415/vuejs-read-dom-attributes

    },
        
    removeAppliance: function (index) {
      //this.appliances.splice(index, 1);
    },
    removeAll: function (){
        this.appliances = [];
    }
  }
  
})





