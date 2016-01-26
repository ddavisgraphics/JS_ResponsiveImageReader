// set vars and instantiate new classes
    var QRCode   = false;

// Create Event Handles
    $("#imageType").on("change", pictureType);
    ("#pictureField").on("change", handleImageUpload);

// Create Functions for Handlers
//
function handleImageUpload(event){
    var qrReader = new QCodeDecoder();
    var reader   = new FileReader();

    // get files
    var uploadedFiles = event.target.files;
    var imageFile     = event.target.files[0];
    var dataURI = "";

    // create a preview
    var imagePreview = $('#insertedImage');

    // file exsists load the image into the reader
    if(imageFile){

        // create reader events for file
        reader.onload = function(event) {
            dataURI = reader.result;
            imagePreview.attr('src', dataURI);

            // read the qr code if the image is a QR Image
            if(QRCode){
                console.log('QRCode happening');
                console.log(dataURI);
                qrReader.decodeFromImage(dataURI,function(error,result){
                    window.location.href = result;
                });
            }
        };

        reader.onerror = function(event) {
            console.error("File could not be read! Code " + event.target.error.code);
        };

        reader.readAsDataURL(imageFile);
    }
}

function pictureType(event){
    value = $(this).val();
    if(value == 'qr'){
        QRCode = true;
        console.log(QRCode + ": QRcode");
    } else {
        QRCode = false;
        console.log(QRCode + ": QRcode");
    }
}
