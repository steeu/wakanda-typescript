/**
 * restrict
 */
model.User.events.restrict = function () {
  try {
    let result = ds.User.createEntityCollection();
    let session = directory.currentSession;
    
    if (session.belongsTo('Admin')) {
      result = ds.User.all();
    }
    
    return result;
  } catch (e) {
    console.log(e.stack);
    return e;
  }
};
