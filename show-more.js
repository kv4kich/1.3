const showMore = document.querySelector('.show-more');
const sliderDropdown = document.querySelector('.section__slider')

showMore.addEventListener('click', () => {

    if (showMore.textContent == "Скрыть") {

        showMore.classList.contains("read-more--text-true") ? showMore.textContent ="Читать далее"
        :showMore.textContent = "Показать всё";

    } else {

        showMore.textContent = "Скрыть";
    
    }

    showMore.classList.toggle("show-more--passive");
    showMore.classList.toggle("show-more--active");

    sliderDropdown.classList.toggle('is-visible'); 
    
});


