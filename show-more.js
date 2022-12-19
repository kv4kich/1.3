const showMore = document.querySelector('.show-more');
const slideLength = document.querySelectorAll('.swiper-slide').length;
let items = 6;

showMore.addEventListener('click', () => {
    items = slideLength;
    const array = Array.from(document.querySelector('.swiper-wrapper').children);
    const visibleItems = array.slice(0, items);

    if (showMore.textContent == "Скрыть") {
        showMore.classList.contains("read-more--text-true") ? showMore.textContent ="Читать далее"
        :showMore.textContent = "Показать всё";
        visibleItems.forEach(el => el.classList.remove('is-visible'));
    } else {
        showMore.textContent = "Скрыть";
        visibleItems.forEach(el => el.classList.add('is-visible'));
    } 
});


