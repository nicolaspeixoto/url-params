"use strict";
var url = require('url');

function parseUrl(str, parameters){
    var pathname = '';
    var _url = url.parse(str);

    _url.pathname.split('/').forEach(function(parameter){
        var value;
        if(parameter === '') {
            return;
        }
        if(parameter.charAt(0) === ':'){
            value = parameters[parameter.substring(1)];
            if(!value){
                throw new Error('Invalid URL parameter: ' + parameter.substring(1));
            }
            pathname = pathname + '/' + value;
            return;
        }
        pathname = pathname + '/' + parameter;
    });

    _url.pathname = pathname;

    return url.format(_url);
}

module.exports = parseUrl;
