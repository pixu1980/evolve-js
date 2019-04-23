window.requestAnimationFrame = window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.oRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function (callback) {
    const timeout = window.setTimeout(() => {
      callback();
      window.clearTimeout(timeout);
    }, 1000 / 60);
  };
