import React from "react";

function OrderPlaced() {
  return (
    <div>
      <div class="message-sent-body">
          <h2>Order Placed!</h2>
        <p>
          Thank you for shopping at Daydreamer! Your order has been submitted.{" "}
        </p>
        <form action="/">
          <input id="continue-shopping" type="submit" value="Return Home" />
        </form>
      </div>
    </div>
  );
}

export default OrderPlaced;