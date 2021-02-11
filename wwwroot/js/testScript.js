function Get() {
    $.ajax({
        url: 'api/spot',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: (response) => Post(response)
    })
}

function Post(data) {
    $.ajax({
        url: 'http://localhost:1234',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        success: () => console.log('Data sent to server')
    })
}

$(document).ready(function() {
    $("#testBtn").on("click", Post({ceva: "ceva"}))
})