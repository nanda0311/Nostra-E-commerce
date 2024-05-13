document.addEventListener("DOMContentLoaded", function() {
    var productContainer = document.getElementById("products");
    var search = document.getElementById("search");

    if (productContainer && search) {
        var productlist = productContainer.querySelectorAll(".box");

        search.addEventListener("keyup", function(event) {
            var enteredValue = event.target.value.toUpperCase();

            productlist.forEach(function(product) {
                var productName = product.querySelector("p").textContent.toUpperCase();
                if (productName.indexOf(enteredValue) < 0) {
                    product.style.display = "none";
                } else {
                    product.style.display = "block";
                }
            });
        });
    } else {
        console.error("Required elements not found.");
    }
});
