
<html>
    <head>
        <title>Staude Admin</title>
    </head>
    
    <body>
 <?php
    $clientip = $_SERVER['REMOTE_ADDR']
    $whitelistedip = '98.180.85.44'

    if($clientip == $whitelistedip) {
    print("woooo works lolol"
    } else {
      header($_SERVER["SERVER_PROTOCOL"] . " 403 Forbidden");
      exit;
    }
?>
    </body>
</html>
