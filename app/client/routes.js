Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading'
});


Router.map(function () {
    this.route('home', {path: '/'});
    this.route('products');
    this.route('categories');
    this.route('stores');
    this.route('vendors');
    this.route('purchaseForm');
    this.route('profileEdit');
});



//var positionCounter = 1;
//Template.categories.counter = function () {
//    return  positionCounter++;;
//};
//
//Template.categories.categories = function () {
//    return Categories.find({});
//};

//
//    Router.map( function () {
//        this.route('home', {
//            path: '/',
//            layoutTemplate: 'appLayout',
//            yieldTemplates: {
//                'myMenu': {to: 'menu'},
//                'myFooter': {to: 'footer'}
//            }
//        });
//
//    });