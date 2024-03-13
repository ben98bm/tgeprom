<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Do something with the data (e.g. save to database)

  http_response_code(200);
  echo json_encode(['message' => 'Your message was received successfully.']);
}