const extraMemoryCost = document.getElementById("extra-memory-cost");
const extraStorageCost = document.getElementById("extra-storage-cost");
const deliveryCost = document.getElementById("delivery-cost");

var totalPrice = document.getElementById("total-price");

var promo = document.getElementById("promo-input");

const applyPromo = document.getElementById("apply");

var finalTotal = document.getElementById("all-total");
// update individual data
function update(selectItem) {
  totalPrice.innerText = parseInt(selectItem.innerText) + 1299;
}

// update total
function updateTotal() {
  var total =
    1299 +
    parseInt(extraMemoryCost.innerText) +
    parseInt(extraStorageCost.innerText) +
    parseInt(deliveryCost.innerText);

  // table total
  totalPrice.innerText = total;
  finalTotal.innerText = total;
}

function updateInputData(event, charge, inputData, updateData) {
  document.getElementById(event).addEventListener("click", function () {
    charge.innerText = "" + inputData;
    update(updateData);
    updateTotal();
  });
}

// memory cost
updateInputData("memory-btn-8", extraMemoryCost, "0", extraMemoryCost);
updateInputData("memory-btn-16", extraMemoryCost, "180", extraMemoryCost);
// storage cost
updateInputData("SSD-256", extraStorageCost, "0", extraStorageCost);
updateInputData("SSD-512", extraStorageCost, "100", extraStorageCost);
updateInputData("SSD-1", extraStorageCost, "180", extraStorageCost);

//delivery cost
updateInputData("delivery-1", deliveryCost, "0", deliveryCost);
updateInputData("delivery-2", deliveryCost, "20", deliveryCost);

// promo code
applyPromo.addEventListener("click", function () {
  const promoCode = totalPrice.innerText;

  if (promo.value == "stevekaku") {
    finalTotal.innerText = parseInt(promoCode) - parseInt(promoCode) * 0.2;

    // clear input
    promo.value = "";
  }
});
