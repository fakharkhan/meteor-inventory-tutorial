/**
 * Created by fakhar on 21/03/2014.
 */

Vendors = new Meteor.Collection("vendors");

Template.vendors.vendors = function () {
    return Vendors.find({});
};



Template.vendors.events({
    'click #buttonShowHide': function () {

        $("#buttonShowHide").text(function (i, text) {
            return text === "Add New" ? "Hide Form" : "Add New";
        })

        $(".formShowHide").toggle('show');

    },
    'click #addVendor': function () {
        event.preventDefault();
        var vendorTitle = $("#vendorTitle").val();
        if (vendorTitle != '') {
            if ($('#vendorID').val() != '')
                Meteor.call("updateVendor", $('#vendorID').val(),
                    vendorTitle,
                    $("#vendorAddress").val(),
                    $("#vendorContact").val(),
                    $("#vendorPhone").val(),
                    $("#vendorEmail").val()
                );
            else
                Meteor.call("addVendor", vendorTitle,
                    $("#vendorAddress").val(),
                    $("#vendorContact").val(),
                    $("#vendorPhone").val(),
                    $("#vendorEmail").val());

            $('#vendorTitle').parent('.form-group').removeClass("has-error");

            $("#vendorTitle").val('');
            $("#vendorAddress").val('');
            $("#vendorContact").val('');
            $("#vendorPhone").val('');
            $("#vendorEmail").val('');

        }

        else
            $('#vendorTitle').parent('.form-group').addClass("has-error");

    },
    'click .editButton': function () {
        event.preventDefault();
        $(".formShowHide").show();
        $("#buttonShowHide").text("Hide Form");

        $('#vendorTitle').val($(this)[0]['title']);
        $('#vendorAddress').val($(this)[0]['address']);
        $('#vendorContact').val($(this)[0]['contact']);
        $('#vendorPhone').val($(this)[0]['phone']);
        $('#vendorEmail').val($(this)[0]['email']);
        $('#vendorID').val($(this)[0]['_id']);

        //    Meteor.call("removeVendor", $(this)[0]['_id']);


    },
    'click .removeButton': function () {
        event.preventDefault();
        if (confirm("Are your sure yto delete"))
            Meteor.call("removeVendor", $(this)[0]['_id']);


    }
});

