function toggleButton() {
 var imageLoaded = document.getElementById("ButtonImage");

    
    if(imageLoaded.src.indexOf('GreenButton.png') > -1) {
        $('#ButtonImage').attr('src', 'Images/RedButton.png');
        $('#header').css('background','#ff3333');
        $('#bumper').css('background','#cc0000');
        $('#DoorStatus').html('Status: Open');
    }
    else {
        $('#ButtonImage').attr('src', 'Images/GreenButton.png');
        $('#header').css('background','#009933');
        $('#bumper').css('background','#006622');
        $('#DoorStatus').html('Status: Closed');
    }
}