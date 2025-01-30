const osc = require("osc");

const udpPort = new osc.UDPPort({
  localAddress: "0.0.0.0",
  localPort: 9000
});

udpPort.on("message", (oscMsg, timeTag, info) => {
  console.log("Received OSC message:", oscMsg);
});

udpPort.open();