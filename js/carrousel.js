const container = document.querySelector('.carrousel-container')
const dot = document.querySelectorAll('.dot')

//When CLICK on dot
    //Know the position of the dot
    //Apply the transform translate
    //REMOVE active class from ALL DOTS
    // ADD the active class to the selected DOT

dot.forEach( ( eachDot , i )=>{
    dot[i].addEventListener('click', ()=> {
        let position = i
        let operation = position * -(100/3)

        container.style.transform =  `translateX(${operation}%)`

        dot.forEach( (eachPoint , i ) => {
            dot[i].classList.remove('active')
        })

        dot[i].classList.add('active')
    })
})