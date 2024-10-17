

let idx = 0;
$('.slide').hide();
$('.slide').eq(idx).show();
setInterval(function () {
    idx++;
    if (idx === 3) { idx = 0 }
    $('.slide').fadeOut()
    $('.slide').eq(idx).fadeIn()
}, 4000);
