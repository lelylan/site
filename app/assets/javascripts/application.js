// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .



/* open all external links in new tab */

$(function(){
  $('a').each(function() {
    var a = new RegExp('/' + window.location.host + '/');
    if(!a.test(this.href)) {
      $(this).click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        window.open(this.href, '_blank');
      });
    }
  });
});


/* open all bubbles */

$(function(){

  $('.free-price').click(function(e){
    var $me = $(this);
  	e.preventDefault();

    $me.grumble({
      text: 'Get started using Lelylan for free.<br> No credit card required.',
      angle: 30,
      distance: 40,
      type: 'alt-',
      hideOnClick: true
    });
  });

  $('.info-connected').click(function(e){
    var $me = $(this);
  	e.preventDefault();

    $me.grumble({
      text: 'Number of devices with full access<br> to lelylan<br> (MQTT enabled)',
      angle: 30,
      distance: 25,
      type: 'alt-',
      hideOnClick: true
    });
  });

  $('.makers-price').click(function(e){
    var $me = $(this);
  	e.preventDefault();

    $me.grumble({
      text: 'One single payment.</br> No recurring fees.</br> Add what you need and pay what you use.',

      angle: 30,
      distance: 35,
      type: 'alt-',
      hideOnClick: true
    });
  });

  $('.button-coming-soon').click(function(e){
    var $me = $(this);
  	e.preventDefault();

    $me.grumble({
      text: 'This feature is coming soon',
      angle: 90,
      distance: 125,
      type: 'alt-',
      hideOnClick: true
    });
  });

  $('.info-requests-month').click(function(e){
    var $me = $(this);
  	e.preventDefault();

    $me.grumble({
      text: 'Requests per month <br>(in thousands)<br> shared between all connected devices',
      angle: 30,
      distance: 25,
      type: 'alt-',
      hideOnClick: true
    });
  });

  $('.info-requests-pack').click(function(e){
    var $me = $(this);
  	e.preventDefault();

    $me.grumble({
      text: 'Initial pack of requests (in millions) shared between all connected devices',
      angle: 30,
      distance: 25,
      type: 'alt-',
      hideOnClick: true
    });
  });

  $('.enterprise-price').click(function(e){
    var $me = $(this);
  	e.preventDefault();

    $me.grumble({
      text: 'One single payment.</br> No recurring fees.</br> Get professional about using Lelylan.',

      angle: 30,
      distance: 25,
      type: 'alt-',
      hideOnClick: true
    });
  });

  $('.info-white-label').click(function(e){
    var $me = $(this);
  	e.preventDefault();

    $me.grumble({
      text: 'Build your own dashboard with a fully customized UI. Built with Angular, HTML5 and CSS3.',
      angle: 30,
      distance: 25,
      type: 'alt-',
      hideOnClick: true
    });
  });

  $('.info-batch').click(function(e){
    var $me = $(this);
  	e.preventDefault();

    $me.grumble({
      text: 'Bulk creation of devices and easy to export services to have all device<br> ID and Secrets',
      angle: 30,
      distance: 25,
      type: 'alt-',
      hideOnClick: true
    });
  });
});


