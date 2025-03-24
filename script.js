const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    
    const prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });


    const existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }


    const totalRow = document.createElement("tr");
    totalRow.id = "totalRow";

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2; // Span across both columns
    totalCell.textContent = `Total Price: ${total}`;

    totalRow.appendChild(totalCell);

    // Append the total row to the table
    document.querySelector("table").appendChild(totalRow);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
