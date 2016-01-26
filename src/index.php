<?php
    require_once "includes/engine.php";

    templates::display('header');
?>

<!DOCTYPE HTML>
<html>
    <head>
        <meta name="viewport" content="initial-scale=1.0">
        <meta http-equiv="Content-type" content="text/html; charset=utf-8">
        <title> Camera Application Test</title>
    </head>

    <body>
        <!-- Inputs -->
        <input type="file" accept="image/*" id="pictureField">

        <div style="width:300px;">
            <img id="insertedImage" style="width:100%; height:auto;" />
        </div>


    <!-- JS Dependencies -->
    <script src="/includes/templateIncludes/js/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="/includes/templateIncludes/js/bower_components/qcode-decoder/build/qcode-decoder.min.js"></script>
    <script>

    $(document).ready(function() {
        console.log('onReady');

        // fixe grabbing the image in webkit
        if(!("url" in window) && ("webkitURL" in window)) {
            window.URL = window.webkitURL;
        }

        // grab the image and place it in the inserted image source
        $("#pictureField").on("change", function(){
            if(event.target.files.length == 1 && event.target.files[0].type.indexOf("image/") == 0) {
                $("#insertedImage").attr("src",URL.createObjectURL(event.target.files[0]));
            }
        });
    });

    </script>
    </body>

</html>

<?php
    templates::display('footer');
?>