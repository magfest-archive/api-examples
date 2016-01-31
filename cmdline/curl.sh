#!/bin/bash

# theses certs are provided to you by an administrator, change these:
SSLKEY=/home/vagrant/uber/puppet/modules/uber/files/selfsigned-X-client.key
SSLCRT=/home/vagrant/uber/puppet/modules/uber/files/selfsigned-X-client.crt

# change to the address of a RAMS server you want to connect to
REMOTE_HOST=https://localhost:4444

# use attendee.lookup to look up badge #1
API_REQUEST='{"jsonrpc": "2.0", "method": "attendee.lookup", "params": [1]}'

# shouldn't need to change anything below here
# ----------------------------------------------

curl --key $SSLKEY --cert $SSLCRT \
 -v -k -d "$API_REQUEST" \
 -H "application/json" \
 -w "\n\nHTTP Return Code: %{http_code}\n" \
 $REMOTE_HOST/jsonrpc/
