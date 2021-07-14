1. mqttコマンドを使えるようにinstallする

```
npm install -g mqtt
```

2. subscriberを起動する（brokerは外部のものを使用）

```
mqtt sub -t 'hello' -h 'test.mosquitto.org' -v
```

3. publishする

```
mqtt pub -t 'hello' -h 'test.mosquitto.org' -m 'from MQTT.js'
```

4. subscriberにメッセージが出る