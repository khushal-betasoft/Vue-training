<?php
include "./autoload.php";
$user=new User();

$option=3;
switch($option){
    case 1:$result= $user->selectQuery(['name','password','address']);;
    break;
    case 2:$result= $user->updateQuery(['name'=>"Govind Sharma"],["name"=>"Govind "]);
    break;
    case 3:$result = $user->deleteQuery(['name'=>"jkjab@kjna"]);
    break;
    case 4:$result= $user->insertQuery(['name'=>"jkjab@kjna","email"=>"kan@121"]);;
    break;
}
print_r($result);