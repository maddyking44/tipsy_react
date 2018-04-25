
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chats').del()
    .then(function () {
      // Inserts seed entries
      return knex('chats').insert([
        {user_id: '1', match_id: '2', message: 'heyyy', created_at: '2018-04-22 13:49:19'},
        {user_id: '2', match_id: '1', message: 'hi there!', created_at: '2017-04-22 13:50:19'},
        {user_id: '1', match_id: '2', message: 'how be ye?', created_at: '2017-04-22 13:50:25'}
      ]);
    });
};
