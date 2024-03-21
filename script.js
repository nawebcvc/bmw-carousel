const divs = document.querySelectorAll('.item');

/* // с помощью цикла for
for (let i = 0; i < divs.length; i++) {
    const element = divs[i];
    element.addEventListener('click', ()=>{divAnim(element, divs)});
    function divAnim(getElement, allElements) {  
        for (let x = 0; x < allElements.length; x++) {
            const rmvElement = allElements[x];
            rmvElement.classList.remove('active');
            
        };
        getElement.classList.add('active');
    }
    
} */

// с помощью метода forEach
divs.forEach(element => {
    element.addEventListener('click', () => {
        divs.forEach((remElem)=>{remElem.classList.remove('active')});
        element.classList.add('active');
    });
}); 