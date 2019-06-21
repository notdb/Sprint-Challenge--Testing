require("dotenv").config();

const server = require("./api/server.js");

const port = port.env.PORT || 5000;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));
