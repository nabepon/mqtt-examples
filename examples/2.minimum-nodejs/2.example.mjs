import mqtt from "mqtt";

// 1. 外部の broker に接続する
const client = mqtt.connect('mqtt://test.mosquitto.org')

// 2. 接続できたら
client.on('connect', function () {
  // 3. subscriber を起動する
  client.subscribe('presence', function (err) {
    // 4. 起動が終わったら publish する
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

// 5. publish でメッセージを受け取った時の処理
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})

