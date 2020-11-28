import threading
import requests
import time
import socket
import sys

import http.server
import socketserver

# port = (sys.argv[2])
# url = 'http://localhost:%d/pingpong'

# Handler = http.server.SimpleHTTPRequestHandler

# with socketserver.TCPServer(("", PORT), Handler) as httpd:
#     print("serving at port", PORT)
#     httpd.serve_forever()

for i in range(1,10):
        time.sleep(2)
        data = "iteration %d done, took  milliseconds" % (i)
        print ("ping", i)
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.connect((sys.argv[1], int(sys.argv[2])))
        sock.sendall(data.encode('utf-8'))
        sock.close()
print ("Game Over, took %d ms" , i)

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((sys.argv[1], int(sys.argv[2])))
s.listen(3)

while True:
    conn, addr = s.accept()
    data = conn.recv(1024)
    conn.close()
    print ("pong %s" % data)

# def ping(url):
#     res = requests.get(url)
#     print(f'{url}: {res.text}')

# urls = [
#     'http://httpstat.us/200',
#     'http://httpstat.us/400',
#     'http://httpstat.us/404',
#     'http://httpstat.us/408',
#     'http://httpstat.us/500',
#     'http://httpstat.us/524'
# ]

# start = time.time()
# for url in urls:
#     ping(url)
# print(f'Sequential: {time.time() - start : .2f} seconds')

# print()

# start = time.time()
# threads = []
# for url in urls:
#     thread = threading.Thread(target=ping, args=(url,))
#     threads.append(thread)
#     thread.start()
# for thread in threads:
#     thread.join()

# print(f'Threading: {time.time() - start : .2f} seconds')
