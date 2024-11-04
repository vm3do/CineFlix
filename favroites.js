const heartIcon = document.querySelector(".heart-icon");
    const counterDisplay = document.querySelector(".counter");
    let count = 0;

    heartIcon.addEventListener("click", () => {
        count++;
        counterDisplay.textContent = count;
    });