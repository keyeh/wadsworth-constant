var debug_messages = true;

function log(msg) {
  if (debug_messages) {
    console.log(msg);
  }
}

log("WW first line");

var videoElem;

var enqueueFindVideo = function enqueueFindVideo() {
  log("WW Enqueuing findVideo");
  setTimeout(findVideo, 250);
}

var findVideo = function findVideo() {
  videoElem = document.querySelector("video");

  if (videoElem) {
    log("WW Found video!");

    advanceVideoToWadsworth();
  } else {
    log('WW Video not found');
    enqueueFindVideo();
  }
}

var enqueueAdvanceVideoToWadsworth = function enqueueAdvanceVideoToWadsworth() {
  log("WW Enqueuing advanceVideoToWadsworth");
  setTimeout(advanceVideoToWadsworth, 250);
}

var advanceVideoToWadsworth = function advanceVideoToWadsworth() {
  var currentTime = videoElem.currentTime;
  var duration = videoElem.duration;

  if (isNaN(currentTime)) {
    log("WW but currentTime is NaN");
    enqueueAdvanceVideoToWadsworth();
  } else if (!currentTime) {
    log("WW but currentTime is falsey");
    enqueueAdvanceVideoToWadsworth();
  } else if (isNaN(duration)) {
    log("WW but duration is NaN");
    enqueueAdvanceVideoToWadsworth();
  } else if (!duration) {
    log("WW but duration is falsey");
    enqueueAdvanceVideoToWadsworth();
  }

  log("WW is at " + currentTime + " / " + duration + "s");

  var desired = duration * 0.3;

  log("WW setting currentTime to " + desired);

  videoElem.currentTime = desired;

  log("WW desired time set!");
}

enqueueFindVideo();

//
// var video = document.querySelector("video");
// log("XX video: " + video);
// if (video && video.currentTime <= 2) {
// log("XX adjusting time from: "+ video.currentTime + "/" + video.duration);
//
//     var startingTime = (video.duration * 0.3);
//     log("XX startingTime: " + startingTime);
//     video.currentTime = startingTime;
// }
