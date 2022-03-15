
$(document).ready(function () {
    $('.btn-up').click(function (e) { 
        e.preventDefault()
        $('p').slideUp('fast')
    })
    $('.btn-down').click(function (e) { 
        e.preventDefault()
        // Kèm theo function
        $('p').slideDown('slow', function () { 
            alert('Hoàn thành')
        })
    })
})