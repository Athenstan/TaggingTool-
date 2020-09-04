<?php

ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );

if(isset($_POST['submit'])) {
 //   $email_from = "ankush_hf@hotmail.com";
   // $email_to = "ankush_hf@hotmail.com";
   
    $data = $_POST['data'];
    $empName = $_POST['empName'];
    $startDate = $_POST['startD'];
    
    
    $my_file = './'.'WeeklyReport/'.$empName.' Hours/Week ' . $startDate . '.txt';

if (file_exists($my_file)) {
    echo "Hours updated as the file $my_file already existed.";
    unlink($my_file);
    
    $handle = fopen($my_file, "a") or die('Cannot open file:  '.$my_file);
    $dataPush = " New Reported Hours Updated Successfully (Or employee tried to submit Hours twice for the same pay period)" . $email_message;
    fwrite($handle, "\n\n" . $dataPush);
}
else {
    $handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
    $dataPush = $data;
    fwrite($handle, $dataPush);
}

}

?>