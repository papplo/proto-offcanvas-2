// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({
  offcanvas : {
    // Sets method in which offcanvas opens.
    // [ move | overlap_single | overlap ]
    open_method: 'overlap',
    // Should the menu close when a menu link is clicked?
    // [ true | false ]
    close_on_click : false
  }
});

$(".off-canvas-submenu").hide();
$(".off-canvas-submenu-call").click(function() {
	var icon = $(this).parent().next(".off-canvas-submenu").is(':visible') ? '+' : '-';
	$(this).parent().next(".off-canvas-submenu").slideToggle('fast');
	$(this).find("span").text(icon);
});


function sideNav() {
  if ($(window).width() < 769) {
    $('.off-canvas-wrap').removeClass('move-right');
    $('.left-off-canvas-toggle').show();
  } else {
    $('.off-canvas-wrap').addClass('move-right');
    $('.left-off-canvas-toggle').hide();
  }
}

$(window).resize(function() {
  sideNav();
});
