<?php

/* https://api.telegram.org/bot2084728641:AAGIO6TCxUpE5vPNVXr2MiHuwZZHqKHBuDI/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$comment = $_POST['user_comment'];
$car = "Volkswagen Jetta SE";
// токен нашего бота из botFather
$token = "2084728641:AAGIO6TCxUpE5vPNVXr2MiHuwZZHqKHBuDI";
// $chat_id = "https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXXXX/getUpdates";
$chat_id = "-475319365";
$arr = array(
  'Машина: ' => $car,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Комментарий: ' => $comment
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ../success/success.html');
} else {
  echo "Error";
}
?>
