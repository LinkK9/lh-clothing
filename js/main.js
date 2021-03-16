

// de-increase button
    let cartQuantity = $("#cart-quantity").text();
    if (cartQuantity <= 0) {
        $("#cart-quantity").css("display", "none");
    }

    // de-button
    $(".minus-button").on("click", function () {
        let quantityInput = +$(this).next().val();
        if (quantityInput > 1) {
            $(this).next().val(quantityInput - 1);
        }
    });

    // in-button
    $(".plus-button").on("click", function () {
        let quantityInput = +$(this).prev().val();
        
            $(this).prev().val(quantityInput + 1);
        
    });


    // add to cart
    $("#add-to-cart").on("click",  () => {
        $("#cart-quantity").css("display", "block");
        $("#cart-quantity").text(+$("#cart-quantity").text() + +$("#quantity-input").val());
        console.log($("#cart-quantity").val());
    });
