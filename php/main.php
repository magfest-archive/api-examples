<?php

// NOTE: recommend instead of doing it this way you use a 3rd party JSON_RPC library. this way works ok though.

$cert = "../client.crt";
$keyfile = "../client.key";
$url = "https://stage.uber.magfest.org:4444/jsonrpc/";

$method = "attendee.lookup";
$badge_number = 1;

$post = '{"jsonrpc": "2.0", "method": "'.$method.'", "params": ['.$badge_number.']}';
$ch = curl_init(); 
curl_setopt( $ch, CURLOPT_POST,             1 );
curl_setopt( $ch, CURLOPT_POSTFIELDS,       $post );
curl_setopt( $ch, CURLOPT_RETURNTRANSFER,   true );
curl_setopt($ch, CURLOPT_URL, $url); 
curl_setopt($ch, CURLOPT_VERBOSE, 1); 
curl_setopt($ch, CURLOPT_SSLCERT, $cert); 
curl_setopt($ch, CURLOPT_SSLKEY, $keyfile); 
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_SSLCERTTYPE,"PEM");
curl_setopt($ch, CURLOPT_SSLKEYTYPE,"PEM");
$ret = curl_exec($ch);

if( $ret === false )
{
    die( 'curl_exec() returned false .. message: ' . curl_error( $ch ) );
}

$http_status = curl_getinfo( $ch, CURLINFO_HTTP_CODE );
curl_close( $ch );
echo( $ret );
echo '<br /><br />';
echo "HTTP Return Code: {$http_status}";
echo '<br />';
?>
