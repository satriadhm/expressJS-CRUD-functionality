const bcrypt = require('bcryptjs');

// Hash

const hasPassword =  (password) => bcrypt.hash(password, 12);

// compare
const comparePassword = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);