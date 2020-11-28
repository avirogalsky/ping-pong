FROM python as receiver

RUN pip install requests
# RUN \
#   apt-get update && \
#   apt-get install -y python python-dev python-pip python-virtualenv && \
#   rm -rf /var/lib/apt/lists/*

ADD receiver_script.py /root/script.py

CMD python -u /root/script.py $LISTEN_HOST $LISTEN_PORT

FROM python as sender

RUN pip install requests

ADD sender_script.py /root/script.py

CMD python -u /root/script.py $SEND_HOST $SEND_PORT