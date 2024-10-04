$('li.story').click(function () {
    mainHide()
    lineShow()
})
$('#sect1 a.close').click(function () {
    lineHide()
    mainShow()
})
$('#sect2 a.close').click(function () {
    $('#sect2').fadeOut()
    mainShow()
})

function lineShow() {
    $('.top').animate({ 'width': '100%' }, 500, function () {
        $('.right').animate({ 'height': '100%' }, 500, function () {
            $('.bottom').animate({ 'width': '100%' }, 500, function () {
                $('.left').animate({ 'height': '100%' }, 500, function () {
                    $('#sect1 figure').fadeIn()
                })
            })
        })
    })
}
function lineHide() {
    $('.top').animate({ 'width': '0%' })
    $('.right').animate({ 'height': '0%' })
    $('.bottom').animate({ 'width': '0%' })
    $('.left').animate({ 'height': '0%' }, 500, function () {
        $('#sect1 figure').fadeOut()
    })
}


function mainHide() {
    $('main .video').animate({ 'top': '-1000px' }, 500)
    $('ul.menu').delay(300).animate({ 'top': '1000px' }, 500)
    $('.main-visual').addClass('on')
    $('#sect1').show()

}


function mainShow() {
    $('main .video').animate({ 'top': '-0px' }, 500)
    $('ul.menu').delay(300).animate({ 'top': '0px' }, 500)
    $('.main-visual').removeClass('on')
    $('#sect1').hide()

}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    
    },
});

$('li.package').click(function(){
mainHide()
$('#sect2').delay(100).show()
$('#sect2').animate({'height':'400px'})

})