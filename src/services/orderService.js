import { v4 as uuid } from "uuid";
import { createOrder } from "../repositories/ordersRepository.js";
export async function serviceNewOrder(games, username) {
  const orderModel = {
    orderId: uuid(),
    username: username,
    games: games,
    statusOrder: false,
  };
  try {
    const response = (await createOrder(orderModel)).status;
    if (response) {
      return { status: true };
    } else {
      return { status: false };
    }
  } catch (err) {
    return { status: false, err };
  }
}
