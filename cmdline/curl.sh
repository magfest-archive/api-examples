#!/bin/bash

curl --key ../client.key --cert ../client.crt -v -d '{"jsonrpc": "2.0", "method": "attendee.lookup", "params": [1]}' -H "application/json" -w "\n\nHTTP Return Code: %{http_code}\n" https://stage.uber.magfest.org/jsonrpc/
