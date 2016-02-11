// run at Meteor app startup
Meteor.startup(function() {
  // if users database is empty, seed these values
  if(Meteor.users.find().count() < 1) {
    // users array
    var users = [
        // for the front desk
      { name: 'Front1', email: 'front1@gmail.com', password: 'front#1', roles: ['frontdesk'] },
      { name: 'Front2', email: 'front2@gmail.com', password: 'front#2', roles: ['frontdesk'] },
      { name: 'Front3', email: 'front3@gmail.com', password: 'front#3', roles: ['frontdesk'] },
      { name: 'Front4', email: 'front4@gmail.com', password: 'front#4', roles: ['frontdesk'] }
    ];
    // user creation
    _.each(users, function(d) {
      // return id for use in roles assignment below
      var userId = Accounts.createUser({
        email: d.email,
        password: d.password,
        username: d.email,
        profile: {
          name: d.name
        }
      });
      // verify user email
      Meteor.users.update({ _id: userId }, { $set: { 'emails.0.verified': true } });
      // add roles to user
      Roles.addUsersToRoles(userId, d.roles);
    });
  }
});