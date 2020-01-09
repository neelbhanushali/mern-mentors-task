// require from root
global.appRoot = require("app-root-path");
global.reqlib = appRoot.require;

// responder
global.Responder = reqlib("app/services/ResponderService");