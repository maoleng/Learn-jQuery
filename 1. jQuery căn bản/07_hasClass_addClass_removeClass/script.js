$(document).ready(function () {
    // Class không tồn tại thì trả về false
    var a = $("p").hasClass("class_khong_ton_tai")
    console.log(a)

    // Thẻ p có class title nên trả về true
    var b = $("p").hasClass("title")
    console.log(b)

    $("button").click(function () {
        var element_block = $(".block")
        if ( element_block.hasClass("mau_do") ) {
            // Hàm addClass dùng để thêm class vào, hàm removeClass để xóa class
            // Tham số truyền vào là tên class
            element_block.removeClass("mau_do").addClass("mau_xanh")
        } else if ( element_block.hasClass("mau_xanh") ) {
            element_block.removeClass("mau_xanh").addClass("mau_do")
        }


    })
})
