import React from "react";

function MessageSent() {
  return (
    <div>
      <div class="message-sent-body">
        <p>
          Thank you for reaching out to Daydreamer! We value our customers and future buisness partners. We will get back to you as soon as possible.{" "}
        </p>
        <form action="/">
          <input id="continue-shopping" type="submit" value="Continue Shopping?" />
        </form>
      </div>
    </div>
  );
}

export default MessageSent;
