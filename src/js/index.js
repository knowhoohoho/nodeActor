var socket = io();



socket.on('connect', () => {
    var name = prompt('대화명을 입력해주세요', '')
    socket.emit('newUserconnect', name)
})


socket.on('updatemessage', (data) => {
    var info = document.getElementById
    info.innerHTML = data.message
})