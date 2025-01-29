let USER = [{ email: "khanmuhammadshayan@gmail.com", password: "shayan" }];

export default function handler(req, res) {
  const { EMAIL, PASSWORD } = req.body;
  if (!EMAIL || !PASSWORD) {
    return res
      .status(400)
      .json({ statusCode: 400, message: "required paramters is missing" });
  }

  const user = USER.find((u) => u.email === EMAIL && u.password === PASSWORD);

  if (user) {
    res.status(200).json({
      statusCode: 200,
      message: "user found",
    });
  } else {
    res.status(200).json({
      statusCode: 404,
      message: "user doesnt found",
    });
  }
}
