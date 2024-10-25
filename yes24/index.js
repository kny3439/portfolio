var swiper = new Swiper(".mySwiper", {
    speed: 1500,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const liElems = document.querySelectorAll('.swiper-mn ul li')
liElems.forEach(function (liElem, i) {
    liElem.addEventListener('click', function (e) {
        e.preventDefault()
        liElems.forEach(function (item) {
            item.classList.remove('on')
        })
        liElem.classList.add('on')
        swiper.slideTo(i, 500)
    })
})

swiper.on('slideChange', function () {
    let activeIdx = swiper.activeIndex
    liElems.forEach(function (item) {
        item.classList.remove('on')
    })
    liElems[activeIdx].classList.add('on')
});



var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


tabFunc('#tabBox1')
tabFunc('#tabBox2')

function controlClass(elements, action) {
    for (let elem of elements) {
        elem.classList[action]('on')
    }
}

const a1st = document.querySelectorAll('.tabmenu li:first-child a');
// for (let link of a1st) {
//     link.classList.add('on');
// }
controlClass(a1st, 'add')

const tab1st = document.querySelectorAll('.tabs .tab:first-child');
// for (let tab of tab1st) {
//     link.classList.add('on');
// }
controlClass(tab1st, 'add')

function tabFunc(target) {
    let targetElem = document.querySelector(target)
    let aElems = targetElem.querySelectorAll('.tab-menu li a ')

    aElems.forEach(function (aElem){
        aElem.addEventListener('click', function (e) {
            e.preventDefault();
            let menu = targetElem.querySelectorAll('.tab-menu li a')
            controlClass(menu, 'remove')

            this.classList.add('on')

            let href = this.getAttribute('href');

            let tabs = targetElem.querySelectorAll('.tab')
            controlClass(tabs, 'remove')
            targetElem.querySelector(href).classList.add('on')
        })
    })
}


//------------------------------------------




// $('.tab-mn li a').click(function (e) {
//     e.preventDefault()
//     $('.tab-mn li a').removeClass('on')
//     $(this).addClass('on')
//     let href = $(this).attr('href')
//     $('.tab').hide()
//     $(href).show()
// })

// $('.tab-menu li a').click(function (e) {
//     e.preventDefault()
//     $('.tab-menu li a').removeClass('on')
//     $(this).addClass('on')
//     let href = $(this).attr('href')
//     $('.tab2').hide()
//     $(href).show()
// })



//아코디온
let flex = document.querySelectorAll('.flex1 li')
flex.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        flex.forEach(function (i) {
            i.classList.remove('on')
        })
        item.classList.add('on')
    })
})

var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    speed: 6000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});


var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    speed: 6000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 0,
        disableOnInteraction: false,

    },
});

var swiper5 = new Swiper(".mySwiper5", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



$('.main-menu').mouseenter(function () {
    $(this).find('a').addClass('on')
    $(this).children('.sub-menu').stop().slideDown()
})
$('.main-menu').mouseleave(function () {
    $(this).find('a').removeClass('on')
    $(this).children('.sub-menu').stop().slideUp()
})

$('header .hamburger').click(function () {
    $(this).parents('body').find('.side-menu').css('transform', 'translateX(0px)');
});
$('.side-menu .close').click(function () {
    $(this).parents('.side-menu').css('transform', 'translateX(-250px)');
});


//헤더 스크롤 이벤트
let prevScrollTop = 0

let header = document.querySelector('header');
const sectionElems = document.querySelectorAll('section')
window.addEventListener('scroll', function () {
    let currentScrollTop = window.pageYOffset
    // console.log(currentScrollTop)
    if (currentScrollTop > prevScrollTop) {
        header.classList.add('on')
    } else {
        header.classList.remove('on')
    }
    prevScrollTop = currentScrollTop
    sectionElems.forEach(function (section) {
        const sectionTop = section.offsetTop
        console.log(sectionTop)
        const threshold = sectionTop + 300


        if (currentScrollTop > threshold) {
            header.classList.add('on')
        } else {
            header.classList.remove('on')
        }


    })

})