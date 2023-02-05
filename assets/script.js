const para = document.querySelector('.box-container');

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.documentElement.scrollTop > 80) {
    element.classList.add('animate__animated', 'animate__fadeInLeft');
    para.classList.add('animate__animated', 'animate__fadeInLeft'); 

    } else {
    element.classList.remove('animate__animated', 'animate__fadeInLeft');
    para.classList.remove('animate__animated', 'animate__fadeInLeft');
    }
}
