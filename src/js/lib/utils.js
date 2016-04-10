var utils = (function (window, undefined) {
  /**
   * 定义事件监听程序
   */
  function addHandler(ele, type, handle, fn) {
    try {
      ele.addEventListener(type, handle, false);
    } catch (ex) {
      try {
        ele.attachEvent('on'+type, handle);
      } catch (ex) {
        ele['on'+type] = handle;
      }
    }
    fn && fn();
  }

  /**
   * 运动框架 animater
   * animater.animate 进行实现运动的函数, 传入运动参数选项
   */
  var animater = {
    animate: function (options) {
      var that = this;
      var opts = {
        delay: options.delay || 10,
        duration: options.duration || 1000,
        delta: options.delta || that.delta.linear,
        step: options.step || null
      }
      var start = new Date();
      var timer = setInterval(function () {
        var timePassed = new Date() - start; // 运动进程 0% -> 100%
        var process = timePassed / opts.duration;

        process = process>1?1:process;
        var delta = opts.delta(process); // 获得元素在该进程所处的状态
        opts.step(delta); // 渲染
        if (process === 1) {
          clearInterval(timer); // Finshed, 结束运动
        }
      }, opts.delay || 10);
    },

    // delta获取状态函数
    delta: {
      // 1. 线性运动
      linear: function (process) {
        return process;
      },
      // 2. 抛物线运动, n>=2较好
      quad: function (process, n) {
        return Math.pow(process, n);
      },
      // 3. 弹性运动
      back: function (process, x) {
        return Math.pow(process, 2) * ((x+1)*process-x);
      }
    },

    // 参数选项
    setOpts: function (delay, duration, delta, step){
      delay = delay || 10;
      duration = duration || 1000,
      delta = delta || null;
      step = step || null;
      return {
        delay: delay,
        duration: duration,
        delta: delta,
        step: step
      };
    }
  };

  /**
   * 获取元素属性值
   */
  function getStyle(obj, attr) {
    return obj.currentStyle?obj.currentStyle[attr]:window.getComputedStyle(obj, false)[attr];
  }
  return {
    addHandler: addHandler,
    getStyle: getStyle,
    animater: animater
  };
}(window));
