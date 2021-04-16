import React from 'react'

const ContactScreen = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>If you have questions, comments, or would like to donate material, please don't hesitate to contact us using the form below.</p>

            <div class="contact-body">
                <form id="contact-form" method="post" action="contact-form-handler.php">

  
                    <input name="name" id="contact-name" type="text" class="form-control" placeholder="Your Name" required></input>
                    <input name="email" id="contact-email" type="email" class="form-control" placeholder="Your e-mail" required></input>
                    <input name="subject" id="contact-subject" type="text" class="form-control" placeholder="Subject" required></input>
                    <textarea name="message" id="contact-message" class="form-control" placeholder="Your Message Here" rows="4" required></textarea>
                    <input type="submit" id ="contact-submit" class="form-control" value="SEND MESSAGE"></input>
                </form>
            </div>
        </div>
    )
}

export default ContactScreen
