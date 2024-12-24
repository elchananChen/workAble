import User from "../models/usersModel.js";
import { auth } from "../auth/auth.js";

//   add user
const addUser = async (req, res) => {
  try {
    const { firstName, lastName, email, plan, password, userName } = req.body;
    if (
      !password ||
      !lastName ||
      !firstName ||
      !email ||
      !plan ||
      !password ||
      !userName
    ) {
      return req.status(400).send({ message: "missing fileds" });
    }

    const hashedPassword = await auth.makeHashedPassword(
      password,
      process.env.BCRYPT_KEY,
      process.env.SALT_NUM
    );

    const newUser = new User({
      userName,
      firstName,
      lastName,
      email,
      plan,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    const id = savedUser._id;

    res.send({
      success: true,
      message: "seve this id to delete or update the user latter on",
      id,
    });
  } catch (error) {
    // check if it mongoose error
    if (error.name === "ValidationError") {
      return res.status(400).send({
        message: "Validation error occurred.",
        error: error.message,
      });
    } else if (error.code === 11000) {
      return res.status(409).send({
        success: false,
        message: "Duplicate key error. This user already exists.",
        error: error.message,
      });
    } else {
      console.error(error);
      return res.status(500).send({ success: false, error });
    }
  }
};

// log in
const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!password) {
      console.log("pass");
      return res
        .status(400)
        .send({ isValid: false, massege: "password require" });
    }

    const user = await User.find({ email }).select("+password");
    // console.log(user);

    const hashedPassword = user[0].password;
    // console.log(hashedPassword);

    const isMatch = await auth.signIn(password, hashedPassword);
    console.log(isMatch);

    if (isMatch === false) {
      return res
        .status(401)
        .send({ isValid: false, message: "Wrong password" });
    }
    console.log(isMatch);

    const id = user[0].id;

    const token = await auth.creatToken(id, process.env.JWT_KEY, res);

    res.cookie("jwt", token, {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      maxAge: 3600000 * 12,
    });

    res.status(200).send({ isValid: true, message: "Login successfuly", id });
  } catch (error) {
    console.log(error);

    return res.status(500).send({ error });
  }
};

// get user by id
async function getUsereById(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user === null) {
      return res.status(404).json({ massege: "id not found" });
    }
    res.send({ user });
  } catch (error) {
    return res.status(500).json({ massege: error.massege });
  }
  res.user = user;
}

export const userController = {
  addUser,
  getUsereById,
  logIn,
};
