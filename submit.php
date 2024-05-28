<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    
    // Email content
    $to = "henisdcosta02@gmail.com";
    $subject = "New form submission";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    
    // Send email
    $headers = "From: $email";
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
} else {
    echo "Method not allowed";
}
?>
