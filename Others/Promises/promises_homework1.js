const cart = ["shirt", "pant", "frock"];

const validateCart = (cart) => false;

const createOrder = (cart) =>
  (pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("The cart is not valid");
      reject(err);
    }
    const orderId = 34543;
    if (orderId) {
      setTimeout(() => resolve(orderId), 5000);
    }
  }));

createOrder(cart).then((orderId) => console.log(orderId)).catch((err)=>console.log(err.message));
