if (Meteor.isClient) {
   console.log("app client");
    Accounts.ui.config({ passwordSignupFields: 'USERNAME_ONLY' });

    Template._loginButtonsLoggedInDropdown.events({
        'click #login-buttons-edit-profile': function(event) {
            event.stopPropagation();
            Template._loginButtons.toggleDropdown();
            Router.go('profileEdit');
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup




  });

}
