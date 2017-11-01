
'use strict';

const fs = require("fs");
const { spawn } = require('child_process');

// should that be var?
let tlmgr;
// var lastResponse;
// var lastReturnCode;

function startTlmgr() {
  tlmgr = spawn('tlmgr', ['shell', '--machine-readable']);
  tlmgr.stdout.setEncoding('utf8');
  tlmgr.stderr.setEncoding('utf8');
  tlmgr.stdin.setEncoding('utf8');
  tlmgr.stdout.on('finish', function() {
    console.log("stdout of tlmgr finished!");
  });
  tlmgr.stderr.on('finish', function() {
    console.log("stderr of tlmgr finished!");
  });
  tlmgr.stdin.on('finish', function() {
    console.log("stdin of tlmgr finished!");
  });
  tlmgr.stderr.on('data', (data) => {
    console.log(`got ==${data}== from tlmgr`);
  });
  tlmgr.stdout.on('data', (data) => {
    console.log(`got ==${data}== from tlmgr`);
  });
  tlmgr.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

function stopTlmgr() {
  tlmgr.stdin.write("quit\n");
}

function sendToTlmgr(str) {
  tlmgr.stdin.write(str);
}

module.exports = {
  tlmgr, startTlmgr, stopTlmgr, sendToTlmgr
};
