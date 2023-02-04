const faqs = document.querySelectorAll(".faq")
const element = document.querySelector('.myP');
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

//using arrow function to FAQs site
//add event listener method to make event target for the toggle to make symbol change when user click
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})
