<?php
$servername ="localhost";
$username = "root";
$password="";
$dbname="responsiveform";
$conn = mysqli_connect($servername,$username,$password,$dbname);
if($conn){
  die("Connection failed:" . mysqli_connect_error());
}
if(isset($_POST['submit'])){
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$subject = $_POST['subject'];
$message = $_POST['message'];
//datbase connection
$sql_query = "INSERT INTO login (name,number,subject,email,message) VALUE ('$name','$number','$subject' ,'$email','$message')";
if(mysqli_query($conn, $sql_query)){
  echo "msg sent unccessfully......!";
}else{
    echo "Error: ".$sql . "" . mysqli_error($conn);
}
    mysqli_close($conn);
}

?>