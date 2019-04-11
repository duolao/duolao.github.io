<?php
$fileInfo = $_FILES["upFile"];
$fileName = $fileInfo["name"];
$filePath = $fileInfo["tmp_name"];
move_uploaded_file($filePath,"./suore/".$fileName);
?>