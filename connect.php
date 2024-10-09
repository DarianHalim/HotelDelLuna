<?php

// Enable error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);


// DB account creation
$servername = "sql302.infinityfree.com";
$username = "if0_37478321";
$password = "U8mK5kPFVVUFw";
$dbname = "if0_37478321_deluna";

//Create Koneksi
$conn = new mysqli($servername,$username,$password,$dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Connection Gagal:" . $conn->connect_error);
}

//Ambil Data dari form booking
$name = $_POST['name'];
$phone_no = $_POST['phone_no'];
$email = $_POST['email'];
$dob = $_POST['dob'];
$room_type = $_POST['room_type'];
$duration = $_POST['duration'];

//Query insert ke DB
$stmt = $conn->prepare("INSERT INTO bookings (name, phone_no, email, dob, room_type, duration) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssi", $name, $phone_no, $email, $dob, $room_type, $duration);


// Exekusi query
if ($stmt->execute()) {
    echo "Booking successfully created!";
} else {
    echo "Error: " . $stmt->error;
}

//matikan koneksi
$stmt->close();
$conn->close();


?>