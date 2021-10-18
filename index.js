const express_js = require('express');

const app = express_js();

app.get("/", function( request, response ) {

    // response.send("<h1>Welocome To My First Express JS Website</h1>");
    response.sendFile(__dirname + "/home.html");

} );

app.get("/about", function( request, response ) {

    // response.send("<h1><-----[About Us Page]-----></h1>");
    response.sendFile(__dirname + "/about.html");

} );

app.get("/contact", function( request, response ) {

    // response.send("<h1><-----[Contact Us Page]-----></h1>");
    response.sendFile(__dirname + "/contact.html");

} );

app.get("/main.css", function( request, response ) {

    response.sendFile(__dirname + "/css/main.css");

} );

app.listen(3000, function( request, response ) {

    console.log("Server is running at Port : 3000");
    
} );