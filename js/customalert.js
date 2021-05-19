let isOpen = false;
$('#alertBody').hide()

$('#alertBody').click(function(){
    $('#alertBody').fadeOut('fast')
    document.body.style.overflow = 'auto';
})

function openAlert(message){
    document.body.style.overflow = 'hidden';
    $('#alertBody').fadeIn('fast')
    $('#alertMessageSpan').text(message)
}