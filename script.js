
document.addEventListener('DOMContentLoaded', function(){ 
let forward = document.querySelector('.forward');
    let back = document.querySelector('.back');
    let reviewsElem = document.querySelectorAll('.review');
    let reviews = document.querySelector('.reviews');
    let position = 0;
    let mainWidth = 584;
    let mainHeight = 246;
    let secondHeight = 246;
    let thirdHeight = 206;
    reviewPosition = getComputedStyle(reviews);

    reviewsElem[0].style.height = mainHeight + 20 + 'px';
    reviewsElem[1].style.height = secondHeight + 'px';
    reviewsElem[2].style.height = thirdHeight + 'px';

    forward.onclick = function(){  
        if (position >=2) return;

        reviews.style.marginLeft = +reviewPosition.marginLeft.slice(0, -2) - mainWidth * 2+ 'px';
        reviewPosition = getComputedStyle(reviews);

        position += 1;

        reviewsElem[position].style.height = mainHeight + 20 + 'px';
        reviewsElem[position - 1].style.height = mainHeight + 'px';
        reviewsElem[position + 1].style.height = mainHeight + 'px';

    };

    back.onclick = function(){
        if(position <= 0) return;

        reviews.style.marginLeft = +reviewPosition.marginLeft.slice(0, -2) + mainWidth * 2 + 'px';
        reviewPosition = getComputedStyle(reviews);

        position -= 1;
        reviewsElem[position].style.height = mainHeight + 20 + 'px';
        reviewsElem[position + 1].style.height = mainHeight + 'px';
        reviewsElem[position + 2].style.height = mainHeight - 40 + 'px';
        reviewsElem[position - 1].style.height = mainHeight + 'px';

    };
});