document.addEventListener("DOMContentLoaded", function() {
    const slides = Array.from(document.querySelectorAll('.stage__info'));
    const slideWrap = document.querySelector('.stage__info-wrap');
    const indicators = document.querySelectorAll('.slider__slider-num li'); 
    let currentGroupIndex = 0;

    const slideGroups = [
        [slides[0], slides[1]],
        [slides[2]],
        [slides[3], slides[4]],
        [slides[5]],
        [slides[6]]
    ];

    const numberMargins = [
        '-34px 17px 0 10px',
        '-74px 17px 0 10px',
        '15px 17px 0 10px',
        '-52px 17px 0 10px',
        '-114px 17px 0 10px'
    ];

    function updateSlides() {
  
        slides.forEach(slide => slide.style.display = 'none');     
        slideWrap.classList.remove('vertical-group');
     
        if ([0, 2].includes(currentGroupIndex)) {
            slideWrap.classList.add('vertical-group');
        }
        slideGroups[currentGroupIndex].forEach(slide => {
            slide.style.display = 'flex'; 
            const stageNumber = slide.querySelector('.stage__number');
            if (stageNumber) {
                stageNumber.style.margin = numberMargins[currentGroupIndex];
            }
        });

      
        updateIndicators();
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.style.backgroundColor = index === currentGroupIndex ? '#313131' : '#D9D9D9';
        });
    }

    function setupEventListeners() {
        document.getElementById('stage-slide-left').addEventListener('click', function() {
            if (currentGroupIndex > 0) {
                currentGroupIndex--;
                updateSlides();
            }
        });

        document.getElementById('stage-slide-right').addEventListener('click', function() {
            if (currentGroupIndex < slideGroups.length - 1) {
                currentGroupIndex++;
                updateSlides();
            }
        });
    }

    if (window.matchMedia('(max-width: 470px)').matches) {
        setupEventListeners();
        updateSlides(); 
    }
});
