/**
 * Created by fakhar on 21/03/2014.
 */

Categories = new Meteor.Collection("categories");
Meteor.subscribe('categories');
Template.categories.categories = function () {
    return Categories.find({});
};

Template.categories.events({
    'click #buttonShowHide': function () {

        $("#buttonShowHide").text(function (i, text) {
            return text === "Add New" ? "Hide Form" : "Add New";
        })

        $(".formShowHide").toggle('show');

    },
    'click #addCategory': function () {
        event.preventDefault();
        var categoryTitle = $("#categoryTitle").val();
        if (categoryTitle != '') {
            if ($('#categoryID').val() != '')
                Meteor.call("updateCategory", $('#categoryID').val(), categoryTitle, $("#categoryDesc").val());
            else
                Meteor.call("addCategory", categoryTitle, $("#categoryDesc").val());

            $('#categoryTitle').parent('.form-group').removeClass("has-error");
            $("#categoryTitle").val('');
            $("#categoryDesc").val('');

        }

        else
            $('#categoryTitle').parent('.form-group').addClass("has-error");

    },
    'click .editButton': function () {
        event.preventDefault();
        $(".formShowHide").show();
        $("#buttonShowHide").text("Hide Form");

        $('#categoryTitle').val($(this)[0]['title']);
        $('#categoryDesc').val($(this)[0]['description']);
        $('#categoryID').val($(this)[0]['_id']);

        //    Meteor.call("removeCategory", $(this)[0]['_id']);


    },
    'click .removeButton': function () {
        event.preventDefault();
        if (confirm("Are your sure yto delete"))
            Meteor.call("removeCategory", $(this)[0]['_id']);


    }
});

