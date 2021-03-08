
<html>
    <head>
        <title>Staude Admin</title>
    </head>
    
    <body>
 <?php
    $clientip = $_SERVER['REMOTE_ADDR']
    $whitelistedip = '98.180.85.44'
    #define('SITE_URL', 'https://www.staude.ml/dashboard/admin/index.php');
    
    #if(!defined('SITE_URL')) {
    #header($_SERVER["SERVER_PROTOCOL"] . " 403 Forbidden");
    #exit;
    #}
    
    if($clientip == $whitelistedip) {
    print("woooo works lolol"
    } else {
      header($_SERVER["SERVER_PROTOCOL"] . " 403 Forbidden");
      exit;
    }
    
        
    #function CheckIPAddress()
    #{
     #   $allowedip = '98.180.85.44';
     #   $ip = $_SERVER['REMOTE_ADDR'];
     #   return ($ip == $allowedip);
    #}
?>
    </body>
</html>
