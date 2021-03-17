

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
        let productsSumArray = $(".sumary-of-quantity").toArray();
        let inputsArray = $(".quantity-input").toArray();
        let numberOfProducts = $(this).parent().parent().parent().parent().parent().next().find(".total-products td:last-child");

        let sumInput = 0
        for(let i = 0; i < inputsArray.length; i++) {
            sumInput += +inputsArray[i].value.replace(".000đ", "");
        };
        numberOfProducts.text(sumInput + " Sản phẩm");

        let sumItem = 0;
        for(let i = 0; i < productsSumArray.length; i++) {
            sumItem += +productsSumArray[i].innerText.replace(".000đ", "");
        };
        totalSum.text(sumItem +  ".000đ");
    });

    // in-button
    $(".plus-button").on("click", function () {
        let quantityInput = +$(this).prev().val();
        
            $(this).prev().val(quantityInput + 1);
        
        // update prices sum
        let price = $(this).parent().parent().next().find(".product-price").text().replace(".000đ", "");
        let sumary = $(this).parent().parent().next().next().find(".sumary-of-quantity");
        sumary.text((quantityInput + 1) * price + ".000đ");

        // update total sum
        let totalSum = $(this).parent().parent().parent().parent().parent().next().find(".sumary-estimate td:last-child");
        let productsSumArray = $(".sumary-of-quantity").toArray();
        let inputsArray = $(".quantity-input").toArray();
        let numberOfProducts = $(this).parent().parent().parent().parent().parent().next().find(".total-products td:last-child");
        
        let sumInput = 0
        for(let i = 0; i < inputsArray.length; i++) {
            sumInput += +inputsArray[i].value.replace(".000đ", "");
        };
        numberOfProducts.text(sumInput + " Sản phẩm");

        let sumItem = 0;
        for(let i = 0; i < productsSumArray.length; i++) {
            sumItem += +productsSumArray[i].innerText.replace(".000đ", "");
        };
        totalSum.text(sumItem +  ".000đ");
    });


    // add to cart
    $("#add-to-cart").on("click",  () => {
        $("#cart-quantity").css("display", "block");
        $("#cart-quantity").text(+$("#cart-quantity").text() + +$("#quantity-input").val());
        console.log($("#cart-quantity").val());
    });



// Delete row item
    $(".delete-item").on("click", function(){
        let productNamne = $(this).parent().parent().find("p.product-name").text();
        let row = $(this).parent().parent();
        if(confirm(`Bạn muốn xoá sản phẩm ${productNamne} ?`)) {
            row.remove();
        }

        // update total sum
        let totalSum = $(".sumary-estimate td:last-child");
        let productsSumArray = $(".sumary-of-quantity").toArray();
        let inputsArray = $(".quantity-input").toArray();
        let numberOfProducts = $(".total-products td:last-child");

        let sumInput = 0
        for(let i = 0; i < inputsArray.length; i++) {
            sumInput += +inputsArray[i].value.replace(".000đ", "");
        };
        numberOfProducts.text(sumInput + " Sản phẩm");

        let sumItem = 0;
        for(let i = 0; i < productsSumArray.length; i++) {
            sumItem += +productsSumArray[i].innerText.replace(".000đ", "");
        };
        totalSum.text(sumItem +  ".000đ");

        if(sumItem == 0){
            $(".payment").css("display", "none");
            $(".add-cart").css("display", "block");
            $(".add-cart").attr('style', 'width: 100% !important');
        }
    });


