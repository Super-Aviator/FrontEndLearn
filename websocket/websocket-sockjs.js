var sock = new SockJS("http://localhost:8000/web-socket/sock-js/test");
sock.onopen = function () {
    console.log('open');
    sock.send('test');
};

sock.onmessage = function (e) {
    console.log('message', e.data);
    sock.close();
};

sock.onclose = function () {
    console.log('close');
};
