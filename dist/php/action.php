<?php
session_start();
require_once 'connect.php';

$clientName = filter_var(
  trim($_POST['customerName']),
  FILTER_SANITIZE_STRING
);

$clientPhone = filter_var(
  trim($_POST['customerPhone']),
  FILTER_SANITIZE_NUMBER_INT
);

$clientCountry = $_POST['country'];

$clientBusiness = filter_var(
  trim($_POST['businessRealm']),
  FILTER_SANITIZE_STRING
);

$callTime = $_POST['callTime'];

$status = "NEW";

$check_client = mysqli_query($connect, "SELECT * FROM `user-requests` WHERE `name` = '$clientName' AND `phone` = '$clientPhone'");

if (mysqli_num_rows($check_client) > 0) {
  $_SESSION['message'] = 'You have already applied! Sorry, you cannot reapply.';
  header('Location: error.php');
} else {
  mysqli_query($connect, "INSERT INTO `user-requests` (`name`, `phone`, `country`, `business-scope`, `date`, `status`) 
  VALUES('$clientName', '$clientPhone', '$clientCountry', '$clientBusiness', '$callTime', '$status')");

  $_SESSION['message'] = 'Your application has been successfully submitted! We will call you later.';
  header('Location: success.php');
}

mysqli_close($connect);
