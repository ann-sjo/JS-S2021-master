function calculate(){
    var vat = document.getElementById("tax").value;
    var discount = document.getElementById("discount").value;
    var shipping = document.getElementById("shipping").value;

    total = quantity * price;
    console.log("total before tax: "+total);

    vat = (vat/100) + 1;

    total = total + vat;
    console.log();

    if (quantity > 100) {
        total = total - (2 * discount);
    } else {
        total = total - discount;
    }
    total = total + (1.0*shipping);
    console-log("total after discount: " + total);
    
    total = total.toFixed(2);

    document.getElemntBtId("total").value = total;
    
    return false;
}