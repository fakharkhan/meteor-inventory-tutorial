Stores = new Meteor.Collection("stores");

Meteor.methods({
    addStore: function (title, description) {
        console.log('Adding Store');
        var storeId = Stores.insert({
            'title': title,
            'description': description,
            'createdBy' : Meteor.user()._id,
            'createdOn': new Date()
        });
        return storeId;
    },
    updateStore: function (objectId, title, description) {
        console.log('Updating Store');
        var storeId = Stores.update({'_id': objectId},
            {$set: {

                'title': title,
                'description': description,
                'updatedBy' : Meteor.user()._id,
                'updatedOn': new Date()}
            });

        return storeId;
    },
    removeStore: function (objectId) {
        console.log('Deleting Store');
        Stores.remove({ _id: objectId });
    }
});