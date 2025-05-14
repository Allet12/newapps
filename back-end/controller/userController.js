const User = require('../model/User');
async function register(req, res) {
  try {
    const { username, pin, password } = req.body;

   /* const existingUser = await User.findOne({ username });
   if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }*/

  
    const newUser = new User({ username, pin, password });
    await newUser.save();


    res.status(201).json({
      message: 'User registered successfully',
      token,
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = { register };
