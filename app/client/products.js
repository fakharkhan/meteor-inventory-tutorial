/**
 * Created by fakhar on 21/03/2014.
 */

Products = new Meteor.Collection("products");

Template.productForm.categories = function () {
    return Categories.find({});
};

Template.products.products = function () {
    return Products.find({});
};

Template.products.events({
    'click #buttonShowHide': function () {

        $("#buttonShowHide").text(function (i, text) {
            return text === "Add New" ? "Hide Form" : "Add New";
        })

        $(".formShowHide").toggle('show');

    },
    'click #addProduct': function () {
        event.preventDefault();


        var productTitle = $("#productTitle").val();
        if (productTitle != '') {
            var category=Categories.findOne({_id: $("#productCategory").val()});
            category = {_id: category._id,title: category.title};
//            console.log(category);
//            return false;
            if ($('#productID').val() != '')
                Meteor.call("updateProduct", $('#productID').val(), productTitle, $("#productDesc").val(),category);
            else
                Meteor.call("addProduct", productTitle, $("#productDesc").val(),category);

            $('#productTitle').parent('.form-group').removeClass("has-error");
            $("#productTitle").val('');
            $("#productDesc").val('');

        }

        else
            $('#productTitle').parent('.form-group').addClass("has-error");

    },
    'click .editButton': function () {
        event.preventDefault();
        $(".formShowHide").show();
        $("#buttonShowHide").text("Hide Form");

        $('#productTitle').val($(this)[0]['title']);
        $('#productDesc').val($(this)[0]['description']);
        $('#productID').val($(this)[0]['_id']);
        $('#productCategory').val($(this)[0]['category']['_id']);

    },
    'click .removeButton': function () {
        event.preventDefault();
        if (confirm("Are your sure yto delete"))
            Meteor.call("removeProduct", $(this)[0]['_id']);


    }
});

