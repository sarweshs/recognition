/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
////var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
////var cfenv = require('cfenv');

// create a new express server
////var app = express();

// serve the files out of ./public as our main files
////app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
////var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
////app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  ////console.log("server starting on " + appEnv.url);
////});

/**
 * Copyright 2014, 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var express    = require('express'),
  app          = express(),
  watson       = require('watson-developer-cloud');


// Bootstrap application settings
require('./config/express')(app);

// For local development, replace username and password
var textToSpeech = watson.text_to_speech({
  version: 'v1',
  username: '<user-name>',
  password: '<password>'
});

app.get('/api/synthesize', function(req, res, next) {
  var transcript = textToSpeech.synthesize(req.query);
  transcript.on('response', function(response) {
    if (req.query.download) {
      response.headers['content-disposition'] = 'attachment; filename=transcript.ogg';
    }
  });
  transcript.on('error', function(error) {
    next(error);
  });
  transcript.pipe(res);
});

// Return the list of voices
// app.get('/api/voices', function(req, res, next) {
//   textToSpeech.voices(function (error, voices) {
//     if (error)
//       next(error);
//     else
//       res.json(voices);
//   });
// });

// error-handler settings
require('./config/error-handler')(app);

var port = process.env.VCAP_APP_PORT || 3000;
app.listen(port);
//app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  ////console.log("server starting on " + appEnv.url);
////});
console.log('listening at:', port);

