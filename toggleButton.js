function toggleButton() {
 var imageLoaded = document.getElementById("ButtonImage");
    
    $('#DoorStatus').html('TEST TEXT');
    
    if(imageLoaded.src == 'Images/GreenButton.png') {
        $('#ButtonImage').attr('src', 'Images/RedButton.png');
    }
}