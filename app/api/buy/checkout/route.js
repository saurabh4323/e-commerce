// pages/api/buy/checkout.js
import Razorpay from "razorpay";
import { connect } from "@/config/Dbconfig";
import order from "@/model/order";
// imporrt order

connect();

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

export async function POST(req) {
  try {
    const { productId, product, quantity, price, userInfo } = await req.json();
    console.log(
      "Order details:",
      productId,
      product,
      quantity,
      price,
      userInfo
    );
    const amount = price * quantity * 100; // Amount in paise

    // Create Razorpay order
    // const options = {
    //   amount,
    //   currency: "INR",
    //   receipt: `receipt_order_${Date.now()}`,
    // };
    // const razorpayOrder = await razorpay.orders.create(options);

    // Save the order in MongoDB
    const newOrder = new order({
      productId,
      product,
      quantity,
      price,
      amount,
      userInfo,
      // paymentId: razorpayOrder.id,
      status: "created",
    });
    await newOrder.save();

    return new Response(
      JSON.stringify({
        message: "Order created successfully",
        // id: razorpayOrder.id,
        // currency: razorpayOrder.currency,
        // amount: razorpayOrder.amount,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return new Response(
      JSON.stringify({ message: "Error processing payment" }),
      { status: 500 }
    );
  }
}