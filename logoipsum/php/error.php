<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Mulish&family=Roboto&display=swap">
  <title>Document</title>

  <style>
    .wrapper {
      min-height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .error {
      padding: 200px 0 30px 0;
      text-align: center;
      font-family: "DM Sans", sans-serif;
      font-weight: 700;
      font-size: 30px;
      color: #ff7143;
    }

    .back-to-main {
      display: inline-block;
      font-family: "DM Sans", sans-serif;
      margin: 0 auto;
      max-width: 200px;
      text-decoration: none;
      padding: 20px 20px;
      text-align: center;
      font-weight: 700;
      font-size: 20px;
      background: #ff7143;
      color: #fff;
      transition: all 0.5s ease 0s;
      border-radius: 10px;
    }

    .back-to-main:hover,
    .back-to-main:active,
    .back-to-main:focus {
      background-color: #fff;
      color: #ff7143;
      border: 1px solid #ff7143;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <div class="error">
      <?= $_SESSION['message'] ?>
    </div>

    <a href="../index.html" class="back-to-main">
      Back to main page
    </a>
  </div>
</body>

</html>