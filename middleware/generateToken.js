
require('dotenv').config();
const jwt = require('jsonwebtoken');

jwt.sign(
  { id: 'static-user-id', role: 'external-user' },
  process.env.SECRET_STR
);

