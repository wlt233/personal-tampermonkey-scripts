// ==UserScript==
// @name        oral_score_alerter
// @namespace   https://tqlwsl.moe
// @author      wlt233
// @description Alert the score of every question after you answered it
// @include     https://oralstu.shmeea.edu.cn:8001/web/models/ExamFormal/index.php*
// @version     1.0
// @grant       none
// @run-at      document-start
// ==/UserScript==

// code by wlt233 | v1.0 2020.12.13

// Credit: Edited from [WebSocket Logger] by esterTion  https://greasyfork.org/zh-CN/scripts/38248-websocket-logger

// 生活就像海洋，只有意志坚强的人，才能到达彼岸。
// This is an apple, I like apples. Apples are good for our health.


var scriptString = (function () {
  if (window.Proxy == undefined) return;
  var oldWS = window.WebSocket;
  var loggerIncrement = 1;
  function processDataForOutput(data) {
    if (typeof data == 'string') return data;
    else if (data.byteLength != undefined) {
      var val = { orig: data, uintarr: new Uint8Array(data) };
      var arr = [], i = 0;
      for (; i < data.byteLength; i++) {
        arr.push(val.uintarr[i]);
      }
      var hexarr = arr.map(function (i) { var s = i.toString(16); while (s.length < 2) s = '0' + s; return s; });
      val.hexstr = hexarr.join('');
      val.string = unescape(hexarr.map(function (i) { return '%' + i; }).join(''));
      val.b64str = btoa(val.string);
      try {
        val.string = decodeURIComponent(escape(val.string));
      } catch (e) { }
      return val;
    }
  }
  var proxyDesc = {
    set: function (target, prop, val) {
      if (prop == 'onmessage') {
        var oldMessage = val;
        val = function (e) {
          console.log(`#${target.WSLoggerId} Msg from server << `, processDataForOutput(e.data));
          var r = JSON.parse(processDataForOutput(e.data)).result;
          if (r.res == "eng.scne.aux.shanghai.V5.9" || r.res == "eng.prtl.aux.shanghai.V6.11") {
              var str3 = `整体 ${r.overall}\nOut of vocabulary ${JSON.stringify(r.oov_words)}\n`;
              if (r.tips) str3 += `Tips: ${r.tips}`;
            alert(str3);
          } else {
            var str1 = `整体 ${r.overall}\n发音 ${r.pron}\n完整 ${r.integrity}\n`;
            if (r.accuracy) str1 += `准确 ${r.accuracy}\n`;
            str1 += `流畅 ${r.fluency.overall|| r.fluency}\n语音 ${r.rhythm.overall || r.rhythm}\n`;
            alert(str1);
            var str2 = '';
            r.details.forEach(function (i) {
              if (i.char) str2 += i.char + ' ';
              if (i.text) str2 += i.text + ' ';
              str2 += `[${i.score}]\n`;
            });
            alert(str2);
          }
          oldMessage(e);
        };
      }
      return target[prop] = val;
    },
    get: function (target, prop) {
      var val = target[prop];
      if (prop == 'send') val = function (data) {
        //console.log(`#${target.WSLoggerId} Msg from client >> `, processDataForOutput(data));
        target.send(data);
      };
      else if (typeof val == 'function') val = val.bind(target);
      return val;
    }
  };
  WebSocket = new Proxy(oldWS, {
    construct: function (target, args, newTarget) {
      var obj = new target(args[0]);
      obj.WSLoggerId = loggerIncrement++;
      console.log(`WebSocket #${obj.WSLoggerId} created, connecting to`, args[0]);
      return new Proxy(obj, proxyDesc);
    }
  });
});

var observer = new MutationObserver(function () {
  if (document.head) {
    observer.disconnect();
    var script = document.createElement('script');
    script.innerHTML = '(' + scriptString + ')();';
    document.head.appendChild(script);
    script.remove();
  }
});
observer.observe(document, { subtree: true, childList: true });
