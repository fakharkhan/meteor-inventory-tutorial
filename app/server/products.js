Products = new Meteor.Collection("products");

Meteor.methods({
    addProduct: function (title, description,category) {
        console.log('Adding Product');
        var productId = Products.insert({
            'title': title,
            'description': description,
            'createdBy' : Meteor.user()._id,
            'createdOn': new Date(),
            'category' : category
        });
        return productId;
    },
    updateProduct: function (objectId, title, description,category) {
        console.log('Updating Product');
        var productId = Products.update({'_id': objectId},
            {$set: {

                'title': title,
                'description': description,
                'updatedBy' : Meteor.user()._id,
                'updatedOn': new Date(),
                'category' : category
                }
            });

        return productId;
    },
    removeProduct: function (objectId) {
        console.log('Deleting Product');
        Products.remove({ _id: objectId });
    }
});