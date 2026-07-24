<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    $input = $_POST;
}

$to = "prasannagaikwad0018@gmail.com";
$subject = !empty($input['subject']) ? $input['subject'] : "New Form Submission - TCAMPO Website";

$fullName = isset($input['fullName']) ? htmlspecialchars($input['fullName']) : (isset($input['name']) ? htmlspecialchars($input['name']) : 'N/A');
$email = isset($input['email']) ? filter_var($input['email'], FILTER_SANITIZE_EMAIL) : 'N/A';
$phone = isset($input['phone']) ? htmlspecialchars($input['phone']) : 'N/A';
$organization = isset($input['organization']) ? htmlspecialchars($input['organization']) : 'N/A';
$role = isset($input['role']) ? htmlspecialchars($input['role']) : 'N/A';
$message = isset($input['message']) ? htmlspecialchars($input['message']) : (isset($input['topic']) ? htmlspecialchars($input['topic']) : 'N/A');

$body = "You have received a new message from the TCAMPO Website form.\n\n";
$body .= "Full Name: " . $fullName . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Phone: " . $phone . "\n";
$body .= "Organization: " . $organization . "\n";
$body .= "Role: " . $role . "\n";
$body .= "Message / Topic:\n" . $message . "\n";

$headers = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$success = @mail($to, $subject, $body, $headers);

if ($success) {
    echo json_encode(["status" => "success", "message" => "Email sent successfully."]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to send email via server mail."]);
}
