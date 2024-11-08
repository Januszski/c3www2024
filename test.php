<?php
// file: index.php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $targetDir = "uploads/";
    $fileName = basename($_FILES["fileToUpload"]["name"]);
    $targetFile = $targetDir . $fileName;
    
    // Ensure the uploads directory exists
    if (!is_dir($targetDir)) {
        mkdir($targetDir, 0777, true);
    }

    // Move the uploaded file to the uploads directory without any file type checks
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $targetFile)) {
        echo "The file ". htmlspecialchars($fileName) . " has been uploaded.";
        echo "<br><a href='/upload-resume/uploads/" . urlencode($fileName) . "'>View uploaded file</a>";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Upload Resume</title>
</head>
<body>
    <h2>Upload Your Resume</h2>
    <form action="index.php" method="post" enctype="multipart/form-data">
        Select file to upload:
        <input type="file" name="fileToUpload" id="fileToUpload">
        <input type="submit" value="Upload File" name="submit">
    </form>
</body>
</html>
