$(document).ready(function () {
    // Ẩn ngay
    $("button").click(function (e) { 
        e.preventDefault()
        var element_p = $("p")
        var element_button = $("button")
        element_p.hide()
    })

    // Ẩn theo thời gian chờ
    $(".btn-hide-block").click(function (e) { 
        e.preventDefault()
        var element_block = $('.block')
        element_block.hide(1000)
    })
    $(".btn-show-block").click(function (e) { 
        e.preventDefault()
        var element_block = $('.block')
        element_block.show(1000)
    })


    // Chạy 1 đoạn script sau khi ẩn
    $('.btn-hide-bonus-function').click(function (e) { 
        e.preventDefault()
        $("h1").hide(1000, function () { 
            var btn = $(".btn-hide-bonus-function")
            btn.text('Úm ba la xì pùa')

        })
        
    })
})