"use strict";

const puppeteer = require('puppeteer');
const jsdom = require('jsdom');

async function getRandomWord() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const response = await page.goto('https://www.palabrasaleatorias.com/');
        const body = await response.text();
        let palabra = "";

        const { window: { document } } = new jsdom.JSDOM(body);

        document.querySelectorAll('div')
            .forEach((element, i) => {
                if (document.querySelectorAll('div').length - 1 == i) {
                    console.log(element.textContent);
                    palabra = element.textContent;
                }
            });

        await browser.close();
        console.log({palabra});
        // $("#word").text(palabra);
    } catch (error) {
        console.error(error);
    }
}


getRandomWord()
