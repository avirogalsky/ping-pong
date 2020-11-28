#!/usr/bin/python
# -*- encoding: utf-8 -*-
import socket
import sys

print (sys.argv[1])
print (sys.argv[2])

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((sys.argv[1], int(sys.argv[2])))
s.listen(3)

while True:
    conn, addr = s.accept()
    data = conn.recv(1024)
    conn.close()
    print ("pong %s" % data)