
let currentClass = ''
$('ul.nav li').click(function () {
    // li에 있는 문자값 읽기
    let $li = $(this).text()
    let activeClass = 'show' + $li
    // 기본 클래스값이 존재할 때만 실행
    if (currentClass) {
        $('.cube').removeClass(currentClass)
    }
    $('.cube').addClass(activeClass)
    // 현재 활성화 클래스를 기본 클래스로 저장
    currentClass=activeClass
})