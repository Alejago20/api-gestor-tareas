import User from '../models/user.js'
import bcrypt from "bcryptjs";
import { createAccessToken } from "../lib/jwt.js";

export const register = async (req, res) => {
    const { username, email, password } = req.body;
  try {
    
       // hashing the password
    const passwordHash = await bcrypt.hash(password, 10);

    // creating the user
    const newUser = new User({
      username,
      email,
   password: passwordHash,//contraseña encriptada usando hash
    });

    // saving the user in the database
    const userSaved = await newUser.save();

     // create access token
  const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token)
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  
    
  } catch (error) {
     res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
    const {email, password } = req.body;
  try {
    //buscar el usuario si existe
      const userFound = await User.findOne({ email });

    if (!userFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });
       // hashing the password
   const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }
    
    const token = await createAccessToken({
      id: userFound._id,
    });
    res.cookie("token", token)
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  
    
  } catch (error) {
     res.status(500).json({ message: error.message });
  }
};

// para cancelar el token o borrarlo como tal
export const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound =  await User.findById(req.user.id);
    if (!userFound) return res.sendStatus(401);

       return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });

};