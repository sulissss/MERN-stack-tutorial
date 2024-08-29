// const http = require('http');
const fs = require('fs');
const express = require('express');

const myText = fs.readFile('sample.txt', 'utf-8', (err, txt) => {
    console.log(txt);
});

const server = http.createServer((req, res) => {
    
})