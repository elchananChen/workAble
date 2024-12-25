import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

// make hashed password
const makeHashedPassword = async (password, superSecretKey, saltNum) => {
  try {
    const combainKey = password + superSecretKey;
    const hashedPassword = await bcrypt.hash(combainKey, Number(saltNum));
    // console.log(hashedPassword);
    return hashedPassword;
  } catch (error) {
    console.log(`server error: ${error}`);
  }
};

//login function to compare the input Password with stored hashed password
const signIn = async (inputPassword, storedHashedPassword) => {
  try {
    //combine the input password with our secret key
    const combinedPassword = inputPassword + process.env.BCRYPT_KEY;
    console.log(combinedPassword);

    //check if the combination of the two matches our stored password
    const isMatch = await bcrypt.compare(
      combinedPassword,
      storedHashedPassword
    );
    // console.log("baba", isMatch);

    return isMatch;
  } catch (error) {
    console.log(`server error: ${error}`);
    return false;
  }
};

// creating jwt token
async function creatToken(user, jwtKey, res) {
  const token = jwt.sign({ user }, jwtKey, { expiresIn: "12h" });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,
    maxAge: 3600000 * 12,
    sameSite: "lax",
  });

  return token;
}

// const token = await creatToken("6725ef33079565d853d6c488", process.env.JWT_KEY);
// console.log(token);

export const auth = {
  makeHashedPassword,
  signIn,
  creatToken,
};
