const { User } = require('../models');

module.exports = {
  // Controller for verifying email
  async verifyEmail({ params }, res) {
    try {
      const user = await User.findByIdAndUpdate(
        params.userId,
        { $set: { isEmailVerified: true } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }

      return res.json({ message: 'Email verification successful!' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};