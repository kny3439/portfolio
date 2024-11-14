

let idx = 0;
$('.slide').hide();
$('.slide').eq(idx).show();
setInterval(function () {
    idx++;
    if (idx === 3) { idx = 0 }
    $('.slide').fadeOut()
    $('.slide').eq(idx).fadeIn()
}, 4000);


const listElems = document.querySelectorAll('nav ul li')
const section = document.querySelectorAll('section')

listElems.forEach((li) => {
    const link = li.querySelector('a[href^="#sect"]')
    link.addEventListener('click', function (e) {
        e.preventDefault()
        const href = this.getAttribute('href');
        const sectTop = document.querySelector(href);
        window.scrollTo({
            top: sectTop.offsetTop,
            behavior: 'smooth'
        })
    })
})

// section.forEach((sect, i) => {

//     sect.addEventListener('wheel', function (e) {
//         e.preventDefault()
//         let delta = e.deltaY
//         if (delta < 0 && i === 0) {

//             return
//         } else if (delta > 0 && i === section.length - 1) {

//             return
//         }

//         let sectTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling
//         if (sectTop) {
//             let targetSectTop = sectTop.offsetTop
//             window.scrollTo({ top: targetSectTop, behavior: 'smooth' })
//         }

//     })
// })