document.addEventListener('DOMContentLoaded', function () { 
    
    const btnIdea = document.getElementById('btn-idea');
    const btnTourney = document.getElementById('btn-tourney');
    const ideaText = document.querySelector('.idea__text');
    const tourneyText = document.querySelector('.tourney__text');


    function scrollToElement(element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }

    btnIdea.addEventListener('click', function() {
        scrollToElement(ideaText);
    });

    btnTourney.addEventListener('click', function() {
        scrollToElement(tourneyText);
    });
    
});
