import { serviceSendGames } from "../../services/userService.js";

export async function sendGames(req, res) {
  const games = await serviceSendGames();
  if (!games.status) {
    res.sendStatus(401);
    return;
  }

  res.status(200).send(games.games);
}
