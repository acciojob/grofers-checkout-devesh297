const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


let totalPriceDisplay = document.createElement("div");
totalPriceDisplay.id = "ans";
document.body.appendChild(totalPriceDisplay);

const getSum = () => {
    const prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(price => {
        total += parseFloat(price.textContent) || 0; // Ensure valid numbers
    });

    totalPriceDisplay.textContent = `Total Price: ${total}`;
};

// Add event listener
getSumBtn.addEventListener("click", getSum);
