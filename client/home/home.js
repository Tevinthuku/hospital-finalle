Template.home.rendered = function() {
    // the tabs
    $('ul.tabs').tabs();
    
    // the nav goes
    $('#bookmarktabs').pushpin({ top: $('#bookmarktabs').offset().top });
}