function OrderDTO(orderId,itemId,customerId,date,discount,total){
    var oId=orderId;
    var iId=itemId;
    var cId=customerId;
    var date=date;
    var discount=discount;
    var total=total;

    this.setOrderId =function (orderId){
        oId=orderId;
    }
    this.getOrderId=function (){
        return oId;
    }

    this.setItemId=function (itemId){
        iId=itemId;
    }
    this.getItemId=function (){
        return iId;
    }

    this.setCustomerId =function (customerId){
        oId=customerId;
    }
    this.getCustomerId=function (){
        return cId;
    }

    this.setDate =function (date){
        date=date;
    }
    this.getDate=function (){
        return date;
    }

    this.setDiscount =function (discount){
        discount=discount;
    }
    this.getDiscount=function (){
        return discount;
    }

    this.setTotal =function (total){
        total=total;
    }
    this.getTotal=function (){
        return total;
    }
}