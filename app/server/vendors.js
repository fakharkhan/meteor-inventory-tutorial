Vendors = new Meteor.Collection("vendors");

Meteor.methods({
    addVendor: function (title, address,phone,email,contact) {
        console.log('Adding Vendor');
        var vendorId = Vendors.insert({
            'title': title,
            'address': address,
            'phone': phone,
            'email': email,
            'contact': contact,
            'createdBy' : Meteor.user()._id,
            'createdOn': new Date()
        });
        return vendorId;
    },
    updateVendor: function (objectId, title, address,phone,email,contact) {
        console.log('Updating Vendor');
        var vendorId = Vendors.update({'_id': objectId},
            {$set: {

                'title': title,
                'address': address,
                'phone': phone,
                'email': email,
                'contact': contact,
                'updatedBy' : Meteor.user()._id,
                'updatedOn': new Date()}
            });

        return vendorId;
    },
    removeVendor: function (objectId) {
        console.log('Deleting Vendor');
        Vendors.remove({ _id: objectId });
    }
});