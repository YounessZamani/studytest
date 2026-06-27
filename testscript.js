const buttons = document.querySelectorAll(".upvote-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const votes = button.nextElementSibling;
        votes.textContent = Number(votes.textContent) + 1;
    });
});