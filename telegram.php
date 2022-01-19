<?php

/* https://api.telegram.org/bot2084728641:AAGIO6TCxUpE5vPNVXr2MiHuwZZHqKHBuDI/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$price_from = $_POST['price_from'];
$price_to = $_POST['price_to'];
$year_from = $_POST['year_from'];
$year_to = $_POST['year_to'];
$car_body = $_POST['car_body'];
$fuel = $_POST['fuel'];
// токен нашего бота из botFather
$token = "2084728641:AAGIO6TCxUpE5vPNVXr2MiHuwZZHqKHBuDI";
// $chat_id = "https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXXXX/getUpdates";
$chat_id = "-475319365";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Цена от: ' => $price_from,
  'Цена до: ' => $price_to,
  'Год от: ' => $year_from,
  'Год до: ' => $year_to,
  'Кузов: ' => $car_body,
  'Топливо: ' => $fuel

);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ./success/success.html');
} else {
  echo "Error";
}
?>
