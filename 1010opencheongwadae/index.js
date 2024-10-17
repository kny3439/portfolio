const section = document.querySelectorAll('section')
const footer = document.querySelector('footer')
const sectLast = section[section.length - 1]
const sectLastTop = sectLast.offsetTop

section.forEach((sect, i) => {

    sect.addEventListener('wheel', function (e) {
        e.preventDefault()
        let delta = e.deltaY
        if (delta < 0 && i === 0) {
            return
        } else if (delta > 0 && i === section.length - 1) {
            footer.scrollIntoView({ behavior: 'smooth' })
            return
        }
        let sectTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling
        if (sectTop) {
            let targetSectTop = sectTop.offsetTop
            window.scrollTo({ top: targetSectTop, behavior: 'smooth' })
            return
        }

    })
})

window.addEventListener('wheel', function (e) {
    console.log(`window.innerHeight:${window.innerHeight},window.scrollY:${window.scrollY}`,);
    console.log(document.body.scrollHeight, window.innerHeight + this.window.scrollY)
    if (e.deltaY < 0 && window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
        e.preventDefault()
        window.scrollTo({ top: sectLastTop, behavior: 'smooth' })
    }
})


// $('li.main-mn').mouseenter(function () {
//     $(this).children('ul.sub-mn').stop().show()
// })
// $('li.main-mn').mouseleave(function () {
//     $(this).children('ul.sub-mn').stop().hide()
// })

//let mobile=window.innerwidth <=1100

let mobile = window.innerWidth <= 1100

function initializeMenu() {
    const subMenu = document.querySelectorAll('.sub-mn')
    if (mobile) {
        subMenu.forEach(subMenu => subMenu.computedStyleMap.diplay = 'none')
    } else {
        subMenu.forEach(subMenu => {
            subMenu.computedStyleMap.diplay = 'block';
            subMenu.computedStyleMap.maxHeight = 'none'
            subMenu.classList.remove('on')
        })
    }
}


window.addEventListener('resize', function () {

    // let currentWidth = this.window.innerWidth
    // console.log(currentWidth)
    let mobile = window.innerWidth <= 1100
    let pc = window.innerWidth > 1101

    if (pc) {
        document.querySelectorAll('li.main-mn').forEach(function (mainMenu) {
            mainMenu.addEventListener('mouseenter', function () {
                let subMenu = mainMenu.querySelector('ul.sub-mn');
                if (subMenu) {
                    subMenu.style.display = 'block';
                }
            });
            mainMenu.addEventListener('mouseleave', function () {
                let subMenu = mainMenu.querySelector('ul.sub-mn');
                if (subMenu) {
                    subMenu.style.display = 'none';
                }
            });
        });
    } if (mobile) {
        document.querySelectorAll('li.main-mn').forEach(function (mainMenu) {
            mainMenu.addEventListener('click', function () {
                let subMenu = mainMenu.querySelector('ul.sub-mn');
                if (subMenu) {
                    subMenu.style.display = 'block';
                    mainMenu.classList.add('on')

                }
            })
        })
    }
})


// let pc = window.innerWidth >= 1101

// function initializeMenu() {
//     const subMenu = document.querySelectorAll('.sub-mn')
//     if (pc) {
//         subMenu.forEach(subMenu => subMenu.computedStyleMap.diplay = 'none')
//     } else {
//         subMenu.forEach(subMenu => {
//             subMenu.computedStyleMap.diplay = 'block';
//             subMenu.computedStyleMap.maxHeight = 'none'
//             subMenu.style.diplay='block'
//         })
//     }
// }


// var swiper = new Swiper(".mySwipe", {
//     spaceBetween: 30,
//     effect: "fade",
//     loop: true,
//     speed: 1500,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     // autoplay: {
//     //     delay: 3500,
//     //     disableOnInteraction: false,
//     // },
// });


gsap.set('.bg > div', { opacity: 0 });

gsap.registerEffect({
    name: 'textEffect',
    extendTimeline: true,
    defaults: {
        x: 20,
        y: -20,

    },
    effect: (target, { x, y }) => {
        const { chars } = new SplitText(target, { type: 'chars' });
        const index = target[0].dataset.index;//인덱스 값읽어들인다
        const tl = gsap.timeline();

        tl.from(chars, { x: x, opacity: 0, filter: 'blur(5px)', stagger: 0.1 })
            .to(`.bg > div:nth-child(${index})`, { opacity: 1 }, 0)
            .to(chars, { delay: 5, opacity: 0, y: y, stagger: 0.05 })
            .to(`.bg > div:nth-child(${index})`, { opacity: 1 }, 2)
        return tl;
    }
});

function textAnimation() {
    const animation = gsap.timeline({
      repeat: -1
    });
    animation.textEffect('.slide1')
      .textEffect('.slide2')
      .textEffect('.slide3')
      .textEffect('.slide4')
      .textEffect('.slide5')
      .textEffect('.slide6')
      .textEffect('.slide7');
  }

  textAnimation();



var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$('.tab-menu li a').click(function (e) {
    e.preventDefault()
    $('.tab-menu li a').removeClass('on')
    $(this).addClass('on')
    let href = $(this).attr('href')
    $('.tab').hide()
    $(href).fadeIn()
})



