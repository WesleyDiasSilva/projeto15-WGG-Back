import { serviceLogin, serviceToken } from "../../services/userService.js";

export async function login(req, res) {
  const { emailOrUsername, password } = req.locals;

  const resultLogin = await serviceLogin(emailOrUsername, password);

  if (!resultLogin.status) {
    res.sendStatus(400);
    return;
  }

  const { email, username } = resultLogin.user;
  const resultToken = await serviceToken(email, username);

  if (resultToken.status) {
    res.status(200).send(resultToken.token);
    return;
  } else {
    res.sendStatus(400);
    return;
  }
}
