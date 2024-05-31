document.addEventListener('DOMContentLoaded', function() {
    var sliders = document.querySelectorAll('.slider-container');
    
    sliders.forEach(function(sliderContainer) {
        var slider = sliderContainer.querySelector('.slider');
        var nextButton = sliderContainer.nextElementSibling;
        var prevButton = sliderContainer.previousElementSibling;

        nextButton.addEventListener('click', function() {
            sliderContainer.scrollBy({
                top: 0,
                left: sliderContainer.offsetWidth,
                behavior: 'smooth'
            });
        });

        prevButton.addEventListener('click', function() {
            sliderContainer.scrollBy({
                top: 0,
                left: -sliderContainer.offsetWidth,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var sliders = document.querySelectorAll('.slider-container');
    
    sliders.forEach(function(sliderContainer) {
        var slider = sliderContainer.querySelector('.slider');
        var nextButton = sliderContainer.nextElementSibling;
        var prevButton = sliderContainer.previousElementSibling;

        nextButton.addEventListener('click', function() {
            sliderContainer.scrollBy({
                top: 0,
                left: sliderContainer.offsetWidth,
                behavior: 'smooth'
            });
        });

        prevButton.addEventListener('click', function() {
            sliderContainer.scrollBy({
                top: 0,
                left: -sliderContainer.offsetWidth,
                behavior: 'smooth'
            });
        });
    });

    var cvPicContainer = document.querySelector('.cv-pic-container');
    cvPicContainer.addEventListener('click', function() {
        cvPicContainer.classList.toggle('clicked');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0;
    var projects = document.querySelectorAll('.project-container .project');
    var totalProjects = projects.length;

    function showSlide(index) {
        projects.forEach(function(project, i) {
            project.classList.remove('project-active');
            project.style.order = (i - index + totalProjects) % totalProjects;
        });
        projects[index].classList.add('project-active');
        document.querySelector('.project-container').style.transform = 'translateX(0)';
    }

    function changeSlide(n) {
        currentIndex = (currentIndex + n + totalProjects) % totalProjects;
        showSlide(currentIndex);
    }

    document.querySelector('.project-next').addEventListener('click', function() {
        changeSlide(1);
    });

    document.querySelector('.project-prev').addEventListener('click', function() {
        changeSlide(-1);
    });

    showSlide(currentIndex); // Initial call to display the first slide
});
