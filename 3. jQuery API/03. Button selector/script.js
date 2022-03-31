function run_button () {  
    // selector $(":button") lấy ra toàn bộ thẻ button và input có type là button
    // selector này tương tự $("button,input[type='button']")
    $(":button").addClass("selected_button")

}

function run_radio () {  
    // Tìm tất cả thẻ input có thuộc tính type là radio
    $("input:radio").addClass("selected_radio")
}

function run_checkbox () {
    // Tìm tất cả thẻ input có thuộc tính type là checkbox
    $("input:checkbox").addClass("selected_radio")
}

// Tương tự đối với các type: text, password, reset, submit, file, ...