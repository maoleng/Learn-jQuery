$(document).ready(function () {
    $(".btn-change-attr").click(function () {  
        // Hàm attr() có 2 cách sử dụng: 
        
        // Lấy ra giá trị thuộc tính hiện tại
        console.log($("input").attr("type"))

        // Thay đổi giá trị thuộc tính
        a = $("input").attr("type", "radio")
    })

    $(".btn-delete-attr").click(function () {  
        $("h1").removeAttr("align")
    })
    
})
