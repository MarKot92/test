let sloganBtnBurger = document.querySelector('.slogan__btn-burger')
let crossCloseMenu = document.querySelector('.menu__btn-close')
let btnCloseMenu = document.querySelector('.btn_menu_close')

let menu = document.querySelector('.menu')
let header = document.querySelector('.header')


sloganBtnBurger.addEventListener('click', showOpenMenu)

crossCloseMenu.addEventListener('click', showOpenMenu)

btnCloseMenu.addEventListener('click', showOpenMenu)
btnCloseMenu.addEventListener('click', showCookieOpen)

function showOpenMenu() {
    menu.classList.toggle('menu_open');
    header.classList.toggle('header_close');
}

let btnOpenMenu = document.querySelector('.btn_open-menu')
let cookie = document.querySelector('.cookie')

btnOpenMenu.addEventListener('click', showCookieOpen)
btnOpenMenu.onclick = function () {
    btnOpenMenu.classList.toggle('btn_open-menu_close');
}

let cookieCrossClose = document.querySelector('.cookie__cross_close')
let cookieContainer = document.querySelector('.cookie__container')
let form = document.querySelector('.form')
let btnCookieAccept = document.querySelector('.btn__cookie')
let btnCookieDecline = document.querySelector('.btn__cookie_border')
let closeForm = document.querySelector('.form_close')
let btnMenuContact = document.querySelector('.btn_width')
let crossCloseResultForm = document.querySelector('.form_close-result')


cookieCrossClose.addEventListener('click', showCloseCookieOpenForm)

btnCookieAccept.addEventListener('click', showCloseCookieOpenForm)

btnCookieDecline.addEventListener('click', showCloseCookieOpenForm)

closeForm.addEventListener('click', showFormClose)
closeForm.addEventListener('click', showCookieContainerClose)
closeForm.onclick = function () {
    btnOpenMenu.classList.toggle('btn_open-menu_close');
}
btnMenuContact.addEventListener('click', showFormClose)
crossCloseResultForm.addEventListener('click', showFormClose)

function showCookieContainerClose() {
    cookieContainer.classList.toggle('cookie_closed');
}

function showFormOpen() {
    form.classList.toggle('form_open');
}

function showCookieOpen() {
    cookie.classList.toggle('cookie_open');
}

function showCloseCookieOpenForm() {
    showCookieContainerClose();
    showFormOpen();
}

function showFormClose() {
    showFormOpen();
    showCookieOpen();
}

let btnSubmitTheForm = document.querySelector('.btn_submit-the-form')

btnSubmitTheForm.addEventListener('click', createForm)

function createForm() {
    document.querySelector('.form__result ').classList.toggle('form__result_open');
    document.querySelector('.form__user').classList.toggle('form__user_close');
    document.querySelector('.slogan__article').classList.toggle('slogan__article_open');
}

/*-------------------------------------------------------------------------------*/


window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = new_value;
            }
            if (event.type == "blur" && this.value.length < 5) {
                this.value = "";
            }
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);

    });

});






