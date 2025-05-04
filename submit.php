<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mood_response = $_POST['mood_response'];
    
    // Aici ai putea salva răspunsul în baza de date
    echo "Ai spus: " . htmlspecialchars($mood_response);
}
?>
