/**
 * Created by fakhar on 21/03/2014.
 */

Stores = new Meteor.Collection("stores");


Template.stores.stores = function () {
    return Stores.find({});
};

Template.stores.events({
    'click #buttonShowHide': function () {

        $("#buttonShowHide").text(function (i, text) {
            return text === "Add New" ? "Hide Form" : "Add New";
        })

        $(".formShowHide").toggle('show');

    },
    'click #addStore': function () {
        event.preventDefault();
        var storeTitle = $("#storeTitle").val();
        if (storeTitle != '') {
            if ($('#storeID').val() != '')
                Meteor.call("updateStore", $('#storeID').val(), storeTitle, $("#storeDesc").val());
            else
                Meteor.call("addStore", storeTitle, $("#storeDesc").val());

            $('#storeTitle').parent('.form-group').removeClass("has-error");
            $("#storeTitle").val('');
            $("#storeDesc").val('');

        }

        else
            $('#storeTitle').parent('.form-group').addClass("has-error");

    },
    'click .editButton': function () {
        event.preventDefault();
        $(".formShowHide").show();
        $("#buttonShowHide").text("Hide Form");

        $('#storeTitle').val($(this)[0]['title']);
        $('#storeDesc').val($(this)[0]['description']);
        $('#storeID').val($(this)[0]['_id']);


    },
    'click .removeButton': function () {
        event.preventDefault();
        if (confirm("Are your sure yto delete"))
            Meteor.call("removeStore", $(this)[0]['_id']);


    }
});

