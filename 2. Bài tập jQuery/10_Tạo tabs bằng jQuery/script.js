$(document).ready(function () {
    $(".content").hide()
    $(".menu__1").addClass('menu__selected')
    $(".content__1").show()
    $(".menu").click(function () {  
        $(".menu").removeClass('menu__selected')
        $(this).addClass('menu__selected')
        $(".content").hide()
        var value = $(this).attr("class").slice(6,7)
        $(".content__" + value).show()
    })
    
})
