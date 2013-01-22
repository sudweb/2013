;(function($, document, window, undefined){
  $(window).load(function() {
    $('a[data-ga-category]').click(function trackClicks() {
      var category = $(this).attr('data-ga-category');
      var action = $(this).attr('data-ga-action');
      var label = $(this).attr('data-ga-label');
      _gaq.push(['_trackEvent', category, action, label]);
    });
  });

  $(window).load(function(){
    if (mapbox !== undefined){
      mapbox.auto('map', 'sudweb.map-mxvtkqmy');
    }
  });

})(jquip, document, window);