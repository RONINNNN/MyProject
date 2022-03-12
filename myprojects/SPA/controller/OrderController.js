generateOrderId();
setDate();

//////////////-load customer and item ids /////////////////////////////////////

$("#idCmb1").change(function (e){
    let selectedCustomerId =$('#idCmb1').find(":selected").text();
    selectedCustomer(selectedCustomerId);
});


$("#idCmb2").change(function (e){
    let selectedItemId =$('#idCmb2').find(":selected").text();
    selectedItem(selectedItemId);
});

/* load customer ids to cmb (customer)*/
function loadAllCustomerIds() {
    $("#idCmb1").empty();

    let cusHint=`<option disabled selected> Select Customer ID</option>`;

    $("#idCmb1").append(cusHint);

    for (let i in customerDB) {
        let option = `<option value="${customerDB[i].getCustomerID()}">${customerDB[i].getCustomerID()}</option>`
        $("#idCmb1").append(option);
    }
}
/*load customer data to text fields*/
function selectedCustomer(CustomerId){
    for (const i in customerDB){
        if (customerDB[i].getCustomerID()==CustomerId) {
            let element = customerDB[i];
            $("#cusName").val(element.getCustomerName());
            $("#salary").val(element.getCustomerSalary());
            $("#address").val(element.getCustomerAddress());
        }
    }
}


/* load item ids to cmb (item)*/
function loadAllItemIds() {
    $("#idCmb2").empty();

    let itemHint=`<option disabled selected> Select Item ID</option>`;

    $("#idCmb2").append(itemHint);

    for (let i in itemDB) {
        let option = `<option value="${itemDB[i].getItemCode()}">${itemDB[i].getItemCode()}</option>`
        $("#idCmb2").append(option);
    }
}
/*load item data to text fields*/
function selectedItem(ItemId){
    for (const i in itemDB){
        if (itemDB[i].getItemId()==ItemId) {
            let element = itemDB[i];
            $("#Order-itemName").val(element.getItemName());
            $("#qtyOnHand").val(element.getItemQty());
            $("#price").val(element.getItemPrice());
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////

//generate order Id

function generateOrderId() {

    let index = orderDB.length - 1;
    let id;
    let temp;
    if (index != -1) {
        id = orderDB[orderDB.length - 1].getOrderId();
        temp = id.split("-")[1];
        temp++;
    }

    if (index == -1) {
        $("#oId").val("O00-001");
    } else if (temp <= 9) {
        $("#oId").val("O00-00" + temp);
    } else if (temp <= 99) {
        $("#oId").val("O00-0" + temp);
    } else {
        $("#oId").val("O00-" + temp);
    }

}

//set date

function setDate() {
    let d = new Date();
    let dd = d.toISOString().split("T")[0].split("-");
    $("#txtDate").val(dd[0]+"-"+dd[1]+"-"+dd[2]);
    $("#txtDate").text(dd[0]+"-"+dd[1]+"-"+dd[2]);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

