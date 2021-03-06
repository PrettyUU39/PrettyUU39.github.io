
self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting()); // Activate worker immediately
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim()); // Become available to all pages
});
self.clients.matchAll().then ( (clients) => {
    clients[0].postMessage({
        msg: 'Hey, from service worker! I\'m listening to your fetch requests.',
        source: 'serviceworker'
    })
    console.log(clients);
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

  let gyroscope = new Gyroscope({ frequency: 60 });
      let gyro_timestamp_start, gyro_timestamp, gyro_hz, gyro_cnt = 0;
      gyroscope.addEventListener('reading', e => {
        console.log('i am in gyroscope listen event')
        gyro_timestamp = (performance.now() + performance.timeOrigin) / 1000;
        if (gyro_cnt > 0) {
          gyro_hz = 1000 * gyro_cnt / (performance.now() - gyro_timestamp_start);
          gyroInfo = `Gyro Timestamp: ${gyro_timestamp.toFixed(6)} ms
                      Frequency: ${gyro_hz.toFixed(3)} Hz
                      Data: ${gyroscope.x.toFixed(3)}, ${gyroscope.y.toFixed(3)}, ${gyroscope.z.toFixed(3)}`;
          document.getElementById("gyro").innerText = accelInfo;
        } else {
          gyro_timestamp_start = performance.now();
        }
        gyro_cnt += 1;
      });
      gyroscope.start();
