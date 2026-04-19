// SELECT ELEMENTS
const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const deleteBtns = document.querySelectorAll(".fa-trash-alt");
const likeBtns = document.querySelectorAll(".fa-heart");
const totalDisplay = document.querySelector(".total");

// FUNCTION TO UPDATE TOTAL
function updateTotal() {
  let total = 0;

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const price = card.querySelector(".unit-price").textContent;
    const quantity = card.querySelector(".quantity").textContent;

    const numericPrice = parseInt(price);
    const numericQty = parseInt(quantity);

    total += numericPrice * numericQty;
  });

  totalDisplay.textContent = total + " $";
}

// INCREASE QUANTITY
plusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantitySpan = btn.nextElementSibling;
    quantitySpan.textContent++;

    updateTotal();
  });
});

// DECREASE QUANTITY
minusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantitySpan = btn.previousElementSibling;

    if (quantitySpan.textContent > 0) {
      quantitySpan.textContent--;
    }

    updateTotal();
  });
});

// DELETE ITEM
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const cardBody = btn.closest(".card-body");
    cardBody.remove();

    updateTotal();
  });
});

// LIKE (HEART TOGGLE)
likeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.style.color === "red") {
      btn.style.color = "black";
    } else {
      btn.style.color = "red";
    }
  });
});
