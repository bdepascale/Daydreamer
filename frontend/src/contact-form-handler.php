<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// replace site email with heroku webserver email
$email_from = 'server email';

$email_subject = "$subject";

$email_body = "User Name: $name. \n".
                "User Email: $visitor_email.\n".
                "User Message: $message.\n";


$to = "contact@daydreamerstore.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-to: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html");



?>