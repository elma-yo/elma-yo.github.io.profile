'use strict'
{

    
    const img = document.getElementById('trigger');
    const target = document.getElementById('target'); 
    const cTarget = document.getElementById('c-target');

    var state = true;
    function hideCTarget () { 
                cTarget.style.display = "none";
                const state = "hide";
    }
    hideCTarget();

    img.addEventListener('click', () => {
        if (state === true) {
            target.style.display = "none";
            cTarget.style.display = "block";
            img.src = "img2.jpg";
            state = false;
        } else {
            cTarget.style.display = "none";
            target.style.display = "block";
            img.src = "img1.png";
            state = true;
        }
    });
}