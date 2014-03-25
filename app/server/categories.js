Categories = new Meteor.Collection("categories");

Meteor.publish("categories", function () {
    return Categories.find({});
});

Meteor.methods({
    addCategory: function (title, description) {
        console.log('Adding Category');
        var categoryId = Categories.insert({
            'title': title,
            'description': description,
            'createdBy' : Meteor.user()._id,
            'createdOn': new Date()
        });
        return categoryId;
    },
    updateCategory: function (objectId, title, description) {
        console.log('Updating Category');
        var categoryId = Categories.update({'_id': objectId},
            {$set: {

                'title': title,
                'description': description,
                'updatedBy' : Meteor.user()._id,
                'updatedOn': new Date()}
            });

        return categoryId;
    },
    removeCategory: function (objectId) {
        console.log('Deleting Category');
        Categories.remove({ _id: objectId });
    }
});