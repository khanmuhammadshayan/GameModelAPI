let USER = [{ email: "khanmuhammadshayan@gmail.com", password: "shayan" }];

exports.login = async (req, res) => {
  const { EMAIL, PASSWORD } = await req.json();

  console.log(" EMAIL, PASSWORD", EMAIL, PASSWORD);

  if (!EMAIL || !PASSWORD) {
    return { statusCode: 400, message: "required paramters is missing" };
  }
  const user = USER.find((u) => u.email === EMAIL && u.password === PASSWORD);

  if (user) {
    return { statusCode: 200, message: "User found" };
  } else {
    return { statusCode: 404, message: "User doesnt exsit" };
  }
};
