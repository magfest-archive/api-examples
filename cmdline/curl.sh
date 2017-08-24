#!/bin/bash

# theses certs are provided to you by an administrator, change these:
#SSLKEY=../selfsigned-X-client.key
#SSLCRT=../selfsigned-X-client.crt

SSLKEY=../magdev-client.key
SSLCRT=../magdev-client.crt


# change to the address of a RAMS server you want to connect to
REMOTE_HOST=https://staging5.uber.magfest.org:4443

# use attendee.lookup to look up badge #152 (first staff badge)
API_REQUEST='{"jsonrpc": "2.0", "method": "attendee.lookup", "params": [152]}'

# shouldn't need to change anything below here
# ----------------------------------------------

curl --key $SSLKEY --cert $SSLCRT \
 -v -k -d "$API_REQUEST" \
 -H "application/json" \
 -w "\n\nHTTP Return Code: %{http_code}\n" \
 $REMOTE_HOST/jsonrpc/
