const socket = io();
function do_it() {
    socket.emit('data', "Data receved sucsesfully!");
    console.log('clicked');
};
socket.on('count', function (data) {
    document.getElementById('answer').innerHTML = "The data is: " + data;
});
socket.on('ans', function (data) {
    data.replace(/\r?\n/g, '\n')
    document.getElementById('answer').innerHTML = "The data is: " + data;
    console.log(data);
}); 