<?php

$connect = mysqli_connect('localhost', 'root', 'ytka1705', 'electronic-queue');

if (!$connect) {
  die('Error connecting to database');
}
