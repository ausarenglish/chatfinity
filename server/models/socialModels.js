const { Pool } = require('pg');

const PG_URI =
  'postgres://qqjmtlai:1ZannHOSj8jS9ahGeLjsUvSxLzD0YaKW@ziggy.db.elephantsql.com:5432/qqjmtlai';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
