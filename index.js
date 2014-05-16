"use strict";

var autoprefixer = require('autoprefixer');


function autoprefixerLoader(content) {
  var processedContent  = autoprefixer.process(content);
  return processedContent.css;
}


module.exports = autoprefixerLoader;
