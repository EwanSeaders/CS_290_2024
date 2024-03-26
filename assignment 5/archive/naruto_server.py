#!/usr/bin/python3

import http.server
import socketserver

port = 8000
handler = http.server.CGIHTTPRequestHandler


with http.server.HTTPServer(("", port), handler) as httpd:
    print(f"server starting on port {port}")
    httpd.serve_forever()