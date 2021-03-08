# thanks stack overflow.

<?php
    function CheckAccess()
    {
        //allowed IP. Change it to your static IP
        $allowedip = '127.0.0.1';
        $ip = $_SERVER['REMOTE_ADDR'];
        return ($ip == $allowedip);
    }