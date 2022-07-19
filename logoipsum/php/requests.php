<?php
session_start();
require_once 'connect.php';

if (!empty($_SESSION['operator'])) {
  if ($_SESSION['operator']['login'] == 'Andrey' && $_SESSION['operator']['password'] == 'operator1') {
    $check_clients = mysqli_query($connect, "SELECT `id`, `name`, `phone`, `country`, `business-scope`, `date`, `status` FROM `user-requests` WHERE `id` % 2 = 1");
  }

  if ($_SESSION['operator']['login'] == 'Kate'  && $_SESSION['operator']['password'] == 'operator2') {
    $check_clients = mysqli_query($connect, "SELECT `id`, `name`, `phone`, `country`, `business-scope`, `date`, `status` FROM `user-requests` WHERE `id` % 2 = 0");
  }
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Mulish&family=Roboto&display=swap">
  <title>Requests</title>

  <style>
    body {
      font-family: "DM Sans", sans-serif;
      font-weight: 700;
      font-size: 17px;
      color: #696871;
    }

    .wrapper {
      max-width: 1070px;
      margin: 0 auto;
      padding: 0 25px;
      box-sizing: content-box;
    }

    ._container {
      max-width: 1170px;
      margin: 0 auto;
      padding: 0 15px;
      box-sizing: content-box;
    }

    .page__students {
      flex: 1 1 auto;
    }

    .learn-table {
      padding: 0px 15px 60px;
    }

    table {
      text-align: center;
      border: 1px solid #5454d4;
    }

    .learn-table tr th,
    .learn-table tr td {
      border: 1px dotted #5454d4;
      text-align: center;
      width: 450px;
    }

    .learn-table tr th {
      color: #fff;
      padding: 15px;
      background-color: #ff7143;
    }

    .learn-table tr td {
      font-size: 15px;
      padding: 10px;
      color: #f8f8f8;
      background-color: #9f3919;
    }

    .table__title {
      text-align: center;
      font-size: 25px;
    }

    .log-out__btn {
      display: block;
      max-width: 200px;
      cursor: pointer;
      border-radius: 10px;
      margin: 0 auto;
      font-size: 18px;
      padding: 20px 60px;
      text-align: center;
      border: none;
      background-color: #5454d4;
      color: #fff;
      transition: all 0.5s ease 0s;
      text-decoration: none;
    }

    .log-out__btn:hover,
    .log-out__btn:focus,
    .log-out__btn:active {
      background-color: #fff;
      color: #5454d4;
      border: 1px solid #5454d4;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <h1 class="Hello"> Hello, <?= $_SESSION['operator']['login'] ?> </h1>

    <main class="page__students students">
      <p class="table__title">These are all applications for today</p>

      <div class="students__container _container">
        <div class="learn-table">
          <form action="status.php" method="post">
            <table>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Country</th>
                <th>Business Scope</th>
                <th>Date</th>
                <th>Status</th>
                <th>Handle</th>
                <th>Close</th>
              </tr>
              <?php
              if (mysqli_num_rows($check_clients) > 0) {
                $clients_data = array();

                while ($client = mysqli_fetch_assoc($check_clients)) {
                  $clients_data[] = $client;
                }

                foreach ($clients_data as $clients_number => $clients_array) {
                  echo "<tr class='table__row'>";
                  foreach ($clients_array as $clients_property => $clients_value) {

                    if ($clients_property) {

                      if ($clients_property == 'id') {
                        echo "<td class='clients__id'>" . "<input type='radio' style='visibility: hidden' name='identificator' id='identity' value='$clients_value' />" . "<label class='radio-label' for='identity'>" . "$clients_value" . "</label>" . "</td>";
                      };

                      if ($clients_property == 'name') {
                        echo "<td class='clients__name'>" . $clients_value . "</td>";
                      };

                      if ($clients_property == 'phone') {
                        echo "<td class='clients__phone'>" . $clients_value . "</td>";
                      };

                      if ($clients_property == 'country') {
                        echo "<td class='clients__country'>" . $clients_value . "</td>";
                      };

                      if ($clients_property == 'business-scope') {
                        echo "<td class='clients__business'>" . $clients_value . "</td>";
                      }

                      if ($clients_property == 'date') {
                        echo "<td class='clients__date'>" . $clients_value . "</td>";
                      }

                      if ($clients_property == 'status') {
                        echo "<td class='clients__status'>" . "<input type='radio' style='visibility: hidden' name='status' id='status' value='$clients_value' />" . "<label class='radio-label' for='status'>" . "$clients_value" . "</label>" . "</td>";
                      }
                    }
                  }

                  echo "<td class='handle-button__parent'> <button class='handleBtn' type='submit' name='handleBtn'> Process </button> </td>";
                  echo "<td class='close-button__parent'> <button class='closeBtn' type='submit' name='handleBtn'> Close </button> </td>";
                  echo "</tr>";
                }
              }
              ?>
            </table>

          </form>
        </div>

        <a class="log-out__btn" href="exit.php">Log out</a>

      </div>
    </main>
  </div>



  <script>
    const requestStatus = document.querySelectorAll(".clients__status");

    const handleBtn = document.querySelectorAll(".handleBtn");
    const closeBtn = document.querySelectorAll(".closeBtn");

    handleBtn.forEach((button) => {
      button.addEventListener("click", (e) => {
        button.closest(".handle-button__parent").previousElementSibling.firstElementChild.checked = true;
        button.closest(".handle-button__parent").previousElementSibling.firstElementChild.value = "INPROGRESS";
        button.closest(".handle-button__parent").previousElementSibling.lastElementChild.textContent = "INPROGRESS";
        button.closest(".table__row").firstElementChild.firstElementChild.checked = true;
      })
    })

    closeBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        btn.closest(".close-button__parent").previousElementSibling.previousElementSibling.firstElementChild.checked = true;
        btn.closest(".close-button__parent").previousElementSibling.previousElementSibling.firstElementChild.value = "CLOSED";
        btn.closest(".close-button__parent").previousElementSibling.previousElementSibling.lastElementChild.textContent = "CLOSED";
        btn.closest(".table__row").firstElementChild.firstElementChild.checked = true;
      })
    })
  </script>
</body>

</html>