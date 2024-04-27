document.addEventListener('DOMContentLoaded', function() {
  const cardsWrap = document.querySelector('.cards__wrap');
  const totalCards = 6;
  const numFirst = document.querySelector('.slider__num:first-child');
  const numLast = document.querySelector('.slider__num:last-child');
  let currentIndex = 0;
  let cardsToShow = 3; 
  let sliderInterval;

  function updateCardsToShow() {
    if (window.innerWidth <= 470) {
      cardsToShow = 1;
    } else {
      cardsToShow = 3;
    }
    updateCounter();
  }

  function slideCards() {
    const offset = currentIndex * 100 / (totalCards / cardsToShow);
    cardsWrap.style.transform = `translateX(-${offset}%)`;
    updateCounter();
  }

  function updateCounter() {
    if (cardsToShow === 3) {
      numFirst.textContent = 3; 
      numLast.textContent = totalCards;
      if (currentIndex === 0) {
        numFirst.style.color = '#313131'; 
        numLast.style.color = 'rgba(49, 49, 49, .6)';
      } else {
        numFirst.style.color = 'rgba(49, 49, 49, .6)';
        numLast.style.color = '#313131';
      }
    } else {
      numFirst.textContent = currentIndex + 1; 
      numLast.textContent = totalCards;
      numFirst.style.color = '#313131'; 
      numLast.style.color = 'rgba(49, 49, 49, .6)';
    }
  }

  function startSlider() {
    sliderInterval = setInterval(nextSlide, 4000);
  }

  function resetSlider() {
    clearInterval(sliderInterval);
    startSlider();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % (totalCards / cardsToShow);
    slideCards();
  }

  function previousSlide() {
    currentIndex = (currentIndex - 1 + (totalCards / cardsToShow)) % (totalCards / cardsToShow);
    slideCards();
  }

  document.getElementById('slide-right').addEventListener('click', function() {
    nextSlide();
    resetSlider();
  });

  document.getElementById('slide-left').addEventListener('click', function() {
    previousSlide();
    resetSlider();
  });

  updateCardsToShow();
  slideCards();
  startSlider();

  window.addEventListener('resize', function() {
    updateCardsToShow();
    resetSlider();
  });
});

