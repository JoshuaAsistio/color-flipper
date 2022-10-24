window.addEventListener('DOMContentLoaded', () => {
    /* VARIABLE DECLARATIONS */

    const colors = ['rgb(32, 44, 57)', 'rgb(255, 225, 86)', 'rgb(255, 27, 28)', 'rgb(239, 233, 244)', 'rgb(49, 233, 129)']
    const button = document.getElementById('btn')

    /* ---------------------------------------------------------------------------------------------------------------- */

    /* FUNCTIONALITY */

    button.addEventListener('click', () => {
        //sets a random number which would be used to set the random color on the next line, then get the span element that would be updatd later on. 

        const randomNumber = getRandomNumber()
        const randomColor = colors[randomNumber]
        const spanElement = document.getElementById('color') 
        
        //set the text inside the span element to the random color generated above, then set the background color of the body to the random color.
        
        spanElement.textContent = randomColor
        document.body.style.backgroundColor = randomColor
    })

    const getRandomNumber = () => {
        return Math.floor(Math.random() * colors.length)
    }

    /* ---------------------------------------------------------------------------------------------------------------- */
})