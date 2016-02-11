// the layout template
Router.configure({
    layoutTemplate: 'layout'
});

// the main template
Router.route('/', {
    name: 'home',
    template: 'home'
});

// login roiter

Router.route('/login');

