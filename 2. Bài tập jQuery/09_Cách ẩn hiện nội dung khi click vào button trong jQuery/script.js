$(document).ready(function () {
    $("input[type='radio']").click(function () {  
        var value_radio = $(this).val()
        $(".box").hide()

        
        $(".block_" + value_radio).show()
    })
})