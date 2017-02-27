function encodeImageFileAsURL() {
    var d = new $.Deferred();

    var filesSelected = document.getElementById("foto").files;
    var filename = document.getElementById("foto").value;

    var regex = /.*\\(.*)/;
    var match = regex.exec(filename);

    filename = match[1];

    if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();

        fileReader.onloadend = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; 

            $.ajax({
                type: 'POST',
                url: '/upload/' + filename,
                data: srcData,
                dataType: "text",
                contentType:"text/plain",
                complete: function() {
                    d.resolve();
                }
            });
        }

        fileReader.readAsDataURL(fileToLoad);
        return d.promise();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    $('#nuevoCuadro').submit(function(event) {
        event.preventDefault(); //this will prevent the default submit
        
        var promise = encodeImageFileAsURL();
        
        promise.done(function() {
            $('#nuevoCuadro').unbind('submit').submit();
        });
    });
});
