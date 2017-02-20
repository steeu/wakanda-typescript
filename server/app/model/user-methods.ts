/**
 * test method
 *
 * @return {String} application name
 */
model.User.methods.test = function () {
  return `Application name: ${name}`;
};
model.User.methods.test.scope = 'public';
