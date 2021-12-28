function accordionToggle() {
  const accordionToggles = document.querySelectorAll('.accordion-item-toggle');

  accordionToggles.forEach(toggleElem => {
    toggleElem.addEventListener('click', () => {
      toggleElem.classList.toggle('active');

      const accordion = toggleElem.closest('.accordion');
      const accordionSlides = document.querySelectorAll(`#${accordion.id} .accordion-item-slide`);

      accordionSlides.forEach(slide => {
        if (slide.id === toggleElem.dataset.slide) {
          slide.classList.toggle('active');
        }
      })
    })
  })
}

accordionToggle();
