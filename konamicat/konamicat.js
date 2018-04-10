(function($) {
$.fn.cat_konami = function(tabby) {
if (window.addEventListener) {
var species = $.extend({
kitty: "http://thecatapi.com/api/images/get?format=src&type=gif",
height: "500",
width: "500",
top: "50%",
left: "50%",
}, tabby),
keys = [],
konami_cat = "38,38,40,40,37,39,37,39,66,65";
window.addEventListener("keydown", function(e) {
keys.push(e.keyCode);
if (keys.toString().indexOf(konami_cat) >= 0) {
add_cat();
style_cat();
$('.cat_konami_tabby').fadeIn();
keys = [];
}
}, true);
}
function style_cat() {
$('.cat_konami_tabby').css({
'position': 'absolute',
'left': species.left,
'top': species.top,
'display': 'none',
'height': species.height + 'px',
'width': species.width + 'px',
'margin-top': '-' + species.height / 2 + 'px',
'margin-left': '-' + species.width / 2 + 'px',
'z-index': '9999',
});
}
function add_cat() {
var kitten = $('<div class="cat_konami_tabby"><img src="' + species.kitty + '" height="100%" /></div>');
$(kitten).appendTo('body');
move_cat();
$('.cat_konami_tabby').click(function() {
$(this).fadeOut().remove();
});
}
function move_cat() {
window.addEventListener("keydown", function(e) {
switch (e.which) {
case 37: //left
$('.cat_konami_tabby').stop().animate({
left: '-=100',
duration: 'slow',
easing: 'swing',
});
break;
case 38: //up
$('.cat_konami_tabby').stop().animate({
top: '-=100',
duration: 'slow',
easing: 'swing',
});
break;
case 39: //right
$('.cat_konami_tabby').stop().animate({
left: '+=100',
duration: 'slow',
easing: 'swing',
});
break;
case 40: //bottom
$('.cat_konami_tabby').stop().animate({
top: '+=100',
duration: 'slow',
easing: 'swing',
});
break;
}
});
}
return this;
};
})(jQuery);
