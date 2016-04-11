var typewrite = (function (window, undefined) {
    var $ = function (selector) {
      return document.querySelector(selector);
    },
        $$ = function (selectors) {
      return document.querySelectorAll(selectors);
    };
    function move(opts) {
      utils.animater.animate(opts);
    }
    // 扩展对象
    function extend(target, source) {
      var p;
      for (p in source) {
        if (source.hasOwnProperty(p)) {
          target[p] = source[p];
        }
      }
      return target;
    }
    function init(selector, opts) {
      var ele = $(selector);
      ele.style.cssText = "text-indent: 1em; transition: all ease-in 1s .1s; box-shadow: 0 0 6px #f66; border-radius: 5px;padding: 20px;font-family: '微软雅黑' arial; color: #fff; text-shadow: 1px 1px #ccc; background-color: #c33;position: absolute;left: 50%;top: 50%;max-width: 450px;transform: translate(-50%, -50%);"
      var str = ele.innerHTML || "You do not have to enter the value you want to set oh !!!";
      str =  str.replace('/<|>/g', '');
      opts = extend(opts, {
        step: function (delta) {
          ele.innerHTML = str.substring(0, Math.floor(str.length*delta));
        }
      });
      move(opts)
    }
    return {
      init: init
    }
}(window));
