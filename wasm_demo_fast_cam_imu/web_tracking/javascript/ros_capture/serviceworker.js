self.addEventListener("message",function(event){
    console.log(event.data);
});
self.addEventListener('install', function(event) {
    event.waitUntil(
        self.clients.matchAll().then ( (clients) => {
            clients[0].postMessage({
                msg: 'Hey, from service worker! I\'m listening to your fetch requests.',
                source: 'serviceworker'
            })
        })
    );
  });
self.addEventListener('activate', (event) => {
    event.waitUntil(
        self.clients.matchAll().then ( (clients) => {
            clients[0].postMessage({
                msg: 'Hey, from service worker! I\'m listening to your fetch requests.',
                source: 'serviceworker'
            })
        })
    )
})
self.clients.matchAll().then ( (clients) => {
    clients[0].postMessage({
        msg: 'Hey, from service worker! I\'m listening to your fetch requests.',
        source: 'serviceworker'
    })
})
  self.addEventListener('devicemotion', function(event) {
    gyro_timestamp = (performance.now() + performance.timeOrigin) / 1000;
    if (gyro_cnt > 0) {
      gyro_hz = 1000 * gyro_cnt / (performance.now() - gyro_timestamp_start);
      gyroInfo = `Gyro Timestamp: ${gyro_timestamp.toFixed(6)} ms
                  Frequency: ${gyro_hz.toFixed(3)} Hz
                  Data: ${event.acceleration.x.toFixed(3)}, ${event.acceleration.y.toFixed(3)}, ${event.acceleration.z.toFixed(3)}`;
                  self.clients.matchAll().then ( (clients) => {
                    clients[0].postMessage({
                        msg: event.acceleration.x,
                        source: 'serviceworker'
                    })
                })
    } else {
      gyro_timestamp_start = performance.now();
    }
    gyro_cnt += 1;
  });

