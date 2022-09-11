<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = trim($request->name);
$phone = mysqli_real_escape_string($mysqli, trim($request->phone));
$age = mysqli_real_escape_string($mysqli, trim($request->age));
$sql = "INSERT INTO user(name,phone,age) VALUES ('$name','$phone','$age')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'name' => $name,
'phone' => '',
'age' => $age,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>