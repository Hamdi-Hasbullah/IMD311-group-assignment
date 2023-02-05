const faqs = document.querySelectorAll(".faq")
const element = document.querySelector('.myP');

//using arrow function to FAQs site
//add event listener method to make event target for the toggle to make symbol change when user click
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})
