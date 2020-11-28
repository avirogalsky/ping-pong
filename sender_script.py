#!/usr/bin/python
# -*- encoding: utf-8 -*-
import socket
import time
import sys

# import requests

# x = requests.get('/pingpong', timeout=2.50)
# print(x.status_code)

print (sys.argv[1])
print (sys.argv[2])


for i in range(1,10):
        time.sleep(2)
        data = "iteration %d done, took  milliseconds" % (i)
        print ("ping", i)
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.connect((sys.argv[1], int(sys.argv[2])))
        sock.sendall(data.encode('utf-8'))
        sock.close()
print ("Game Over, took %d ms" , i)