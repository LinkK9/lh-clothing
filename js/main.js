

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

        // update prices sum
        let price = $(this).parent().parent().next().find(".product-price").text().replace(".000đ", "");
        let sumary = $(this).parent().parent().next().next().find(".sumary-of-quantity");
        if (quantityInput > 1) {
            sumary.text((quantityInput - 1) * price + ".000đ");
        }

        // update total sum
        let totalSum = $(this).parent().parent().parent().parent().parent().next().find(".sumary-estimate td:last-child");
        let totalProduct = 
        totalSum.text()
        
    });

    // in-button
    $(".plus-button").on("click", function () {
        let quantityInput = +$(this).prev().val();
        
            $(this).prev().val(quantityInput + 1);
        
        // update prices sum
        let price = $(this).parent().parent().next().find(".product-price").text().replace(".000đ", "");
        let sumary = $(this).parent().parent().next().next().find(".sumary-of-quantity");
        sumary.text((quantityInput + 1) * price + ".000đ");
    });


    // add to cart
    $("#add-to-cart").on("click",  () => {
        $("#cart-quantity").css("display", "block");
        $("#cart-quantity").text(+$("#cart-quantity").text() + +$("#quantity-input").val());
        console.log($("#cart-quantity").val());
    });



// Cal total prices
