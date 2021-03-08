
<html>
    <head>
        <title>Staude Admin</title>
    </head>
    
    <body>
 <?php
    define('SITE_URL', 'https://www.staude.ml/dashboard/admin/index.php');
    
    if(!defined('SITE_URL')) {
    header($_SERVER["SERVER_PROTOCOL"] . " 403 Forbidden");
    exit;
    }
        
    function CheckIPAddress()
    {
        $allowedip = '98.180.85.44';
        $ip = $_SERVER['REMOTE_ADDR'];
        return ($ip == $allowedip);
    }
?>
    </body>
</html>
