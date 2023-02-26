
import { VNode } from 'preact';
import render from 'preact-render-to-string';

export const inArray = (item: any, i: number, array: Array<any>) => {
    return array.indexOf(item) === i;
};

export default function renderToHTML(renderResult:VNode):string {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Preact SSR</title>
        </head>
        <body>
        <div id="app">${render(renderResult)}</div>
        <script src="./app.js"></script>
        </body>
        </html>
    `
}