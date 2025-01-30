const dgram = require("dgram");
const osc = require("osc");

// Create a UDP socket
const socket = dgram.createSocket("udp4");

// Enable broadcasting
socket.bind(() => {
  socket.setBroadcast(true);
});

const broadcastIp = "192.168.0.255"; // Change this to your network's broadcast address
const port = 9000;

// Send OSC broadcast message
const udpPort = new osc.UDPPort({
  localAddress: "0.0.0.0",
  localPort: 9000,
  remoteAddress: broadcastIp,
  remotePort: port
});

udpPort.open();
udpPort.on("ready", () => {
  console.log("Sending OSC Broadcast...");
  udpPort.send({
    address: "/broadcast",
    args: [1, 2, 3]
  });
});