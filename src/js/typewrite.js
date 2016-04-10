var typewrite = (function (window, undefined) {
    function move(opts) {
      utils.animater.animate(opts);
    }
    return {
      move: move
    }
}(window));
