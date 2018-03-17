require('./quickgrid.css');
require('./quickgrid');
$(function(){
  
  $('<div></div>').appendTo('body').quickGrid({
    data: [
      {
          date: "01.01.1901",
          country: "Australia",
          population: 24.13
      },
      {
          date: "24.08.1991",
          country: "Ukraine",
          population: 42.5
      },
      {
        date: "04.07.1776",
        country: "USA",
        population: 325.7
      }
  ],
  columns: {
      date : {
          visible: false,
          title: "Independence Date"
      },
      population : {
          title: function(key){
              return key.charAt(0).toUpperCase() + key.substring(1)  + " (millions)";
          }
      }
  }

  });  
  
});