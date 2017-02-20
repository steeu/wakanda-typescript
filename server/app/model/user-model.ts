/**
 * user
 */
model.User = new DataClass('UserCollection', 'public');

/**
 * attributes
 */
model.User.ID = new Attribute('storage', 'long', {
  primKey: true,
  autosequence: true,
});
model.User.UUID = new Attribute('storage', 'uuid', {
  autogenerate: true,
  unique: true,
});
model.User.username = new Attribute('storage', 'string', {
  indexKind: 'btree',
  unique: true,
});
model.User.firstName = new Attribute('storage', 'string');
