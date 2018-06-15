#!/usr/bin/env python3

import os
from http.server import HTTPServer, CGIHTTPRequestHandler

os.chdir('./www')

PORT = int(os.environ['PORT'])

httpd = HTTPServer(('', PORT), CGIHTTPRequestHandler)

print('Web server running at port', PORT)

httpd.serve_forever()
