
//메뉴를 클릭하면 해당 섹션으로 애니메이트 로 위치 이동
const listElems = document.querySelectorAll('nav ul li')
const sections = document.querySelectorAll('section')
sections[0].classList.add('on')

listElems.forEach((li) => {
    const link = li.querySelector('a[href^="#sect"]')
    link.addEventListener('click', function (e) {
        e.preventDefault()
        const href = this.getAttribute('href')
        const sectTop = document.querySelector(href)//querySelector?
        window.scrollTo({
            top: sectTop.offsetTop,
            behavior: 'smooth'
        })
    })
})

sections.forEach((sect, i) => {

    sect.addEventListener('wheel', function (e) {
        e.preventDefault()
        //wheel Down 하면 + 값이 발생되고, Up은 - 값이 발생
        let delta = e.deltaY
        if (delta < 0 && i === 0) {
            //양수 (e.deltaY > 0): 휠이 아래로(scroll down) 굴려졌음을 의미
            return//해당조건이면 명령 loop를 빠져나가라
            //배열의 index는 [0,1,2,3]이고 갯수는 4개
        } else if (delta > 0 && i === sections.length - 1) {
            //음수 (e.deltaY < 0): 휠이 위로(scroll up) 굴려졌음을 의미
            return
        }
        //3항연산자:조건식?참:거짓
        let sectTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling
        if (sectTop) {
            let targetSectTop = sectTop.offsetTop
            window.scrollTo({ top: targetSectTop, behavior: 'smooth' })
        }

    })
})

window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop

    // //열린 창의 높이값
    // let winHeight = this.window.innerHeight

    // for (const li of listElems) {
    //     li.classList.remove('on')
    // }
    // for (const sect of listElems) {
    //     sect.classList.remove('on')
    // }

    // // if (scrollTop >= 0 && scrollTop < winHeight) {
    // //     listElems[0].classList.add('on')
    // //     section[0].classList.add('on')
    // // }
    // // if (scrollTop >= winHeight && scrollTop < winHeight * 2) {
    // //     listElems[1].classList.add('on')
    // //     section[1].classList.add('on')
    // // }
    // // if (scrollTop >= winHeight * 2 && scrollTop < winHeight * 3) {
    // //     listElems[2].classList.add('on')
    // //     section[2].classList.add('on')
    // // }
    // // if (scrollTop >= winHeight * 3) {
    // //     listElems[3].classList.add('on')
    // //     section[3].classList.add('on')
    // // }

    // for (let i = 0; i < section.length; i++) {

    //     if (scrollTop >= winHeight * i && scrollTop < winHeight * (i + 1)) {
    //         listElems[i].classList.add('on')
    //         section[i].classList.add('on')
    //     }
    // }

    sections.forEach((section, i) => {
        let sectionTop = section.offsetTop

        // 조건값이 참인 section의 index를 찾아라
        if (scrollTop >= sectionTop) {


            for (const li of listElems) {
                li.classList.remove('on')
            }
            for (const sect of sections) {
                sect.classList.remove('on')
            }

            listElems[i].classList.add('on')
            sections[i].classList.add('on')
        }
    })
})