const server = require("./index");
require("dotenv").config({ path: "../.env" });

server.listen(process.env.PORT || 3333);
