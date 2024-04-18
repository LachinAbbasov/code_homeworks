document.addEventListener("DOMContentLoaded", () => {
    const jokeText = document.getElementById("joke-text");
    const generateBtn = document.getElementById("generate-btn");

    generateBtn.addEventListener("click", () => {
        fetch("https://v2.jokeapi.dev/joke/programming?type=single")
            .then(response => response.json())
            .then(data => {
                jokeText.textContent = data.joke;
            })
            .catch(error => {
                jokeText.textContent = "Error fetching joke. Please try again later.";
                console.error("Error fetching joke:", error);
            });
    });
});
