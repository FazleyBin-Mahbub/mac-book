const extraMemoryCost = document.getElementById("extra-memory-cost");
const extraStorageCost = document.getElementById("extra-storage-cost");
const deliveryCost = document.getElementById("delivery-cost");

const totalPrice = document.getElementById("total-price");

// update Total
function updateTotal(selectItem) {
  totalPrice.innerText = parseInt(selectItem.innerText) + 1299;
}

// memory cost
document.getElementById("memory-btn-8").addEventListener("click", function () {
  extraMemoryCost.innerText = "0";
  updateTotal(extraMemoryCost);
});
document.getElementById("memory-btn-16").addEventListener("click", function () {
  extraMemoryCost.innerText = "180";
  updateTotal(extraMemoryCost);
});

// storage cost

document.getElementById("SSD-256").addEventListener("click", function () {
  extraStorageCost.innerText = "0";
  updateTotal(extraStorageCost);
});
document.getElementById("SSD-512").addEventListener("click", function () {
  extraStorageCost.innerText = "100";
  updateTotal(extraStorageCost);
});
document.getElementById("SSD-1").addEventListener("click", function () {
  extraStorageCost.innerText = "180";
  updateTotal(extraStorageCost);
});

// delivery charge

document.getElementById("delivery-1").addEventListener("click", function () {
  deliveryCost.innerText = "0";
  updateTotal(deliveryCost);
});
document.getElementById("delivery-2").addEventListener("click", function () {
  deliveryCost.innerText = "20";
  updateTotal(deliveryCost);
});
