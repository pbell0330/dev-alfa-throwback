document.addEventListener("DOMContentLoaded", function() {

    const characters = [
        "Mario says: It's-a me, Mario!",
        "Luigi says: Let's-a go!",
        "Peach says: Thank you!",
        "Bowser says: Grrrr!",
        "Toad says: Hello!"
    ];

    function randomGreeting() {

        const randomIndex = Math.floor(Math.random() * characters.length);

        console.log(characters[randomIndex]);

        return characters[randomIndex];
    }

    randomGreeting();

    window.randomGreeting = randomGreeting;


    const greetingButton = document.getElementById("greetingButton");
    const greetingOutput = document.getElementById("greetingOutput");

    greetingButton.addEventListener("click", function() {

        greetingOutput.textContent = randomGreeting();

    });

});