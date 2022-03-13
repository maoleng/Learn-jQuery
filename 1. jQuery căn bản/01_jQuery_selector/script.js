// -----------------Ví dụ 1-----------------
// document ready sẽ chờ khi DOM được load xong thì sẽ chạy
// ảnh chưa được load xong vẫn chạy
$(document).ready(function () {
    // lấy ra thẻ p đầu tiên
    // nếu dùng js thường thì: document.querySelector(".box #heading p")
    var first_p_element = $(".box #heading p")
    console.log(first_p_element.text())
})

// Các cú pháp
// $('*') : Lấy ra tất cả các thẻ
// $('.class_name') : Lấy ra các thẻ có class là class_name
// $('#id_name') : Lấy ra thẻ có id là id_name
// $('element') : Lấy ra thẻ có tên là element
// $('.class_name, #id_name') : Lấy ra thẻ có class là class_name hoặc là id_name

// -----------------Ví dụ 2-----------------
$(document).ready(function () {
    // Lấy ra thẻ span đầu tiên bằng cách thêm vào :first-child
    // Tương tự lấy ra thẻ cuối cùng :last-child
    $("div span:first-child").hover(function () {
            $(this).addClass('hover')
        }, function () {
            $(this).removeClass('hover')
        }
    )

    // Lấy ra thẻ span thứ 2
    $("div span:nth-child(2)").click(function () { 
        $(this).addClass('click')
        
    })
})


// Lấy ra thẻ có 2 cái class: $('.class1.class2')