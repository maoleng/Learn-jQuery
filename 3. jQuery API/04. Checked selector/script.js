$(document).ready(function () {
    $("input").click(function (e) { 
        $("input").removeClass('checked')
        $(this).addClass('checked')
    })

    $("button").click(function (param) {  
        // Lấy ra option đang được chọn
        var option = $("option:checked").text()
        $("#result").text(option)
    })

})
