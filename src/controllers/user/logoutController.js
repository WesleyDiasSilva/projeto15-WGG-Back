import { serviceLogout } from "../../services/userService.js";

export async function logout(req, res) {
  const { username } = req.tokenUser;
  const result = await serviceLogout(username);
  if (result) {
    res.sendStatus(200);
    return;
  }
  res.sendStatus(500);
  return;
}
