import { schemaNewOrder } from "../models/newOrderModel.js";

export function newOrderMiddleware(req, res, next) {
  const { orderId, username, games } = req.body;
  const validationNewOrder = schemaNewOrder.validate(
    {
      username,
      games,
    },
    { abortEarly: false }
  );

  if (validationNewOrder.error) {
    res.status(400).send(validationNewOrder.error);
    return;
  }

  req.locals = { orderId, username, games };
  next();
}
