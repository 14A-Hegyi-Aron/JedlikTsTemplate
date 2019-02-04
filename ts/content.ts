﻿import * as http from "http";

export default class Content {

    content(req: http.IncomingMessage, res: http.ServerResponse): void {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h1 style='color: red;'>Hello Node.js!</h1>");
        res.write("<h1 style='color: green;'>Hello TypeScript!</h1>");
        res.write("<h1 style='color: blue;'>Hello Heroku!</h1>");
        res.write("<h1 style='color: black;'>Hello Jedlik!</h1>");

        res.write("<b>Fejlesztői környezet telepítésének leírása, forráskód GitHub repository:</b><br>");
        res.write("<a href='https://github.com/nitslaszlo/JedlikTsTemplate' target='_blank'>" +
            "https://github.com/nitslaszlo/JedlikTsTemplate</a><br>");
        res.end();
    }
}

