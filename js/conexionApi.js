
$(document).ready(function() {
   
    document.getElementById('descargar').addEventListener('click', function() {
        const pdfUrl = './documento/GiomarOrtegaCV.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'GiomarOrtegaCV.pdf';
        link.click();
    });


});


