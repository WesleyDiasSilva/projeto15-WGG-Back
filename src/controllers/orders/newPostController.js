import { serviceNewOrder } from "../../services/orderService.js";

export async function newOrder(req, res) {
  const { username, games } = req.locals;
  try {
    const response = await serviceNewOrder(games, username);
    if(response.status){
      res.sendStatus(201);
    }else{
      res.sendStatus(400);
    }
  } catch (err) {
    res.sendStatus(500);
  }
}
