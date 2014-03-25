/**
 * Created by fakhar on 24/03/2014.
 */


Template.purchaseForm.vendors = function () {
    return Vendors.find({});
};

Template.purchaseForm.products = function () {
    return Products.find({});
};

Template.purchaseForm.rendered=function(){
    $('.datepicker').datepicker();
}