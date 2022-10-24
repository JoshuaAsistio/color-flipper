window.addEventListener('DOMContentLoaded', () => {
    /* VARIABLE DECLARATIONS */

    const button = document.getElementById('btn')

    /* ---------------------------------------------------------------------------------------------------------------- */

    /* FUNCTIONALITY */

    button.addEventListener('click', () => {

        //declare the hex variable that will be concatenated later on using the for loop, the characters that are normally present in a hex code, and get the span element that will be used later on to update the text content.

        let hex = '#'
        const codes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F']
        const spanElement = document.getElementById('color') 
        
        //run a for loop that will concatenate randomly selected characters from the array.

        for (let i = 1; i <= 6; i++) {
            const randomNumber = Math.floor(Math.random() * codes.length)
            hex += codes[randomNumber]
        }

        //update the span element to the hex color formed at the end of the loop and change the backgound of the body.

        spanElement.textContent = hex
        document.body.style.backgroundColor = hex
    })

    const getRandomNumber = () => {
        return Math.floor(Math.random() * codes.length)
    }

    /* ---------------------------------------------------------------------------------------------------------------- */
})