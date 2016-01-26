<!DOCTYPE HTML>
<html>
    <head>
        <meta name="viewport" content="initial-scale=1.0">
        <meta http-equiv="Content-type" content="text/html; charset=utf-8">
        <title> Camera Application Test</title>
    </head>

    <body>
        <select class="imageType" id="imageType">
            <option value=""> Select an Image Type </option>
            <option value="pic"> Picture </option>
            <option value="qr"> QR Code </option>
        </select>

        <!-- Inputs -->
        <input type="file" accept="image/*" id="pictureField" src="">

        <div style="width:300px;">
            <img id="insertedImage" style="width:100%; height:auto;" />
        </div>


    <!-- JS Dependencies -->
    <script src="/includes/templateIncludes/js/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="/includes/templateIncludes/js/bower_components/qcode-decoder/build/qcode-decoder.min.js"></script>
    <script src="/includes/templateIncludes/js/main.js"></script>

    </body>
</html>