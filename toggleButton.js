function toggleButton() {
    	$(document).ready(function() {
        jQuery.ajax({
//            url: "OwnerJson.json",
//            dataType:'json',
            success:function(response) {
                var imageLoaded = document.getElementById("ButtonImage");

                if(imageLoaded.src.indexOf('GreenButton.png') > -1) {
                    $('#ButtonImage').attr('src', 'Images/RedButton.png');
                    $('#header').css('background','#ff1a1a');
                    $('#bumper').css('background','#990000');
                    $('#DoorStatus').html('Status: Open');
                }
                else {
                    $('#ButtonImage').attr('src', 'Images/GreenButton.png');
                    $('#header').css('background','#009933');
                    $('#bumper').css('background','#006622');
                    $('#DoorStatus').html('Status: Closed');
                }
            }
        });
    });
}