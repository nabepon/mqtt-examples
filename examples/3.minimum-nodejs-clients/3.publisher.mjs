import mqtt from "mqtt";

// const client = mqtt.connect('mqtt://test.mosquitto.org')
const client = mqtt.connect({
  host: 'localhost',
  port: 1883,
  clientId: 'mqtt.publisher',
});

client.on('connect', function(){
  console.log('publisher.connected.');
});

setTimeout(function(){
  const message = Date.now().toString();
  client.publish('topic0', message);
  console.log('publisher.publish:', message);
}, 1000);
