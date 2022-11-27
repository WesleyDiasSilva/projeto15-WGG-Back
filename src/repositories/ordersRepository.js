import { connectionOrders } from "../database/connection.js";

export async function createOrder(order){
  try{
    await connectionOrders.insertOne(order);
    return {status: true}
  }catch(err){
    return {status: false}
  }
}