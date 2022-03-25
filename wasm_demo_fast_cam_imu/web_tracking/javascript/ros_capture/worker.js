self.addEventListener('message',function(e){
    if(e.data === 'open the media'){
        navigator.mediaDevices.getUserMedia(constraints)
          .then((stream) => {
            self.postMessage(stream);
          })
          .catch(function (err) {
            self.postMessage(err);
          });
    }
},false)