const bcrypt = require('bcryptjs');

// Hash

const hashPassword =  async (password) => bcrypt.hash(password, 12);

const comparePassword = async (password, hashedPassword) => {
    try {
      const match = await bcrypt.compareSync(password, hashedPassword.toString());
      return match;
    } catch (error) {
      throw error;
    }
  };

module.exports = { hashPassword, comparePassword };