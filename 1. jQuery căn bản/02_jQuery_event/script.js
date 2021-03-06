$(document).ready(function () {
    // -----------------Phần 1-----------------
    // Cách thêm sự kiện trong jQuery và các hàm liên quan tới bàn phím:
    $(".input").keyup(function (e) { 
        var text = $(".input").val()
        var element_result = $(".result")
        element_result.text(text)
    })

    // -----------------Phần 2-----------------
    // Các hàm liên quan tới chuột
    $("div .box:first-child").click(function (e) { 
        $(this).css('background-color', 'black')
    })

    $("div .box2").dblclick(function () {
        $(this).css('background-color', 'orange')
    }) 

    // Hàm hover có 2 tham số:
    // Tham số đầu tiên là 1 function, sẽ được kích hoạt khi hover vào
    // Tham số thứ 2 là 1 function, sẽ được kích hoạt khi hover ra ngoài
    $("div .box:last-child").hover(function () {
        $(this).css('background-color', 'violet')
    }, function () { 
        $(this).css('background-color', 'grey')
    })
    // Hàm hover là kết hợp của 2 hàm: mouseenter() và mouseleave()

    // -----------------Phần 3-----------------
    // Hàm change: xảy ra khi input change
    $("select").change(function () {
        var option_selected = $("select").find(":selected").val()
        console.log("The value that selected is: " + option_selected)
    })
    $(".input_text").change(function () { 
        var result = $(".result_input_text")
        var content = $(this).val()
        result.text(content)
    })

    // Hàm focus: bắt sự kiện khi focus vào input
    $(".input_text").focus(function () { 
        var result = $(".result_input_text")
        result.text("Nhập từ từ thôi bạn")
    })
    
    

})