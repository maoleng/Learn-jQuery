// fadeIn và fadeOut bản chất vẫn là hide và hide
$(document).ready(function () {
    $(".btn-fade-out").click(function (e) { 
        e.preventDefault()
        var p = $('p')
        // Áp dụng thời gian, có thể có hoặc không
        p.fadeOut(1500)
    })

    $(".btn-fade-in").click(function (e) { 
        e.preventDefault()
        var p = $('p')
        // Áp dụng callback
        p.fadeIn(1500, function () {
            alert('Đã hiện ra')
        })
    })
})

