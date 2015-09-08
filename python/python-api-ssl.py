from pprint import pprint
from rpctools.jsonrpc import ServerProxy

# the URL you connect to
your_API_URL = "https://stage.uber.magfest.org:777/jsonrpc/"

# the client certificate .crt provided to you by an administrator
your_client_cert_crt = "../client.crt"

# the client certificate .key provided to you by an administrator
your_client_cert_key = "../client.key"

service = ServerProxy(
    uri=your_API_URL,
    cert_file=your_client_cert_crt,
    key_file=your_client_cert_key
)

# now you can actually call the API functions
pprint(service.attendee.lookup(badge_num=1))
pprint(service.attendee.search('Test'))

# if the rams instance has barcode support, you can look up a barcode
your_barcode = "XXXXXX" # 6-digit string
pprint(service.barcode.lookup_attendee_from_barcode(barcode_value=your_barcode))