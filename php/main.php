<?php
$cert = "../client.crt";
$keyfile = "../client.key";
$url = "https://stage.uber.magfest.org/jsonrpc/";
$ch = curl_init(); 
curl_setopt($ch, CURLOPT_URL, $url); 
curl_setopt($ch, CURLOPT_VERBOSE, 1); 
curl_setopt($ch, CURLOPT_SSLCERT, $cert); 
curl_setopt($ch, CURLOPT_SSLKEY, $keyfile); 
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_SSLCERTTYPE,"PEM");
curl_setopt($ch, CURLOPT_SSLKEYTYPE,"PEM");
$ret = curl_exec($ch);
?>
