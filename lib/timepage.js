module.exports = {
    HTML:function(title){
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${title}</title>
            </head>
            
            <body onload="printClock()">
                <div id="clock">
                </div>
            </body>
            </html>
            
            <link rel="stylesheet" href="index.css">
            <script src="time_core.js"></script>
        `
    }
}