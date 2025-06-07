window.detectLog = null;
const _wormup = {
  'BETAisSkinCustom'(_0x8d25c8) {
    var _0x46f5c4 = /[a-zA-Z]/;
    return typeof _0x8d25c8 === "string" && _0x46f5c4.test(_0x8d25c8);
  },
  'testSkinCustom': function (_0x1a6b75) {
    return _wormup.BETAisSkinCustom(_0x1a6b75) ? 0x22 || 0x21 : _0x1a6b75;
  },
  'testSkinMod': function (_0x32fe8d) {
    return _0x32fe8d >= 0x18f && _0x32fe8d < 0x3e7;
  },
  'testWear': function (_0x449b54) {
    return _0x449b54 >= 0x18f && _0x449b54 < 0x3e7;
  },
  'isNumberValid': function (_0x485b5b) {
    return _0x485b5b !== '' && _0x485b5b !== null && _0x485b5b !== undefined && !isNaN(_0x485b5b);
  },
  'validInput': function (_0x4dcabc) {
    if (!(_0x4dcabc >= 0x18f && _0x4dcabc < 0x3e7) && !_wormup.BETAisSkinCustom(_0x4dcabc)) {
      return _0x4dcabc;
    }
    try {
      let _0x4c9719 = $('#inputReplaceSkin').val();
      return encodeURI(_0x4c9719 !== '' && _0x4c9719 !== null && _0x4c9719 !== undefined && !isNaN(_0x4c9719) ? _0x4c9719 : 0x23);
    } catch (_0x57ee0a) {
      return encodeURI(0x23);
    }
  },
  'aload': false,
  'aId': 0x0
};
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
var hoisinhnhanh;
var PilotoAutomatico = null;
var isPlaying = false;
var pwrups = {};
window.keyMove = 0x51;
var theoEvents = {
  'eventoPrincipal': null,
  'joystick': {
    'positionMode': 'L',
    'checked': true,
    'size': 0x5a,
    'mode': 'dynamic',
    'position': {
      'left': '110px',
      'bottom': "110px"
    },
    'color': '#FF3B3B',
    'pxy': 0x6e
  }
};
var theoKzObjects = {
  'FB_UserID': '',
  'smoothCamera': 0.5,
  'eat_animation': 0.0025,
  'flag': 'https://i.imgur.com/EkbSd65.png',
  'PortionSize': localStorage.PotenciadorSize || 0x2,
  'PortionAura': localStorage.PotenciadorAura || 1.2,
  'PortionTransparent': 0.8,
  'FoodTransparent': 0.3,
  'ModeStremer': false,
  'ModeStremerbatop': false,
  'ModeStremeremoj': false,
  'ModeStremerheadshot': false,
  'ModeStremersaveheadshot': false,
  'arrow': false,
  'KeyCodeRespawn': localStorage.KeyRespawn || 0x52,
  'KeyCodeAutoMov': localStorage.KeyAutoMov || window.keyMove,
  'AbilityZ': false,
  'FoodShadow': localStorage.ComidaShadow || 0x2,
  'FoodSize': localStorage.ComidaSize || 0x2,
  'headshot': 0x0,
  'visibleSkin': [],
  'pL': [],
  'gamePad': theoEvents.joystick,
  'mobile': false,
  'loading': false,
  'kill': 0x0,
  'totalKills': 0x0,
  'totalHeadshots': 0x0,
  'adblock': false,
  'CLIENTE_ADMIN': 0x1,
  'CLIENTE_ACTIVO': 0x3,
  'CLIENTE_INACTIVO': 0x4
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== 'null') {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) {
    theoKzObjects[e] = t[e];
  }
}
theoKzObjects.loading = true;
const PhoneChecked = function () {
  let _0x2f050c = false;
  theoKzObjects.mobile = false;
  const _0x2c5755 = navigator.userAgent || navigator.vendor || window.opera;
  const _0x1b7f69 = ["android", 'bb', "meego", "avantgo", "bada", "blackberry", "blazer", "compal", "elaine", "fennec", "hiptop", "iemobile", "iphone", "ipod", 'iris', "kindle", "lge", "maemo", "midp", 'mmp', "mobile", "firefox", "netfront", "opera", "palm", "phone", "plucker", "pocket", "psp", 'symbian', "treo", "vodafone", 'wap', "windows ce", "xda", 'ipad', "playbook", "silk"];
  if (_0x1b7f69.some(_0x5a5f37 => _0x2c5755.toLowerCase().includes(_0x5a5f37))) {
    theoKzObjects.mobile = true;
    _0x2f050c = true;
  }
  return _0x2f050c;
};
const RechekingPhone = function () {
  let _0x4f5f49 = false;
  var _0xf0ab0d = navigator.userAgent || navigator.vendor || window.opera;
  const _0x39af6a = ["android", 'bb', 'meego', 'avantgo', "bada", "blackberry", "blazer", "compal", "elaine", 'fennec', "hiptop", "iemobile", "iphone", "ipod", "iris", "kindle", "lge", "maemo", 'midp', 'mmp', "mobile", "firefox", "netfront", "opera", "palm", "phone", "plucker", "pocket", "psp", 'symbian', "treo", "vodafone", "wap", "windows ce", 'xda', "ipad", "playbook", 'silk'];
  _0x4f5f49 = _0x39af6a.some(_0x5c2230 => _0xf0ab0d.toLowerCase().includes(_0x5c2230));
  return _0x4f5f49;
};
const loadJoy = function (_0x4d27d8) {
  let _0x270c67;
  try {
    console.log(_0x4d27d8);
    if (!theoKzObjects.gamePad) {
      theoKzObjects.gamePad = theoEvents.joystick;
    }
    if (RechekingPhone() && (_0x4d27d8 || theoKzObjects.gamePad.checked)) {
      _0x270c67 = nipplejs.create(theoKzObjects.gamePad);
      _0x270c67.on("move", function (_0x6ce4ed, _0x352ece) {
        null.sk = _0x352ece.angle.radian <= Math.PI ? -0x1 * _0x352ece.angle.radian : Math.PI - (_0x352ece.angle.radian - Math.PI);
        console.log(_0x352ece);
      });
    }
    return _0x270c67;
  } catch (_0xbb36ec) {
    console.log(_0xbb36ec);
  }
};
if (typeof PIXI === "undefined") {
  var script = document.createElement("script");
  script.src = "https://pixijs.download/release/pixi.js";
  script.type = "text/javascript";
  script.onload = function () {
    initializeGame();
  };
  document.head.appendChild(script);
} else {
  initializeGame();
}
function initializeGame() {
  let _0x133c86 = new PIXI.Application();
  document.body.appendChild(_0x133c86.view);
  let _0x4961e0 = new PIXI.Graphics();
  _0x4961e0.beginFill(0xff0000);
  _0x4961e0.drawCircle(0x190, 0x12c, 0x32);
  _0x4961e0.endFill();
  _0x133c86.stage.addChild(_0x4961e0);
}
let clientes = {
  'clientesVencidos': [],
  'clientesActivos': []
};
let servers = {
  'Api_listServer': []
};
async function loadUsers() {
  await fetch("https://wormateserkanconnect.github.io/wormateserkanconnect6/api/users.php").then(_0x4a08f4 => _0x4a08f4.json()).then(_0x3437eb => {
    if (_0x3437eb.success) {
      let _0x144aba = _0x3437eb.Users;
      const _0x4122bd = new Date();
      _0x4122bd.setHours(0x0, 0x0, 0x0, 0x0);
      clientes.clientesActivos = _0x144aba.filter(_0x312982 => {
        if (_0x312982.cliente_DateExpired) {
          const _0x1118b2 = new Date(_0x312982.cliente_DateExpired);
          return _0x1118b2 >= _0x4122bd;
        }
        return true;
      });
    } else {
      clientes = {
        'clientesVencidos': [],
        'clientesActivos': []
      };
      alert("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡");
    }
  })['catch'](_0x35c486 => {
    console.error("Error loading users:", _0x35c486);
    alert("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø§Ø«Ù†Ø§Ø¡ Ø§Ù„ØªØ­Ù…ÙŠÙ„ ÙŠØ±Ø¬ÙŠ ØªØ­Ø¯ÙŠØ« Ø§Ù„ØµÙØ­Ø© F5.");
  });
}
async function fetchServersWithRetry(_0x4e68ff, _0x45e154 = 0x3, _0x301f7c = 0x7d0) {
  for (let _0x48cb86 = 0x1; _0x48cb86 <= _0x45e154; _0x48cb86++) {
    try {
      const _0x541ada = await fetch(_0x4e68ff);
      if (!_0x541ada.ok) {
        throw new Error("HTTP error! status: " + _0x541ada.status);
      }
      const _0x444540 = await _0x541ada.json();
      return _0x444540;
    } catch (_0x472541) {
      console.error("Attempt " + _0x48cb86 + " failed: " + _0x472541.message);
      if (_0x48cb86 < _0x45e154) {
        await new Promise(_0xb662fc => setTimeout(_0xb662fc, _0x301f7c));
      } else {
        throw _0x472541;
      }
    }
  }
}
async function loadServers() {
  try {
    const _0x292b49 = await fetchServersWithRetry('https://wormateserkanconnect.github.io/wormateserkanconnect6/api/server.php');
    if (_0x292b49.success) {
      let _0x358435 = _0x292b49.servers;
      servers.Api_listServer = _0x358435.filter(_0x2e60d7 => _0x2e60d7.serverUrl);
    } else {
      servers = {
        'Api_listServer': []
      };
      alert("Desnler yÃ¼klenmedi baÅŸarÄ±sÄ±z !");
    }
  } catch (_0x4059ff) {
    console.error("Failed to load servers after multiple attempts:", _0x4059ff);
    servers = {
      'Api_listServer': []
    };
    alert("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª. ÙŠØ±Ø¬Ù‰ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù„Ø§Ø­Ù‚Ù‹Ø§.");
  }
}
loadUsers();
loadServers();
$('.store-view-cont').append("<div id=\"idReplaceSkin\"></div>");
var StoreSkinID = $("#idReplaceSkin");
const ctx = {
  'fontStyle': {
    'name': new PIXI.TextStyle({
      'fill': '#FFFF00',
      'fontSize': 0xc,
      'lineJoin': "round",
      'stroke': "#EFFA45",
      'fontFamily': "wormup",
      'fontWeight': "bold"
    }),
    'blanco': new PIXI.TextStyle({
      'align': "center",
      'fill': '#FFF',
      'fontSize': 0xc,
      'lineJoin': "round",
      'stroke': "#FFF",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'morado': new PIXI.TextStyle({
      'align': 'center',
      'fill': "#FFFF00",
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': "#FAA845",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': 'wormup',
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'morado1': new PIXI.TextStyle({
      'align': "center",
      'fill': '#FFF',
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': "#FAA845",
      'strokeThickness': 0x1,
      'whiteSpace': 'normal',
      'fontFamily': 'wormup',
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'amarillo': new PIXI.TextStyle({
      'align': "center",
      'fill': "#FFFF00",
      'fontSize': 0xa,
      'lineJoin': 'round',
      'stroke': "#FAA845",
      'strokeThickness': 0x1,
      'whiteSpace': 'normal',
      'fontFamily': "wormup",
      'fontWeight': 'bold',
      'wordWrap': true
    }),
    'amarillo1': new PIXI.TextStyle({
      'align': "center",
      'fill': '#FFF',
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': '#FAA845',
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': "wormup",
      'fontWeight': 'bold',
      'wordWrap': true
    }),
    'keysColor': new PIXI.TextStyle({
      'align': "center",
      'fill': "#fff009",
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': "#fff009",
      'strokeThickness': 0x1,
      'whiteSpace': 'normal',
      'fontWeight': "bold",
      'fontFamily': "wormup",
      'wordWrap': true
    })
  }
};
ctx.clock = PIXI.Sprite.fromImage("https://wormateserkanconnect.github.io/wormateserkanconnect6/images/clock.png");
ctx.clock.width = 0x64;
ctx.clock.height = 0x64;
ctx.clock.x = -0x32;
ctx.clock.y = -0x32;
const app = new PIXI.Application({
  'width': window.innerWidth,
  'height': window.innerHeight
});
document.body.appendChild(app.view);
ctx.hoisinhnhanh = PIXI.Sprite.from("https://i.imgur.com/QZfm7vv.png");
ctx.hoisinhnhanh.width = 0x17;
ctx.hoisinhnhanh.height = 0x17;
ctx.top10sv = PIXI.Sprite.fromImage("https://i.imgur.com/UbRiUYr.png");
ctx.top10sv.height = 0x19;
ctx.top10sv.width = 0x64;
ctx.top10sv.x = 0x3c;
ctx.top10sv.y = -0x32;
ctx.quaytron = PIXI.Sprite.from("https://i.imgur.com/a7lVOy5.png");
ctx.quaytron.width = -0x17;
ctx.quaytron.height = -0x17;
app.stage.addChild(ctx.hoisinhnhanh);
app.stage.addChild(ctx.quaytron);
function updateSpritePositions() {
  const _0x2bc109 = -0x5a;
  ctx.hoisinhnhanh.x = window.innerWidth - ctx.hoisinhnhanh.width - 0x12c;
  ctx.hoisinhnhanh.y = _0x2bc109;
  ctx.quaytron.x = ctx.hoisinhnhanh.x - ctx.quaytron.width - 0xa;
  ctx.quaytron.y = _0x2bc109;
}
updateSpritePositions();
window.addEventListener("resize", () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
  updateSpritePositions();
});
ctx.value_server = new PIXI.Text("WFT", ctx.fontStyle.name);
ctx.value_server.x = 0x11;
ctx.value_server.y = 0x3;
ctx.label_hs = new PIXI.Text('HS', ctx.fontStyle.amarillo);
ctx.value1_hs = new PIXI.Text('0', ctx.fontStyle.amarillo);
ctx.label_kill = new PIXI.Text('KL', ctx.fontStyle.morado);
ctx.value1_kill = new PIXI.Text('0', ctx.fontStyle.morado);
ctx.value2_hs = new PIXI.Text('', ctx.fontStyle.amarillo1);
ctx.value2_kill = new PIXI.Text('', ctx.fontStyle.morado1);
ctx.label_kill.x = 0x42;
ctx.label_kill.y = 0x7f;
ctx.label_hs.x = 0xb;
ctx.label_hs.y = 0x7f;
ctx.value1_kill.x = 0x42;
ctx.value1_kill.y = 0x8e;
ctx.value1_hs.x = 0xb;
ctx.value1_hs.y = 0x8e;
ctx.value2_kill.x = 0x42;
ctx.value2_kill.y = 0x9e;
ctx.value2_hs.x = 0xb;
ctx.value2_hs.y = 0x9e;
ctx.containerCountInfo = new PIXI.Container();
ctx.containerCountInfo.x = -0x2d;
ctx.containerCountInfo.y = -0x4c;
ctx.containerCountInfo.addChild(ctx.value_server);
ctx.containerCountInfo.addChild(ctx.label_hs);
ctx.containerCountInfo.addChild(ctx.value1_hs);
ctx.containerCountInfo.addChild(ctx.value2_hs);
ctx.containerCountInfo.addChild(ctx.label_kill);
ctx.containerCountInfo.addChild(ctx.value1_kill);
ctx.containerCountInfo.addChild(ctx.value2_kill);
ctx.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
ctx.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png");
ctx.onclickServer = PIXI.Texture.fromImage('https://i.imgur.com/EkbSd65.png');
ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase);
ctx.containerImgS.anchor.set(0.5);
ctx.containerImgS.x = 0x0;
ctx.containerImgS.y = 0x12;
ctx.containerImgS.width = 0x19;
ctx.containerImgS.height = 0x14;
ctx.borderImg = new PIXI.Sprite(ctx.borderurl);
ctx.borderImg.anchor.set(0.5);
ctx.borderImg.x = -0x2;
ctx.borderImg.y = 0x4e;
ctx.borderImg.width = 0x6e;
ctx.borderImg.height = 0x3c;
ctx.setServer = function (_0x16191e) {
  ctx.value_server.text = _0x16191e || "WFT";
};
ctx.setCountGame = function (_0x438f29, _0x3bee9c, _0x6fd4ef, _0x28ade9) {
  ctx.value1_hs.text = _0x3bee9c;
  ctx.value1_kill.text = _0x438f29;
};
"use strict";
var _typeof = typeof Symbol == 'function' && typeof Symbol.iterator == "symbol" ? function (_0x25310b) {
  return typeof _0x25310b;
} : function (_0x304eb3) {
  return _0x304eb3 && typeof Symbol == "function" && _0x304eb3.constructor === Symbol && _0x304eb3 !== Symbol.prototype ? 'symbol' : typeof _0x304eb3;
};
var GoogleAuth;
(function () {
  try {
    console.log(function (_0x25b2f3, _0x1ddd9d) {
      for (var _0x1531f3 = 0x0; _0x1531f3 < _0x1ddd9d.length; _0x1531f3 += 0x2) {
        _0x25b2f3 = _0x25b2f3.replaceAll(_0x1ddd9d[_0x1531f3], _0x1ddd9d[_0x1531f3 + 0x1]);
      }
      return _0x25b2f3;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ['W', 'hhhh', 'Q', "ssss", 'M', "mmm", 'Y', "yyy", 'H', 'hh', 'S', 'ss', '6', "      ", '3', "   ", '2', "  ", 'N', "\n"]));
  } catch (_0x1483a9) {}
})();
window.addEventListener("load", function () {
  function _0x399115() {
    (function (_0x20494c, _0x54274f, _0x23926a) {
      function _0x117f86() {
        if (typeof _0x54274f.createElement != 'function') {
          return _0x54274f.createElement(arguments[0x0]);
        } else {
          return _0x464cba ? _0x54274f.createElementNS.call(_0x54274f, 'http://www.w3.org/2000/svg', arguments[0x0]) : _0x54274f.createElement.apply(_0x54274f, arguments);
        }
      }
      var _0x207eb8 = [];
      var _0x367a72 = [];
      var _0x1f2699 = {
        '_version': "3.3.1",
        '_config': {
          'classPrefix': '',
          'enableClasses': true,
          'enableJSClass': true,
          'usePrefixes': true
        },
        '_q': [],
        'on': function (_0x3c7655, _0x136d6c) {
          var _0x1c6d93 = this;
          setTimeout(function () {
            _0x136d6c(_0x1c6d93[_0x3c7655]);
          }, 0x0);
        },
        'addTest': function (_0x2827e6, _0x3325b4, _0xf879fa) {
          _0x367a72.push({
            'name': _0x2827e6,
            'fn': _0x3325b4,
            'options': _0xf879fa
          });
        },
        'addAsyncTest': function (_0x5b4f11) {
          _0x367a72.push({
            'name': null,
            'fn': _0x5b4f11
          });
        }
      };
      function _0x3b430d() {}
      _0x3b430d.prototype = _0x1f2699;
      _0x3b430d = new _0x3b430d();
      var _0x30b101 = false;
      try {
        _0x30b101 = "WebSocket" in _0x20494c && _0x20494c.WebSocket.CLOSING === 0x2;
      } catch (_0x35c59b) {}
      _0x3b430d.addTest("websockets", _0x30b101);
      var _0x2c57ea = _0x54274f.documentElement;
      var _0x464cba = _0x2c57ea.nodeName.toLowerCase() === "svg";
      _0x3b430d.addTest("canvas", function () {
        var _0xf7aa76 = _0x117f86("canvas");
        return !!_0xf7aa76.getContext && !!_0xf7aa76.getContext('2d');
      });
      _0x3b430d.addTest('canvastext', function () {
        return _0x3b430d.canvas !== false && typeof _0x117f86('canvas').getContext('2d').fillText == 'function';
      });
      (function () {
        var _0x154eb2;
        var _0x4d3cdd;
        var _0x151c56;
        var _0xe733f1;
        var _0x313e26;
        var _0x14e0dd;
        var _0x244ed7;
        for (var _0x28af0a in _0x367a72) {
          if (_0x367a72.hasOwnProperty(_0x28af0a)) {
            _0x154eb2 = [];
            _0x4d3cdd = _0x367a72[_0x28af0a];
            if (_0x4d3cdd.name && (_0x154eb2.push(_0x4d3cdd.name.toLowerCase()), _0x4d3cdd.options && _0x4d3cdd.options.aliases && _0x4d3cdd.options.aliases.length)) {
              for (_0x151c56 = 0x0; _0x151c56 < _0x4d3cdd.options.aliases.length; _0x151c56++) {
                _0x154eb2.push(_0x4d3cdd.options.aliases[_0x151c56].toLowerCase());
              }
            }
            _0xe733f1 = (_0x4d3cdd.fn === _0x23926a ? "undefined" : _typeof(_0x4d3cdd.fn)) === "function" ? _0x4d3cdd.fn() : _0x4d3cdd.fn;
            _0x313e26 = 0x0;
            for (; _0x313e26 < _0x154eb2.length; _0x313e26++) {
              _0x14e0dd = _0x154eb2[_0x313e26];
              _0x244ed7 = _0x14e0dd.split('.');
              if (_0x244ed7.length === 0x1) {
                _0x3b430d[_0x244ed7[0x0]] = _0xe733f1;
              } else {
                if (!!_0x3b430d[_0x244ed7[0x0]] && !(_0x3b430d[_0x244ed7[0x0]] instanceof Boolean)) {
                  _0x3b430d[_0x244ed7[0x0]] = new Boolean(_0x3b430d[_0x244ed7[0x0]]);
                }
                _0x3b430d[_0x244ed7[0x0]][_0x244ed7[0x1]] = _0xe733f1;
              }
              _0x207eb8.push((_0xe733f1 ? '' : "no-") + _0x244ed7.join('-'));
            }
          }
        }
      })();
      (function (_0x52634d) {
        var _0xea4c63 = _0x2c57ea.className;
        var _0x1d3a20 = _0x3b430d._config.classPrefix || '';
        if (_0x464cba) {
          _0xea4c63 = _0xea4c63.baseVal;
        }
        if (_0x3b430d._config.enableJSClass) {
          var _0x5ddfff = new RegExp("(^|\\s)" + _0x1d3a20 + "no-js(\\s|$)");
          _0xea4c63 = _0xea4c63.replace(_0x5ddfff, '$1' + _0x1d3a20 + 'js$2');
        }
        if (_0x3b430d._config.enableClasses) {
          _0xea4c63 += " " + _0x1d3a20 + _0x52634d.join(" " + _0x1d3a20);
          if (_0x464cba) {
            _0x2c57ea.className.baseVal = _0xea4c63;
          } else {
            _0x2c57ea.className = _0xea4c63;
          }
        }
      })(_0x207eb8);
      delete _0x1f2699.addTest;
      delete _0x1f2699.addAsyncTest;
      for (var _0x3b338a = 0x0; _0x3b338a < _0x3b430d._q.length; _0x3b338a++) {
        _0x3b430d._q[_0x3b338a]();
      }
      _0x20494c.Modernizr = _0x3b430d;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function _0x5e496a(_0x5c4494, _0x1c7490, _0x1d10f1) {
    const _0x53bff3 = [0x26, 0x26, 0x26, 0x78, 0x26, 0x19, 0x26];
    const _0x1f044a = ["#FFD500", '#FFC75A', "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let _0x3bf2aa = _0x53bff3[_0x1c7490] - parseInt((_0x1d10f1 == 0.99 ? 0x1 : _0x1d10f1) * _0x53bff3[_0x1c7490] / 0x1);
    const _0x5ccda0 = new PIXI.TextStyle({
      'align': "center",
      'fill': _0x1f044a[_0x1c7490],
      'fontSize': 0x19,
      'lineJoin': "round",
      'whiteSpace': "normal",
      'wordWrap': true,
      'dropShadow': true,
      'dropShadowBlur': 0x6,
      'fontFamily': "wormup",
      'fontWeight': "bold"
    });
    let _0x373004 = 'pwr_clock' + _0x1c7490;
    if (!pwrups[_0x373004] && _0x53bff3[_0x1c7490] === _0x3bf2aa) {
      pwrups[_0x373004] = new PIXI.Text(_0x3bf2aa, _0x5ccda0);
      pwrups[_0x373004].y = 0x3d;
      _0x5c4494.Tf[_0x1c7490].addChild(pwrups[_0x373004]);
    }
    if (pwrups[_0x373004]) {
      pwrups[_0x373004].x = _0x3bf2aa >= 0x64 ? 0xb : _0x3bf2aa >= 0xa ? 0x12 : 0x1a;
      pwrups[_0x373004].text = _0x3bf2aa;
      if (_0x3bf2aa === 0x0) {
        delete pwrups[_0x373004];
      }
    }
  }
  document.getElementById('game-wrap').style.display = "block";
  if (!_0x399115()) {
    document.getElementById("error-view").style.display = 'block';
    return;
  }
  (function () {
    function _0xdbcc88(_0x439269) {
      const _0x1b7c53 = _0x439269 + '=';
      const _0x27e52f = document.cookie.split(';');
      for (let _0x245743 = 0x0; _0x245743 < _0x27e52f.length; _0x245743++) {
        let _0x454da9 = _0x27e52f[_0x245743];
        while (_0x454da9.charAt(0x0) === " ") {
          _0x454da9 = _0x454da9.substring(0x1);
        }
        if (_0x454da9.indexOf(_0x1b7c53) === 0x0) {
          return _0x454da9.substring(_0x1b7c53.length, _0x454da9.length);
        }
      }
      return '';
    }
    function _0x184caa(_0x2a3983, _0x3a4d42, _0x5e8149) {
      var _0x1fe4bb = new Date();
      _0x1fe4bb.setTime(_0x1fe4bb.getTime() + _0x5e8149 * 0x5265c00);
      var _0x451986 = "expires=" + _0x1fe4bb.toUTCString();
      document.cookie = _0x2a3983 + '=' + _0x3a4d42 + "; " + _0x451986 + "; path=/";
    }
    function _0x24c040(_0x12b588) {
      if (_0x12b588[_0x514127]) {
        return _0x12b588[_0x514127];
      } else {
        return _0x12b588.en ? _0x12b588.en : _0x12b588.x;
      }
    }
    function _0x391bcd(_0x217a7a) {
      var _0x444bfa = (Math.floor(_0x217a7a) % 0x3c).toString();
      var _0x346065 = (Math.floor(_0x217a7a / 0x3c) % 0x3c).toString();
      var _0x2b89c9 = (Math.floor(_0x217a7a / 0xe10) % 0x18).toString();
      var _0xae7919 = Math.floor(_0x217a7a / 0x15180).toString();
      var _0x5b11a3 = window.I18N_MESSAGES['util.time.days'];
      var _0x3232dc = window.I18N_MESSAGES["util.time.hours"];
      var _0x291ba6 = window.I18N_MESSAGES["util.time.min"];
      var _0x419ef2 = window.I18N_MESSAGES['util.time.sec'];
      if (_0xae7919 > 0x0) {
        return _0xae7919 + " " + _0x5b11a3 + " " + _0x2b89c9 + " " + _0x3232dc + " " + _0x346065 + " " + _0x291ba6 + " " + _0x444bfa + " " + _0x419ef2;
      } else {
        if (_0x2b89c9 > 0x0) {
          return _0x2b89c9 + " " + _0x3232dc + " " + _0x346065 + " " + _0x291ba6 + " " + _0x444bfa + " " + _0x419ef2;
        } else {
          return _0x346065 > 0x0 ? _0x346065 + " " + _0x291ba6 + " " + _0x444bfa + " " + _0x419ef2 : _0x444bfa + " " + _0x419ef2;
        }
      }
    }
    function _0x29e70f(_0x27b424, _0x3060d3, _0x238fb0) {
      var _0x265e91 = document.createElement("script");
      var _0x682bab = true;
      if (_0x3060d3) {
        _0x265e91.id = _0x3060d3;
      }
      _0x265e91.async = "async";
      _0x265e91.type = "text/javascript";
      _0x265e91.src = _0x27b424;
      if (_0x238fb0) {
        _0x265e91.onload = _0x265e91.onreadystatechange = function () {
          _0x682bab = false;
          try {
            _0x238fb0();
          } catch (_0x3f4f5b) {
            console.log(_0x3f4f5b);
          }
          _0x265e91.onload = _0x265e91.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName('head')[0x0]).appendChild(_0x265e91);
    }
    function _0x51baad(_0x3a755f, _0xbfa6b7) {
      _0xbfa6b7.prototype = Object.create(_0x3a755f.prototype);
      _0xbfa6b7.prototype.constructor = _0xbfa6b7;
      _0xbfa6b7.parent = _0x3a755f;
      return _0xbfa6b7;
    }
    function _0x2e901b(_0x444488) {
      _0x444488 %= _0x4b4c80;
      return _0x444488 < 0x0 ? _0x444488 + _0x4b4c80 : _0x444488;
    }
    function _0x1b3a69(_0x41410a, _0x33b0fe, _0x3b3bed) {
      if (_0x41410a > _0x3b3bed) {
        return _0x3b3bed;
      } else {
        if (_0x41410a < _0x33b0fe) {
          return _0x33b0fe;
        } else {
          return Number.isFinite(_0x41410a) ? _0x41410a : (_0x33b0fe + _0x3b3bed) * 0.5;
        }
      }
    }
    function _0x4d27c2(_0x39f499, _0x2eed42, _0x57f948, _0xac3586) {
      var _0x5c6e0e = _0x2eed42 + _0xac3586;
      if (_0x39f499 == null) {
        throw new TypeError("this is null or not defined");
      }
      var _0x2d8ae8 = _0x39f499.length >>> 0x0;
      var _0x16b2b8 = _0x57f948 >> 0x0;
      var _0x14d8d6 = _0x16b2b8 < 0x0 ? Math.max(_0x2d8ae8 + _0x16b2b8, 0x0) : Math.min(_0x16b2b8, _0x2d8ae8);
      var _0x33d3b1 = _0x2eed42 >> 0x0;
      var _0xf40e8d = _0x33d3b1 < 0x0 ? Math.max(_0x2d8ae8 + _0x33d3b1, 0x0) : Math.min(_0x33d3b1, _0x2d8ae8);
      var _0x2f9c6d = _0x5c6e0e === undefined ? _0x2d8ae8 : _0x5c6e0e >> 0x0;
      var _0x3062fb = _0x2f9c6d < 0x0 ? Math.max(_0x2d8ae8 + _0x2f9c6d, 0x0) : Math.min(_0x2f9c6d, _0x2d8ae8);
      var _0x11c908 = Math.min(_0x3062fb - _0xf40e8d, _0x2d8ae8 - _0x14d8d6);
      var _0xce4b66 = 0x1;
      for (_0xf40e8d < _0x14d8d6 && _0x14d8d6 < _0xf40e8d + _0x11c908 && (_0xce4b66 = -0x1, _0xf40e8d += _0x11c908 - 0x1, _0x14d8d6 += _0x11c908 - 0x1); _0x11c908 > 0x0;) {
        if (_0xf40e8d in _0x39f499) {
          _0x39f499[_0x14d8d6] = _0x39f499[_0xf40e8d];
        } else {
          delete _0x39f499[_0x14d8d6];
        }
        _0xf40e8d += _0xce4b66;
        _0x14d8d6 += _0xce4b66;
        _0x11c908--;
      }
      return _0x39f499;
    }
    function _0x452dbd(_0x10f22c) {
      if (_0x10f22c.parent != null) {
        _0x10f22c.parent.removeChild(_0x10f22c);
      }
    }
    function _0x539116(_0x4c3e8c, _0x2d8598, _0x233654) {
      var _0x5a25f5 = (0x1 - Math.abs(_0x233654 * 0x2 - 0x1)) * _0x2d8598;
      var _0x40fed0 = _0x5a25f5 * (0x1 - Math.abs(_0x4c3e8c / 0x3c % 0x2 - 0x1));
      var _0x1e904d = _0x233654 - _0x5a25f5 / 0x2;
      if (_0x4c3e8c >= 0x0 && _0x4c3e8c < 0x3c) {
        return [_0x1e904d + _0x5a25f5, _0x1e904d + _0x40fed0, _0x1e904d + 0x0];
      } else {
        if (_0x4c3e8c >= 0x3c && _0x4c3e8c < 0x78) {
          return [_0x1e904d + _0x40fed0, _0x1e904d + _0x5a25f5, _0x1e904d + 0x0];
        } else {
          if (_0x4c3e8c >= 0x78 && _0x4c3e8c < 0xb4) {
            return [_0x1e904d + 0x0, _0x1e904d + _0x5a25f5, _0x1e904d + _0x40fed0];
          } else {
            if (_0x4c3e8c >= 0xb4 && _0x4c3e8c < 0xf0) {
              return [_0x1e904d + 0x0, _0x1e904d + _0x40fed0, _0x1e904d + _0x5a25f5];
            } else {
              return _0x4c3e8c >= 0xf0 && _0x4c3e8c < 0x12c ? [_0x1e904d + _0x40fed0, _0x1e904d + 0x0, _0x1e904d + _0x5a25f5] : [_0x1e904d + _0x5a25f5, _0x1e904d + 0x0, _0x1e904d + _0x40fed0];
            }
          }
        }
      }
    }
    function _0x2b03cf() {
      function _0x260c4a() {
        $('#adbl-1').text(window.I18N_MESSAGES["index.game.antiadblocker.msg1"]);
        $("#adbl-2").text(window.I18N_MESSAGES['index.game.antiadblocker.msg2']);
        $("#adbl-3").text(window.I18N_MESSAGES['index.game.antiadblocker.msg3']);
        $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace('{0}', 0xa));
        $("#adbl-continue span").text(window.I18N_MESSAGES['index.game.antiadblocker.continue']);
        $("#adbl-continue").hide();
        $("#JDHnkHtYwyXyVgG9").fadeIn(0x1f4);
        var _0x134bc1 = 0x5;
        for (var _0x1283d3 = 0x0; _0x1283d3 < 0x5; _0x1283d3++) {
          setTimeout(function () {
            _0x134bc1--;
            $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace('{0}', _0x134bc1));
            if (_0x134bc1 === 0x0) {
              console.log('aipAABC');
              try {
                ga("send", 'event', "antiadblocker", window.runtimeHash + "_complete");
              } catch (_0x190073) {}
              $("#adbl-continue").fadeIn(0xc8);
            }
          }, (_0x1283d3 + 0x1) * 0x3e8);
        }
      }
      var _0xdd0bde = false;
      function _0xc8e2e4() {}
      var _0x47ec9a = {};
      $("#adbl-continue").click(function () {
        $("#JDHnkHtYwyXyVgG9").fadeOut(0x1f4);
        _0xc8e2e4(false);
      });
      _0x47ec9a.a = function (_0x124f54) {
        _0xc8e2e4 = _0x124f54;
        if (!_0xdd0bde) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                'AD_WIDTH': 0x3c0,
                'AD_HEIGHT': 0x21c,
                'AD_FULLSCREEN': true,
                'AD_CENTERPLAYER': false,
                'LOADING_TEXT': "loading advertisement",
                'PREROLL_ELEM': function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                'AIP_COMPLETE': function (_0x184cb1) {
                  console.log('aipC');
                  _0xc8e2e4(true);
                  $('#1eaom01c3pxu9wd3').hide();
                  $("#JDHnkHtYwyXyVgG9").hide();
                  try {
                    ga("send", "event", 'preroll', window.runtimeHash + "_complete");
                  } catch (_0x3329bd) {}
                },
                'AIP_REMOVE': function () {}
              });
            });
            _0xdd0bde = true;
          } catch (_0x14ec24) {}
        }
      };
      _0x47ec9a.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + '_request');
          } catch (_0x250791) {}
          _0x260c4a();
        } else {
          console.log("aipAABS");
          try {
            ga('send', 'event', 'antiadblocker', window.runtimeHash + '_start');
          } catch (_0x4c0cdc) {}
          _0x260c4a();
        }
      };
      return _0x47ec9a;
    }
    function _0x5d8855(_0x1ebb5f, _0x32e476) {
      var _0x2fee17 = $('#' + _0x1ebb5f);
      var _0x40128f = {};
      var _0xe26ef0 = false;
      _0x40128f.a = function () {
        if (!_0xe26ef0) {
          _0x2fee17.empty();
          _0x2fee17.append("<div id='" + _0x32e476 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (_0x20eb44) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x32e476);
            });
            _0xe26ef0 = true;
          } catch (_0x9a2a75) {}
        }
      };
      _0x40128f.c = function () {
        try {
          try {
            ga("send", "event", 'banner', window.runtimeHash + "_refresh");
          } catch (_0x1c3932) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(_0x32e476);
          });
        } catch (_0x35b9c7) {}
      };
      return _0x40128f;
    }
    function _0x90d4e2() {
      function _0x10024c(_0x2d5326) {
        var _0x2e4bdc = _0x2d5326 + Math.floor(Math.random() * 0xffff) * 0x25;
        _0x184caa(_0x1a491c.d, _0x2e4bdc, 0x1e);
      }
      return function () {
        var _0x5419e7 = parseInt(_0xdbcc88(_0x1a491c.d)) % 0x25;
        console.log("init1 pSC: " + _0x5419e7);
        if (!(_0x5419e7 >= 0x0) || !(_0x5419e7 < _0x2f66a1.e)) {
          _0x5419e7 = Math.max(0x0, _0x2f66a1.e - 0x2);
          console.log("init2 pSC: " + _0x5419e7);
        }
        var _0x306add = {};
        _0x2ba968 = _0x306add;
        _0x306add.f = _0x2f66a1;
        _0x306add.g = false;
        _0x306add.i = Date.now();
        _0x306add.j = 0x0;
        _0x306add.k = 0x0;
        _0x306add.l = null;
        _0x306add.m = _0x27f1d2;
        _0x306add.n = _0x514127;
        _0x306add.o = null;
        _0x306add.p = null;
        _0x306add.q = null;
        _0x306add.r = null;
        _0x306add.s = null;
        _0x306add.t = null;
        _0x306add.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (_0xffccf4) {
              if (_0xffccf4.coords !== undefined) {
                var _0x338dfa = _0xffccf4.coords;
                if (_0x338dfa.latitude !== undefined && _0x338dfa.longitude !== undefined) {
                  _0x306add.l = _0xffccf4;
                }
              }
            }, function (_0x580b67) {});
          }
        } catch (_0x42b8cc) {}
        _0x306add.v = function () {
          _0x306add.p = new _0x4ccf7f();
          _0x306add.q = new _0x3fc8bb();
          _0x306add.r = new _0x39bb1b();
          _0x306add.s = new _0x11a2e7();
          _0x306add.t = new _0x29260f();
          _0x306add.u = new _0x2fb666();
          _0x306add.o = new _0x4e85c1();
          _0x306add.o.z = new _0x2ff51b(_0x306add.o);
          _0x306add.a();
        };
        _0x306add.a = function () {
          try {
            ga('send', "event", 'app', window.runtimeHash + "_init");
          } catch (_0x32a936) {}
          _0x306add.o.A = function () {
            _0x306add.o.B();
          };
          _0x306add.o.C = function () {
            var _0x3aa754 = _0x306add.s.F.D();
            try {
              ga("send", 'event', 'game', window.runtimeHash + "_start", _0x3aa754);
            } catch (_0x5373dd) {}
            _0x306add.r.G(_0x39bb1b.AudioState.H);
            _0x306add.s.I(_0x306add.s.H.J());
          };
          _0x306add.o.B = function () {
            try {
              ga("send", 'event', "game", window.runtimeHash + "_end");
            } catch (_0x205ec6) {}
            if ($("body").height() >= 0x1ae) {
              _0x306add.f.K.c();
            }
            _0x306add.p.L();
            (function () {
              var _0x507b7b = Math.floor(_0x306add.o.N.M);
              var _0x24233f = _0x306add.o.O;
              if (_0x306add.u.P()) {
                _0x306add.u.Q(function () {
                  _0x306add.R(_0x507b7b, _0x24233f);
                });
              } else {
                _0x306add.R(_0x507b7b, _0x24233f);
              }
            })();
          };
          _0x306add.o.S = function (_0x278171) {
            _0x278171(_0x306add.s.H.T(), _0x306add.s.H.U());
          };
          _0x306add.u.V(function () {
            if (_0x306add.p.W) {
              _0x306add.r.G(_0x39bb1b.AudioState.F);
              _0x306add.s.I(_0x306add.s.F);
            }
            if (_0x306add.u.P()) {
              try {
                var _0x380db8 = _0x306add.u.X();
                ga("set", "userId", _0x380db8);
              } catch (_0xffe11e) {}
            }
            if (_0x306add.Y() && _0x306add.u.P() && !_0x306add.u.Z()) {
              _0x306add.$(false, false);
              _0x306add.s.aa._(new _0x46a3ee());
            } else {
              _0x306add.ba(true);
            }
          });
          _0x306add.p.ca(function () {
            _0x306add.r.G(_0x39bb1b.AudioState.F);
            _0x306add.s.I(_0x306add.s.F);
          });
          _0x306add.q.a(function () {
            _0x306add.o.a();
            _0x306add.r.a();
            _0x306add.s.a();
            _0x306add.t.a();
            _0x306add.p.a();
            _0x306add.u.a();
            if (_0x306add.Y() && !_0x306add.Z()) {
              _0x306add.s.aa._(new _0x46a3ee());
            } else {
              _0x306add.ba(true);
            }
          });
        };
        _0x306add.da = function (_0x4370dd) {
          if (_0x306add.u.P()) {
            var _0x2a3fb1 = _0x306add.u.ea();
            $.get("https://gateway.wormate.io/pub/wuid/" + _0x2a3fb1 + "/consent/change?value=" + encodeURI(_0x4370dd), function (_0x56e6d7) {});
          }
        };
        _0x306add.fa = function (_0x20b084) {
          var _0x108ef3 = _0x306add.u.ea();
          var _0x4062a4 = _0x306add.s.F.D();
          var _0x440d66 = _0x306add.s.F.ga();
          var _0x47c78e = _0x306add.t.ha(_0x45dfa9.ia);
          var _0x38c73d = _0x306add.t.ha(_0x45dfa9.ja);
          var _0x2d4d46 = _0x306add.t.ha(_0x45dfa9.ka);
          var _0x27aa21 = _0x306add.t.ha(_0x45dfa9.la);
          var _0x43d478 = _0x306add.t.ha(_0x45dfa9.ma);
          var _0x285667 = 0x0;
          if (_0x306add.l != null) {
            var _0x452c1d = _0x306add.l.coords.latitude;
            var _0x393337 = _0x306add.l.coords.longitude;
            _0x285667 = Math.max(0x0, Math.min(0x7fff, (_0x452c1d + 0x5a) / 0xb4 * 0x8000)) << 0x1 | 0x1 | Math.max(0x0, Math.min(0xffff, (_0x393337 + 0xb4) / 0x168 * 0x10000)) << 0x10;
          }
          if (_wormup.BETAisSkinCustom(_0x47c78e)) {} else {
            _0x47c78e;
          }
          let _0x5acfd4 = 'U_' + (_0x47c78e > 0x270f ? "0000" : _0x47c78e.toString().padStart(0x4, 0x0)) + (_0x43d478 > 0x3e7 ? '000' : _0x43d478.toString().padStart(0x3, 0x0)) + (_0x38c73d > 0x3e7 ? '000' : _0x38c73d.toString().padStart(0x3, 0x0)) + (_0x2d4d46 > 0x3e7 ? "000" : _0x2d4d46.toString().padStart(0x3, 0x0));
          _0x440d66 = (_0x440d66.length >= 0x20 ? _0x440d66.substr(0x0, 0x10) : _0x440d66.substr(0x0, 0x10).padEnd(0x10, '_')) + _0x5acfd4;
          _0x440d66 = _0x440d66.trim();
          console.log(_0x440d66);
          var _0x201d87 = "https://gateway.wormate.io/pub/wuid/" + _0x108ef3 + "/start?gameMode=" + encodeURI(_0x4062a4) + "&gh=" + _0x285667 + "&nickname=" + encodeURI(_0x440d66) + "&skinId=" + _wormup.validInput(_0x47c78e) + "&eyesId=" + encodeURI(_0x38c73d) + "&mouthId=" + encodeURI(_0x2d4d46) + "&glassesId=" + encodeURI(_0x27aa21) + '&hatId=' + encodeURI(_0x43d478);
          console.log("urlRequest: " + _0x201d87);
          $.get(_0x201d87, function (_0x174fa5) {
            var _0x2454b0 = _0x174fa5.server_url;
            _0x20b084(_0x2454b0);
          });
        };
        _0x306add.na = function () {
          _0x5419e7++;
          console.log("start pSC: " + _0x5419e7);
          if (!_0x306add.f.oa && _0x5419e7 >= _0x306add.f.e) {
            _0x306add.s.I(_0x306add.s.pa);
            _0x306add.r.G(_0x39bb1b.AudioState.qa);
            _0x306add.f.ra.b();
          } else {
            _0x10024c(_0x5419e7);
            _0x306add.sa();
          }
        };
        _0x306add.sa = function (_0x2fb111) {
          if (_0x306add.o.ta()) {
            _0x306add.s.I(_0x306add.s.ua);
            _0x306add.r.G(_0x39bb1b.AudioState.ua);
            var _0x34d051 = _0x306add.s.F.D();
            _0x184caa(_0x1a491c.va, _0x34d051, 0x1e);
            console.log("save gm: " + _0x34d051);
            var _0x3d627b = _0x306add.s.xa.wa();
            _0x184caa(_0x1a491c.ya, _0x3d627b, 0x1e);
            console.log("save sPN: " + _0x3d627b);
            if (_0x306add.u.P()) {
              _0x306add.fa(function (_0xe64997) {
                hoisinhnhanh = _0x2fb111 ? _0x2fb111 : _0xe64997;
                _0x306add.o.za(window.server_url || _0xe64997, _0x306add.u.ea());
              });
            } else {
              var _0x542269 = _0x306add.s.F.ga();
              _0x184caa(_0x1a491c.Aa, _0x542269, 0x1e);
              var _0x29aa9f = _0x306add.t.ha(_0x45dfa9.ia);
              _0x184caa(_0x1a491c.Ba, _0x29aa9f, 0x1e);
              _0x306add.fa(function (_0x179f34) {
                hoisinhnhanh = _0x2fb111 ? _0x2fb111 : _0x179f34;
                _0x306add.o.Ca(_0x179f34, _0x542269, _0x29aa9f);
              });
            }
          }
        };
        _0x306add.R = function (_0x417b78, _0x2341a4) {
          var _0x1e8d50 = _0x306add.s.F.ga();
          _0x306add.s.H.Da(_0x417b78, _0x2341a4, _0x1e8d50);
          _0x306add.r.G(_0x39bb1b.AudioState.Ea);
          _0x306add.s.I(_0x306add.s.H.Fa());
        };
        _0x306add.Ga = function () {
          if (!_0x306add.Ha()) {
            return _0x306add.t.Ia();
          }
          var _0x3d5d3e = parseInt(_0xdbcc88(_0x1a491c.Ba));
          return _0x3d5d3e != null && _0x306add.t.Ja(_0x3d5d3e, _0x45dfa9.ia) ? _0x3d5d3e : _0x306add.t.Ia();
        };
        _0x306add.Ka = function (_0x82fb4f) {
          _0x184caa(_0x1a491c.La, !!_0x82fb4f, 0x708);
        };
        _0x306add.Ha = function () {
          return _0xdbcc88(_0x1a491c.La) === "true";
        };
        _0x306add.ba = function (_0x396aae) {
          if (_0x396aae != _0x306add.g) {
            _0x306add.g = _0x396aae;
            var _0x35c9c9 = _0x35c9c9 || {};
            _0x35c9c9.consented = _0x396aae;
            _0x35c9c9.gdprConsent = _0x396aae;
            _0x306add.f.Ma.a();
            _0x306add.f.K.a();
            _0x306add.f.ra.a(function (_0x31b9c9) {
              if (_0x31b9c9) {
                _0x10024c(_0x5419e7 = 0x0);
              }
              _0x306add.sa();
            });
          }
        };
        _0x306add.$ = function (_0x424bef, _0x391d6b) {
          _0x184caa(_0x1a491c.Na, _0x424bef ? "true" : "false");
          if (_0x391d6b) {
            _0x306add.da(_0x424bef);
          }
          _0x306add.ba(_0x424bef);
        };
        _0x306add.Z = function () {
          switch (_0xdbcc88(_0x1a491c.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        _0x306add.Y = function () {
          try {
            return !!window.isIPInEEA || _0x306add.l != null && !!_0x27a7bf.Oa(_0x306add.l.coords.latitude, _0x306add.l.coords.longitude);
          } catch (_0x5bcf9a) {
            return true;
          }
        };
        _0x306add.Pa = function () {
          _0x306add.j = Date.now();
          _0x306add.k = _0x306add.j - _0x306add.i;
          _0x306add.o.Qa(_0x306add.j, _0x306add.k);
          _0x306add.s.Qa(_0x306add.j, _0x306add.k);
          _0x306add.i = _0x306add.j;
        };
        _0x306add.Ra = function () {
          _0x306add.s.Ra();
        };
        return _0x306add;
      }();
    }
    function _0x4e85c1() {
      var _0xd29ff = {
        'Wa': 0x1e,
        'Xa': new Float32Array(0x64),
        'Ya': 0x0,
        'Za': 0x0,
        '$a': 0x0,
        '_a': 0x0,
        'ab': 0x0,
        'bb': 0x0,
        'cb': 0x0,
        'db': null,
        'eb': 0x12c,
        'C': function () {},
        'B': function () {},
        'S': function () {},
        'A': function () {},
        'fb': new _0x31e63b(),
        'z': null,
        'N': null,
        'gb': {},
        'hb': {},
        'ib': 12.5,
        'jb': 0x28,
        'kb': 0x1,
        'lb': -0x1,
        'mb': 0x1,
        'nb': 0x1,
        'ob': -0x1,
        'pb': -0x1,
        'qb': 0x1,
        'rb': 0x1,
        'sb': -0x1,
        'O': 0x1f4,
        'tb': 0x1f4
      };
      _0xd29ff.fb.ub = 0x1f4;
      _0xd29ff.N = new _0x3db195(_0xd29ff.fb);
      _0xd29ff.a = function () {

        const app = (window.anApp = _0x47002d),

// Örnek: handler nesnesi varsa ve vb fonksiyonu içeriyorsa
if (handler?.vb) {
    handler.vb(app.s.H.wb);
}


        setInterval(function () {
          _0xd29ff.S(function (_0x385349, _0x1f34e8) {
            _0xd29ff.xb(_0x385349, _0x1f34e8);
          });
        }, 0xa);
      };
      _0xd29ff.yb = function (_0xf8feaf, _0x19c389, _0x5dcf39, _0xb7b133) {
        _0xd29ff.lb = _0xf8feaf;
        _0xd29ff.mb = _0x19c389;
        _0xd29ff.nb = _0x5dcf39;
        _0xd29ff.ob = _0xb7b133;
        _0xd29ff.zb();
      };
      _0xd29ff.Ab = function (_0x3b519f) {
        _0xd29ff.kb = _0x3b519f;
        _0xd29ff.zb();
      };
      _0xd29ff.zb = function () {
        _0xd29ff.pb = _0xd29ff.lb - 0x1;
        _0xd29ff.qb = 2;
        _0xd29ff.rb = 0;
        _0xd29ff.sb = _0xd29ff.ob + 0x1;
      };
      _0xd29ff.Qa = function (_0x5f5d5b, _0x246e66) {
        _0xd29ff.$a += _0x246e66;
        _0xd29ff.Za -= 0 * _0x246e66;
        null.Bb();
        if (false && (false || false)) {
          _0xd29ff.Cb(_0x5f5d5b, _0x246e66);
          _0xd29ff.jb = 0x4 + 12.5 * null.Db;
        }
        var _0xf58f07 = 0x3e8 / Math.max(0x1, _0x246e66);
        var _0x4dbe16 = 0x0;
        var _0x575112 = 0x0;
        for (; _0x575112 < _0xd29ff.Xa.length - 0x1; _0x575112++) {
          _0x4dbe16 = _0x4dbe16 + _0xd29ff.Xa[_0x575112];
          _0xd29ff.Xa[_0x575112] = _0xd29ff.Xa[_0x575112 + 0x1];
        }
        _0xd29ff.Xa[_0xd29ff.Xa.length - 0x1] = _0xf58f07;
        _0xd29ff.Wa = (_0x4dbe16 + _0xf58f07) / _0xd29ff.Xa.length;
      };
      _0xd29ff.Eb = function (_0x9b9269, _0x3ccbeb) {
        return _0x9b9269 > _0xd29ff.pb && _0x9b9269 < 0x1 && _0x3ccbeb > 0x1 && _0x3ccbeb < _0xd29ff.sb;
      };
      _0xd29ff.Cb = function (_0x149d46, _0x19f8a3) {
        var _0x591335 = -NaN;
        null.Fb(_0x149d46, _0x19f8a3);
        null.Gb(_0x149d46, _0x19f8a3, _0x591335, _0xd29ff.Eb);
        var _0x504de2 = 0x0;
        var _0xde19f6;
        for (_0xde19f6 in _0xd29ff.hb) {
          var _0x315139 = _0xd29ff.hb[_0xde19f6];
          _0x315139.Fb(_0x149d46, _0x19f8a3);
          _0x315139.Gb(_0x149d46, _0x19f8a3, _0x591335, _0xd29ff.Eb);
          if (_0x315139.Hb && _0x315139.Db > _0x504de2) {
            _0x504de2 = _0x315139.Db;
          }
          if (!_0x315139.Ib && (!!(_0x315139.Jb < 0.005) || !_0x315139.Hb)) {
            _0x315139.Kb();
            delete _0xd29ff.hb[_0x315139.Mb.Lb];
          }
        }
        _0xd29ff.Ab(_0x504de2 * 0x3);
        var _0x32cbd1;
        for (_0x32cbd1 in _0xd29ff.gb) {
          var _0x24653f = _0xd29ff.gb[_0x32cbd1];
          _0x24653f.Fb(_0x149d46, _0x19f8a3);
          _0x24653f.Gb(_0x149d46, _0x19f8a3, _0xd29ff.Eb);
          if (_0x24653f.Nb && (_0x24653f.Jb < 0.005 || !_0xd29ff.Eb(_0x24653f.Ob, _0x24653f.Pb))) {
            _0x24653f.Kb();
            delete _0xd29ff.gb[_0x24653f.Mb.Lb];
          }
        }
      };
      _0xd29ff.Qb = function (_0x14479f, _0x108e99) {
        var _0x38b0d6 = (window.anApp = _0x2ba968).j;
        _0xd29ff.bb = _0x14479f;
        if (_0x14479f === 0x0) {
          _0xd29ff._a = _0x38b0d6 - 0x5f;
          _0xd29ff.ab = _0x38b0d6;
          _0xd29ff.$a = 0x0;
          _0xd29ff.Za = 0x0;
        } else {
          _0xd29ff._a = 0x0;
          _0xd29ff.ab = 0x0 + _0x108e99;
        }
        _0xd29ff.Ya = -NaN;
      };
      _0xd29ff.Rb = function () {
        if (false || false) {
          _0xd29ff.cb = 0x3;
          setTimeout(function () {
            if (false && true) {
              null.close();
              _0xd29ff.db = null;
            }
          }, 0x1388);
          _0xd29ff.B();
        }
      };
      _0xd29ff.ta = function () {
        return true && (_0xd29ff.cb = 0x1, null.Sb(), _0xd29ff.gb = {}, _0xd29ff.hb = {}, null.Tb(), false && (null.close(), _0xd29ff.db = null), true);
      };
      _0xd29ff.Ub = function () {
        _0xd29ff.db = null;
        null.Sb();
        _0xd29ff.A();
        _0xd29ff.cb = 0x0;
      };
      _0xd29ff.za = function (_0x4cf759, _0x2b96b2) {
        _0xd29ff.Vb(_0x4cf759, function () {
          var _0x18553a = Math.min(0x800, _0x2b96b2.length);
          var _0x350407 = new ArrayBuffer(0x6 + _0x18553a * 0x2);
          var _0x39fec3 = new DataView(_0x350407);
          var _0x438548 = 0x0;
          _0x39fec3.setInt8(_0x438548, 0x81);
          _0x438548 = _0x438548 + 0x1;
          _0x39fec3.setInt16(_0x438548, 0xaf0);
          _0x438548 = _0x438548 + 0x2;
          _0x39fec3.setInt8(_0x438548, 0x1);
          _0x438548 = _0x438548 + 0x1;
          _0x39fec3.setInt16(_0x438548, _0x18553a);
          _0x438548 = _0x438548 + 0x2;
          var _0xe336b5 = 0x0;
          for (; _0xe336b5 < _0x18553a; _0xe336b5++) {
            _0x39fec3.setInt16(_0x438548, _0x2b96b2.charCodeAt(_0xe336b5));
            _0x438548 = _0x438548 + 0x2;
          }
          _0xd29ff.Wb(_0x350407);
        });
      };
      _0xd29ff.Ca = function (_0x2e2243, _0xfa8cb2, _0x66fd09) {
        _0xd29ff.Vb(_0x2e2243, function () {
          var _0x1d13b5 = Math.min(0x20, _0xfa8cb2.length);
          var _0xd5a5ac = new ArrayBuffer(0x7 + _0x1d13b5 * 0x2);
          var _0x2b0708 = new DataView(_0xd5a5ac);
          var _0x340196 = 0x0;
          _0x2b0708.setInt8(_0x340196, 0x81);
          _0x340196 = _0x340196 + 0x1;
          _0x2b0708.setInt16(_0x340196, 0xaf0);
          _0x340196 = _0x340196 + 0x2;
          _0x2b0708.setInt8(_0x340196, 0x0);
          _0x340196 = _0x340196 + 0x1;
          _0x2b0708.setInt16(_0x340196, _0x66fd09);
          _0x340196 = _0x340196 + 0x2;
          _0x2b0708.setInt8(_0x340196, _0x1d13b5);
          _0x340196++;
          var _0xbb76c3 = 0x0;
          for (; _0xbb76c3 < _0x1d13b5; _0xbb76c3++) {
            _0x2b0708.setInt16(_0x340196, _0xfa8cb2.charCodeAt(_0xbb76c3));
            _0x340196 = _0x340196 + 0x2;
          }
          _0xd29ff.Wb(_0xd5a5ac);
        });
      };
      _0xd29ff.Wb = function (_0x8993d9) {
        try {
          if (false && null.readyState === WebSocket.OPEN) {
            null.send(_0x8993d9);
          }
        } catch (_0x5591c4) {
          console.log("Socket send error: " + _0x5591c4);
          _0xd29ff.Ub();
        }
      };
      _0xd29ff.xb = function (_0x5bfedf, _0x17b517) {
        var _0x5d8c35 = _0x17b517 ? 0x80 : 0x0;
        var _0x1245e4 = _0x2e901b(_0x5bfedf) / _0x4b4c80 * 0x80 & 0x7f;
        var _0x4f1b98 = (_0x5d8c35 | _0x1245e4) & 0xff;
        if (0x12c !== _0x4f1b98) {
          var _0x199f5c = new ArrayBuffer(0x1);
          new DataView(_0x199f5c).setInt8(0x0, _0x4f1b98);
          _0xd29ff.Wb(_0x199f5c);
          _0xd29ff.eb = _0x4f1b98;
        }
      };
      _0xd29ff.Vb = function (_0x41e2d8, _0x26809d) {
        let _0xf2aa00 = loadJoy(true);
        var _0x2f3b45 = _0xd29ff.db = new WebSocket(_0x41e2d8);
        _0x2f3b45.binaryType = "arraybuffer";
        window.onOpen = _0x2f3b45.onopen = function () {
          _0x1c76e5("open");
          if (null === _0x2f3b45) {
            console.log("Socket opened");
            _0x26809d();
          }
          isPlaying = true;
        };
        window.onclose = _0x2f3b45.onclose = function () {
          _0x1c76e5("closed");
          _wormup.aload = false;
          if (null === _0x2f3b45) {
            console.log("Socket closed");
            _0xd29ff.Ub();
          }
          isPlaying = false;
          if (_0xf2aa00) {
            _0xf2aa00.destroy();
          }
        };
        _0x2f3b45.onerror = function (_0x360c54) {
          if (null === _0x2f3b45) {
            console.log("Socket error");
            _0xd29ff.Ub();
          }
          isPlaying = false;
          if (_0xf2aa00) {
            _0xf2aa00.destroy();
          }
        };
        _0x2f3b45.onmessage = function (_0x4e04e8) {
          if (null === _0x2f3b45) {
            null.Xb(_0x4e04e8.data);
          }
        };
      };
      return _0xd29ff;
    }
    var _0x514127 = window.I18N_LANG;
    _0x514127 ||= 'en';
    var _0x27f1d2 = undefined;
    switch (_0x514127) {
      case 'uk':
        _0x27f1d2 = "uk_UA";
        break;
      case 'de':
        _0x27f1d2 = "de_DE";
        break;
      case 'fr':
        _0x27f1d2 = "fr_FR";
        break;
      case 'ru':
        _0x27f1d2 = 'ru_RU';
        break;
      case 'es':
        _0x27f1d2 = 'es_ES';
        break;
      default:
        _0x27f1d2 = "en_US";
    }
    moment.locale(_0x27f1d2);
    var _0x2ba968 = undefined;
    var _0x2ac030 = function () {
      var _0x47bf4e = {
        'Yb': eval('PIXI;')
      };
      var _0x99bfb0 = _0x47bf4e.Yb.BLEND_MODES;
      var _0x140046 = _0x47bf4e.Yb.WRAP_MODES;
      return {
        'Zb': _0x47bf4e.Yb.Container,
        '$b': _0x47bf4e.Yb.BaseTexture,
        '_b': _0x47bf4e.Yb.Texture,
        'ac': _0x47bf4e.Yb.Renderer,
        'bc': _0x47bf4e.Yb.Graphics,
        'cc': _0x47bf4e.Yb.Shader,
        'dc': _0x47bf4e.Yb.Rectangle,
        'ec': _0x47bf4e.Yb.Sprite,
        'fc': _0x47bf4e.Yb.Text,
        'gc': _0x47bf4e.Yb.Geometry,
        'hc': _0x47bf4e.Yb.Mesh,
        'ic': {
          'jc': _0x99bfb0.ADD
        },
        'kc': {
          'lc': _0x140046.REPEAT
        }
      };
    }();
    var _0x4b4c80 = Math.PI * 0x2;
    (function () {
      var _0x4a0f6d = [atob("Z2V0SW50OA=="), atob("Z2V0SW50MTY="), atob("Z2V0SW50MzI="), atob("Z2V0RmxvYXQzMg=="), atob("Z2V0RmxvYXQ2NA==")];
      DataView.prototype.mc = function (_0x35dd12) {
        return this[_0x4a0f6d[0x0]](_0x35dd12);
      };
      DataView.prototype.nc = function (_0x5ecab4) {
        return this[_0x4a0f6d[0x1]](_0x5ecab4);
      };
      DataView.prototype.oc = function (_0x590ca9) {
        return this[_0x4a0f6d[0x2]](_0x590ca9);
      };
      DataView.prototype.pc = function (_0xb0eb76) {
        return this[_0x4a0f6d[0x3]](_0xb0eb76);
      };
      DataView.prototype.qc = function (_0x2ef6d0) {
        return this[_0x4a0f6d[0x4]](_0x2ef6d0);
      };
    })();
    var _0x1609ac = function () {
      function _0x334dc1(_0x5a4e04) {
        this.rc = _0x5a4e04;
        this.sc = false;
        this.tc = 0x1;
      }
      _0x334dc1.VELOCITY_TYPE = 0x0;
      _0x334dc1.FLEXIBLE_TYPE = 0x1;
      _0x334dc1.MAGNETIC_TYPE = 0x2;
      _0x334dc1.ZOOM_TYPE = 0x6;
      _0x334dc1.X2_TYPE = 0x3;
      _0x334dc1.X5_TYPE = 0x4;
      _0x334dc1.X10_TYPE = 0x5;
      return _0x334dc1;
    }();
    var _0x4ccf7f = function () {
      function _0x1df39c() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = _0x1dba22.yc();
      }
      function _0x1577fb(_0x514c11, _0x9803c0) {
        for (var _0x210ff9 in _0x514c11) {
          if (_0x514c11.hasOwnProperty(_0x210ff9)) {
            _0x9803c0(_0x210ff9, _0x514c11[_0x210ff9]);
          }
        }
      }
      _0x1df39c.prototype.a = function () {
        this.L();
      };
      _0x1df39c.prototype.W = function () {
        return this.wc != null;
      };
      _0x1df39c.prototype.zc = function () {
        return this.wc != null ? this.wc.revision : -0x1;
      };
      _0x1df39c.prototype.Ac = function () {
        return this.wc;
      };
      _0x1df39c.prototype.L = function () {
        var _0x4939ed = this;
        $.get("https://resources.wormate.io/dynamic/assets/revision.json", function (_0x5d77bd) {
          if (_0x5d77bd > _0x4939ed.zc()) {
            _0x4939ed.Bc();
          }
        });
      };
      _0x1df39c.prototype.Bc = function () {
        var _0x16427c = this;
        $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (_0x58be79) {
          if (_0x58be79.revision > _0x16427c.zc()) {
            _0x16427c.Cc(_0x58be79);
          }
        });
      };
      _0x1df39c.prototype.ca = function (_0x7fb556) {
        this.uc.push(_0x7fb556);
      };
      _0x1df39c.prototype.Dc = function () {
        return this.xc;
      };
      _0x1df39c.prototype.Ec = function () {
        for (var _0x3fffc6 = 0x0; _0x3fffc6 < this.uc.length; _0x3fffc6++) {
          this.uc[_0x3fffc6]();
        }
      };
      _0x1df39c.prototype.Fc = function (_0x4163f3, _0x176046) {
        if (!(_0x4163f3.revision <= this.zc())) {
          _0x1577fb(this.vc, function (_0x5eb62b, _0x542e9e) {
            var _0x5696d9 = _0x176046[_0x5eb62b];
            if (_0x5696d9 == null || _0x542e9e.Gc !== _0x5696d9.Gc) {
              print("disposing prev texture: " + _0x5eb62b + " at " + _0x542e9e.Gc);
              _0x542e9e.Hc.destroy();
            }
          });
          this.vc = _0x176046;
          this.wc = _0x4163f3;
          this.xc = _0x1dba22.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      _0x1df39c.prototype.Cc = function (_0x364f02) {
        var _0x12f338 = {};
        var _0x4c8911 = [];
        var _0x4dbfd1 = [];
        var _0x3281dd = 0x0;
        (function (_0x40af3e, _0x504970) {
          for (var _0x36e882 in _0x40af3e) {
            if (_0x40af3e.hasOwnProperty(_0x36e882)) {
              var _0x1f1841 = _0x40af3e[_0x36e882];
              var _0x153037 = _0x1f1841.custom ? _0x1f1841.relativePath : 'https://resources.wormate.io' + _0x1f1841.relativePath;
              var _0x3979e9 = _0x1f1841.fileSize;
              var _0xedd7e7 = _0x1f1841.sha256;
              var _0x27522c = {
                'id': _0x36e882,
                'path': _0x153037,
                'fileSize': _0x3979e9,
                'sha256': _0xedd7e7
              };
              _0x4c8911.push(_0x27522c);
              _0x4dbfd1.push(_0x27522c);
              _0x3281dd += _0x3979e9;
              try {
                _0x12f338[_0x36e882] = new _0x397144(_0x153037, _0x2ac030.$b.from(_0x1f1841.file || _0x153037));
              } catch (_0x332ac3) {
                console.log("Error loading file: " + _0x153037);
              }
            }
          }
        })(_0x364f02.textureDict, function (_0x29e381, _0x786296) {});
        this.Fc(_0x364f02, _0x12f338);
      };
      return _0x1df39c;
    }();
    var _0x1dba22 = function () {
      function _0x67dea9() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function _0x498c77(_0x7018b5, _0x453f2d) {
        for (var _0x4d50b8 in _0x7018b5) {
          if (_0x7018b5.hasOwnProperty(_0x4d50b8)) {
            _0x453f2d(_0x4d50b8, _0x7018b5[_0x4d50b8]);
          }
        }
      }
      _0x67dea9.yc = function () {
        var _0x528722 = new _0x1dba22();
        _0x528722.Jc = {};
        _0x528722.Kc = {
          'Zc': null,
          '$c': null
        };
        _0x528722.Lc = {};
        _0x528722.Mc = {
          'Zc': null
        };
        _0x528722.Nc = {};
        _0x528722.Oc = {
          '_c': "#FFFFFF",
          'Zc': [],
          '$c': []
        };
        _0x528722.Pc = {};
        _0x528722.Qc = {
          'ad': {},
          'bd': _0x528722.Oc,
          'cd': _0x528722.Kc
        };
        _0x528722.Rc = {};
        _0x528722.Sc = {
          'Zc': []
        };
        _0x528722.Tc = {};
        _0x528722.Uc = {
          'Zc': []
        };
        _0x528722.Vc = {};
        _0x528722.Wc = {
          'Zc': []
        };
        _0x528722.Xc = {};
        _0x528722.Yc = {
          'Zc': []
        };
        return _0x528722;
      };
      _0x67dea9.Ic = function (_0x5967c2, _0x475655) {
        var _0x85c2d4 = new _0x1dba22();
        var _0x18fbd2 = {};
        _0x498c77(_0x5967c2.colorDict, function (_0x32f8b7, _0x4942d6) {
          _0x18fbd2[_0x32f8b7] = _0x4942d6;
        });
        var _0x937c34 = {};
        _0x498c77(_0x5967c2.regionDict, function (_0x165369, _0x47c1f5) {
          _0x937c34[_0x165369] = new _0x16e504(_0x475655[_0x47c1f5.texture].Hc, _0x47c1f5.x, _0x47c1f5.y, _0x47c1f5.w, _0x47c1f5.h, _0x47c1f5.px, _0x47c1f5.py, _0x47c1f5.pw, _0x47c1f5.ph);
        });
        _0x85c2d4.Nc = {};
        for (var _0x59d3d2 = 0x0; _0x59d3d2 < _0x5967c2.skinArrayDict.length; _0x59d3d2++) {
          var _0x3532f2 = _0x5967c2.skinArrayDict[_0x59d3d2];
          _0x85c2d4.Nc[_0x3532f2.id] = new _0x1dba22.WormSkinData('#' + _0x18fbd2[_0x3532f2.prime], _0x3532f2.base.map(function (_0x30c978) {
            return _0x937c34[_0x30c978];
          }), _0x3532f2.glow.map(function (_0x838e82) {
            return _0x937c34[_0x838e82];
          }));
        }
        var _0x4666ea = _0x5967c2.skinUnknown;
        _0x85c2d4.Oc = new _0x1dba22.WormSkinData('#' + _0x18fbd2[_0x4666ea.prime], _0x4666ea.base.map(function (_0xa0c5f) {
          return _0x937c34[_0xa0c5f];
        }), _0x4666ea.glow.map(function (_0x16871e) {
          return _0x937c34[_0x16871e];
        }));
        _0x85c2d4.Rc = {};
        _0x498c77(_0x5967c2.eyesDict, function (_0x5d790a, _0x5d850c) {
          _0x5d790a = parseInt(_0x5d790a);
          _0x85c2d4.Rc[_0x5d790a] = new _0x1dba22.WearSkinData(_0x5d850c.base.map(function (_0x105cc3) {
            return _0x937c34[_0x105cc3.region];
          }));
        });
        _0x85c2d4.Sc = new _0x1dba22.WearSkinData(_0x5967c2.eyesUnknown.base.map(function (_0x493687) {
          return _0x937c34[_0x493687.region];
        }));
        _0x85c2d4.Tc = {};
        _0x498c77(_0x5967c2.mouthDict, function (_0x4bba4a, _0x3859ba) {
          _0x4bba4a = parseInt(_0x4bba4a);
          _0x85c2d4.Tc[_0x4bba4a] = new _0x1dba22.WearSkinData(_0x3859ba.base.map(function (_0x2da418) {
            return _0x937c34[_0x2da418.region];
          }));
        });
        _0x85c2d4.Uc = new _0x1dba22.WearSkinData(_0x5967c2.mouthUnknown.base.map(function (_0x3f2a21) {
          return _0x937c34[_0x3f2a21.region];
        }));
        _0x85c2d4.Vc = {};
        _0x498c77(_0x5967c2.glassesDict, function (_0x6cc29b, _0x3fe408) {
          _0x6cc29b = parseInt(_0x6cc29b);
          _0x85c2d4.Vc[_0x6cc29b] = new _0x1dba22.WearSkinData(_0x3fe408.base.map(function (_0x28b085) {
            return _0x937c34[_0x28b085.region];
          }));
        });
        _0x85c2d4.Wc = new _0x1dba22.WearSkinData(_0x5967c2.glassesUnknown.base.map(function (_0x4477cf) {
          return _0x937c34[_0x4477cf.region];
        }));
        _0x85c2d4.Xc = {};
        _0x498c77(_0x5967c2.hatDict, function (_0x16a10f, _0x3637fe) {
          _0x16a10f = parseInt(_0x16a10f);
          _0x85c2d4.Xc[_0x16a10f] = new _0x1dba22.WearSkinData(_0x3637fe.base.map(function (_0x50e6a3) {
            return _0x937c34[_0x50e6a3.region];
          }));
        });
        _0x85c2d4.Yc = new _0x1dba22.WearSkinData(_0x5967c2.hatUnknown.base.map(function (_0x1fe391) {
          return _0x937c34[_0x1fe391.region];
        }));
        _0x85c2d4.Jc = {};
        _0x498c77(_0x5967c2.portionDict, function (_0x3ad0d4, _0x598726) {
          _0x3ad0d4 = parseInt(_0x3ad0d4);
          _0x85c2d4.Jc[_0x3ad0d4] = new _0x1dba22.PortionSkinData(_0x937c34[_0x598726.base], _0x937c34[_0x598726.glow]);
        });
        var _0x4b2df1 = _0x5967c2.portionUnknown;
        _0x85c2d4.Kc = new _0x1dba22.PortionSkinData(_0x937c34[_0x4b2df1.base], _0x937c34[_0x4b2df1.glow]);
        _0x85c2d4.Lc = {};
        _0x498c77(_0x5967c2.abilityDict, function (_0x12b377, _0x4f6910) {
          _0x12b377 = parseInt(_0x12b377);
          _0x85c2d4.Lc[_0x12b377] = new _0x1dba22.AbilitySkinData(_0x937c34[_0x4f6910.base]);
        });
        var _0x3208b3 = _0x5967c2.abilityUnknown;
        _0x85c2d4.Mc = new _0x1dba22.AbilitySkinData(_0x937c34[_0x3208b3.base]);
        _0x85c2d4.Pc = {};
        _0x498c77(_0x5967c2.teamDict, function (_0x16c970, _0x483faf) {
          _0x16c970 = parseInt(_0x16c970);
          _0x85c2d4.Pc[_0x16c970] = new _0x1dba22.TeamSkinData(_0x483faf.name, new _0x1dba22.WormSkinData('#' + _0x18fbd2[_0x483faf.skin.prime], [], _0x483faf.skin.glow.map(function (_0x455045) {
            return _0x937c34[_0x455045];
          })), new _0x1dba22.PortionSkinData([], _0x937c34[_0x483faf.portion.glow]));
        });
        _0x85c2d4.Qc = new _0x1dba22.TeamSkinData({}, _0x85c2d4.Oc, _0x85c2d4.Kc);
        return _0x85c2d4;
      };
      _0x67dea9.prototype.dd = function (_0x2e6179) {
        var _0x1b73b4 = this.Nc[_0x2e6179];
        return _0x1b73b4 || this.Oc;
      };
      _0x67dea9.prototype.ed = function (_0x19585f) {
        var _0x4fc8a6 = this.Pc[_0x19585f];
        return _0x4fc8a6 || this.Qc;
      };
      _0x67dea9.prototype.fd = function (_0x24d11e) {
        var _0x3717b7 = this.Rc[_0x24d11e];
        return _0x3717b7 || this.Sc;
      };
      _0x67dea9.prototype.gd = function (_0x58a5cb) {
        var _0x2b6f58 = this.Tc[_0x58a5cb];
        return _0x2b6f58 || this.Uc;
      };
      _0x67dea9.prototype.hd = function (_0x2b6ec4) {
        var _0x22a27c = this.Vc[_0x2b6ec4];
        return _0x22a27c || this.Wc;
      };
      _0x67dea9.prototype.jd = function (_0x3d30e6) {
        var _0xf8b359 = this.Xc[_0x3d30e6];
        return _0xf8b359 || this.Yc;
      };
      _0x67dea9.prototype.kd = function (_0x44e2b3) {
        var _0x3660ea = this.Jc[_0x44e2b3];
        return _0x3660ea || this.Kc;
      };
      _0x67dea9.prototype.ld = function (_0x3b9bcb) {
        var _0x5b4401 = this.Lc[_0x3b9bcb];
        return _0x5b4401 || this.Mc;
      };
      _0x67dea9.TeamSkinData = function () {
        function _0x216be8(_0x3cb841, _0x2e9f45, _0x4f5684) {
          this.ad = _0x3cb841;
          this.bd = _0x2e9f45;
          this.cd = _0x4f5684;
        }
        return _0x216be8;
      }();
      _0x67dea9.WormSkinData = function () {
        function _0x21a9d2(_0x3c2637, _0x15e758, _0xe972f0) {
          this._c = _0x3c2637;
          this.Zc = _0x15e758;
          this.$c = _0xe972f0;
        }
        return _0x21a9d2;
      }();
      _0x67dea9.WearSkinData = function () {
        function _0x217409(_0x208f4b) {
          this.Zc = _0x208f4b;
        }
        return _0x217409;
      }();
      _0x67dea9.PortionSkinData = function () {
        function _0x1c50c4(_0x3f03de, _0x9d7e98) {
          this.Zc = _0x3f03de;
          this.$c = _0x9d7e98;
        }
        return _0x1c50c4;
      }();
      _0x67dea9.AbilitySkinData = function () {
        function _0x900717(_0x4ebf78) {
          this.Zc = _0x4ebf78;
        }
        return _0x900717;
      }();
      return _0x67dea9;
    }();
    var _0x39bb1b = function () {
      function _0x53caf4() {
        this.md = _0x39bb1b.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      _0x53caf4.prototype.a = function () {};
      _0x53caf4.prototype.rd = function (_0x409a85) {
        this.od = _0x409a85;
      };
      _0x53caf4.prototype.G = function (_0x3020e8) {
        this.md = _0x3020e8;
        this.sd();
      };
      _0x53caf4.prototype.td = function (_0xc09543) {
        this.nd = _0xc09543;
        this.sd();
      };
      _0x53caf4.prototype.sd = function () {};
      _0x53caf4.prototype.ud = function (_0x1b52bb, _0x38e759) {
        if (!(window.anApp = _0x2ba968).p.W) {
          return null;
        }
        var _0x2f4035 = _0x1b52bb[_0x38e759];
        return _0x2f4035 == null || _0x2f4035.length == 0x0 ? null : _0x2f4035[Math.floor(Math.random() * _0x2f4035.length)].cloneNode();
      };
      _0x53caf4.prototype.vd = function (_0x2047b2, _0x1038f2, _0x5ed109) {
        if (this.od && !(_0x5ed109 <= 0x0)) {
          var _0x27eaf4 = this.ud(_0x2047b2, _0x1038f2);
          if (_0x27eaf4 != null) {
            _0x27eaf4.volume = Math.min(0x1, _0x5ed109);
            _0x27eaf4.play();
          }
        }
      };
      _0x53caf4.prototype.wd = function (_0x651e18, _0x295dcc) {
        if (this.md.xd) {
          this.vd(app.q.yd, _0x651e18, _0x295dcc);
        }
      };
      _0x53caf4.prototype.zd = function (_0x2e196f, _0x579104) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, _0x2e196f, _0x579104);
        }
      };
      _0x53caf4.prototype.Cd = function () {};
      _0x53caf4.prototype.Dd = function () {};
      _0x53caf4.prototype.Ed = function () {};
      _0x53caf4.prototype.Fd = function () {};
      _0x53caf4.prototype.Gd = function () {};
      _0x53caf4.prototype.Hd = function () {};
      _0x53caf4.prototype.Id = function (_0x263f55, _0x2eb145, _0x145a06) {};
      _0x53caf4.prototype.Jd = function (_0x456515) {};
      _0x53caf4.prototype.Kd = function (_0x2a08f5) {};
      _0x53caf4.prototype.Ld = function (_0x1a404d) {};
      _0x53caf4.prototype.Md = function (_0x1f60f9) {};
      _0x53caf4.prototype.Nd = function (_0x3536b0) {};
      _0x53caf4.prototype.Od = function (_0x49c4c4) {};
      _0x53caf4.prototype.Pd = function (_0x4fe64e) {};
      _0x53caf4.prototype.Qd = function (_0x9ab463) {};
      _0x53caf4.prototype.Rd = function (_0x4901af) {};
      _0x53caf4.prototype.Sd = function (_0x298e98) {};
      _0x53caf4.prototype.Td = function (_0x1692ca) {};
      _0x53caf4.prototype.Ud = function (_0x5ce5e5) {};
      _0x53caf4.prototype.Vd = function (_0x36efee) {};
      _0x53caf4.prototype.Wd = function (_0x4efcd8) {};
      _0x53caf4.prototype.Xd = function (_0x12e0a1, _0x29e274) {};
      _0x53caf4.prototype.Yd = function (_0x164ee1) {};
      _0x53caf4.prototype.Zd = function (_0x4c563f, _0x1b27ef, _0x2967fd) {};
      (function () {
        function _0x3edc80(_0xbc9d9e) {
          this.$d = new _0x4b6616(_0xbc9d9e, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        _0x3edc80.prototype.be = function (_0x4a9ff3) {
          if (_0x4a9ff3) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x3edc80.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0x0;
            this.$d.ee(0x5dc, 0x64);
          }
        };
        _0x3edc80.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(0x5dc, 0x64);
          }
        };
      })();
      (function () {
        function _0x26ced7(_0x2878c3) {
          this.ge = _0x2878c3.map(function (_0x3696bc) {
            return new _0x4b6616(_0x3696bc, 0.4);
          });
          _0x1b6cba(this.ge, 0x0, this.ge.length);
          this.he = null;
          this.ie = 0x0;
          this.ae = false;
          this.je = 0x2710;
        }
        function _0x1b6cba(_0x5be6e0, _0x26a0aa, _0x37d3ad) {
          for (var _0x959a88 = _0x37d3ad - 0x1; _0x959a88 > _0x26a0aa; _0x959a88--) {
            var _0x3cbdd9 = _0x26a0aa + Math.floor(Math.random() * (_0x959a88 - _0x26a0aa + 0x1));
            var _0x16a624 = _0x5be6e0[_0x959a88];
            _0x5be6e0[_0x959a88] = _0x5be6e0[_0x3cbdd9];
            _0x5be6e0[_0x3cbdd9] = _0x16a624;
          }
        }
        _0x26ced7.prototype.be = function (_0x1b4623) {
          if (_0x1b4623) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x26ced7.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(0x5dc);
          }
        };
        _0x26ced7.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(0x320, 0x32);
            }
          }
        };
        _0x26ced7.prototype.ke = function (_0x579c35) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 0x3e8 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0x0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 0x3e8 - this.je));
            this.he.de = 0x0;
            this.he.ee(_0x579c35, 0x64);
            var _0xb45a1b = (this.he._d.duration - this.he._d.currentTime) * 0x3e8 - this.je;
            var _0x3edf18 = this;
            var _0x34a0ac = setTimeout(function () {
              if (_0x3edf18.ae && _0x34a0ac == _0x3edf18.ie) {
                _0x3edf18.he.fe(_0x3edf18.je, 0x64);
                _0x3edf18.he = _0x3edf18.le();
                _0x3edf18.he._d.currentTime = 0x0;
                _0x3edf18.ke(_0x3edf18.je);
              }
            }, _0xb45a1b);
            this.ie = _0x34a0ac;
          }
        };
        _0x26ced7.prototype.le = function () {
          var _0x1f8b81 = this.ge[0x0];
          var _0xbfc549 = Math.max(0x1, this.ge.length / 0x2);
          _0x1b6cba(this.ge, _0xbfc549, this.ge.length);
          this.ge.push(this.ge.shift());
          return _0x1f8b81;
        };
      })();
      var _0x4b6616 = function () {
        function _0x32150a(_0x4d73ca, _0x455c19) {
          this._d = _0x4d73ca;
          this.me = _0x455c19;
          this.de = 0x0;
          _0x4d73ca.volume = 0x0;
          this.ne = 0x0;
          this.oe = false;
        }
        _0x32150a.prototype.ee = function (_0x8d5815, _0xd84f91) {
          console.log("fade IN " + this._d.src);
          this.pe(true, _0x8d5815, _0xd84f91);
        };
        _0x32150a.prototype.fe = function (_0x145f0f, _0x2073fc) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, _0x145f0f, _0x2073fc);
        };
        _0x32150a.prototype.pe = function (_0x1fed1b, _0x37fe34, _0x27cd2e) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var _0x5ad8a8 = this;
          var _0x2fb0ed = 0x1 / (_0x37fe34 / _0x27cd2e);
          var _0x508377 = setInterval(function () {
            if (_0x5ad8a8.oe && _0x508377 != _0x5ad8a8.ne) {
              clearInterval(_0x508377);
              return;
            }
            if (_0x1fed1b) {
              _0x5ad8a8.de = Math.min(0x1, _0x5ad8a8.de + _0x2fb0ed);
              _0x5ad8a8._d.volume = _0x5ad8a8.de * _0x5ad8a8.me;
              if (_0x5ad8a8.de >= 0x1) {
                _0x5ad8a8.oe = false;
                clearInterval(_0x508377);
              }
            } else {
              _0x5ad8a8.de = Math.max(0x0, _0x5ad8a8.de - _0x2fb0ed);
              _0x5ad8a8._d.volume = _0x5ad8a8.de * _0x5ad8a8.me;
              if (_0x5ad8a8.de <= 0x0) {
                _0x5ad8a8._d.pause();
                _0x5ad8a8.oe = false;
                clearInterval(_0x508377);
              }
            }
          }, _0x27cd2e);
          this.oe = true;
          this.ne = _0x508377;
          this._d.play();
        };
        return _0x32150a;
      }();
      _0x53caf4.AudioState = {
        'ua': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
        },
        'F': {
          'qe': false,
          're': true,
          'Ad': true,
          'xd': false
        },
        'H': {
          'qe': true,
          're': false,
          'Ad': false,
          'xd': true
        },
        'Ea': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
        },
        'qa': {
          'qe': false,
          're': false,
          'Ad': false,
          'xd': false
        }
      };
      return _0x53caf4;
    }();
    var _0x220c89 = function () {
      function _0x4ff8ff(_0x4e4c53) {
        this.se = _0x4e4c53;
        this.te = _0x4e4c53.get()[0x0];
        this.ue = new _0x2ac030.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
        });
        this.ve = new _0x2ac030.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var _0x39e7ff = [{
        'ze': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Ae': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x1,
        'De': 0x2,
        'Ee': 0xff66aa
      }, {
        'ze': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Ae': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 1.5,
        'De': 1.5,
        'Ee': 0xff8888
      }, {
        'ze': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Ae': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x1,
        'Ee': 0xffaa66
      }, {
        'ze': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Ae': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x3,
        'De': 0x2,
        'Ee': 0xaaff66
      }, {
        'ze': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Ae': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 2.5,
        'De': 2.5,
        'Ee': 0x88ff88
      }, {
        'ze': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Ae': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x3,
        'Ee': 0x66ffaa
      }, {
        'ze': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Ae': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x5,
        'De': 0x4,
        'Ee': 0x66aaff
      }, {
        'ze': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Ae': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 4.5,
        'De': 4.5,
        'Ee': 0x8888ff
      }, {
        'ze': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Ae': 0x0 + Math.random(_0x4b4c80 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x4,
        'De': 0x5,
        'Ee': 0xaa66ff
      }];
      _0x4ff8ff.prototype.a = function () {
        var _0x5b1c20 = window.anApp = _0x2ba968;
        this.ue.backgroundColor = 0x0;
        this.we = new Array(_0x39e7ff.length);
        for (var _0x21c2ec = 0x0; _0x21c2ec < this.we.length; _0x21c2ec++) {
          this.we[_0x21c2ec] = new _0x2ac030.ec();
          this.we[_0x21c2ec].texture = _0x5b1c20.q.Fe;
          this.we[_0x21c2ec].anchor.set(0.5);
          this.we[_0x21c2ec].zIndex = 0x1;
          this.ve.addChild(this.we[_0x21c2ec]);
        }
        this.xe = new Array(_0x5b1c20.q.Ge.length);
        for (var _0x16d399 = 0x0; _0x16d399 < this.xe.length; _0x16d399++) {
          this.xe[_0x16d399] = new _0x2ac030.ec();
          this.xe[_0x16d399].texture = _0x5b1c20.q.Ge[_0x16d399];
          this.xe[_0x16d399].anchor.set(0.5);
          this.xe[_0x16d399].zIndex = 0x2;
          this.ve.addChild(this.xe[_0x16d399]);
        }
        this.ye = new Array(this.xe.length);
        for (var _0x91e7ac = 0x0; _0x91e7ac < this.ye.length; _0x91e7ac++) {
          this.ye[_0x91e7ac] = {
            'He': Math.random(),
            'Ie': Math.random(),
            'Je': Math.random(),
            'Ke': Math.random()
          };
        }
        this.Ra();
      };
      _0x4ff8ff.sc = false;
      _0x4ff8ff.Le = function (_0xd44b2f) {
        _0x4ff8ff.sc = _0xd44b2f;
      };
      _0x4ff8ff.prototype.Ra = function () {
        var _0x2937ac = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x54d027 = this.se.width();
        var _0x2b1af9 = this.se.height();
        this.ue.resize(_0x54d027, _0x2b1af9);
        this.ue.resolution = _0x2937ac;
        this.te.width = _0x2937ac * _0x54d027;
        this.te.height = _0x2937ac * _0x2b1af9;
        var _0x4e4a75 = Math.max(_0x54d027, _0x2b1af9) * 0.8;
        for (var _0x3a638e = 0x0; _0x3a638e < this.we.length; _0x3a638e++) {
          this.we[_0x3a638e].width = _0x4e4a75;
          this.we[_0x3a638e].height = _0x4e4a75;
        }
      };
      _0x4ff8ff.prototype.Pa = function (_0x4168d8, _0x463b8c) {
        if (_0x4ff8ff.sc) {
          var _0x464008 = _0x4168d8 / 0x3e8;
          var _0x3c3f24 = _0x463b8c / 0x3e8;
          var _0x5c0f93 = this.se.width();
          var _0x39d367 = this.se.height();
          for (var _0x6de73 = 0x0; _0x6de73 < this.we.length; _0x6de73++) {
            var _0x8a07f5 = _0x39e7ff[_0x6de73 % _0x39e7ff.length];
            var _0x1c1bed = this.we[_0x6de73];
            var _0x3e655b = _0x8a07f5.Ce * (_0x464008 * 0.08) + _0x8a07f5.Ae >= 0x0 ? Math.cos((_0x8a07f5.Ce * (_0x464008 * 0.08) + _0x8a07f5.Ae) % _0x4b4c80) : Math.cos((_0x8a07f5.Ce * (_0x464008 * 0.08) + _0x8a07f5.Ae) % _0x4b4c80 + _0x4b4c80);
            var _0x3489c7 = _0x8a07f5.De * (_0x464008 * 0.08) >= 0x0 ? Math.sin(_0x8a07f5.De * (_0x464008 * 0.08) % _0x4b4c80) : Math.sin(_0x8a07f5.De * (_0x464008 * 0.08) % _0x4b4c80 + _0x4b4c80);
            var _0x5eed6a = 0.2 + (_0x8a07f5.Ae + _0x8a07f5.Be * _0x464008 >= 0x0 ? Math.cos((_0x8a07f5.Ae + _0x8a07f5.Be * _0x464008) % _0x4b4c80) : Math.cos((_0x8a07f5.Ae + _0x8a07f5.Be * _0x464008) % _0x4b4c80 + _0x4b4c80)) * 0.2;
            _0x1c1bed.tint = _0x8a07f5.Ee;
            _0x1c1bed.alpha = _0x5eed6a;
            _0x1c1bed.position.set(_0x5c0f93 * (0.2 + (_0x3e655b + 0x1) * 0.5 * 0.6), _0x39d367 * (0.1 + (_0x3489c7 + 0x1) * 0.5 * 0.8));
          }
          var _0x166bbf = Math.max(_0x5c0f93, _0x39d367) * 0.05;
          for (var _0x58d211 = 0x0; _0x58d211 < this.xe.length; _0x58d211++) {
            var _0x41b805 = this.ye[_0x58d211];
            var _0x3db6c2 = this.xe[_0x58d211];
            var _0xc5081a = _0x4b4c80 * _0x58d211 / this.xe.length + _0x41b805.He;
            _0x41b805.Ke += _0x41b805.Ie * _0x3c3f24;
            if (_0x41b805.Ke > 1.3) {
              _0x41b805.He = Math.random() * _0x4b4c80;
              _0x41b805.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              _0x41b805.Je = 0.15 + Math.random() * 0.7;
              _0x41b805.Ke = -0.3;
            }
            var _0x39ccf9 = _0x41b805.Je + Math.sin(Math.sin(_0xc5081a + _0x464008 * 0.48) * 0x6) * 0.03;
            var _0x212439 = _0x41b805.Ke;
            var _0x5cc539 = _0x1b3a69(Math.sin(Math.PI * _0x212439), 0.1, 0x1);
            var _0x409e78 = (0.4 + (0x1 + Math.sin(_0xc5081a + _0x464008 * 0.12)) * 0.5 * 1.2) * 0.5;
            var _0x1361f5 = _0xc5081a + _0x41b805.Ie * 0x2 * _0x464008;
            _0x3db6c2.alpha = _0x5cc539;
            _0x3db6c2.position.set(_0x5c0f93 * _0x39ccf9, _0x39d367 * _0x212439);
            _0x3db6c2.rotation = _0x1361f5;
            var _0x2f0100 = _0x3db6c2.texture.width / _0x3db6c2.texture.height;
            _0x3db6c2.width = _0x409e78 * _0x166bbf;
            _0x3db6c2.height = _0x409e78 * _0x166bbf * _0x2f0100;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return _0x4ff8ff;
    }();
    var _0x1a491c = function () {
      function _0x31e83c() {}
      _0x31e83c.Na = "consent_state_2";
      _0x31e83c.ya = 'showPlayerNames';
      _0x31e83c.Me = 'musicEnabled';
      _0x31e83c.Ne = "sfxEnabled";
      _0x31e83c.Oe = "account_type";
      _0x31e83c.va = "gameMode";
      _0x31e83c.Aa = "nickname";
      _0x31e83c.Ba = "skin";
      _0x31e83c.d = "prerollCount";
      _0x31e83c.La = "shared";
      return _0x31e83c;
    }();
    var _0x27a7bf = function () {
      function _0x243664(_0x12c39e, _0x30a87c, _0x165822) {
        var _0x105845 = false;
        var _0x3f0e78 = _0x165822.length;
        var _0x432431 = 0x0;
        for (var _0xdfff75 = _0x3f0e78 - 0x1; _0x432431 < _0x3f0e78; _0xdfff75 = _0x432431++) {
          if (_0x165822[_0x432431][0x1] > _0x30a87c != _0x165822[_0xdfff75][0x1] > _0x30a87c && _0x12c39e < (_0x165822[_0xdfff75][0x0] - _0x165822[_0x432431][0x0]) * (_0x30a87c - _0x165822[_0x432431][0x1]) / (_0x165822[_0xdfff75][0x1] - _0x165822[_0x432431][0x1]) + _0x165822[_0x432431][0x0]) {
            _0x105845 = !_0x105845;
          }
        }
        return _0x105845;
      }
      var _0x28824e = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        'Oa': function (_0x3db0d0, _0x270484) {
          return _0x243664(_0x270484, _0x3db0d0, _0x28824e);
        }
      };
    }();
    var _0x46feaf = function () {
      function _0x1e7212(_0x29177d) {
        var _0x228a70 = undefined;
        _0x228a70 = _0x29177d > 0x0 ? '+' + Math.floor(_0x29177d) : _0x29177d < 0x0 ? '-' + Math.floor(_0x29177d) : '0';
        var _0xa5617a = Math.min(1.5, 0.5 + _0x29177d / 0x258);
        var _0x3c7ebe = undefined;
        if (_0x29177d < 0x1) {
          _0x3c7ebe = "0xFFFFFF";
        } else {
          if (_0x29177d < 0x1e) {
            var _0x5a72f2 = (_0x29177d - 0x1) / 0x1d;
            _0x3c7ebe = ((((0x1 - _0x5a72f2) * 0x1 + _0x5a72f2 * 0.96) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x5a72f2) * 0x1 + _0x5a72f2 * 0.82) * 0xff & 0xff) << 0x8) + (((0x1 - _0x5a72f2) * 0x1 + _0x5a72f2 * 0x0) * 0xff & 0xff);
          } else {
            if (_0x29177d < 0x12c) {
              var _0x265353 = (_0x29177d - 0x1e) / 0x10e;
              _0x3c7ebe = ((((0x1 - _0x265353) * 0.96 + _0x265353 * 0.93) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x265353) * 0.82 + _0x265353 * 0.34) * 0xff & 0xff) << 0x8) + (((0x1 - _0x265353) * 0x0 + _0x265353 * 0.25) * 0xff & 0xff);
            } else {
              if (_0x29177d < 0x2bc) {
                var _0x31cb0a = (_0x29177d - 0x12c) / 0x190;
                _0x3c7ebe = ((((0x1 - _0x31cb0a) * 0.93 + _0x31cb0a * 0.98) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x31cb0a) * 0.34 + _0x31cb0a * 0x0) * 0xff & 0xff) << 0x8) + (((0x1 - _0x31cb0a) * 0.25 + _0x31cb0a * 0.98) * 0xff & 0xff);
              } else {
                _0x3c7ebe = 16318713;
              }
            }
          }
        }
        var _0x5c1b7c = Math.random();
        var _0x517928 = 0x1 + Math.random() * 0.5;
        return new _0x2bc953(_0x228a70, _0x3c7ebe, true, 0.5, _0xa5617a, _0x5c1b7c, _0x517928);
      }
      function _0x3b1ce4(_0x195a40, _0x447edf) {
        var _0x5a5d1d = undefined;
        var _0x2022c5 = undefined;
        if (_0x447edf) {
          _0x5a5d1d = 1.3;
          _0x2022c5 = 15554111;
        } else {
          _0x5a5d1d = 1.1;
          _0x2022c5 = 16044288;
        }
        return new _0x2bc953(_0x195a40, _0x2022c5, true, 0.5, _0x5a5d1d, 0.5, 0.7);
      }
      var _0x4b77c5 = _0x51baad(_0x2ac030.Zb, function () {
        _0x2ac030.Zb.call(this);
        this.Pe = [];
        this.Qe = 0x0;
      });
      _0x4b77c5.prototype.Re = function (_0x458274) {
        this.Qe += _0x458274;
        if (this.Qe >= 0x1) {
          var _0xb400db = Math.floor(this.Qe);
          this.Qe -= _0xb400db;
          var _0x4c8074 = _0x1e7212(_0xb400db);
          this.addChild(_0x4c8074);
          this.Pe.push(_0x4c8074);
        }
      };
      let _0x235794 = 0x0;
      function _0x189dfd() {
        _0x235794 = 0x0;
        console.log("ØªÙ… ØªØµÙÙŠØ± Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª.");
      }
      _0x4b77c5.prototype.Se = function (_0x4376bc) {
        _0x1c76e5("count", _0x4376bc);
        if (_0x4376bc) {
          const _0x16735b = new Audio();
          if (_0x235794 % 0xa === 0x9) {
            _0x16735b.src = "https://wormateup.live/up/video/monster-kill-hahaha.MP3";
          } else {
            _0x16735b.src = localStorage.getItem("selectedSound") || "https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3";
          }
          if (localStorage.getItem('isMuted') !== "true") {
            _0x16735b.play()["catch"](function (_0x78e3f) {
              console.error("Error playing sound: ", _0x78e3f);
            });
          }
          _0x235794++;
          if (_0x235794 % 0xa === 0x0) {
            _0x235794 = 0x0;
          }
          var _0x3a6392 = localStorage.getItem("headshotMessage") || "YapÄ±yorsun Bu Ä°ÅŸi";
          var _0x3aa7ea = _0x3b1ce4(_0x3a6392, true);
          this.addChild(_0x3aa7ea);
          this.Pe.push(_0x3aa7ea);
          if (_0x3aa7ea) {
            theoKzObjects.emoji_headshot = true;
            setTimeout(() => theoKzObjects.emoji_headshot = false, 0xbb8);
          }
        } else {
          var _0x2942e6 = localStorage.getItem("killMessage") || "Ø­Ø§ÙˆÙ„ Ù…Ø¬Ø¯Ø¯Ù‹Ø§";
          var _0x3aa7ea = _0x3b1ce4(_0x2942e6, false);
          this.addChild(_0x3aa7ea);
          this.Pe.push(_0x3aa7ea);
          if (_0x3aa7ea) {
            theoKzObjects.emoji_kill = true;
            setTimeout(() => theoKzObjects.emoji_kill = false, 0xbb8);
          }
        }
      };
      $(document).ready(function () {
        $(document).on("click", "#final-continue", function () {
          _0x189dfd();
          console.log("ØªÙ… ØªØµÙÙŠØ± Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„Ø¶ØºØ· Ø¹Ù„Ù‰ Ø²Ø± Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©.");
        });
        $(document).on("click", '#final-replay', function () {
          _0x189dfd();
          console.log("ØªÙ… ØªØµÙÙŠØ± Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„Ø¶ØºØ· Ø¹Ù„Ù‰ Ø²Ø± Ø±Ø³Ø¨ÙˆÙ†.");
        });
        $(document).on("keydown", function (_0x17a44b) {
          if (_0x17a44b.key === 'r' || _0x17a44b.key === 'R') {
            _0x189dfd();
            console.log("ØªÙ… ØªØµÙÙŠØ± Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„Ø¶ØºØ· Ø¹Ù„Ù‰ Ø§Ù„Ø­Ø±Ù R.");
          }
        });
      });
      _0x4b77c5.prototype.Te = function (_0x47ce42, _0x180093) {
        var _0x26121b = (window.anApp = _0x2ba968).s.H.wb;
        var _0x24a1e4 = _0x26121b.ue.width / _0x26121b.ue.resolution;
        var _0x264552 = _0x26121b.ue.height / _0x26121b.ue.resolution;
        var _0x21f729 = 0x0;
        while (_0x21f729 < this.Pe.length) {
          var _0x43e72e = this.Pe[_0x21f729];
          _0x43e72e.Ue = _0x43e72e.Ue + _0x180093 / 0x7d0 * _0x43e72e.Ve;
          _0x43e72e.We = _0x43e72e.We + _0x180093 / 0x7d0 * _0x43e72e.Xe;
          _0x43e72e.alpha = Math.sin(Math.PI * _0x43e72e.We) * 0.5;
          _0x43e72e.scale.set(_0x43e72e.Ue);
          _0x43e72e.position.x = _0x24a1e4 * (0.25 + _0x43e72e.Ye * 0.5);
          _0x43e72e.position.y = _0x43e72e.Ze ? _0x264552 * (0x1 - (0x1 + _0x43e72e.We) * 0.5) : _0x264552 * (0x1 - (0x0 + _0x43e72e.We) * 0.5);
          if (_0x43e72e.We > 0x1) {
            _0x452dbd(_0x43e72e);
            this.Pe.splice(_0x21f729, 0x1);
            _0x21f729--;
          }
          _0x21f729++;
        }
      };
      var _0x2bc953 = function () {
        return _0x51baad(_0x2ac030.fc, function (_0x43a385, _0x3e6e8d, _0x2f0ce8, _0x11fa3d, _0x1cd445, _0x403871, _0x1e3b69) {
          _0x2ac030.fc.call(this, _0x43a385, {
            'fill': _0x3e6e8d,
            'fontFamily': "wormup",
            'fontSize': 0x24
          });
          this.anchor.set(0.5);
          this.Ze = _0x2f0ce8;
          this.Ue = _0x11fa3d;
          this.Ve = _0x1cd445;
          this.Ye = _0x403871;
          this.We = 0x0;
          this.Xe = _0x1e3b69;
        });
      }();
      return _0x4b77c5;
    }();
    var _0x397144 = function () {
      function _0x4b4ddf(_0x56a4a5, _0x4573dc) {
        this.Gc = _0x56a4a5;
        this.Hc = _0x4573dc;
      }
      return _0x4b4ddf;
    }();
    var _0x31e63b = function () {
      function _0xda9dea() {
        this.af = 0x0;
        this.bf = 0x0;
        this.ub = 0x1f4;
        this.cf = 0xfa0;
        this.df = 0x1b58;
      }
      _0xda9dea.TEAM_DEFAULT = 0x0;
      _0xda9dea.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return _0xda9dea;
    }();
    var _0x578aed = function () {
      function _0x231ba4(_0x2c8496) {
        this.se = _0x2c8496;
        this.te = _0x2c8496.get()[0x0];
        this.ue = new _0x2ac030.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
        });
        this.ve = new _0x2ac030.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 0x168);
        this.gf = 0x0;
        this.hf = 0x0;
        this['if'] = 0xf;
        this.jf = 0.5;
        this.kf = 0x0;
        this.lf = new _0x1c6b08();
        this.mf = new _0x2ac030.bc();
        this.nf = new _0x2ac030.Zb();
        this.pf = new _0x2ac030.Zb();
        this.pf.sortableChildren = true;
        this.qf = new _0x2ac030.Zb();
        this.rf = new _0x2ac030.Zb();
        this.rf.sortableChildren = true;
        this.sf = new _0x2ac030.Zb();
        this.tf = new _0xc3868d();
        this.uf = new _0x20441c();
        this.vf = new _0x47000f();
        this.wf = new _0x46feaf();
        this.xf = new _0x2ac030.ec();
        this.yf = {
          'x': 0x0,
          'y': -0x14
        };
        this.a();
      }
      _0x231ba4.prototype.a = function () {
        this.ue.backgroundColor = 0x0;
        this.lf.zf.zIndex = 0xa;
        this.ve.addChild(this.lf.zf);
        this.mf.zIndex = 0x14;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 0x1388;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 0x13ec;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 0x2710;
        this.ve.addChild(this.qf);
        this.xf.texture = (window.anApp = _0x2ba968).q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 0x1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 0x2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 0x3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 0x4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 0x5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 0x6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      _0x231ba4.prototype.Ra = function () {
        var _0x11d5be = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x4bb3ed = this.se.width();
        var _0x509ad2 = this.se.height();
        this.ue.resize(_0x4bb3ed, _0x509ad2);
        this.ue.resolution = _0x11d5be;
        this.te.width = _0x11d5be * _0x4bb3ed;
        this.te.height = _0x11d5be * _0x509ad2;
        this.jf = Math.min(Math.min(_0x4bb3ed, _0x509ad2), 0.625 * Math.max(_0x4bb3ed, _0x509ad2));
        this.xf.position.x = _0x4bb3ed / 0x2;
        this.xf.position.y = _0x509ad2 / 0x2;
        this.xf.width = _0x4bb3ed;
        this.xf.height = _0x509ad2;
        this.vf.position.x = _0x4bb3ed - 0xe1;
        this.vf.position.y = 0x1;
        window.changedNf = () => this.jf = Math.min(Math.max(_0x4bb3ed, _0x509ad2), window.multiplier * Math.min(_0x4bb3ed, _0x509ad2));
        this.tf.position.x = 0x3c;
        this.uf.position.x = 0x6e;
        this.vf.position.x = _0x4bb3ed - 0xc8;
        this.tf.position.y = 0x3c;
        this.uf.position.y = 0xa;
        this.vf.position.y = 0x3;
        this.tf.addChild(ctx.hoisinhnhanh);
        this.tf.addChild(ctx.clock);
        this.tf.addChild(ctx.quaytron);
        this.vf.addChild(ctx.value_server);
        this.vf.addChild(ctx.containerImgS);
        this.tf.addChild(ctx.borderImg);
        window.retundFlagError = () => {
          return ctx.containerImgS.texture = PIXI.Texture.fromImage('https://i.imgur.com/EkbSd65.png');
        };
        this.tf.addChild(ctx.containerCountInfo);
      };
      _0x231ba4.prototype.Te = function (_0x4dafcd, _0x2fe38e) {
        var _0x13549a = window.anApp = _0x2ba968;
        this['if'] = 0xf;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(_0x4dafcd.af == 0x0 ? _0x13549a.q.Cf : _0x13549a.q.Df);
        var _0x41074d = this.mf;
        _0x41074d.clear();
        _0x41074d.lineStyle(0.8, 0xff0000);
        _0x41074d.drawCircle(0x0, 0x0, _0x4dafcd.ub);
        _0x41074d.endFill();
        this.vf.Ef = _0x2fe38e;
        this.sf.visible = _0x2fe38e;
      };
      _0x231ba4.prototype.Pa = function (_0x2ee5e7, _0x424824) {
        if (!(this.ue.width <= 0x5)) {
          var _0x374e24 = window.anApp = _0x2ba968;
          var _0x5df030 = _0x374e24.o.N;
          var _0x4dbab2 = this.ue.width / this.ue.resolution;
          var _0x1156fa = this.ue.height / this.ue.resolution;
          this['if'] = _0x374e24.o.jb > this['if'] ? Math.min(_0x374e24.o.jb, this['if'] + _0x424824 * 0.002) : Math.max(_0x374e24.o.jb, this['if'] - _0x424824 * 0.002);
          var _0x206776 = this.jf / this['if'];
          var _0x3633a8 = _0x374e24.o.N.Ff[_0x1609ac.ZOOM_TYPE];
          var _0xe3700d = _0x3633a8 != null && _0x3633a8.sc;
          this.kf = _0x1b3a69(this.kf + _0x424824 / 0x3e8 * ((_0xe3700d ? 0x1 : 0x0) * 0.1 - this.kf), 0x0, 0x1);
          this.xf.alpha = this.kf;
          this.ff = this.ff + _0x424824 * 0.01;
          if (this.ff > 0x168) {
            this.ff = this.ff % 0x168;
          }
          this.gf = Math.sin(_0x2ee5e7 / 0x4b0 * 0x2 * Math.PI);
          var _0x2bf358 = _0x5df030.Gf();
          this.yf.x = _0x2bf358.x + (this.yf.x - _0x2bf358.x) * Math.pow(0.5, _0x424824 / 33.333);
          this.yf.y = _0x2bf358.y + (this.yf.y - _0x2bf358.y) * Math.pow(0.5, _0x424824 / 33.333);
          var _0x31c53f = _0x4dbab2 / _0x206776 / 0x2;
          var _0x453a07 = _0x1156fa / _0x206776 / 0x2;
          _0x374e24.o.yb(this.yf.x - _0x31c53f * 1.3, this.yf.x + _0x31c53f * 1.3, this.yf.y - _0x453a07 * 1.3, this.yf.y + _0x453a07 * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, _0x31c53f * 0x2, _0x453a07 * 0x2);
          var _0x339133 = _0x374e24.o.fb.ub;
          this.ve.scale.x = _0x206776;
          this.ve.scale.y = _0x206776;
          this.ve.position.x = _0x4dbab2 / 0x2 - this.yf.x * _0x206776;
          this.ve.position.y = _0x1156fa / 0x2 - this.yf.y * _0x206776;
          var _0x5232f2 = Math.hypot(_0x2bf358.x, _0x2bf358.y);
          if (_0x5232f2 > _0x339133 - 0xa) {
            this.hf = _0x1b3a69(0x1 + (_0x5232f2 - _0x339133) / 0xa, 0x0, 0x1);
            var _0x5223c6 = Math.cos(this.ff * _0x4b4c80 / 0x168) * (0x1 - this.hf) + this.hf * 0x1;
            var _0x1c63af = Math.sin(this.ff * _0x4b4c80 / 0x168) * (0x1 - this.hf);
            var _0x1a969b = (Math.atan2(_0x1c63af, _0x5223c6) + _0x4b4c80) % _0x4b4c80 * 0x168 / _0x4b4c80;
            var _0x1d4491 = this.hf * (0.5 + this.gf * 0.5);
            var _0x350c50 = _0x539116(Math.floor(_0x1a969b), 0x1, 0.85 - this.hf * 0.25);
            this.lf.Hf(_0x350c50[0x0], _0x350c50[0x1], _0x350c50[0x2], 0.1 + _0x1d4491 * 0.2);
          } else {
            this.hf = 0x0;
            var _0x1fcadd = _0x539116(Math.floor(this.ff), 0x1, 0.85);
            this.lf.Hf(_0x1fcadd[0x0], _0x1fcadd[0x1], _0x1fcadd[0x2], 0.1);
          }
          var _0x4067e2 = 0x0;
          for (; _0x4067e2 < this.sf.children.length; _0x4067e2++) {
            var _0x19829b = this.sf.children[_0x4067e2];
            _0x19829b.position.x = _0x4dbab2 / 0x2 - (this.yf.x - _0x19829b.If.x) * _0x206776;
            _0x19829b.position.y = _0x1156fa / 0x2 - (this.yf.y - _0x19829b.If.y) * _0x206776;
          }
          this.tf.Jf.position.x = _0x2bf358.x / _0x339133 * this.tf.Kf;
          this.tf.Jf.position.y = _0x2bf358.y / _0x339133 * this.tf.Kf;
          this.uf.Qa(_0x2ee5e7);
          this.wf.Te(_0x2ee5e7, _0x424824);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      _0x231ba4.prototype.Lf = function (_0x3879ac, _0x5b421c) {
        _0x5b421c.Of.Nf.Mf().zIndex = (_0x3879ac + 0x80000000) / 0x100000000 * 0x1388;
        this.nf.addChild(_0x5b421c.Of.Pf.Mf());
        this.pf.addChild(_0x5b421c.Of.Nf.Mf());
      };
      _0x231ba4.prototype.Qf = function (_0x3c1bc6, _0x4d4576, _0x16e7fa) {
        _0x4d4576.Rf.zIndex = (window.anApp = _0x2ba968).o.fb.bf ? 0x0 : 0xa + (_0x3c1bc6 + 0x8000) / 0x10000 * 0x1388;
        this.qf.addChild(_0x4d4576.Rf);
        if (_0x3c1bc6 != (window.anApp = _0x2ba968).o.fb.bf) {
          this.sf.addChild(_0x16e7fa);
        }
      };
      var _0xc3868d = function () {
        return _0x51baad(_0x2ac030.Zb, function () {
          _0x2ac030.Zb.call(this);
          this.Kf = 0x28;
          this.Sf = new _0x2ac030.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new _0x2ac030.bc();
          var _0x45ada5 = new _0x2ac030.bc();
          _0x45ada5.beginFill("black", 0.4);
          _0x45ada5.drawCircle(0x0, 0x0, this.Kf);
          _0x45ada5.endFill();
          _0x45ada5.lineStyle(0x2, 0xffffff);
          _0x45ada5.drawCircle(0x0, 0x0, this.Kf);
          _0x45ada5.moveTo(0x0, -this.Kf);
          _0x45ada5.lineTo(0x0, +this.Kf);
          _0x45ada5.moveTo(-this.Kf, 0x0);
          _0x45ada5.lineTo(+this.Kf, 0x0);
          _0x45ada5.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 0x2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(0xff0000);
          this.Jf.drawCircle(0x0, 0x0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(0x1, "black");
          this.Jf.drawCircle(0x0, 0x0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(_0x45ada5);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var _0x20441c = function () {
        var _0xa7d465 = _0x51baad(_0x2ac030.Zb, function () {
          _0x2ac030.Zb.call(this);
          this.Tf = {};
        });
        _0xa7d465.prototype.Qa = function (_0xe2631c) {
          var _0x54407b = 0.5 + Math.cos(_0x4b4c80 * (_0xe2631c / 0x3e8 / 1.6)) * 0.5;
          var _0x5d2df3;
          for (_0x5d2df3 in this.Tf) {
            var _0x41de4a = this.Tf[_0x5d2df3];
            var _0x65f9f7 = _0x41de4a.Uf;
            _0x41de4a.alpha = 0x1 - _0x65f9f7 + _0x65f9f7 * _0x54407b;
          }
        };
        _0xa7d465.prototype.Te = function (_0x3d4d44) {
          var _0x48bc5a;
          for (_0x48bc5a in this.Tf) {
            if (_0x3d4d44[_0x48bc5a] == null || !_0x3d4d44[_0x48bc5a].sc) {
              _0x452dbd(this.Tf[_0x48bc5a]);
              delete this.Tf[_0x48bc5a];
            }
          }
          var _0x1beb4e = 0x0;
          var _0x31d680;
          for (_0x31d680 in _0x3d4d44) {
            var _0x51c141 = _0x3d4d44[_0x31d680];
            if (_0x51c141.sc) {
              var _0x334ae8 = this.Tf[_0x31d680];
              if (!_0x334ae8) {
                var _0xfc31c5 = (window.anApp = _0x2ba968).p.Dc().ld(_0x51c141.rc).Zc;
                _0x334ae8 = new _0x38eadd();
                _0x334ae8.texture = _0xfc31c5.Hc;
                _0x334ae8.width = 0x28;
                _0x334ae8.height = 0x28;
                this.Tf[_0x31d680] = _0x334ae8;
                this.addChild(_0x334ae8);
              }
              _0x5e496a(this, _0x31d680, _0x51c141.tc);
              _0x334ae8.Uf = _0x51c141.tc;
              _0x334ae8.position.x = _0x1beb4e;
              _0x1beb4e = _0x1beb4e + 0x28;
            }
          }
        };
        var _0x38eadd = function () {
          return _0x51baad(_0x2ac030.ec, function () {
            _0x2ac030.ec.call(this);
            this.Uf = 0x0;
          });
        }();
        return _0xa7d465;
      }();
      var _0x47000f = function () {
        var _0x599c61 = _0x51baad(_0x2ac030.Zb, function () {
          _0x2ac030.Zb.call(this);
          this.Ef = true;
          this.Vf = 0x10;
          this.Wf = 0x11;
          this.Pe = [];
          var _0x124e91 = 0x0;
          for (; _0x124e91 < 0x4; _0x124e91++) {
            this.Xf();
          }
        });
        _0x599c61.prototype.Te = function (_0x5de031) {
          var _0x3b9dfa = window.anApp = _0x2ba968;
          var _0x2f973d = _0x3b9dfa.o.fb.af == 0x10;
          var _0x2aaf8d = 0x7;
          var _0x40cfa5 = 0x0;
          if (_0x40cfa5 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[_0x40cfa5].Yf(0x1, "white");
          this.Pe[_0x40cfa5].Zf('', window.I18N_MESSAGES[''], '(' + _0x3b9dfa.o.tb + " online)");
          this.Pe[_0x40cfa5].position.y = _0x2aaf8d;
          _0x2aaf8d = _0x2aaf8d + this.Vf;
          _0x40cfa5 = _0x40cfa5 + 0x1;
          if (_0x5de031.$f.length > 0x0) {
            _0x2aaf8d = _0x2aaf8d + this.Wf;
          }
          var _0x49407b = 0x0;
          for (; _0x49407b < _0x5de031.$f.length; _0x49407b++) {
            var _0x1e5a80 = _0x5de031.$f[_0x49407b];
            var _0x5a2968 = _0x3b9dfa.p.Dc().ed(_0x1e5a80._f);
            if (_0x40cfa5 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x40cfa5].Yf(0.8, _0x5a2968.bd._c);
            this.Pe[_0x40cfa5].Zf('' + (_0x49407b + 0x1), _0x24c040(_0x5a2968.ad), '' + Math.floor(_0x1e5a80.M));
            this.Pe[_0x40cfa5].position.y = _0x2aaf8d;
            _0x2aaf8d = _0x2aaf8d + this.Vf;
            _0x40cfa5 = _0x40cfa5 + 0x1;
          }
          if (_0x5de031.ag.length > 0x0) {
            _0x2aaf8d = _0x2aaf8d + this.Wf;
          }
          var _0x398229 = 0x0;
          for (; _0x398229 < _0x5de031.ag.length; _0x398229++) {
            var _0xba7899 = _0x5de031.ag[_0x398229];
            var _0x3cf21e = _0x3b9dfa.o.fb.bf == _0xba7899.bg;
            var _0x2ea786 = undefined;
            var _0x9b9155 = undefined;
            if (_0x3cf21e) {
              _0x2ea786 = "yellow";
              _0x9b9155 = _0x3b9dfa.o.N.Mb.ad;
            } else {
              var _0x2c702a = _0x3b9dfa.o.hb[_0xba7899.bg];
              if (_0x2c702a != null) {
                _0x2ea786 = _0x2f973d ? _0x3b9dfa.p.Dc().ed(_0x2c702a.Mb.cg).bd._c : _0x3b9dfa.p.Dc().dd(_0x2c702a.Mb.dg)._c;
                _0x9b9155 = this.Ef ? _0x2c702a.Mb.ad : '---';
              } else {
                _0x2ea786 = "gray";
                _0x9b9155 = '?';
              }
            }
            if (_0x3cf21e) {
              _0x2aaf8d = _0x2aaf8d + this.Wf;
            }
            if (_0x40cfa5 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x40cfa5].Yf(_0x3cf21e ? 0x1 : 0.8, _0x2ea786);
            var _0x3b1cb3 = Math.floor(_0xba7899.M);
            _0x3b1cb3.dotFormat();
            this.Pe[_0x40cfa5].Zf('' + (_0x398229 + 0x1), _0x9b9155, '' + _0x3b1cb3.dotFormat());
            this.Pe[_0x40cfa5].position.y = _0x2aaf8d;
            _0x2aaf8d = _0x2aaf8d + this.Vf;
            _0x40cfa5 = _0x40cfa5 + 0x1;
            if (_0x3cf21e) {
              _0x2aaf8d = _0x2aaf8d + this.Wf;
            }
          }
          if (_0x3b9dfa.o.O > _0x5de031.ag.length) {
            _0x2aaf8d = _0x2aaf8d + this.Wf;
            if (_0x40cfa5 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x40cfa5].Yf(0x2, 'white');
            window.tuNewScore = Math.floor(_0x3b9dfa.o.N.M);
            window.tuNewScore.dotFormat();
            this.Pe[_0x40cfa5].Zf('' + _0x3b9dfa.o.O, _0x3b9dfa.o.N.Mb.ad, '' + window.tuNewScore.dotFormat());
            this.Pe[_0x40cfa5].position.y = _0x2aaf8d;
            _0x2aaf8d = _0x2aaf8d + this.Vf;
            _0x40cfa5 = _0x40cfa5 + 0x1;
            _0x2aaf8d = _0x2aaf8d + this.Wf;
          }
          while (this.Pe.length > _0x40cfa5) {
            _0x452dbd(this.Pe.pop());
          }
        };
        _0x599c61.prototype.Xf = function () {
          var _0x4626b3 = new _0x2074db();
          _0x4626b3.position.y = 0x0;
          if (this.Pe.length > 0x0) {
            _0x4626b3.position.y = this.Pe[this.Pe.length - 0x1].position.y + this.Vf;
          }
          this.Pe.push(_0x4626b3);
          this.addChild(_0x4626b3);
        };
        var _0x2074db = function () {
          var _0x47d13b = _0x51baad(_0x2ac030.Zb, function () {
            _0x2ac030.Zb.call(this);
            this.eg = new _0x2ac030.fc('', {
              'fontFamily': "wormup",
              'fontSize': 0xb,
              'fill': "white",
              'fontWeight': "bold",
              'line': 0x5
            });
            this.eg.anchor.x = 0x2;
            this.eg.position.x = 0x4;
            this.addChild(this.eg);
            this.fg = new _0x2ac030.fc('', {
              'fontFamily': "wormup",
              'fontSize': 0xb,
              'fill': 'white',
              'fontWeight': "bold",
              'line': 0x5
            });
            this.fg.anchor.x = 0x0;
            this.fg.position.x = 0x4;
            this.addChild(this.fg);
            this.gg = new _0x2ac030.fc('', {
              'fontFamily': 'wormup',
              'fontSize': 0xb,
              'fill': "white",
              'fontWeight': "bold",
              'line': 0x5
            });
            this.gg.anchor.x = 0x1;
            this.gg.position.x = 0xbe;
            this.addChild(this.gg);
          });
          _0x47d13b.prototype.Zf = function (_0x301343, _0x83b255, _0x42d165) {
            this.eg.text = _0x301343;
            this.gg.text = _0x42d165;
            var _0x2fc1ba = _0x83b255;
            this.fg.text = _0x2fc1ba;
            while (this.fg.width > 0x78) {
              _0x2fc1ba = _0x2fc1ba.substring(0x0, _0x2fc1ba.length - 0x1);
              this.fg.text = _0x2fc1ba + '..';
            }
          };
          _0x47d13b.prototype.Yf = function (_0x15c455, _0x1901b6) {
            this.eg.alpha = _0x15c455;
            this.eg.style.fill = _0x1901b6;
            this.fg.alpha = _0x15c455;
            this.fg.style.fill = _0x1901b6;
            this.gg.alpha = _0x15c455;
            this.gg.style.fill = _0x1901b6;
          };
          return _0x47d13b;
        }();
        return _0x599c61;
      }();
      return _0x231ba4;
    }();
    var _0x2ff51b = function () {
      function _0xfa44a5(_0x31de74) {
        this.o = _0x31de74;
        this.hg = [];
        this.ig = 0x0;
      }
      _0xfa44a5.prototype.Xb = function (_0x51bbab) {
        this.hg.push(new DataView(_0x51bbab));
      };
      _0xfa44a5.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0x0;
      };
      _0xfa44a5.prototype.Bb = function () {
        for (var _0x236dcd = 0x0; _0x236dcd < 0xa; _0x236dcd++) {
          if (this.hg.length === 0x0) {
            return;
          }
          var _0x27b795 = this.hg.shift();
          try {
            this.jg(_0x27b795);
          } catch (_0x330747) {
            console.log("DataReader error: " + _0x330747);
            throw _0x330747;
          }
        }
      };
      _0xfa44a5.prototype.jg = function (_0x8b2ed6) {
        switch (_0x8b2ed6.mc(0x0) & 0xff) {
          case 0x0:
            this.kg(_0x8b2ed6, 0x1);
            return;
          case 0x1:
            this.lg(_0x8b2ed6, 0x1);
            return;
          case 0x2:
            this.mg(_0x8b2ed6, 0x1);
            return;
          case 0x3:
            this.ng(_0x8b2ed6, 0x1);
            return;
          case 0x4:
            this.og(_0x8b2ed6, 0x1);
            return;
          case 0x5:
            this.pg(_0x8b2ed6, 0x1);
            return;
        }
      };
      _0xfa44a5.prototype.kg = function (_0x1f8c2d, _0x2c0d3a) {
        console.log("sgp1");
        this.o.fb.af = _0x1f8c2d.mc(_0x2c0d3a);
        _0x2c0d3a = _0x2c0d3a + 0x1;
        var _0x3f44a8 = _0x1f8c2d.nc(_0x2c0d3a);
        _0x2c0d3a = _0x2c0d3a + 0x2;
        this.o.fb.bf = _0x3f44a8;
        this.o.N.Mb.Lb = _0x3f44a8;
        this.o.fb.ub = _0x1f8c2d.pc(_0x2c0d3a);
        _0x2c0d3a = _0x2c0d3a + 0x4;
        this.o.fb.cf = _0x1f8c2d.pc(_0x2c0d3a);
        _0x2c0d3a = _0x2c0d3a + 0x4;
        this.o.fb.df = _0x1f8c2d.pc(_0x2c0d3a);
        _0x2c0d3a = _0x2c0d3a + 0x4;
        (window.anApp = _0x2ba968).s.H.wb.Te(this.o.fb, (window.anApp = _0x2ba968).s.xa.wa());
        console.log("sgp2");
        return _0x2c0d3a;
      };
      _0xfa44a5.prototype.lg = function (_0x1757e1, _0x42f92e) {
        var _0x29f932 = this.ig++;
        var _0x5f35df = _0x1757e1.nc(_0x42f92e);
        _0x42f92e += 0x2;
        var _0x3c70fd = undefined;
        _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
        _0x42f92e += this.rg(_0x3c70fd);
        for (var _0x109168 = 0x0; _0x109168 < _0x3c70fd; _0x109168++) {
          _0x42f92e = this.sg(_0x1757e1, _0x42f92e);
        }
        _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
        _0x42f92e += this.rg(_0x3c70fd);
        for (var _0xc93163 = 0x0; _0xc93163 < _0x3c70fd; _0xc93163++) {
          _0x42f92e = this.tg(_0x1757e1, _0x42f92e);
        }
        _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
        _0x42f92e += this.rg(_0x3c70fd);
        for (var _0x28bd29 = 0x0; _0x28bd29 < _0x3c70fd; _0x28bd29++) {
          _0x42f92e = this.ug(_0x1757e1, _0x42f92e);
        }
        _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
        _0x42f92e += this.rg(_0x3c70fd);
        for (var _0x523342 = 0x0; _0x523342 < _0x3c70fd; _0x523342++) {
          _0x42f92e = this.vg(_0x1757e1, _0x42f92e);
        }
        _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
        _0x42f92e += this.rg(_0x3c70fd);
        for (var _0xdfdd4a = 0x0; _0xdfdd4a < _0x3c70fd; _0xdfdd4a++) {
          _0x42f92e = this.wg(_0x1757e1, _0x42f92e);
        }
        _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
        _0x42f92e += this.rg(_0x3c70fd);
        for (var _0x124e3f = 0x0; _0x124e3f < _0x3c70fd; _0x124e3f++) {
          _0x42f92e = this.xg(_0x1757e1, _0x42f92e);
        }
        _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
        _0x42f92e += this.rg(_0x3c70fd);
        for (var _0x4e2528 = 0x0; _0x4e2528 < _0x3c70fd; _0x4e2528++) {
          _0x42f92e = this.yg(_0x1757e1, _0x42f92e);
        }
        _0x3c70fd = this.qg(_0x1757e1, _0x42f92e);
        _0x42f92e += this.rg(_0x3c70fd);
        for (var _0x8097a0 = 0x0; _0x8097a0 < _0x3c70fd; _0x8097a0++) {
          _0x42f92e = this.zg(_0x1757e1, _0x42f92e);
        }
        if (_0x29f932 > 0x0) {
          _0x42f92e = this.Ag(_0x1757e1, _0x42f92e);
        }
        this.o.Qb(_0x29f932, _0x5f35df);
        return _0x42f92e;
      };
      _0xfa44a5.prototype.vg = function (_0xa559fd, _0x1d22c8) {
        var _0x29142a = new _0x3db195.Config();
        _0x29142a.Lb = _0xa559fd.nc(_0x1d22c8);
        _0x1d22c8 = _0x1d22c8 + 0x2;
        _0x29142a.cg = this.o.fb.af == 0x10 ? _0xa559fd.mc(_0x1d22c8++) : _0x31e63b.TEAM_DEFAULT;
        _0x29142a.dg = _0xa559fd.nc(_0x1d22c8);
        let _0x2fdaf1 = _0x1d22c8;
        _0x1d22c8 = _0x1d22c8 + 0x2;
        _0x29142a.Bg = _0xa559fd.nc(_0x1d22c8);
        let _0x41c789 = _0x1d22c8;
        _0x1d22c8 = _0x1d22c8 + 0x2;
        _0x29142a.Cg = _0xa559fd.nc(_0x1d22c8);
        let _0x34c8b6 = _0x1d22c8;
        _0x1d22c8 = _0x1d22c8 + 0x2;
        _0x29142a.Dg = _0xa559fd.nc(_0x1d22c8);
        let _0x378e38 = _0x1d22c8;
        _0x1d22c8 = _0x1d22c8 + 0x2;
        _0x29142a.Eg = _0xa559fd.nc(_0x1d22c8);
        let _0x23ad79 = _0x1d22c8;
        _0x1d22c8 = _0x1d22c8 + 0x2;
        var _0x5214ef = _0xa559fd.mc(_0x1d22c8);
        _0x1d22c8 = _0x1d22c8 + 0x1;
        var _0x45f5ff = '';
        var _0x4809ad = 0x0;
        for (; _0x4809ad < _0x5214ef; _0x4809ad++) {
          _0x45f5ff = _0x45f5ff + String.fromCharCode(_0xa559fd.nc(_0x1d22c8));
          _0x1d22c8 = _0x1d22c8 + 0x2;
        }
        if (_0x1d22c8 > 0xd2) {
          for (let _0x5aeb3b in this.o.hb) {
            if (/^(.{16})(\U_\d{13})$/.test(this.o.hb[_0x5aeb3b].Mb.ad)) {
              console.log("nombre: " + this.o.hb[_0x5aeb3b].Mb.ad);
              var _0x2a8700 = this.o.hb[_0x5aeb3b].Mb.ad.substr(-0xd);
              console.log("elimina spacios: " + _0x2a8700);
              _0xfa44a5 = _0x2a8700.substr(0x0, 0x4);
              console.log("primeros digitos: " + _0xfa44a5);
              let _0x5c9f51 = _0x2a8700.substr(0x4, 0x3);
              console.log("segundos digitos: " + _0x5c9f51);
              let _0x13e011 = _0x2a8700.substr(0x7, 0x3);
              console.log("tercer digitos: " + _0x13e011);
              let _0x3e68f9 = _0x2a8700.substr(0xa, 0x3);
              console.log("mouthId_A: " + _0x3e68f9);
              if (_0xfa44a5 !== "0000" && theoKzObjects.visibleSkin.indexOf(parseInt(_0xfa44a5)) !== -0x1) {
                this.o.hb[_0x5aeb3b].Mb.dg = parseInt(_0xfa44a5);
              }
              if (_0x5c9f51 !== "000") {
                this.o.hb[_0x5aeb3b].Mb.Eg = parseInt(_0x5c9f51);
              }
              if (_0x13e011 !== "000") {
                this.o.hb[_0x5aeb3b].Mb.Bg = parseInt(_0x13e011);
              }
              if (_0x3e68f9 !== "000") {
                this.o.hb[_0x5aeb3b].Mb.Cg = parseInt(_0x3e68f9);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === _0x29142a.Lb) {
          _0x29142a.dg = theoKzObjects.PropertyManager.rh;
          _0x29142a.Bg = theoKzObjects.PropertyManager.sh;
          _0x29142a.Cg = theoKzObjects.PropertyManager.th;
          _0x29142a.Dg = theoKzObjects.PropertyManager.uh;
          _0x29142a.Eg = theoKzObjects.PropertyManager.vh;
          _0xa559fd.setInt16(_0x2fdaf1, _0x29142a.dg);
          _0xa559fd.setInt16(_0x41c789, _0x29142a.Bg);
          _0xa559fd.setInt16(_0x34c8b6, _0x29142a.Cg);
          _0xa559fd.setInt16(_0x378e38, _0x29142a.Dg);
          _0xa559fd.setInt16(_0x23ad79, _0x29142a.Eg);
          _wormup.aload = true;
          _wormup.aId = _0x2fdaf1;
        }
        _0x29142a.ad = _0x45f5ff;
        if (this.o.fb.bf === _0x29142a.Lb) {
          this.o.N.Fg(_0x29142a);
          _0x29142a.Mb = _0x29142a.Lb;
          _0x29142a.bd = _0x29142a.ad;
        } else {
          var _0xdcb3aa = this.o.hb[_0x29142a.Lb];
          if (_0xdcb3aa != null) {
            _0xdcb3aa.Kb();
          }
          var _0x52c354 = new _0x3db195(this.o.fb);
          _0x52c354.vb((window.anApp = _0x2ba968).s.H.wb);
          this.o.hb[_0x29142a.Lb] = _0x52c354;
          _0x52c354.Fg(_0x29142a);
        }
        return _0x1d22c8;
      };
      _0xfa44a5.prototype.wg = function (_0x56abc8, _0x4f4900) {
        var _0x5a5853 = _0x56abc8.nc(_0x4f4900);
        _0x4f4900 += 0x2;
        var _0xa9f9a2 = _0x56abc8.mc(_0x4f4900);
        _0x4f4900++;
        var _0x443836 = !!(_0xa9f9a2 & 0x1);
        var _0x3e2661 = !!(_0xa9f9a2 & 0x2);
        var _0x185452 = 0x0;
        if (_0x443836) {
          _0x185452 = _0x56abc8.nc(_0x4f4900);
          _0x4f4900 += 0x2;
        }
        var _0x15e837 = this.Gg(_0x5a5853);
        if (_0x15e837 === undefined) {
          return _0x4f4900;
        }
        _0x15e837.Ib = false;
        if (!_0x15e837.Hb) {
          return _0x4f4900;
        }
        var _0x133cff = this.Gg(_0x5a5853);
        if (_0x443836 && _0x133cff !== undefined && _0x133cff.Hb) {
          if (_0x185452 === this.o.fb.bf) {
            var _0x4bec3f = this.o.N.Gf();
            var _0x1bb04f = _0x15e837.Hg(_0x4bec3f.x, _0x4bec3f.y);
            Math.max(0x0, 0x1 - _0x1bb04f.distance / (this.o.jb * 0.5));
            if (_0x1bb04f.distance < this.o.jb * 0.5) {
              (window.anApp = _0x2ba968).s.H.wb.wf.Se(_0x3e2661);
            }
          } else {
            if (_0x5a5853 === this.o.fb.bf) {
              ;
            } else {
              var _0xb71bba = this.o.N.Gf();
              var _0x2e5f83 = _0x15e837.Hg(_0xb71bba.x, _0xb71bba.y);
              Math.max(0x0, 0x1 - _0x2e5f83.distance / (this.o.jb * 0.5));
            }
          }
        } else {
          if (_0x5a5853 === this.o.fb.bf) {
            ;
          } else {
            var _0x2aa9bd = this.o.N.Gf();
            var _0x25fe00 = _0x15e837.Hg(_0x2aa9bd.x, _0x2aa9bd.y);
            Math.max(0x0, 0x1 - _0x25fe00.distance / (this.o.jb * 0.5));
          }
        }
        return _0x4f4900;
      };
      _0xfa44a5.prototype.zg = function (_0x168a29, _0x37d45a) {
        var _0x4691ce = _0x168a29.nc(_0x37d45a);
        _0x37d45a += 0x2;
        var _0x2375d5 = _0x4691ce === this.o.fb.bf ? null : this.o.hb[_0x4691ce];
        var _0x4f2da7 = _0x168a29.mc(_0x37d45a);
        _0x37d45a += 0x1;
        var _0x13d293 = !!(_0x4f2da7 & 0x1);
        if (_0x4f2da7 & 0x2) {
          var _0x4869d6 = _0x168a29.pc(_0x37d45a);
          _0x37d45a += 0x4;
          if (_0x2375d5) {
            _0x2375d5.Ig(_0x4869d6);
          }
        }
        var _0x9a2ec6 = this.Jg(_0x168a29.mc(_0x37d45a++), _0x168a29.mc(_0x37d45a++), _0x168a29.mc(_0x37d45a++));
        var _0x1f01b5 = this.Jg(_0x168a29.mc(_0x37d45a++), _0x168a29.mc(_0x37d45a++), _0x168a29.mc(_0x37d45a++));
        if (_0x2375d5) {
          _0x2375d5.Kg(_0x9a2ec6, _0x1f01b5, _0x13d293);
          var _0x258a44 = this.o.N.Gf();
          var _0x5c823c = _0x2375d5.Gf();
          var _0x73b0a2 = Math.max(0x0, 0x1 - Math.hypot(_0x258a44.x - _0x5c823c.x, _0x258a44.y - _0x5c823c.y) / (this.o.jb * 0.5));
          (window.anApp = _0x2ba968).r.Zd(_0x73b0a2, _0x4691ce, _0x13d293);
        }
        var _0x13f0d8 = this.qg(_0x168a29, _0x37d45a);
        _0x37d45a += this.rg(_0x13f0d8);
        if (_0x2375d5) {
          for (var _0x1dfdb0 in _0x2375d5.Ff) {
            var _0x40d6a5 = _0x2375d5.Ff[_0x1dfdb0];
            if (_0x40d6a5) {
              _0x40d6a5.sc = false;
            }
          }
        }
        for (var _0x3dbe64 = 0x0; _0x3dbe64 < _0x13f0d8; _0x3dbe64++) {
          var _0x3d4646 = _0x168a29.mc(_0x37d45a);
          _0x37d45a++;
          var _0x18c898 = _0x168a29.mc(_0x37d45a);
          _0x37d45a++;
          if (_0x2375d5) {
            var _0x383097 = _0x2375d5.Ff[_0x3d4646];
            _0x383097 ||= _0x2375d5.Ff[_0x3d4646] = new _0x1609ac(_0x3d4646);
            _0x383097.sc = true;
            _0x383097.tc = Math.min(0x1, Math.max(0x0, _0x18c898 / 0x64));
          }
        }
        return _0x37d45a;
      };
      _0xfa44a5.prototype.Ag = function (_0x114c97, _0x3a69dd) {
        var _0x25a036 = this.o.N;
        var _0x4d4b39 = _0x114c97.mc(_0x3a69dd);
        _0x3a69dd += 0x1;
        var _0x4d1989 = !!(_0x4d4b39 & 0x1);
        var _0x80cab1 = !!(_0x4d4b39 & 0x2);
        var _0x395a20 = !!(_0x4d4b39 & 0x4);
        if (_0x80cab1) {
          var _0x1158b9 = _0x25a036.M;
          _0x25a036.Ig(_0x114c97.pc(_0x3a69dd));
          _0x3a69dd += 0x4;
          _0x1158b9 = _0x25a036.M - _0x1158b9;
          if (_0x1158b9 > 0x0) {
            (window.anApp = _0x2ba968).s.H.wb.wf.Re(_0x1158b9);
          }
        }
        if (_0x395a20) {
          this.o.ib = _0x114c97.pc(_0x3a69dd);
          _0x3a69dd += 0x4;
        }
        var _0x2877e5 = this.Jg(_0x114c97.mc(_0x3a69dd++), _0x114c97.mc(_0x3a69dd++), _0x114c97.mc(_0x3a69dd++));
        var _0x164006 = this.Jg(_0x114c97.mc(_0x3a69dd++), _0x114c97.mc(_0x3a69dd++), _0x114c97.mc(_0x3a69dd++));
        _0x25a036.Kg(_0x2877e5, _0x164006, _0x4d1989);
        (window.anApp = _0x2ba968).r.Zd(0.5, this.o.fb.bf, _0x4d1989);
        var _0x1f5c8e = this.qg(_0x114c97, _0x3a69dd);
        _0x3a69dd += this.rg(_0x1f5c8e);
        for (var _0x57e96e in _0x25a036.Ff) {
          var _0x52fbeb = _0x25a036.Ff[_0x57e96e];
          if (_0x52fbeb) {
            _0x52fbeb.sc = false;
          }
        }
        for (var _0x51b48b = 0x0; _0x51b48b < _0x1f5c8e; _0x51b48b++) {
          var _0x5f4fb2 = _0x114c97.mc(_0x3a69dd);
          _0x3a69dd++;
          var _0x5e2b0a = _0x114c97.mc(_0x3a69dd);
          _0x3a69dd++;
          var _0x26127d = _0x25a036.Ff[_0x5f4fb2];
          if (!_0x26127d) {
            _0x26127d = new _0x1609ac(_0x5f4fb2);
            _0x25a036.Ff[_0x5f4fb2] = _0x26127d;
          }
          _0x26127d.sc = true;
          _0x26127d.tc = Math.min(0x1, Math.max(0x0, _0x5e2b0a / 0x64));
        }
        (window.anApp = _0x2ba968).s.H.wb.uf.Te(_0x25a036.Ff);
      };
      _0xfa44a5.prototype.xg = function (_0x35c633, _0x5be2b6) {
        var _0x53b14a = this;
        var _0x237a92 = _0x35c633.nc(_0x5be2b6);
        _0x5be2b6 += 0x2;
        var _0x1bee8e = this.Gg(_0x237a92);
        var _0x5e9d7d = _0x35c633.pc(_0x5be2b6);
        _0x5be2b6 += 0x4;
        var _0x7a9307 = [];
        for (var _0x2aed26 in _0x1bee8e.Ff) {
          if (_0x2aed26 == 0x0) {
            _0x7a9307.push('velocidad');
            $(".v0").fadeIn();
          } else {
            if (_0x2aed26 == 0x1) {
              _0x7a9307.push("movimiento");
              $(".v1").fadeIn();
            } else {
              if (_0x2aed26 == 0x2) {
                _0x7a9307.push("iman");
                $(".v2").fadeIn();
              } else {
                if (_0x2aed26 == 0x3) {
                  _0x7a9307.push("comidax2");
                  $(".v3").fadeIn();
                } else {
                  if (_0x2aed26 == 0x4) {
                    _0x7a9307.push('comidax5');
                    $(".v4").fadeIn();
                  } else {
                    if (_0x2aed26 == 0x5) {
                      _0x7a9307.push("comidax10");
                      $(".v5").fadeIn();
                    } else if (_0x2aed26 == 0x6) {
                      _0x7a9307.push("zoom");
                      $(".v6").fadeIn();
                    } else {
                      console.log("comiste otro potenciador");
                    }
                  }
                }
              }
            }
          }
        }
        window.nombres2 = _0x7a9307;
        $(".Worm_cerca").text(" : " + _0x1bee8e.Mb.ad);
        if (_0x1bee8e.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 0xbb8);
        } else {}
        var _0x202453 = this.qg(_0x35c633, _0x5be2b6);
        _0x5be2b6 += this.rg(_0x202453);
        if (_0x1bee8e) {
          _0x1bee8e.Ig(_0x5e9d7d);
          _0x1bee8e.Lg(function () {
            return _0x53b14a.Jg(_0x35c633.mc(_0x5be2b6++), _0x35c633.mc(_0x5be2b6++), _0x35c633.mc(_0x5be2b6++));
          }, _0x202453);
          _0x1bee8e.Mg(true);
          var _0x53ec2b = this.o.N.Gf();
          var _0x59fa66 = _0x1bee8e.Gf();
          var _0x3982f7 = Math.max(0x0, 0x1 - Math.hypot(_0x53ec2b.x - _0x59fa66.x, _0x53ec2b.y - _0x59fa66.y) / (this.o.jb * 0.5));
          (window.anApp = _0x2ba968).r.Xd(_0x3982f7, _0x237a92);
        } else {
          _0x5be2b6 += _0x202453 * 0x6;
        }
        return _0x5be2b6;
      };
      _0xfa44a5.prototype.yg = function (_0x58d3f9, _0x122472) {
        var _0x370eb8 = _0x58d3f9.nc(_0x122472);
        _0x122472 += 0x2;
        var _0x945286 = this.o.hb[_0x370eb8];
        if (_0x945286 && _0x945286.Ib) {
          _0x945286.Mg(false);
        }
        (window.anApp = _0x2ba968).r.Yd(_0x370eb8);
        return _0x122472;
      };
      _0xfa44a5.prototype.sg = function (_0x342fcb, _0x151158) {
        var _0x1fe216 = new _0xc31941.Config();
        _0x1fe216.Lb = _0x342fcb.oc(_0x151158);
        _0x151158 += 0x4;
        _0x1fe216.cg = this.o.fb.af === 0x10 ? _0x342fcb.mc(_0x151158++) : _0x31e63b.TEAM_DEFAULT;
        _0x1fe216.Ng = this.Jg(_0x342fcb.mc(_0x151158++), _0x342fcb.mc(_0x151158++), _0x342fcb.mc(_0x151158++));
        _0x1fe216.dg = _0x342fcb.mc(_0x151158++);
        var _0x2f80a3 = this.o.gb[_0x1fe216.Lb];
        if (_0x2f80a3 != null) {
          _0x2f80a3.Kb();
        }
        var _0x566797 = new _0xc31941(_0x1fe216, (window.anApp = _0x2ba968).s.H.wb);
        _0x566797.Og(this.Pg(_0x1fe216.Lb), this.Qg(_0x1fe216.Lb), true);
        this.o.gb[_0x1fe216.Lb] = _0x566797;
        return _0x151158;
      };
      _0xfa44a5.prototype.tg = function (_0xff0869, _0x2828ec) {
        var _0x3ab8a5 = _0xff0869.oc(_0x2828ec);
        _0x2828ec += 0x4;
        var _0x11d1e0 = this.o.gb[_0x3ab8a5];
        if (_0x11d1e0) {
          _0x11d1e0.Rg = 0x0;
          _0x11d1e0.Sg = _0x11d1e0.Sg * 1.5;
          _0x11d1e0.Nb = true;
        }
        return _0x2828ec;
      };
      _0xfa44a5.prototype.ug = function (_0xb85c5b, _0x5aae18) {
        var _0x1a81eb = _0xb85c5b.oc(_0x5aae18);
        _0x5aae18 += 0x4;
        var _0x14ba05 = _0xb85c5b.nc(_0x5aae18);
        _0x5aae18 += 0x2;
        var _0x33082a = this.o.gb[_0x1a81eb];
        if (_0x33082a) {
          _0x33082a.Rg = 0x0;
          _0x33082a.Sg = _0x33082a.Sg * 0.1;
          _0x33082a.Nb = true;
          var _0x5e723f = this.Gg(_0x14ba05);
          if (_0x5e723f && _0x5e723f.Hb) {
            this.o.fb.bf;
            var _0x429cea = _0x5e723f.Gf();
            _0x33082a.Og(_0x429cea.x, _0x429cea.y, false);
          }
        }
        return _0x5aae18;
      };
      var _0x5590d8 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
      _0xfa44a5.prototype.mg = function (_0x41b47f) {
        var _0x3da525 = (window.anApp = _0x2ba968).q.Ug.Tg;
        var _0x48474e = _0x3da525.getImageData(0x0, 0x0, 0x50, 0x50);
        var _0x32c2de = _0x5590d8[0x0];
        var _0x1e7b3b = 0x50 - _0x32c2de;
        var _0x1a57e2 = 0x0;
        for (var _0x27e56c = 0x0; _0x27e56c < 0x274; _0x27e56c++) {
          var _0x2a9966 = _0x41b47f.mc(0x1 + _0x27e56c);
          for (var _0x424d4b = 0x0; _0x424d4b < 0x8; _0x424d4b++) {
            var _0x2c2712 = (_0x2a9966 >> _0x424d4b & 0x1) != 0x0;
            var _0x381d81 = (_0x32c2de + _0x1a57e2 * 0x50) * 0x4;
            if (_0x2c2712) {
              _0x48474e.data[_0x381d81] = 0xff;
              _0x48474e.data[_0x381d81 + 0x1] = 0xff;
              _0x48474e.data[_0x381d81 + 0x2] = 0xff;
              _0x48474e.data[_0x381d81 + 0x3] = 0xff;
            } else {
              _0x48474e.data[_0x381d81 + 0x3] = 0x0;
            }
            if (++_0x32c2de >= _0x1e7b3b && ++_0x1a57e2 < 0x50) {
              _0x32c2de = _0x5590d8[_0x1a57e2];
              _0x1e7b3b = 0x50 - _0x32c2de;
            }
          }
        }
        _0x3da525.putImageData(_0x48474e, 0x0, 0x0);
        var _0x25aba7 = (window.anApp = _0x2ba968).s.H.wb.tf.Sf;
        _0x25aba7.texture = (window.anApp = _0x2ba968).q.Ug.Hc;
        _0x25aba7.texture.update();
      };
      _0xfa44a5.prototype.og = function (_0x53acc9, _0x18ab7d) {
        var _0x5cf03e = _0x53acc9.oc(_0x18ab7d);
        _0x18ab7d += 0x4;
        console.log("Wormy Error: " + _0x5cf03e);
      };
      _0xfa44a5.prototype.pg = function (_0x51de43, _0x2945ef) {
        console.log("g.o");
        this.o.Rb();
      };
      _0xfa44a5.prototype.ng = function (_0x6492b5, _0x27bb36) {
        this.o.tb = _0x6492b5.nc(_0x27bb36);
        _0x27bb36 += 0x2;
        this.o.O = _0x6492b5.nc(_0x27bb36);
        _0x27bb36 += 0x2;
        var _0x50e8b8 = new _0x12f1b8();
        _0x50e8b8.ag = [];
        var _0x5635f3 = _0x6492b5.mc(_0x27bb36++);
        for (var _0x3d3aeb = 0x0; _0x3d3aeb < _0x5635f3; _0x3d3aeb++) {
          var _0x3e5fe0 = _0x6492b5.nc(_0x27bb36);
          _0x27bb36 += 0x2;
          var _0x2a7669 = _0x6492b5.pc(_0x27bb36);
          _0x27bb36 += 0x4;
          _0x50e8b8.ag.push(_0x12f1b8.Vg(_0x3e5fe0, _0x2a7669));
        }
        _0x50e8b8.$f = [];
        if (this.o.fb.af === 0x10) {
          var _0x2a9c0a = _0x6492b5.mc(_0x27bb36++);
          for (var _0x54d18b = 0x0; _0x54d18b < _0x2a9c0a; _0x54d18b++) {
            var _0x4fc584 = _0x6492b5.mc(_0x27bb36);
            _0x27bb36 += 0x1;
            var _0x1fc98e = _0x6492b5.pc(_0x27bb36);
            _0x27bb36 += 0x4;
            _0x50e8b8.$f.push(_0x12f1b8.Wg(_0x4fc584, _0x1fc98e));
          }
        }
        (window.anApp = _0x2ba968).s.H.wb.vf.Te(_0x50e8b8);
      };
      _0xfa44a5.prototype.Gg = function (_0x5a1626) {
        return _0x5a1626 === this.o.fb.bf ? this.o.N : this.o.hb[_0x5a1626];
      };
      _0xfa44a5.prototype.Jg = function (_0xa23584, _0x41ecf5, _0x2771a3) {
        return (((_0x2771a3 & 0xff | _0x41ecf5 << 0x8 & 0xff00 | _0xa23584 << 0x10 & 0xff0000) & 0xffffff) / 0x800000 - 0x1) * 0x2710;
      };
      _0xfa44a5.prototype.Pg = function (_0x742ee5) {
        return ((_0x742ee5 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0xfa44a5.prototype.Qg = function (_0x8ee60b) {
        return ((_0x8ee60b >> 0x10 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0xfa44a5.prototype.qg = function (_0x236cd5, _0x3fc3d9) {
        var _0x3183fb = _0x236cd5.mc(_0x3fc3d9);
        if ((_0x3183fb & 0x80) == 0x0) {
          return _0x3183fb;
        }
        var _0x4969ea = _0x236cd5.mc(_0x3fc3d9 + 0x1);
        if ((_0x4969ea & 0x80) == 0x0) {
          return _0x4969ea | _0x3183fb << 0x7 & 0x3f80;
        }
        var _0x308ce2 = _0x236cd5.mc(_0x3fc3d9 + 0x2);
        if ((_0x308ce2 & 0x80) == 0x0) {
          return _0x308ce2 | _0x4969ea << 0x7 & 0x3f80 | _0x3183fb << 0xe & 0x1fc000;
        }
        var _0x3d284b = _0x236cd5.mc(_0x3fc3d9 + 0x3);
        return (_0x3d284b & 0x80) == 0x0 ? _0x3d284b | _0x308ce2 << 0x7 & 0x3f80 | _0x4969ea << 0xe & 0x1fc000 | _0x3183fb << 0x15 & 0xfe00000 : undefined;
      };
      _0xfa44a5.prototype.rg = function (_0x380ea0) {
        if (_0x380ea0 < 0x80) {
          return 0x1;
        } else {
          if (_0x380ea0 < 0x4000) {
            return 0x2;
          } else {
            if (_0x380ea0 < 0x200000) {
              return 0x3;
            } else {
              return _0x380ea0 < 0x10000000 ? 0x4 : undefined;
            }
          }
        }
      };
      return _0xfa44a5;
    }();
    var _0x447791 = function () {
      function _0x3ba9b1(_0x4f4644) {
        this.Xg = _0x4f4644;
      }
      _0x3ba9b1.Yg = function () {
        return new _0x447791(null);
      };
      _0x3ba9b1.Zg = function (_0x3edf5e) {
        return new _0x447791(_0x3edf5e);
      };
      _0x3ba9b1.prototype.$g = function () {
        return this.Xg;
      };
      _0x3ba9b1.prototype._g = function () {
        return this.Xg != null;
      };
      _0x3ba9b1.prototype.ah = function (_0x3f554f) {
        if (this.Xg != null) {
          _0x3f554f(this.Xg);
        }
      };
      return _0x3ba9b1;
    }();
    var _0xc31941 = function () {
      function _0x1a332f(_0x219fb9, _0x37bbda) {
        this.Mb = _0x219fb9;
        this.bh = _0x219fb9.dg >= 0x50;
        this.Ob = 0x0;
        this.Pb = 0x0;
        this.ch = 0x0;
        this.dh = 0x0;
        this.Sg = this.bh ? 0x1 : _0x219fb9.Ng;
        this.Rg = 0x1;
        this.Nb = false;
        this.eh = 0x0;
        this.fh = 0x0;
        this.Jb = 0x1;
        this.Ae = Math.PI * 0x2 * Math.random();
        this.gh = new _0x2a5ade();
        this.gh.hh((window.anApp = _0x2ba968).o.fb.af, this.Mb.cg === _0x31e63b.TEAM_DEFAULT ? null : (window.anApp = _0x2ba968).p.Dc().ed(this.Mb.cg), (window.anApp = _0x2ba968).p.Dc().kd(this.Mb.dg));
        _0x37bbda.Lf(_0x219fb9.Lb, this.gh);
      }
      _0x1a332f.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      _0x1a332f.prototype.Og = function (_0x1c61bc, _0x2c0d72, _0x25bccc) {
        this.Ob = _0x1c61bc;
        this.Pb = _0x2c0d72;
        if (_0x25bccc) {
          this.ch = _0x1c61bc;
          this.dh = _0x2c0d72;
        }
      };
      _0x1a332f.prototype.Fb = function (_0x3ecf87, _0x2e727f) {
        var _0x41563f = Math.min(0.5, this.Sg * 0x1);
        var _0x22cb87 = Math.min(2.5, this.Sg * 1.5);
        this.eh = _0x41563f > this.eh ? Math.min(_0x41563f, this.eh + _0x2e727f * 0.0025) : Math.max(_0x41563f, this.eh - _0x2e727f * 0.0025);
        this.fh = _0x22cb87 > this.fh ? Math.min(_0x22cb87, this.fh + _0x2e727f * 0.0025) : Math.max(_0x22cb87, this.fh - _0x2e727f * 0.0025);
        this.Jb = this.Rg > this.Jb ? Math.min(this.Rg, this.Jb + _0x2e727f * 0.0025) : Math.max(this.Rg, this.Jb - _0x2e727f * 0.0025);
      };
      _0x1a332f.prototype.Gb = function (_0x498cd4, _0x67e5b1, _0x3b4f25) {
        this.ch = this.Ob > this.ch ? Math.min(this.Ob, this.ch + _0x67e5b1 * 0.0025) : Math.max(this.Ob, this.ch - _0x67e5b1 * 0.0025);
        this.dh = this.Pb > this.dh ? Math.min(this.Pb, this.dh + _0x67e5b1 * 0.0025) : Math.max(this.Pb, this.dh - _0x67e5b1 * 0.0025);
        this.gh.Te(this, _0x498cd4, _0x67e5b1, _0x3b4f25);
      };
      _0x1a332f.Config = function () {
        function _0x553fbb() {
          this.Lb = 0x0;
          this.cg = _0x31e63b.TEAM_DEFAULT;
          this.Ng = 0x0;
          this.dg = 0x0;
        }
        return _0x553fbb;
      }();
      return _0x1a332f;
    }();
    var _0x2a5ade = function () {
      function _0x5204a4() {
        this.Of = new _0x52e569(new _0x16e733(), new _0x16e733());
        this.Of.Pf.jh.blendMode = _0x2ac030.ic.jc;
        this.Of.Pf.jh.zIndex = 0x64;
        this.Of.Nf.jh.zIndex = 0x1f4;
      }
      _0x5204a4.prototype.hh = function (_0x2eb760, _0x1adc2b, _0x3c8520) {
        var _0x56ef21 = _0x3c8520.Zc;
        if (_0x56ef21 != null) {
          this.Of.Nf.kh(_0x56ef21);
        }
        var _0x4505fb = _0x2eb760 == 0x10 && _0x1adc2b != null ? _0x1adc2b.cd.$c : _0x3c8520.$c;
        if (_0x4505fb != null) {
          this.Of.Pf.kh(_0x4505fb);
        }
      };
      _0x5204a4.prototype.Te = function (_0x194b12, _0x38c87f, _0x337936, _0x462518) {
        if (!_0x462518(_0x194b12.ch, _0x194b12.dh)) {
          this.Of.lh();
          return;
        }
        var _0x21e810 = _0x194b12.fh * (0x1 + Math.cos(_0x194b12.Ae + _0x38c87f / 0xc8) * 0.3);
        if (_0x194b12.bh) {
          this.Of.mh(_0x194b12.ch, _0x194b12.dh, theoKzObjects.PortionSize * _0x194b12.eh, _0x194b12.Jb * 0x1, theoKzObjects.PortionAura * _0x21e810, 0.8 * _0x194b12.Jb);
        } else {
          this.Of.mh(_0x194b12.ch, _0x194b12.dh, theoKzObjects.FoodSize * _0x194b12.eh, _0x194b12.Jb * 0x1, theoKzObjects.FoodShadow * _0x21e810, 0.3 * _0x194b12.Jb);
        }
      };
      var _0x52e569 = function () {
        function _0x4384f4(_0x3c4bda, _0x2228de) {
          this.Nf = _0x3c4bda;
          this.Pf = _0x2228de;
        }
        _0x4384f4.prototype.mh = function (_0x35fd91, _0x1fbc66, _0x5ea005, _0x1e499c, _0x33b3a6, _0x3b6f9c) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x35fd91, _0x1fbc66);
          this.Nf.oh(_0x5ea005);
          this.Nf.qh(_0x1e499c);
          this.Pf.Mg(true);
          this.Pf.nh(_0x35fd91, _0x1fbc66);
          this.Pf.oh(_0x33b3a6);
          this.Pf.qh(_0x3b6f9c);
        };
        _0x4384f4.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return _0x4384f4;
      }();
      return _0x5204a4;
    }();
    var _0x29260f = function () {
      function _0x4d67e8() {
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.wh = [];
      }
      function _0x2cecfd(_0x244457, _0x4a4aab) {
        if (!(window.anApp = _0x2ba968).p.W()) {
          return null;
        }
        var _0x1f5fe9 = (window.anApp = _0x2ba968).p.Ac();
        if (_0x4a4aab === _0x45dfa9.ia) {
          var _0xb01c04 = _0x37b092(_0x1f5fe9.skinArrayDict, _0x244457);
          return _0xb01c04 < 0x0 ? null : _0x1f5fe9.skinArrayDict[_0xb01c04];
        }
        switch (_0x4a4aab) {
          case _0x45dfa9.ja:
            return _0x1f5fe9.eyesDict[_0x244457];
          case _0x45dfa9.ka:
            return _0x1f5fe9.mouthDict[_0x244457];
          case _0x45dfa9.la:
            return _0x1f5fe9.glassesDict[_0x244457];
          case _0x45dfa9.ma:
            return _0x1f5fe9.hatDict[_0x244457];
        }
        return null;
      }
      function _0x37b092(_0x4e52b0, _0x597f15) {
        for (var _0x557916 = 0x0; _0x557916 < _0x4e52b0.length; _0x557916++) {
          if (_0x4e52b0[_0x557916].id == _0x597f15) {
            return _0x557916;
          }
        }
        return -0x1;
      }
      _0x4d67e8.prototype.a = function () {};
      _0x4d67e8.prototype.ha = function (_0x2b5a22) {
        theoKzObjects.PropertyManager = this;
        localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
        switch (_0x2b5a22) {
          case _0x45dfa9.ia:
            return this.rh;
          case _0x45dfa9.ja:
            return this.sh;
          case _0x45dfa9.ka:
            return this.th;
          case _0x45dfa9.la:
            return this.uh;
          case _0x45dfa9.ma:
            return this.vh;
        }
        return 0x0;
      };
      _0x4d67e8.prototype.xh = function (_0x144899) {
        this.wh.push(_0x144899);
        this.yh();
      };
      _0x4d67e8.prototype.Ia = function () {
        if (!(window.anApp = _0x2ba968).p.W()) {
          return [0x20, 0x21, 0x22, 0x23][parseInt(Math.random() * [0x20, 0x21, 0x22, 0x23].length)];
        }
        var _0x471cdc = (window.anApp = _0x2ba968).p.Ac();
        var _0xd70ae4 = [];
        for (var _0x446954 = 0x0; _0x446954 < _0x471cdc.skinArrayDict.length; _0x446954++) {
          var _0x13bde6 = _0x471cdc.skinArrayDict[_0x446954];
          if (this.Ja(_0x13bde6.id, _0x45dfa9.ia)) {
            _0xd70ae4.push(_0x13bde6);
          }
        }
        return _0xd70ae4.length === 0x0 ? 0x0 : _0xd70ae4[parseInt(_0xd70ae4.length * Math.random())].id;
      };
      _0x4d67e8.prototype.zh = function () {
        if ((window.anApp = _0x2ba968).p.W) {
          var _0x5e801a = (window.anApp = _0x2ba968).p.Ac().skinArrayDict;
          var _0x139c48 = _0x37b092(_0x5e801a, this.rh);
          if (!(_0x139c48 < 0x0)) {
            for (var _0x46e533 = _0x139c48 + 0x1; _0x46e533 < _0x5e801a.length; _0x46e533++) {
              if (this.Ja(_0x5e801a[_0x46e533].id, _0x45dfa9.ia)) {
                this.rh = _0x5e801a[_0x46e533].id;
                this.yh();
                return;
              }
            }
            for (var _0x92fc1a = 0x0; _0x92fc1a < _0x139c48; _0x92fc1a++) {
              if (this.Ja(_0x5e801a[_0x92fc1a].id, _0x45dfa9.ia)) {
                this.rh = _0x5e801a[_0x92fc1a].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      _0x4d67e8.prototype.Ah = function () {
        if ((window.anApp = _0x2ba968).p.W) {
          var _0x33209b = (window.anApp = _0x2ba968).p.Ac().skinArrayDict;
          var _0x5ab9eb = _0x37b092(_0x33209b, this.rh);
          if (!(_0x5ab9eb < 0x0)) {
            for (var _0x264cd6 = _0x5ab9eb - 0x1; _0x264cd6 >= 0x0; _0x264cd6--) {
              if (this.Ja(_0x33209b[_0x264cd6].id, _0x45dfa9.ia)) {
                this.rh = _0x33209b[_0x264cd6].id;
                this.yh();
                return;
              }
            }
            for (var _0x4f4f2b = _0x33209b.length - 0x1; _0x4f4f2b > _0x5ab9eb; _0x4f4f2b--) {
              if (this.Ja(_0x33209b[_0x4f4f2b].id, _0x45dfa9.ia)) {
                this.rh = _0x33209b[_0x4f4f2b].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      _0x4d67e8.prototype.Bh = function (_0x18b171, _0x3335e) {
        if (!(window.anApp = _0x2ba968).p.W() || this.Ja(_0x18b171, _0x3335e)) {
          switch (_0x3335e) {
            case _0x45dfa9.ia:
              if (this.rh != _0x18b171) {
                this.rh = _0x18b171;
                this.yh();
              }
              return;
            case _0x45dfa9.ja:
              if (this.sh != _0x18b171) {
                this.sh = _0x18b171;
                this.yh();
              }
              return;
            case _0x45dfa9.ka:
              if (this.th != _0x18b171) {
                this.th = _0x18b171;
                this.yh();
              }
              return;
            case _0x45dfa9.la:
              if (this.uh != _0x18b171) {
                this.uh = _0x18b171;
                this.yh();
              }
              return;
            case _0x45dfa9.ma:
              if (this.vh != _0x18b171) {
                this.vh = _0x18b171;
                this.yh();
              }
              return;
          }
        }
      };
      _0x4d67e8.prototype.Ja = function (_0x396209, _0x565009) {
        var _0xca4508 = _0x2cecfd(_0x396209, _0x565009);
        return _0xca4508 != null && ((window.anApp = _0x2ba968).u.P() ? _0xca4508.price == 0x0 && !_0xca4508.nonbuyable || (window.anApp = _0x2ba968).u.Ch(_0x396209, _0x565009) : _0xca4508.guest);
      };
      _0x4d67e8.prototype.yh = function () {
        for (var _0x990c10 = 0x0; _0x990c10 < this.wh.length; _0x990c10++) {
          this.wh[_0x990c10]();
        }
      };
      return _0x4d67e8;
    }();
    var _0x45dfa9 = function () {
      function _0x18d1b0() {}
      _0x18d1b0.ia = 'SKIN';
      _0x18d1b0.ja = "EYES";
      _0x18d1b0.ka = "MOUTH";
      _0x18d1b0.la = "GLASSES";
      _0x18d1b0.ma = "HAT";
      return _0x18d1b0;
    }();
    var _0x16e504 = function () {
      function _0x59044c(_0x3299f1, _0x1c444c, _0x1e0d36, _0x75eb9a, _0x3d6522, _0x1f9e90, _0x2e4ac3, _0x1eb859, _0x1aa300) {
        this.Hc = new _0x2ac030._b(_0x3299f1, new _0x2ac030.dc(_0x1c444c, _0x1e0d36, _0x75eb9a, _0x3d6522));
        this.Dh = _0x1c444c;
        this.Eh = _0x1e0d36;
        this.Fh = _0x75eb9a;
        this.Gh = _0x3d6522;
        this.Hh = _0x1f9e90 || (_0x1eb859 || _0x75eb9a) / 0x2;
        this.Ih = _0x2e4ac3 || (_0x1aa300 || _0x3d6522) / 0x2;
        this.Jh = _0x1eb859 || _0x75eb9a;
        this.Kh = _0x1aa300 || _0x3d6522;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return _0x59044c;
    }();
    var _0x3fc8bb = function () {
      function _0x391720() {
        this.fn_o = _0x555181;
        this.Fe = new _0x2ac030._b(_0x2ac030.$b.from("/images/bg-obstacle.png"));
        var _0x57ad6c = _0x2ac030.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80)), new _0x2ac030._b(_0x57ad6c, new _0x2ac030.dc(0x0, 0x0, 0x80, 0x80))];
        this.Cf = new _0x2ac030._b(_0x555181());
        this.Df = new _0x2ac030._b(function () {
          var _0x4ac67c = _0x2ac030.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          _0x4ac67c.wrapMode = _0x2ac030.kc.lc;
          return _0x4ac67c;
        }());
        this.Af = new _0x2ac030._b(_0x2ac030.$b.from('/images/lens.png'));
        var _0x1aa801 = _0x2ac030.$b.from('/images/wear-ability.png');
        var _0x136cd1 = _0x2ac030.$b.from('https://i.imgur.com/EDt862t.png');
        var _0x5956c0 = _0x2ac030.$b.from("https://i.imgur.com/U5sTlhC.png");
        var _0x2486b1 = _0x2ac030.$b.from("https://i.imgur.com/ub4ed3R.png");
        var _0x17cf45 = _0x2ac030.$b.from("###");
        this.X_x5 = new _0x16e504(_0x17cf45, 0x9c, 0x50, 0x57, 0x3c, 0xaa, 1.5, 0x80, 0x80);
        this.X_x10 = new _0x16e504(_0x17cf45, 0x9e, 0xc8, 0x5f, 0x37, 0x109, 128.5, 0x80, 0x80);
        this.X_xxlupa = new _0x16e504(_0x17cf45, 0x4f, 0x8, 0x4b, 0x4d, 0x109, 1.5, 0x80, 0x80);
        this.Id_mobileguia = new _0x16e504(_0x2486b1, 0x0, 0x0, 0x57, 0x4a, 0x15e, 0x3f, 0x80, 0x80);
        this.emoji_headshot = new _0x16e504(_0x136cd1, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
        this.emoji_kill = new _0x16e504(_0x5956c0, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
        this.Ph = new _0x16e504(_0x1aa801, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80);
        this.Qh = new _0x16e504(_0x1aa801, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
        this.Rh = new _0x16e504(_0x17cf45, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80);
        this.Ug = function () {
          var _0x381cd4 = window.document.createElement("canvas");
          _0x381cd4.width = 0x50;
          _0x381cd4.height = 0x50;
          return {
            'te': _0x381cd4,
            'Tg': _0x381cd4.getContext('2d'),
            'Hc': new _0x2ac030._b(_0x2ac030.$b.from(_0x381cd4))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function _0x555181(_0x78ae6) {
        var _0x526947 = _0x2ac030.$b.from(_0x78ae6 || "https://i.imgur.com/8ubx4RA.png");
        _0x526947.wrapMode = _0x2ac030.kc.lc;
        return _0x526947;
      }
      _0x391720.prototype.a = function (_0x3a892e) {
        function _0x11a00c() {
          if (--_0x39a8bb == 0x0) {
            _0x3a892e();
          }
        }
        var _0x39a8bb = 0x4;
        this.Bd = {};
        _0x11a00c();
        this.yd = {};
        _0x11a00c();
        this.Sh = [];
        _0x11a00c();
        this.Th = null;
        _0x11a00c();
      };
      return _0x391720;
    }();
    var _0x11a2e7 = function () {
      function _0x2845bd() {
        this.H = new _0xb909cf();
        this.F = new _0x7533b9();
        this.Uh = new _0x1e7ad8();
        this.Vh = new _0x596786();
        this.Wh = new _0xdc9444();
        this.Xh = new _0x486961();
        this.Yh = new _0x10c855();
        this.Zh = new _0x503836();
        this.xa = new _0x430e34();
        this.$h = new _0x531e76();
        this._h = new _0x2467f1();
        this.ai = new _0x10cf0c();
        this.aa = new _0x208881();
        this.ua = new _0xbf64ac();
        this.pa = new _0x3f8fac();
        this.bi = [];
        this.ci = null;
      }
      function _0x4d0db3(_0x1d2e8a, _0x3fc2f4) {
        if (_0x3fc2f4 != 0x0) {
          var _0x15d16f = _0x1d2e8a[_0x3fc2f4];
          _0x4d27c2(_0x1d2e8a, 0x0, 0x1, _0x3fc2f4);
          _0x1d2e8a[0x0] = _0x15d16f;
        }
      }
      function _0xcacc52(_0xc06f6, _0x3ac8e3) {
        if (_0x3ac8e3 != _0xc06f6.length + 0x1) {
          var _0x2d2b7c = _0xc06f6[_0x3ac8e3];
          _0x4d27c2(_0xc06f6, _0x3ac8e3 + 0x1, _0x3ac8e3, _0xc06f6.length - _0x3ac8e3 - 0x1);
          _0xc06f6[_0xc06f6.length - 0x1] = _0x2d2b7c;
        }
      }
      function _0x1ac15d(_0x421fa2, _0x309efc) {
        for (var _0x51f325 = 0x0; _0x51f325 < _0x421fa2.length; _0x51f325++) {
          if (_0x421fa2[_0x51f325] == _0x309efc) {
            return _0x51f325;
          }
        }
        return -0x1;
      }
      _0x2845bd.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var _0x4f7a62 = 0x0; _0x4f7a62 < this.bi.length; _0x4f7a62++) {
          this.bi[_0x4f7a62].a();
        }
        this.ci = new _0x220c89(_0x5f0b22.di);
      };
      _0x2845bd.prototype.Qa = function (_0x21bbee, _0x2df8b0) {
        for (var _0x4f4c3a = this.bi.length - 0x1; _0x4f4c3a >= 0x0; _0x4f4c3a--) {
          this.bi[_0x4f4c3a].Pa(_0x21bbee, _0x2df8b0);
        }
        if (this.bi[0x0] != this.H && this.bi[0x0] != this.pa && this.ci != null) {
          this.ci.Pa(_0x21bbee, _0x2df8b0);
        }
      };
      _0x2845bd.prototype.Ra = function () {
        for (var _0x424500 = this.bi.length - 0x1; _0x424500 >= 0x0; _0x424500--) {
          this.bi[_0x424500].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      _0x2845bd.prototype.I = function (_0x302e8d) {
        var _0x5d0d71 = _0x1ac15d(this.bi, _0x302e8d);
        if (!(_0x5d0d71 < 0x0)) {
          this.bi[0x0].ei();
          _0x4d0db3(this.bi, _0x5d0d71);
          this.fi();
        }
      };
      _0x2845bd.prototype.gi = function () {
        this.bi[0x0].ei();
        do {
          _0xcacc52(this.bi, 0x0);
        } while (this.bi[0x0].rc != 0x1);
        this.fi();
      };
      _0x2845bd.prototype.fi = function () {
        var _0x47e3aa = this.bi[0x0];
        _0x47e3aa.ii();
        _0x47e3aa.ji();
        this.ki();
      };
      _0x2845bd.prototype.li = function () {
        return this.bi.length != 0x0 && this.bi[0x0].rc == 0x1 && this.aa.mi();
      };
      _0x2845bd.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return _0x2845bd;
    }();
    var _0x12f1b8 = function () {
      function _0x4140b3() {
        this.ag = [];
        this.$f = [];
      }
      _0x4140b3.Vg = function (_0x25310c, _0x19f34a) {
        return {
          'bg': _0x25310c,
          'M': _0x19f34a
        };
      };
      _0x4140b3.Wg = function (_0x1e588e, _0x133628) {
        return {
          '_f': _0x1e588e,
          'M': _0x133628
        };
      };
      return _0x4140b3;
    }();
    var _0x2fb666 = function () {
      function _0x4752f7() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = "guest";
        this.si = {};
        this.ti = null;
      }
      _0x4752f7.prototype.a = function () {
        this.vi();
      };
      _0x4752f7.prototype.X = function () {
        return this.qi ? this.si.userId : '';
      };
      _0x4752f7.prototype.wi = function () {
        return this.qi ? this.si.username : '';
      };
      _0x4752f7.prototype.ga = function () {
        return this.qi ? this.si.nickname : '';
      };
      _0x4752f7.prototype.xi = function () {
        return this.qi ? this.si.avatarUrl : '/images/guest-avatar-xmas2022.png';
      };
      _0x4752f7.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      _0x4752f7.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      _0x4752f7.prototype.zi = function () {
        return this.qi ? this.si.coins : 0x0;
      };
      _0x4752f7.prototype.Ai = function () {
        return this.qi ? this.si.level : 0x1;
      };
      _0x4752f7.prototype.Bi = function () {
        return this.qi ? this.si.expOnLevel : 0x0;
      };
      _0x4752f7.prototype.Ci = function () {
        return this.qi ? this.si.expToNext : 0x32;
      };
      _0x4752f7.prototype.Di = function () {
        return this.qi ? this.si.skinId : 0x0;
      };
      _0x4752f7.prototype.Ei = function () {
        return this.qi ? this.si.eyesId : 0x0;
      };
      _0x4752f7.prototype.Fi = function () {
        return this.qi ? this.si.mouthId : 0x0;
      };
      _0x4752f7.prototype.Gi = function () {
        return this.qi ? this.si.glassesId : 0x0;
      };
      _0x4752f7.prototype.Hi = function () {
        return this.qi ? this.si.hatId : 0x0;
      };
      _0x4752f7.prototype.Ii = function () {
        return this.qi ? this.si.highScore : 0x0;
      };
      _0x4752f7.prototype.Ji = function () {
        return this.qi ? this.si.bestSurvivalTimeSec : 0x0;
      };
      _0x4752f7.prototype.Ki = function () {
        return this.qi ? this.si.kills : 0x0;
      };
      _0x4752f7.prototype.Li = function () {
        return this.qi ? this.si.headShots : 0x0;
      };
      _0x4752f7.prototype.Mi = function () {
        return this.qi ? this.si.sessionsPlayed : 0x0;
      };
      _0x4752f7.prototype.Ni = function () {
        return this.qi ? this.si.totalPlayTimeSec : 0x0;
      };
      _0x4752f7.prototype.Oi = function () {
        return this.qi ? this.si.regDate : {};
      };
      _0x4752f7.prototype.V = function (_0x3538b3) {
        this.ni.push(_0x3538b3);
        _0x3538b3();
      };
      _0x4752f7.prototype.Pi = function (_0xd20409) {
        this.oi.push(_0xd20409);
        _0xd20409();
      };
      _0x4752f7.prototype.Qi = function (_0x4fa1ee) {
        this.pi.push(_0x4fa1ee);
      };
      _0x4752f7.prototype.Ch = function (_0x833e50, _0x21e84f) {
        var _0x742cd3 = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!_0x742cd3) {
          return false;
        }
        for (var _0x5348a7 = 0x0; _0x5348a7 < _0x742cd3.length; _0x5348a7++) {
          var _0x52959a = _0x742cd3[_0x5348a7];
          if (_0x52959a.id == _0x833e50 && _0x52959a.type === _0x21e84f) {
            return true;
          }
        }
        return false;
      };
      _0x4752f7.prototype.P = function () {
        return this.qi;
      };
      _0x4752f7.prototype.ea = function () {
        return this.ri;
      };
      _0x4752f7.prototype.Q = function (_0x3c9ceb) {
        var _0x30cf49 = this;
        if (this.qi) {
          this.Ri(function (_0x5c3d2c) {
            if (_0x5c3d2c) {
              var _0xa8dfbe = _0x30cf49.zi();
              var _0x519962 = _0x30cf49.Ai();
              _0x30cf49.si = _0x5c3d2c;
              _0x1d3e3f(_0x30cf49.si);
              _0x30cf49.Si();
              var _0x2ab5bf = _0x30cf49.zi();
              var _0x431611 = _0x30cf49.Ai();
              if (_0x431611 > 0x1 && _0x431611 != _0x519962) {
                (window.anApp = _0x2ba968).s.aa.Ti(new _0x5b4965(_0x431611));
              }
              var _0x3fbf4c = _0x2ab5bf - _0xa8dfbe;
              if (_0x3fbf4c >= 0x14) {
                (window.anApp = _0x2ba968).s.aa.Ti(new _0x9c729a(_0x3fbf4c));
              }
            }
            if (_0x3c9ceb) {
              _0x3c9ceb();
            }
          });
        }
      };
      _0x4752f7.prototype.Ri = function (_0x59e7b8) {
        $.get("https://gateway.wormate.io/pub/wuid/" + this.ri + "/getUserData", function (_0x3c5b21) {
          _0x59e7b8(_0x3c5b21.user_data);
        });
      };
      _0x4752f7.prototype.Ui = function (_0x4256c7, _0x40f300, _0x5d5a47) {
        var _0x833d80 = this;
        $.get("https://gateway.wormate.io/pub/wuid/" + this.ri + '/buyProperty?id=' + _0x4256c7 + "&type=" + _0x40f300, function (_0x498e5f) {
          if (_0x498e5f.code == 0x4b0) {
            _0x833d80.Q(_0x5d5a47);
          } else {
            _0x5d5a47();
          }
        }).fail(function () {
          _0x5d5a47();
        });
      };
      _0x4752f7.prototype.Vi = function () {
        var _0x2ebc50 = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (_0x3b5847) {
          if (_0x3b5847.status === "connected") {
            if (_0x3b5847.authResponse && _0x3b5847.authResponse.accessToken) {
              _0x2ebc50.Yi("facebook", "fb_" + _0x3b5847.authResponse.accessToken);
            } else {
              _0x2ebc50.Xi();
            }
            return;
          }
          FB.login(function (_0x5a6ca6) {
            if (_0x5a6ca6.status === "connected" && _0x5a6ca6.authResponse && _0x5a6ca6.authResponse.accessToken) {
              _0x2ebc50.Yi('facebook', "fb_" + _0x5a6ca6.authResponse.accessToken);
            } else {
              _0x2ebc50.Xi();
            }
          });
        });
      };
      _0x4752f7.prototype.Zi = function () {
        var _0x350931 = this;
        this.Wi();
        if (GoogleAuth === undefined) {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        GoogleAuth.then(function () {
          console.log('gsi:then');
          if (GoogleAuth.isSignedIn.get()) {
            console.log("gsi:sil");
            var _0x5a77e6 = GoogleAuth.currentUser.get();
            _0x350931.Yi("google", "gg_" + _0x5a77e6.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (_0x54253a) {
            if (_0x54253a.error !== undefined) {
              console.log("gsi:e: " + _0x54253a.error);
              _0x350931.Xi();
              return;
            } else {
              if (_0x54253a.isSignedIn()) {
                console.log("gsi:s");
                _0x350931.Yi("google", "gg_" + _0x54253a.getAuthResponse().id_token);
                return;
              } else {
                console.log("gsi:c");
                _0x350931.Xi();
                return;
              }
            }
          });
        });
      };
      _0x4752f7.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var _0x5aab25 = this.ri;
        var _0x39fa39 = this.ti;
        this.qi = false;
        this.ri = "guest";
        this.si = {};
        this.ti = null;
        _0x184caa(_0x1a491c.Oe, '', 0x3c);
        switch (_0x39fa39) {
          case 'facebook':
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (_0x5aab25 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      _0x4752f7.prototype.bj = function () {
        console.log('dA');
        if (this.qi) {
          $.get("https://gateway.wormate.io/pub/wuid/" + this.ri + "/deleteAccount", function (_0x16216e) {
            if (_0x16216e.code === 0x4b0) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      _0x4752f7.prototype.vi = function () {
        console.log('rs');
        var _0x5467a8 = _0xdbcc88(_0x1a491c.Oe);
        var _0x4941f6 = this;
        if (_0x5467a8 == "facebook") {
          console.log("rs:fb");
          (function _0x1d1ef1() {
            if (typeof FB != "undefined") {
              _0x4941f6.Vi();
            } else {
              setTimeout(_0x1d1ef1, 0x64);
            }
          })();
        } else if (_0x5467a8 == "google") {
          console.log("rs:gg");
          (function _0x3a3507() {
            if (GoogleAuth !== undefined) {
              _0x4941f6.Zi();
            } else {
              setTimeout(_0x3a3507, 0x64);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      _0x4752f7.prototype.aj = function () {
        var _0x95f8ae = 0x0;
        for (; _0x95f8ae < this.ni.length; _0x95f8ae++) {
          this.ni[_0x95f8ae]();
        }
        this.Si();
      };
      _0x4752f7.prototype.Si = function () {
        var _0x5e60f7 = 0x0;
        for (; _0x5e60f7 < this.oi.length; _0x5e60f7++) {
          this.oi[_0x5e60f7]();
        }
        var _0x44d762 = this.pi;
        this.pi = [];
        var _0x114461 = 0x0;
        for (; _0x114461 < _0x44d762.length; _0x114461++) {
          _0x44d762[_0x114461]();
        }
      };
      _0x4752f7.prototype.Yi = function (_0x1e1eaa, _0x91a07d) {
        var _0x285af4 = this;
        var _0x18884e = 0x0;
        var _0x4bb2bc = localStorage.getItem('token__gg');
        if (_0x4bb2bc) {
          console.log("Using the stored token:", _0x4bb2bc);
          $.get("https://gateway.wormate.io/pub/wuid/" + _0x4bb2bc + '/login', function (_0x4fe09e) {
            if (_0x4fe09e && _0x4fe09e.code === 0x5cd && _0x4fe09e.error === "expired_token") {
              _0x18884e++;
              console.log("auto login attempt:", _0x18884e);
              $("#login-view").html("<h2>Auto Login Google Wormate UP  : " + _0x18884e + "</h2>");
              _0x2cd74a();
            } else {
              _0x3d2461(_0x4fe09e);
            }
          }).fail(function () {
            _0x2cd74a();
          });
        } else {
          _0x2cd74a();
        }
        function _0x2cd74a() {
          console.log("Fetching a new token...");
          $.get("https://gateway.wormate.io/pub/wuid/" + _0x91a07d + "/login", function (_0x420ffa) {
            if (_0x420ffa && _0x420ffa.code === 0x5cd && _0x420ffa.error === "expired_token") {
              _0x18884e++;
              console.log("auto login attempt:", _0x18884e);
              $("#login-view").html("<h2>Auto Login Google Wormate.io  : " + _0x18884e + '</h2>');
              _0x2cd74a();
            } else {
              _0x3d2461(_0x420ffa);
            }
          }).fail(function () {
            _0x285af4.Xi();
          });
        }
        function _0x3d2461(_0x765992) {
          if (_0x765992 && _0x765992.user_data) {
            _0x1d3e3f(_0x765992.user_data);
            var _0xd5d097 = this.ri;
            _0x285af4.qi = true;
            _0x285af4.ri = _0x91a07d;
            _0x285af4.si = _0x765992.user_data;
            theoKzObjects.FB_UserID = _0x765992.user_data.userId;
            _0x285af4.ti = _0x1e1eaa;
            _0x184caa(_0x1a491c.Oe, _0x285af4.ti, 0x3c);
            _0x112bd1();
            for (var _0x4b6793 = 0x0; _0x4b6793 < clientes.clientesActivos.length; _0x4b6793++) {
              var _0x58f8c0 = clientes.clientesActivos[_0x4b6793].cliente_NOMBRE;
              var _0x56d84c = clientes.clientesActivos[_0x4b6793].cliente_ID;
              var _0x30ee5b = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin;
              var _0x2cfed5 = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin1;
              var _0x234a2b = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin2;
              var _0x11ebdc = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin3;
              var _0x35bc18 = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin4;
              var _0x609a96 = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin5;
              var _0x14f42a = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin6;
              var _0x2f5cf3 = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin7;
              var _0xe63e7d = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin8;
              var _0x3b0a2b = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin9;
              var _0x14aafa = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin10;
              var _0x5f2df6 = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin11;
              var _0x3cabb7 = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin12;
              var _0x181963 = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin13;
              var _0x196317 = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin14;
              var _0x3e7043 = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin15;
              var _0x36d6b7 = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin16;
              var _0x16384a = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin17;
              var _0x57452d = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin18;
              var _0x25a99c = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin19;
              var _0x4ede25 = clientes.clientesActivos[_0x4b6793].Client_VisibleSkin20;
              var _0x147a87 = clientes.clientesActivos[_0x4b6793].Client_KeyAccecs;
              var _0xb2d3f5 = clientes.clientesActivos[_0x4b6793].cliente_DateExpired;
            }
            theoKzObjects.loading = false;
            if (_0xd5d097 !== _0x91a07d) {
              _0x285af4.aj();
            } else {
              _0x285af4.Si();
            }
            localStorage.setItem('token__gg', _0x91a07d);
          } else {
            _0x285af4.Xi();
          }
        }
      };
      _0x4752f7.prototype.Xi = function () {
        this.Wi();
      };
      _0x4752f7.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      _0x4752f7.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return _0x4752f7;
    }();
    var _0x1c6b08 = function () {
      function _0x414d98() {
        this.cj = {};
        this.cj[_0x5cd517] = [0x1, 0.5, 0.25, 0.5];
        this.cj[_0x55a64f] = _0x2ac030._b.WHITE;
        this.cj[_0x4fa7cb] = [0x0, 0x0];
        this.cj[_0x530d90] = [0x0, 0x0];
        var _0x36c21f = _0x2ac030.cc.from(_0x4c8566, _0x1a59af, this.cj);
        this.zf = new _0x2ac030.hc(_0x421492, _0x36c21f);
      }
      var _0x5663c4 = "a1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x213830 = "a2_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x5cd517 = "u3_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x55a64f = "u4_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x4fa7cb = "u5_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x530d90 = "u6_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x541756 = "v1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x421492 = new _0x2ac030.gc().addAttribute(_0x5663c4, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2).addAttribute(_0x213830, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2);
      var _0x4c8566 = "precision mediump float;attribute vec2 " + _0x5663c4 + ";attribute vec2 " + _0x213830 + ";uniform mat3 " + "translationMatrix" + ";uniform mat3 " + "projectionMatrix" + ";varying vec2 " + _0x541756 + ";void main(){" + _0x541756 + '=' + _0x213830 + ";gl_Position=vec4((" + "projectionMatrix" + '*' + "translationMatrix" + "*vec3(" + _0x5663c4 + ",1.0)).xy,0.0,1.0);}";
      var _0x1a59af = "precision highp float;varying vec2 " + _0x541756 + ";uniform vec4 " + _0x5cd517 + ";uniform sampler2D " + _0x55a64f + ";uniform vec2 " + _0x4fa7cb + ";uniform vec2 " + _0x530d90 + ";void main(){vec2 coord=" + _0x541756 + '*' + _0x4fa7cb + '+' + _0x530d90 + ";vec4 v_color_mix=" + _0x5cd517 + ";gl_FragColor=texture2D(" + _0x55a64f + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      _0x414d98.prototype.Hf = function (_0x347263, _0x72983d, _0x1cd136, _0x4202d3) {
        var _0x2736de = this.cj[_0x5cd517];
        _0x2736de[0x0] = _0x347263;
        _0x2736de[0x1] = _0x72983d;
        _0x2736de[0x2] = _0x1cd136;
        _0x2736de[0x3] = _0x4202d3;
      };
      _0x414d98.prototype.Bf = function (_0x43bc87) {
        this.cj[_0x55a64f] = _0x43bc87;
      };
      _0x414d98.prototype.Te = function (_0x4816bc, _0x43e81a, _0x5cc8f2, _0x142e7c) {
        this.zf.position.x = _0x4816bc;
        this.zf.position.y = _0x43e81a;
        this.zf.scale.x = _0x5cc8f2;
        this.zf.scale.y = _0x142e7c;
        var _0x175eca = this.cj[_0x4fa7cb];
        _0x175eca[0x0] = _0x5cc8f2 * 0.2520615384615385;
        _0x175eca[0x1] = _0x142e7c * 0.4357063736263738;
        var _0x5db424 = this.cj[_0x530d90];
        _0x5db424[0x0] = _0x4816bc * 0.2520615384615385;
        _0x5db424[0x1] = _0x43e81a * 0.4357063736263738;
      };
      return _0x414d98;
    }();
    var _0x16e733 = function () {
      function _0x4f6d39() {
        this.jh = new _0x2ac030.ec();
        this.dj = 0x0;
        this.ej = 0x0;
      }
      _0x4f6d39.prototype.kh = function (_0x113a54) {
        if (_0x113a54 && _0x113a54.Hc) {
          this.jh.texture = _0x113a54.Hc;
          this.jh.anchor.set(_0x113a54.Lh, _0x113a54.Mh);
          this.dj = _0x113a54.Nh;
          this.ej = _0x113a54.Oh;
        }
      };
      _0x4f6d39.prototype.oh = function (_0x32c19e) {
        this.jh.width = _0x32c19e * this.dj;
        this.jh.height = _0x32c19e * this.ej;
      };
      _0x4f6d39.prototype.fj = function (_0x402fa4) {
        this.jh.rotation = _0x402fa4;
      };
      _0x4f6d39.prototype.nh = function (_0xe8b200, _0x2e09d3) {
        this.jh.position.set(_0xe8b200, _0x2e09d3);
      };
      _0x4f6d39.prototype.Mg = function (_0x3547ea) {
        this.jh.visible = _0x3547ea;
      };
      _0x4f6d39.prototype.gj = function () {
        return this.jh.visible;
      };
      _0x4f6d39.prototype.qh = function (_0x4dca1e) {
        this.jh.alpha = _0x4dca1e;
      };
      _0x4f6d39.prototype.Mf = function () {
        return this.jh;
      };
      _0x4f6d39.prototype.ih = function () {
        _0x452dbd(this.jh);
      };
      return _0x4f6d39;
    }();
    var _0x3db195 = function () {
      function _0x55c2fc(_0x257932) {
        this.fb = _0x257932;
        this.Mb = new _0x3db195.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0x0;
        this.ij = 0x0;
        this.Jb = 0x1;
        this.jj = 0x0;
        this.M = 0x0;
        this.Ff = {};
        this.kj = 0x0;
        this.lj = new Float32Array(400);
        this.mj = new Float32Array(400);
        this.nj = new Float32Array(400);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      _0x55c2fc.prototype.Kb = function () {
        if (this.pj != null) {
          _0x452dbd(this.pj.Rf);
        }
        if (this.qj != null) {
          _0x452dbd(this.qj);
        }
      };
      _0x55c2fc.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = '';
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      _0x55c2fc.prototype.Fg = function (_0x183afb) {
        this.Mb = _0x183afb;
        this.rj(this.Hb);
      };
      _0x55c2fc.prototype.Mg = function (_0x5f4a96) {
        var _0x56acc9 = this.Hb;
        this.Hb = _0x5f4a96;
        this.rj(_0x56acc9);
      };
      _0x55c2fc.prototype.Ig = function (_0x47c689) {
        this.M = _0x47c689 * 0x32;
        var _0x71bcde = _0x47c689;
        if (_0x47c689 > this.fb.cf) {
          _0x71bcde = Math.atan((_0x47c689 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var _0x20f642 = Math.sqrt(Math.pow(_0x71bcde * 0x5, 0.707106781186548) * 0x4 + 0x19);
        var _0x2638e7 = Math.min(0xc8, Math.max(0x3, (_0x20f642 - 0x5) * 0x5 + 0x1));
        var _0x520608 = this.kj;
        this.Db = (0x5 + _0x20f642 * 0.9) * 0.025;
        this.kj = Math.floor(_0x2638e7);
        this.ij = _0x2638e7 - this.kj;
        if (_0x520608 > 0x0 && _0x520608 < this.kj) {
          var _0x4ee866 = this.lj[_0x520608 * 0x2 - 0x2];
          var _0x12400d = this.lj[_0x520608 * 0x2 - 0x1];
          var _0x1a5f48 = this.mj[_0x520608 * 0x2 - 0x2];
          var _0x40415e = this.mj[_0x520608 * 0x2 - 0x1];
          var _0x49dbd2 = this.nj[_0x520608 * 0x2 - 0x2];
          var _0x20d796 = this.nj[_0x520608 * 0x2 - 0x1];
          for (var _0x124dee = _0x520608; _0x124dee < this.kj; _0x124dee++) {
            this.lj[_0x124dee * 0x2] = _0x4ee866;
            this.lj[_0x124dee * 0x2 + 0x1] = _0x12400d;
            this.mj[_0x124dee * 0x2] = _0x1a5f48;
            this.mj[_0x124dee * 0x2 + 0x1] = _0x40415e;
            this.nj[_0x124dee * 0x2] = _0x49dbd2;
            this.nj[_0x124dee * 0x2 + 0x1] = _0x20d796;
          }
        }
      };
      _0x55c2fc.prototype.Lg = function (_0x400f77, _0x52d07e) {
        this.kj = _0x52d07e;
        for (var _0x1f6f93 = 0x0; _0x1f6f93 < this.kj; _0x1f6f93++) {
          this.lj[_0x1f6f93 * 0x2] = this.mj[_0x1f6f93 * 0x2] = this.nj[_0x1f6f93 * 0x2] = _0x400f77();
          this.lj[_0x1f6f93 * 0x2 + 0x1] = this.mj[_0x1f6f93 * 0x2 + 0x1] = this.nj[_0x1f6f93 * 0x2 + 0x1] = _0x400f77();
        }
      };
      _0x55c2fc.prototype.Kg = function (_0x14e08b, _0x2ebb33, _0x415f7a) {
        this.hj = _0x415f7a;
        for (var _0x18a77d = 0x0; _0x18a77d < this.kj; _0x18a77d++) {
          this.lj[_0x18a77d * 0x2] = this.mj[_0x18a77d * 0x2];
          this.lj[_0x18a77d * 0x2 + 0x1] = this.mj[_0x18a77d * 0x2 + 0x1];
        }
        var _0xba9e11 = _0x14e08b - this.mj[0x0];
        var _0x191f19 = _0x2ebb33 - this.mj[0x1];
        this.sj(_0xba9e11, _0x191f19, this.kj, this.mj);
      };
      _0x55c2fc.prototype.sj = function (_0x1cdba6, _0x23a566, _0x146268, _0x583da8) {
        var _0x1f943b = Math.hypot(_0x1cdba6, _0x23a566);
        if (!(_0x1f943b <= 0x0)) {
          var _0x2bf644 = _0x583da8[0x0];
          var _0x1ae4f2 = undefined;
          _0x583da8[0x0] += _0x1cdba6;
          var _0xcdc475 = _0x583da8[0x1];
          var _0x309c39 = undefined;
          _0x583da8[0x1] += _0x23a566;
          var _0x3bf43b = this.Db / (this.Db + _0x1f943b);
          var _0x3ba586 = 0x1 - _0x3bf43b * 0x2;
          var _0x4cb691 = 0x1;
          for (var _0x35370f = _0x146268 - 0x1; _0x4cb691 < _0x35370f; _0x4cb691++) {
            _0x1ae4f2 = _0x583da8[_0x4cb691 * 0x2];
            _0x583da8[_0x4cb691 * 0x2] = _0x583da8[_0x4cb691 * 0x2 - 0x2] * _0x3ba586 + (_0x1ae4f2 + _0x2bf644) * _0x3bf43b;
            _0x2bf644 = _0x1ae4f2;
            _0x309c39 = _0x583da8[_0x4cb691 * 0x2 + 0x1];
            _0x583da8[_0x4cb691 * 0x2 + 0x1] = _0x583da8[_0x4cb691 * 0x2 - 0x1] * _0x3ba586 + (_0x309c39 + _0xcdc475) * _0x3bf43b;
            _0xcdc475 = _0x309c39;
          }
          _0x3bf43b = this.ij * this.Db / (this.ij * this.Db + _0x1f943b);
          _0x3ba586 = 0x1 - _0x3bf43b * 0x2;
          _0x583da8[_0x146268 * 0x2 - 0x2] = _0x583da8[_0x146268 * 0x2 - 0x4] * _0x3ba586 + (_0x583da8[_0x146268 * 0x2 - 0x2] + _0x2bf644) * _0x3bf43b;
          _0x583da8[_0x146268 * 0x2 - 0x1] = _0x583da8[_0x146268 * 0x2 - 0x3] * _0x3ba586 + (_0x583da8[_0x146268 * 0x2 - 0x1] + _0xcdc475) * _0x3bf43b;
        }
      };
      _0x55c2fc.prototype.Gf = function () {
        return {
          'x': this.nj[0x0],
          'y': this.nj[0x1]
        };
      };
      _0x55c2fc.prototype.Hg = function (_0x4a7bf6, _0x29f9a2) {
        var _0x393023 = 0xf4240;
        var _0x5880f4 = _0x4a7bf6;
        var _0x5a10ee = _0x29f9a2;
        for (var _0x262930 = 0x0; _0x262930 < this.kj; _0x262930++) {
          var _0x45f99b = this.nj[_0x262930 * 0x2];
          var _0xe7a484 = this.nj[_0x262930 * 0x2 + 0x1];
          var _0x554c24 = Math.hypot(_0x4a7bf6 - _0x45f99b, _0x29f9a2 - _0xe7a484);
          if (_0x554c24 < _0x393023) {
            _0x393023 = _0x554c24;
            _0x5880f4 = _0x45f99b;
            _0x5a10ee = _0xe7a484;
          }
        }
        return {
          'x': _0x5880f4,
          'y': _0x5a10ee,
          'distance': _0x393023
        };
      };
      _0x55c2fc.prototype.vb = function (_0x2707e1) {
        this.oj = _0x2707e1;
      };
      _0x55c2fc.prototype.Fb = function (_0x3c9b72, _0x1e58ef) {
        this.Jb = (this.Ib ? this.hj ? 0.9 + Math.cos(_0x3c9b72 / 0x190 * Math.PI) * 0.1 : 0x1 : 0x0) > this.Jb ? Math.min(this.Ib ? this.hj ? 0.9 + Math.cos(_0x3c9b72 / 0x190 * Math.PI) * 0.1 : 0x1 : 0x0, this.Jb + _0x1e58ef * 0.00125) : Math.max(this.Ib ? this.hj ? 0.9 + Math.cos(_0x3c9b72 / 0x190 * Math.PI) * 0.1 : 0x1 : 0x0, this.Jb - _0x1e58ef * 0.00125);
        this.jj = (this.Ib ? this.hj ? 0x1 : 0x0 : 0x1) > this.jj ? Math.min(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj + _0x1e58ef * 0.0025) : Math.max(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj - _0x1e58ef * 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      _0x55c2fc.prototype.Gb = function (_0x40332b, _0x37dc17, _0x49a64e, _0x204531) {
        if (this.Hb && this.Ib) {
          var _0x44dc84 = Math.pow(0.11112, _0x37dc17 / 0x5f);
          for (var _0x56f7ee = 0x0; _0x56f7ee < this.kj; _0x56f7ee++) {
            var _0x3c6d8d = this.lj[_0x56f7ee * 0x2] * (0x1 - _0x49a64e) + this.mj[_0x56f7ee * 0x2] * _0x49a64e;
            var _0x5ca4be = this.lj[_0x56f7ee * 0x2 + 0x1] * (0x1 - _0x49a64e) + this.mj[_0x56f7ee * 0x2 + 0x1] * _0x49a64e;
            this.nj[_0x56f7ee * 0x2] = _0x3c6d8d * (0x1 - _0x44dc84) + this.nj[_0x56f7ee * 0x2] * _0x44dc84;
            this.nj[_0x56f7ee * 0x2 + 0x1] = _0x5ca4be * (0x1 - _0x44dc84) + this.nj[_0x56f7ee * 0x2 + 0x1] * _0x44dc84;
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, _0x40332b, _0x37dc17, _0x204531);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0x0];
          this.qj.If.y = this.nj[0x1] - this.Db * 0x3;
        }
      };
      _0x55c2fc.prototype.rj = function (_0x56c458) {
        if (this.Hb) {
          if (!_0x56c458) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            _0x452dbd(this.pj.Rf);
          }
          if (this.qj != null) {
            _0x452dbd(this.qj);
          }
        }
      };
      _0x55c2fc.prototype.uj = function () {
        var _0x495d1b = window.anApp = _0x2ba968;
        if (this.pj == null) {
          this.pj = new _0x31404e();
        } else {
          _0x452dbd(this.pj.Rf);
        }
        this.pj.hh(_0x495d1b.o.fb.af, _0x495d1b.p.Dc().ed(this.Mb.cg), _0x495d1b.p.Dc().dd(this.Mb.dg), _0x495d1b.p.Dc().fd(this.Mb.Bg), _0x495d1b.p.Dc().gd(this.Mb.Cg), _0x495d1b.p.Dc().hd(this.Mb.Dg), _0x495d1b.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new _0x504df2('');
          this.qj.style.fontFamily = 'wormup';
          this.qj.anchor.set(0.5);
        } else {
          _0x452dbd(this.qj);
        }
        this.qj.style.fontSize = 0xf;
        this.qj.style.fill = _0x495d1b.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      _0x55c2fc.Config = function () {
        function _0x299b95() {
          this.Lb = 0x0;
          this.cg = _0x31e63b.TEAM_DEFAULT;
          this.dg = 0x0;
          this.Bg = 0x0;
          this.Cg = 0x0;
          this.Dg = 0x0;
          this.Eg = 0x0;
          this.ad = '';
        }
        return _0x299b95;
      }();
      return _0x55c2fc;
    }();
    var _0x504df2 = function () {
      return _0x51baad(_0x2ac030.fc, function (_0x305f06, _0x2f93b5, _0x191c26) {
        _0x2ac030.fc.call(this, _0x305f06, _0x2f93b5, _0x191c26);
        this.If = {
          'x': 0x0,
          'y': 0x0
        };
      });
    }();
    var _0x31404e = function () {
      function _0x260473() {
        this.Rf = new _0x2ac030.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new _0xf61003();
        this.vj.zIndex = 1.6;
        this.wj = 0x0;
        this.xj = new Array(0x31d);
        this.xj[0x0] = this.yj(0x0, new _0x16e733(), new _0x16e733());
        for (var _0x49cbd5 = 0x1; _0x49cbd5 < 0x31d; _0x49cbd5++) {
          this.xj[_0x49cbd5] = this.yj(_0x49cbd5, new _0x16e733(), new _0x16e733());
        }
        this.zj = 0x0;
        this.Aj = 0x0;
        this.Bj = 0x0;
      }
      var _0x1b8e16 = Math.PI * 0.1;
      var _0x2ae2e9 = -0.06640625;
      var _0xb90dc2 = -0.03515625;
      var _0x5ce88f = -0.0625;
      var _0x43b353 = _0x2ae2e9 * 0x3 + 0.84375;
      var _0x5c31ad = 0.2578125 - _0x2ae2e9 * 0x3;
      var _0x3a4187 = _0x2ae2e9 + _0xb90dc2;
      var _0x9803cb = _0x5ce88f + _0x5ce88f;
      var _0x3b9f82 = _0xb90dc2 * 0x3 + 0.2578125;
      var _0x16bca1 = 0.84375 - _0xb90dc2 * 0x3;
      var _0x2a01a9 = _0xb90dc2 + _0x2ae2e9;
      _0x260473.prototype.yj = function (_0x1a1439, _0xf066d7, _0x59b8c8) {
        var _0x50af2c = new _0x40a679(_0xf066d7, _0x59b8c8);
        _0xf066d7.jh.zIndex = 0.001 * ((0x31d - _0x1a1439) * 0x2 + 0x1 + 0x3);
        _0x59b8c8.jh.zIndex = 0.001 * ((0x31d - _0x1a1439) * 0x2 - 0x2 + 0x3);
        return _0x50af2c;
      };
      _0x260473.prototype.hh = function (_0x13e391, _0x2141fc, _0x4363bf, _0x641aae, _0xce6d28, _0x4090c8, _0x134b93) {
        var _0x22101a = _0x4363bf.Zc;
        var _0x427ab9 = _0x13e391 == 0x10 ? _0x2141fc.bd.$c : _0x4363bf.$c;
        if (_0x22101a.length > 0x0 && _0x427ab9.length > 0x0) {
          for (var _0xec31ef = 0x0; _0xec31ef < this.xj.length; _0xec31ef++) {
            this.xj[_0xec31ef].Nf.kh(_0x22101a[_0xec31ef % _0x22101a.length]);
            this.xj[_0xec31ef].Pf.kh(_0x427ab9[_0xec31ef % _0x427ab9.length]);
          }
        }
        this.vj.hh(_0x641aae, _0xce6d28, _0x4090c8, _0x134b93);
      };
      var _0xf61003 = function () {
        var _0x5f1c36 = _0x51baad(_0x2ac030.Zb, function () {
          _0x2ac030.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new _0x2ac030.Zb();
          this.Hj = [];
          for (var _0x2c619f = 0x0; _0x2c619f < 0x4; _0x2c619f++) {
            var _0x57fef0 = new _0x16e733();
            _0x57fef0.kh((window.anApp = _0x2ba968).q.Ph);
            this.Gj.addChild(_0x57fef0.jh);
            this.Hj.push(_0x57fef0);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new _0x16e733();
          this.Jj.kh((window.anApp = _0x2ba968).q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new _0x16e733();
          this.xEmojiType_headshot.kh((window.anApp = _0x2ba968).q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new _0x16e733();
          this.xEmojiType_kill.kh((window.anApp = _0x2ba968).q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new _0x16e733();
          this.guia_mobile.kh((window.anApp = _0x2ba968).q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
          this.flx = new _0x16e733();
          this.flx.kh((window.anApp = _0x2ba968).q.Rh);
          this.flx.jh.zIndex = 0.001;
          this.addChild(this.flx.jh);
          this.flexx();
          this.xxx5 = new _0x16e733();
          this.xxx5.kh((window.anApp = _0x2ba968).q.X_x5);
          this.xxx5.jh.zIndex = 0.001;
          this.addChild(this.xxx5.jh);
          this.xXx5();
          this.xxx2 = new _0x16e733();
          this.xxx2.kh((window.anApp = _0x2ba968).q.X_x2);
          this.xxx2.jh.zIndex = 0.001;
          this.addChild(this.xxx2.jh);
          this.xXx2();
          this.xxx10 = new _0x16e733();
          this.xxx10.kh((window.anApp = _0x2ba968).q.X_x10);
          this.xxx10.jh.zIndex = 0.001;
          this.addChild(this.xxx10.jh);
          this.xXx10();
          this.xxxLupatype = new _0x16e733();
          this.xxxLupatype.kh((window.anApp = _0x2ba968).q.X_xxlupa);
          this.xxxLupatype.jh.zIndex = 0.001;
          this.addChild(this.xxxLupatype.jh);
          this.xXxLupaZ();
        });
        _0x5f1c36.prototype.hh = function (_0x22e65, _0x389f50, _0x36b5fc, _0x2ffed1) {
          this.Lj(0.002, this.Cj, _0x22e65.Zc);
          this.Lj(0.003, this.Dj, _0x389f50.Zc);
          this.Lj(0.004, this.Fj, _0x2ffed1.Zc);
          this.Lj(0.005, this.Ej, _0x36b5fc.Zc);
        };
        _0x5f1c36.prototype.Lj = function (_0x425332, _0x4476f0, _0x10f4fe) {
          while (_0x10f4fe.length > _0x4476f0.length) {
            var _0x1d3a8e = new _0x16e733();
            _0x4476f0.push(_0x1d3a8e);
            this.addChild(_0x1d3a8e.Mf());
          }
          while (_0x10f4fe.length < _0x4476f0.length) {
            _0x4476f0.pop().ih();
          }
          var _0x296d10 = _0x425332;
          for (var _0x294a01 = 0x0; _0x294a01 < _0x10f4fe.length; _0x294a01++) {
            _0x296d10 += 0.0001;
            var _0x28b946 = _0x4476f0[_0x294a01];
            _0x28b946.kh(_0x10f4fe[_0x294a01]);
            _0x28b946.jh.zIndex = _0x296d10;
          }
        };
        _0x5f1c36.prototype.mh = function (_0x5d64c1, _0x3946c8, _0x59e5aa, _0x3440d7) {
          this.visible = true;
          this.position.set(_0x5d64c1, _0x3946c8);
          this.rotation = _0x3440d7;
          for (var _0x5c14b1 = 0x0; _0x5c14b1 < this.Cj.length; _0x5c14b1++) {
            this.Cj[_0x5c14b1].oh(_0x59e5aa);
          }
          for (var _0x313d6d = 0x0; _0x313d6d < this.Dj.length; _0x313d6d++) {
            this.Dj[_0x313d6d].oh(_0x59e5aa);
          }
          for (var _0x267c57 = 0x0; _0x267c57 < this.Ej.length; _0x267c57++) {
            this.Ej[_0x267c57].oh(_0x59e5aa);
          }
          for (var _0x2a24fe = 0x0; _0x2a24fe < this.Fj.length; _0x2a24fe++) {
            this.Fj[_0x2a24fe].oh(_0x59e5aa);
          }
        };
        _0x5f1c36.prototype.lh = function () {
          this.visible = false;
        };
        _0x5f1c36.prototype.Mj = function (_0x5641cb, _0x45b789, _0x2a048b, _0x2f82e0) {
          this.Gj.visible = true;
          var _0x98d2aa = _0x2a048b / 0x3e8;
          var _0x337a61 = 0x1 / this.Hj.length;
          for (var _0x4096f5 = 0x0; _0x4096f5 < this.Hj.length; _0x4096f5++) {
            var _0x30376f = 0x1 - (_0x98d2aa + _0x337a61 * _0x4096f5) % 0x1;
            this.Hj[_0x4096f5].jh.alpha = 0x1 - _0x30376f;
            this.Hj[_0x4096f5].oh(_0x45b789 * (0.5 + _0x30376f * 4.5));
          }
        };
        _0x5f1c36.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        _0x5f1c36.prototype.Nj = function (_0xe93834, _0x5ef16b, _0x2f1350, _0x2f6f01) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = (_0xe93834.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0xe93834.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x2f6f01 * 0.0025) : Math.max(_0xe93834.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x2f6f01 * 0.0025);
          this.Jj.oh(_0x5ef16b);
        };
        _0x5f1c36.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        _0x5f1c36.prototype.Nflex = function (_0x1a1ee8, _0x323fc7, _0x39a297, _0x4ad86a) {
          this.flx.jh.visible = true;
          this.flx.jh.alpha = (_0x1a1ee8.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x1a1ee8.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x4ad86a * 0.0025) : Math.max(_0x1a1ee8.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x4ad86a * 0.0025);
          this.flx.oh(_0x323fc7);
        };
        _0x5f1c36.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        _0x5f1c36.prototype.ActiveX5 = function (_0x3d7f68, _0x1994b2, _0x20a338, _0x8b3fcc) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = (_0x3d7f68.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x3d7f68.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x8b3fcc * 0.0025) : Math.max(_0x3d7f68.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x8b3fcc * 0.0025);
          this.xxx5.oh(_0x1994b2);
        };
        _0x5f1c36.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        _0x5f1c36.prototype.ActiveX2 = function (_0x51af91, _0x388c69, _0x393ce7, _0x493750) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = (_0x51af91.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x51af91.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x493750 * 0.0025) : Math.max(_0x51af91.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x493750 * 0.0025);
          this.xxx2.oh(_0x388c69);
        };
        _0x5f1c36.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        _0x5f1c36.prototype.ActiveX10 = function (_0x2540b8, _0x5b7877, _0x38078f, _0x1960d2) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = (_0x2540b8.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x2540b8.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x1960d2 * 0.0025) : Math.max(_0x2540b8.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x1960d2 * 0.0025);
          this.xxx10.oh(_0x5b7877);
        };
        _0x5f1c36.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        _0x5f1c36.prototype.ActiveZlupa = function (_0x7eb593, _0x5be2fd, _0x14e979, _0xae775b) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = (_0x7eb593.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x7eb593.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0xae775b * 0.0025) : Math.max(_0x7eb593.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0xae775b * 0.0025);
          this.xxxLupatype.oh(_0x5be2fd);
        };
        _0x5f1c36.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        _0x5f1c36.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        _0x5f1c36.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        _0x5f1c36.prototype.Rx = function (_0x2d7884, _0x4f3a83, _0x460658, _0x2ddb7c) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(_0x4f3a83);
        };
        _0x5f1c36.prototype.Njh = function (_0x56ae01, _0x2d791b, _0x8ce24e, _0x956504) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(_0x2d791b);
        };
        _0x5f1c36.prototype.Njk = function (_0x1ef820, _0x5eda6e, _0x23c320, _0x39da27) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(_0x5eda6e);
        };
        return _0x5f1c36;
      }();
      _0x260473.prototype.Oj = function (_0xc1f232) {
        return this.Aj + this.Bj * Math.sin(_0xc1f232 * _0x1b8e16 - this.zj);
      };
      _0x260473.prototype.tj = function (_0x57350e, _0x10e499, _0x46d175, _0x220d98) {
        var _0x1662c1 = _0x57350e.Db * 0x2;
        var _0x1e769d = _0x57350e.nj;
        var _0x52142e = _0x57350e.kj;
        var _0x7ec418 = _0x52142e * 0x4 - 0x3;
        this.zj = _0x10e499 / 0x190 * Math.PI;
        this.Aj = _0x1662c1 * 1.5;
        this.Bj = _0x1662c1 * 0.15 * _0x57350e.jj;
        var _0x52f035 = undefined;
        var _0x2e6202 = undefined;
        var _0x58a455 = undefined;
        var _0x3d45af = undefined;
        var _0x4666a9 = undefined;
        var _0x118fef = undefined;
        var _0x10c49a = undefined;
        var _0x4a1ba6 = undefined;
        _0x2e6202 = _0x1e769d[0x0];
        _0x118fef = _0x1e769d[0x1];
        if (_0x220d98(_0x2e6202, _0x118fef)) {
          _0x58a455 = _0x1e769d[0x2];
          _0x10c49a = _0x1e769d[0x3];
          _0x3d45af = _0x1e769d[0x4];
          _0x4a1ba6 = _0x1e769d[0x5];
          var _0x4ae391 = Math.atan2(_0x4a1ba6 + _0x118fef * 0x2 - _0x10c49a * 0x3, _0x3d45af + _0x2e6202 * 0x2 - _0x58a455 * 0x3);
          this.vj.mh(_0x2e6202, _0x118fef, _0x1662c1, _0x4ae391);
          this.xj[0x0].mh(_0x2e6202, _0x118fef, _0x1662c1, this.Oj(0x0), _0x4ae391);
          this.xj[0x1].mh(_0x43b353 * _0x2e6202 + _0x5c31ad * _0x58a455 + _0x3a4187 * _0x3d45af, _0x43b353 * _0x118fef + _0x5c31ad * _0x10c49a + _0x3a4187 * _0x4a1ba6, _0x1662c1, this.Oj(0x1), _0x40a679.angleBetween(this.xj[0x0], this.xj[0x2]));
          this.xj[0x2].mh(0.375 * _0x2e6202 + 0.75 * _0x58a455 + _0x9803cb * _0x3d45af, 0.375 * _0x118fef + 0.75 * _0x10c49a + _0x9803cb * _0x4a1ba6, _0x1662c1, this.Oj(0x2), _0x40a679.angleBetween(this.xj[0x1], this.xj[0x3]));
          this.xj[0x3].mh(_0x3b9f82 * _0x2e6202 + _0x16bca1 * _0x58a455 + _0x2a01a9 * _0x3d45af, _0x3b9f82 * _0x118fef + _0x16bca1 * _0x10c49a + _0x2a01a9 * _0x4a1ba6, _0x1662c1, this.Oj(0x3), _0x40a679.angleBetween(this.xj[0x2], this.xj[0x4]));
        } else {
          this.vj.lh();
          this.xj[0x0].lh();
          this.xj[0x1].lh();
          this.xj[0x2].lh();
          this.xj[0x3].lh();
        }
        var _0x3ccf37 = 0x4;
        var _0x4c511a = 0x2;
        for (var _0x240d20 = _0x52142e * 0x2 - 0x4; _0x4c511a < _0x240d20; _0x4c511a += 0x2) {
          _0x2e6202 = _0x1e769d[_0x4c511a];
          _0x118fef = _0x1e769d[_0x4c511a + 0x1];
          if (_0x220d98(_0x2e6202, _0x118fef)) {
            _0x52f035 = _0x1e769d[_0x4c511a - 0x2];
            _0x4666a9 = _0x1e769d[_0x4c511a - 0x1];
            _0x58a455 = _0x1e769d[_0x4c511a + 0x2];
            _0x10c49a = _0x1e769d[_0x4c511a + 0x3];
            _0x3d45af = _0x1e769d[_0x4c511a + 0x4];
            _0x4a1ba6 = _0x1e769d[_0x4c511a + 0x5];
            this.xj[_0x3ccf37].mh(_0x2e6202, _0x118fef, _0x1662c1, this.Oj(_0x3ccf37), _0x40a679.angleBetween(this.xj[_0x3ccf37 - 0x1], this.xj[_0x3ccf37 + 0x1]));
            _0x3ccf37++;
            this.xj[_0x3ccf37].mh(_0x2ae2e9 * _0x52f035 + 0.84375 * _0x2e6202 + 0.2578125 * _0x58a455 + _0xb90dc2 * _0x3d45af, _0x2ae2e9 * _0x4666a9 + 0.84375 * _0x118fef + 0.2578125 * _0x10c49a + _0xb90dc2 * _0x4a1ba6, _0x1662c1, this.Oj(_0x3ccf37), _0x40a679.angleBetween(this.xj[_0x3ccf37 - 0x1], this.xj[_0x3ccf37 + 0x1]));
            _0x3ccf37++;
            this.xj[_0x3ccf37].mh(_0x5ce88f * _0x52f035 + 0.5625 * _0x2e6202 + 0.5625 * _0x58a455 + _0x5ce88f * _0x3d45af, _0x5ce88f * _0x4666a9 + 0.5625 * _0x118fef + 0.5625 * _0x10c49a + _0x5ce88f * _0x4a1ba6, _0x1662c1, this.Oj(_0x3ccf37), _0x40a679.angleBetween(this.xj[_0x3ccf37 - 0x1], this.xj[_0x3ccf37 + 0x1]));
            _0x3ccf37++;
            this.xj[_0x3ccf37].mh(_0xb90dc2 * _0x52f035 + 0.2578125 * _0x2e6202 + 0.84375 * _0x58a455 + _0x2ae2e9 * _0x3d45af, _0xb90dc2 * _0x4666a9 + 0.2578125 * _0x118fef + 0.84375 * _0x10c49a + _0x2ae2e9 * _0x4a1ba6, _0x1662c1, this.Oj(_0x3ccf37), _0x40a679.angleBetween(this.xj[_0x3ccf37 - 0x1], this.xj[_0x3ccf37 + 0x1]));
            _0x3ccf37++;
          } else {
            this.xj[_0x3ccf37].lh();
            _0x3ccf37++;
            this.xj[_0x3ccf37].lh();
            _0x3ccf37++;
            this.xj[_0x3ccf37].lh();
            _0x3ccf37++;
            this.xj[_0x3ccf37].lh();
            _0x3ccf37++;
          }
        }
        _0x2e6202 = _0x1e769d[_0x52142e * 0x2 - 0x4];
        _0x118fef = _0x1e769d[_0x52142e * 0x2 - 0x3];
        if (_0x220d98(_0x2e6202, _0x118fef)) {
          _0x52f035 = _0x1e769d[_0x52142e * 0x2 - 0x6];
          _0x4666a9 = _0x1e769d[_0x52142e * 0x2 - 0x5];
          _0x58a455 = _0x1e769d[_0x52142e * 0x2 - 0x2];
          _0x10c49a = _0x1e769d[_0x52142e * 0x2 - 0x1];
          this.xj[_0x7ec418 - 0x5].mh(_0x2e6202, _0x118fef, _0x1662c1, this.Oj(_0x7ec418 - 0x5), _0x40a679.angleBetween(this.xj[_0x7ec418 - 0x6], this.xj[_0x7ec418 - 0x4]));
          this.xj[_0x7ec418 - 0x4].mh(_0x2a01a9 * _0x52f035 + _0x16bca1 * _0x2e6202 + _0x3b9f82 * _0x58a455, _0x2a01a9 * _0x4666a9 + _0x16bca1 * _0x118fef + _0x3b9f82 * _0x10c49a, _0x1662c1, this.Oj(_0x7ec418 - 0x4), _0x40a679.angleBetween(this.xj[_0x7ec418 - 0x5], this.xj[_0x7ec418 - 0x3]));
          this.xj[_0x7ec418 - 0x3].mh(_0x9803cb * _0x52f035 + 0.75 * _0x2e6202 + 0.375 * _0x58a455, _0x9803cb * _0x4666a9 + 0.75 * _0x118fef + 0.375 * _0x10c49a, _0x1662c1, this.Oj(_0x7ec418 - 0x3), _0x40a679.angleBetween(this.xj[_0x7ec418 - 0x4], this.xj[_0x7ec418 - 0x2]));
          this.xj[_0x7ec418 - 0x2].mh(_0x3a4187 * _0x52f035 + _0x5c31ad * _0x2e6202 + _0x43b353 * _0x58a455, _0x3a4187 * _0x4666a9 + _0x5c31ad * _0x118fef + _0x43b353 * _0x10c49a, _0x1662c1, this.Oj(_0x7ec418 - 0x2), _0x40a679.angleBetween(this.xj[_0x7ec418 - 0x3], this.xj[_0x7ec418 - 0x1]));
          this.xj[_0x7ec418 - 0x1].mh(_0x58a455, _0x10c49a, _0x1662c1, this.Oj(_0x7ec418 - 0x1), _0x40a679.angleBetween(this.xj[_0x7ec418 - 0x2], this.xj[_0x7ec418 - 0x1]));
        } else {
          this.xj[_0x7ec418 - 0x5].lh();
          this.xj[_0x7ec418 - 0x4].lh();
          this.xj[_0x7ec418 - 0x3].lh();
          this.xj[_0x7ec418 - 0x2].lh();
          this.xj[_0x7ec418 - 0x1].lh();
        }
        if (this.wj == 0x0 && _0x7ec418 > 0x0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0x0 && _0x7ec418 == 0x0) {
          _0x452dbd(this.vj);
        }
        while (this.wj < _0x7ec418) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 0x1;
        }
        while (this.wj > _0x7ec418) {
          this.wj -= 0x1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var _0x49f46b = _0x57350e.Ff[_0x1609ac.MAGNETIC_TYPE];
        if (this.xj[0x0].gj() && _0x49f46b != null && _0x49f46b.sc) {
          this.vj.Mj(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
        } else {
          this.vj.Ij();
        }
        var _0x515bc3 = _0x57350e.Ff[_0x1609ac.VELOCITY_TYPE];
        if (this.xj[0x0].gj() && _0x515bc3 != null && _0x515bc3.sc) {
          this.vj.Nj(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
        } else {
          this.vj.Kj();
        }
        if (theoKzObjects.emoji_headshot && _0x57350e && _0x57350e.Mb && _0x57350e.Mb.Mb) {
          this.vj.Njh(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
        } else {
          this.vj.xzs();
        }
        if (theoKzObjects.emoji_kill && _0x57350e && _0x57350e.Mb && _0x57350e.Mb.Mb) {
          this.vj.Njk(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
        } else {
          this.vj.zas();
        }
        ;
        if (false && false && _0x57350e && _0x57350e.Mb && _0x57350e.Mb.Mb) {
          this.vj.Rx(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
        }
        var _0x4c8d56 = _0x57350e.Ff[_0x1609ac.FLEXIBLE_TYPE];
        if (this.xj[0x0].gj() && _0x4c8d56 != null && _0x4c8d56.sc) {
          this.vj.Nflex(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
        } else {
          this.vj.flexx();
        }
        var _0x73dd9 = _0x57350e.Ff[_0x1609ac.X5_TYPE];
        if (this.xj[0x0].gj() && _0x73dd9 != null && _0x73dd9.sc) {
          this.vj.ActiveX5(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
        } else {
          this.vj.xXx5();
        }
        var _0x3455db = _0x57350e.Ff[_0x1609ac.X2_TYPE];
        if (this.xj[0x0].gj() && _0x3455db != null && _0x3455db.sc) {
          this.vj.ActiveX2(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
        } else {
          this.vj.xXx2();
        }
        var _0x13401b = _0x57350e.Ff[_0x1609ac.X10_TYPE];
        if (this.xj[0x0].gj() && _0x13401b != null && _0x13401b.sc) {
          this.vj.ActiveX10(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
        } else {
          this.vj.xXx10();
        }
        var _0x1413fc = _0x57350e.Ff[_0x1609ac.ZOOM_TYPE];
        if (this.xj[0x0].gj() && _0x1413fc != null && _0x1413fc.sc) {
          this.vj.ActiveZlupa(_0x57350e, _0x1662c1, _0x10e499, _0x46d175);
        } else {
          this.vj.xXxLupaZ();
        }
      };
      var _0x40a679 = function () {
        function _0x63743f(_0x42a393, _0x3849b7) {
          this.Nf = _0x42a393;
          this.Nf.Mg(false);
          this.Pf = _0x3849b7;
          this.Pf.Mg(false);
        }
        _0x63743f.prototype.mh = function (_0x52f8eb, _0x2751a1, _0x6aafe5, _0x22acca, _0x58b5ba) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x52f8eb, _0x2751a1);
          this.Nf.oh(_0x6aafe5);
          this.Nf.fj(_0x58b5ba);
          this.Pf.Mg(true);
          this.Pf.nh(_0x52f8eb, _0x2751a1);
          this.Pf.oh(_0x22acca);
          this.Pf.fj(_0x58b5ba);
        };
        _0x63743f.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        _0x63743f.prototype.gj = function () {
          return this.Nf.gj();
        };
        _0x63743f.angleBetween = function (_0x354f35, _0x546021) {
          return Math.atan2(_0x354f35.Nf.jh.position.y - _0x546021.Nf.jh.position.y, _0x354f35.Nf.jh.position.x - _0x546021.Nf.jh.position.x);
        };
        return _0x63743f;
      }();
      return _0x260473;
    }();
    var _0x5a73b8 = function () {
      function _0x570b7c(_0x31d3ed) {
        this.se = _0x31d3ed;
        this.te = _0x31d3ed.get()[0x0];
        this.ue = new _0x2ac030.ac({
          'view': this.te,
          'transparent': true
        });
        this.sc = false;
        this.Pj = new _0x31404e();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0x0;
        this.Rj = 0x0;
        this.Ng = 0x1;
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var _0x15f33a = this;
        (window.anApp = _0x2ba968).p.ca(function () {
          if ((window.anApp = _0x2ba968).p.W()) {
            _0x15f33a.Fb();
          }
        });
      }
      _0x570b7c.prototype.Fb = function () {
        var _0x3b38d2 = window.anApp = _0x2ba968;
        this.Pj.hh(0x0, null, _0x3b38d2.p.Dc().dd(this.rh), _0x3b38d2.p.Dc().fd(this.sh), _0x3b38d2.p.Dc().gd(this.th), _0x3b38d2.p.Dc().hd(this.uh), _0x3b38d2.p.Dc().jd(this.vh));
      };
      _0x570b7c.prototype.Le = function (_0xa71c71) {
        this.sc = _0xa71c71;
      };
      _0x570b7c.prototype.ak = function (_0x278e18, _0x11e181, _0x4b908b) {
        this.rh = _0x278e18;
        this.Sj = _0x11e181;
        this.Xj = _0x4b908b;
        this.Fb();
      };
      _0x570b7c.prototype.bk = function (_0xfa4748, _0x50d39f, _0x232ad0) {
        this.sh = _0xfa4748;
        this.Tj = _0x50d39f;
        this.Yj = _0x232ad0;
        this.Fb();
      };
      _0x570b7c.prototype.ck = function (_0x177aed, _0x299efa, _0x4bcb6e) {
        this.th = _0x177aed;
        this.Uj = _0x299efa;
        this.Zj = _0x4bcb6e;
        this.Fb();
      };
      _0x570b7c.prototype.dk = function (_0x564c70, _0x5abe40, _0xece654) {
        this.uh = _0x564c70;
        this.Vj = _0x5abe40;
        this.$j = _0xece654;
        this.Fb();
      };
      _0x570b7c.prototype.ek = function (_0xb6f2e6, _0x4c7fde, _0x2ac133) {
        this.vh = _0xb6f2e6;
        this.Wj = _0x4c7fde;
        this._j = _0x2ac133;
        this.Fb();
      };
      _0x570b7c.prototype.Ra = function () {
        var _0x22e866 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = _0x22e866;
        this.te.width = _0x22e866 * this.Qj;
        this.te.height = _0x22e866 * this.Rj;
        this.Ng = this.Rj / 0x4;
        var _0x57593b = _0x1b3a69(Math.floor(this.Qj / this.Ng) * 0x2 - 0x5, 0x1, this.Pj.xj.length);
        if (this.Pj.wj != _0x57593b) {
          for (var _0x3719b5 = _0x57593b; _0x3719b5 < this.Pj.xj.length; _0x3719b5++) {
            this.Pj.xj[_0x3719b5].lh();
          }
          while (this.Pj.wj < _0x57593b) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 0x1;
          }
          while (this.Pj.wj > _0x57593b) {
            this.Pj.wj -= 0x1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      _0x570b7c.prototype.Pa = function () {
        if (this.sc) {
          if ((window.anApp = _0x2ba968).p.W) {
            var _0x73b538 = Date.now();
            var _0x5b4e17 = _0x73b538 / 0xc8;
            var _0x1ad50d = Math.sin(_0x5b4e17);
            var _0x23856e = this.Ng;
            var _0x462452 = this.Ng * 1.5;
            var _0x537e7c = this.Qj - (this.Qj - _0x23856e * 0.5 * (this.Pj.wj - 0x1)) * 0.5;
            var _0x8e0ef7 = this.Rj * 0.5;
            var _0x1dfb47 = 0x0;
            var _0x34354a = 0x0;
            for (var _0x4e9a80 = -0x1; _0x4e9a80 < this.Pj.wj; _0x4e9a80++) {
              var _0xb42738 = _0x4e9a80;
              var _0x2e17be = Math.cos(_0xb42738 * 0x1 / 0xc * Math.PI - _0x5b4e17) * (0x1 - Math.pow(0x10, _0xb42738 * -0x1 / 0xc));
              if (_0x4e9a80 >= 0x0) {
                var _0x1ff4cc = _0x537e7c + _0x23856e * -0.5 * _0xb42738;
                var _0x42a725 = _0x8e0ef7 + _0x23856e * 0.5 * _0x2e17be;
                var _0xbadbf8 = _0x23856e * 0x2;
                var _0x360dac = _0x462452 * 0x2;
                var _0x2985bb = Math.atan2(_0x34354a - _0x2e17be, _0xb42738 - _0x1dfb47);
                if (_0x4e9a80 == 0x0) {
                  this.Pj.vj.mh(_0x1ff4cc, _0x42a725, _0xbadbf8, _0x2985bb);
                }
                this.Pj.xj[_0x4e9a80].mh(_0x1ff4cc, _0x42a725, _0xbadbf8, _0x360dac, _0x2985bb);
                var _0x67335b = this.Sj ? this.Xj ? 0.4 + _0x1ad50d * 0.2 : 0.9 + _0x1ad50d * 0.1 : this.Xj ? 0.4 : 0x1;
                this.Pj.xj[_0x4e9a80].Nf.qh(_0x67335b);
                this.Pj.xj[_0x4e9a80].Pf.qh(_0x67335b);
              }
              _0x1dfb47 = _0xb42738;
              _0x34354a = _0x2e17be;
            }
            for (var _0x113316 = 0x0; _0x113316 < this.Pj.vj.Cj.length; _0x113316++) {
              var _0x58826f = this.Tj ? this.Yj ? 0.4 + _0x1ad50d * 0.2 : 0.9 + _0x1ad50d * 0.1 : this.Yj ? 0.4 : 0x1;
              this.Pj.vj.Cj[_0x113316].qh(_0x58826f);
            }
            for (var _0x5e1179 = 0x0; _0x5e1179 < this.Pj.vj.Dj.length; _0x5e1179++) {
              var _0x543e2a = this.Uj ? this.Zj ? 0.4 + _0x1ad50d * 0.2 : 0.9 + _0x1ad50d * 0.1 : this.Zj ? 0.4 : 0x1;
              this.Pj.vj.Dj[_0x5e1179].qh(_0x543e2a);
            }
            for (var _0x183e32 = 0x0; _0x183e32 < this.Pj.vj.Ej.length; _0x183e32++) {
              var _0x295c8e = this.Vj ? this.$j ? 0.4 + _0x1ad50d * 0.2 : 0.9 + _0x1ad50d * 0.1 : this.$j ? 0.4 : 0x1;
              this.Pj.vj.Ej[_0x183e32].qh(_0x295c8e);
            }
            for (var _0x51ff31 = 0x0; _0x51ff31 < this.Pj.vj.Fj.length; _0x51ff31++) {
              var _0x58a631 = this.Wj ? this._j ? 0.4 + _0x1ad50d * 0.2 : 0.9 + _0x1ad50d * 0.1 : this._j ? 0.4 : 0x1;
              this.Pj.vj.Fj[_0x51ff31].qh(_0x58a631);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return _0x570b7c;
    }();
    var _0x5f0b22 = function () {
      function _0x4d6f80(_0x421748) {
        this.rc = _0x421748;
      }
      _0x4d6f80.fk = $('#game-view');
      _0x4d6f80.gk = $("#results-view");
      _0x4d6f80.hk = $("#main-menu-view");
      _0x4d6f80.ik = $("#popup-view");
      _0x4d6f80.jk = $("#toaster-view");
      _0x4d6f80.kk = $("#loading-view");
      _0x4d6f80.lk = $("#stretch-box");
      _0x4d6f80.mk = $("#game-canvas");
      _0x4d6f80.di = $("#background-canvas");
      _0x4d6f80.nk = $("#social-buttons");
      _0x4d6f80.ok = $('#markup-wrap');
      _0x4d6f80.prototype.a = function () {};
      _0x4d6f80.prototype.ii = function () {};
      _0x4d6f80.prototype.ji = function () {};
      _0x4d6f80.prototype.ei = function () {};
      _0x4d6f80.prototype.Ra = function () {};
      _0x4d6f80.prototype.Pa = function (_0x4106f6, _0x4a0cd0) {};
      return _0x4d6f80;
    }();
    var _0xb909cf = function () {
      function _0x5275de(_0x7e4da7, _0x5d526b, _0x247f26, _0x405e48, _0x1e9eab, _0x393e2b) {
        var _0x4f4e7b = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x7e4da7 + "</span></div>";
        var _0x3bc6c7 = $(_0x4f4e7b);
        _0x3bc6c7.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              'method': "feed",
              'display': 'popup',
              'link': _0x5d526b,
              'name': _0x247f26,
              'caption': _0x405e48,
              'description': _0x1e9eab,
              'picture': _0x393e2b
            }, function () {});
          }
        });
        return _0x3bc6c7;
      }
      var _0x5a2c8e = $("#final-caption");
      var _0xaa52fc = $("#final-continue");
      var _0x4a8f21 = $("#congrats-bg");
      var _0x2fb360 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var _0x566c72 = $("#final-share-fb");
      var _0x830a29 = $('#final-message');
      var _0x5d08e2 = $("#final-score");
      var _0x9bbc57 = $("#final-place");
      var _0x508b63 = $("#final-board");
      var _0x4801ef = _0x51baad(_0x5f0b22, function () {
        _0x5f0b22.call(this, 0x0);
        var _0x345f11 = this;
        var _0x314d8e = window.anApp = _0x2ba968;
        var _0xcae92d = _0x5f0b22.mk.get()[0x0];
        console.log("sSE=" + _0x2f66a1.qk);
        _0x566c72.toggle(_0x2f66a1.qk);
        _0x5a2c8e.text(window.I18N_MESSAGES['index.game.result.title']);
        _0xaa52fc.text(window.I18N_MESSAGES["index.game.result.continue"]);
        _0xaa52fc.click(function () {
          _0x314d8e.r.Cd();
          _0x314d8e.f.Ma.c();
          _0x314d8e.r.G(_0x39bb1b.AudioState.F);
          _0x314d8e.s.I(_0x314d8e.s.F);
        });
        window.detecNewCodeAndPacth = () => {
          $("#game-canvas").attr("width", window.innerWidth);
          return $('#game-canvas').attr("height", window.innerHeight);
        };
        $("html").keydown(function (_0x3fac84) {
          if (_0x3fac84.keyCode == 0x20) {
            _0x345f11.rk = true;
          }
          if (_0x3fac84.keyCode == 0x6b) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 0x3e8);
          }
          if (_0x3fac84.keyCode == 0x6d) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 0x3e8);
          }
          if (theoKzObjects.KeyCodeRespawn == _0x3fac84.keyCode) {
            _0x345f11.rk = true;
            window.onclose();
            setTimeout(function () {
              $("#final-continue").click();
              $("#mm-action-play").click();
              $("#adbl-continue").click();
              $("#final-replay").click();
            }, 0x3e8);
          }
        }).keyup(function (_0x137d8c) {
          if (_0x137d8c.keyCode == 0x20) {
            _0x345f11.rk = false;
          }
        });
        _0xcae92d.addEventListener("touchmove", function (_0x2599a7) {
          if (!RechekingPhone() || !theoKzObjects.gamePad.checked) {
            if (_0x2599a7 === _0x2599a7 || window.event) {
              _0x2599a7 = _0x2599a7.touches[0x0];
              if (_0x2599a7.clientX !== undefined) {
                _0x345f11.sk = Math.atan2(_0x2599a7.clientY - _0xcae92d.offsetHeight * 0.5, _0x2599a7.clientX - _0xcae92d.offsetWidth * 0.5);
              } else {
                _0x345f11.sk = Math.atan2(_0x2599a7.pageY - _0xcae92d.offsetHeight * 0.5, _0x2599a7.pageX - _0xcae92d.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        _0xcae92d.addEventListener('touchstart', function (_0x38ba7b) {
          if (_0x38ba7b === _0x38ba7b || window.event) {
            _0x345f11.rk = _0x38ba7b.touches.length >= 0x2;
          }
          _0x38ba7b.preventDefault();
        }, true);
        _0xcae92d.addEventListener("touchend", function (_0x3ea1dd) {
          if (_0x3ea1dd === _0x3ea1dd || window.event) {
            _0x345f11.rk = _0x3ea1dd.touches.length >= 0x2;
          }
        }, true);
        _0xcae92d.addEventListener("mousemove", function (_0x517c8c) {
          if (!PilotoAutomatico && _0x517c8c.clientX !== undefined) {
            _0x345f11.sk = Math.atan2(_0x517c8c.clientY - _0xcae92d.offsetHeight * 0.5, _0x517c8c.clientX - _0xcae92d.offsetWidth * 0.5);
          }
        }, true);
        _0xcae92d.addEventListener("mousedown", function (_0x3fce6c) {
          console.log(_0x3fce6c);
          _0x345f11.rk = true;
        }, true);
        _0xcae92d.addEventListener('mouseup', function (_0x1cddca) {
          console.log(_0x1cddca);
          _0x345f11.rk = false;
        }, true);
        this.wb = new _0x578aed(_0x5f0b22.mk);
        this.cb = 0x0;
        this.sk = 0x0;
        this.rk = false;
        theoEvents.eventoPrincipal = _0x345f11;
      });
      _0x4801ef.prototype.a = function () {};
      _0x4801ef.prototype.ii = function () {
        if (this.cb == 0x0) {
          _0x5f0b22.fk.stop();
          _0x5f0b22.fk.fadeIn(0x1f4);
          _0x5f0b22.gk.stop();
          _0x5f0b22.gk.fadeOut(0x1);
          _0x5f0b22.hk.stop();
          _0x5f0b22.hk.fadeOut(0x32);
          _0x5f0b22.ik.stop();
          _0x5f0b22.ik.fadeOut(0x32);
          _0x5f0b22.jk.stop();
          _0x5f0b22.jk.fadeOut(0x32);
          _0x5f0b22.kk.stop();
          _0x5f0b22.kk.fadeOut(0x32);
          _0x5f0b22.lk.stop();
          _0x5f0b22.lk.fadeOut(0x1);
          _0x5f0b22.di.stop();
          _0x5f0b22.di.fadeOut(0x32);
          _0x220c89.Le(false);
          _0x5f0b22.nk.stop();
          _0x5f0b22.nk.fadeOut(0x32);
          _0x5f0b22.ok.stop();
          _0x5f0b22.ok.fadeOut(0x32);
        } else {
          _0x5f0b22.fk.stop();
          _0x5f0b22.fk.fadeIn(0x1f4);
          _0x5f0b22.gk.stop();
          _0x5f0b22.gk.fadeIn(0x1f4);
          _0x5f0b22.hk.stop();
          _0x5f0b22.hk.fadeOut(0x32);
          _0x5f0b22.ik.stop();
          _0x5f0b22.ik.fadeOut(0x32);
          _0x5f0b22.jk.stop();
          _0x5f0b22.jk.fadeOut(0x32);
          _0x5f0b22.kk.stop();
          _0x5f0b22.kk.fadeOut(0x32);
          _0x5f0b22.lk.stop();
          _0x5f0b22.lk.fadeOut(0x1);
          _0x5f0b22.di.stop();
          _0x5f0b22.di.fadeOut(0x32);
          _0x220c89.Le(false);
          _0x5f0b22.nk.stop();
          _0x5f0b22.nk.fadeOut(0x32);
          _0x5f0b22.ok.stop();
          _0x5f0b22.ok.fadeOut(0x32);
        }
      };
      _0x4801ef.prototype.J = function () {
        this.cb = 0x0;
        return this;
      };
      _0x4801ef.prototype.Fa = function () {
        console.log('re');
        _0x4a8f21.hide();
        setTimeout(function () {
          console.log('fi_bg');
          _0x4a8f21.fadeIn(0x1f4);
        }, 0xbb8);
        _0x2fb360.hide();
        setTimeout(function () {
          console.log("fi_aw");
          _0x2fb360.fadeIn(0x1f4);
        }, 0x1f4);
        this.cb = 0x1;
        return this;
      };
      _0x4801ef.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 0x1) {
          (window.anApp = _0x2ba968).r.Gd();
        }
      };
      _0x4801ef.prototype.Ra = function () {
        this.wb.Ra();
      };
      _0x4801ef.prototype.Pa = function (_0x5473a9, _0x5c2629) {
        this.wb.Pa(_0x5473a9, _0x5c2629);
      };
      _0x4801ef.prototype.Da = function (_0x256aec, _0xa08f7d, _0x53fbdf) {
        var _0x943f8c = undefined;
        var _0x527e5d = undefined;
        var _0x2bc92a = undefined;
        if (_0xa08f7d >= 0x1 && _0xa08f7d <= 0xa) {
          _0x943f8c = window.I18N_MESSAGES["index.game.result.place.i" + _0xa08f7d];
          _0x527e5d = window.I18N_MESSAGES["index.game.result.placeInBoard"];
          _0x2bc92a = window.I18N_MESSAGES["index.game.social.shareResult.messGood"].replace("{0}", _0x53fbdf).replace("{1}", _0x256aec).replace("{2}", _0x943f8c);
        } else {
          _0x943f8c = '';
          _0x527e5d = window.I18N_MESSAGES['index.game.result.tryHit'];
          _0x2bc92a = window.I18N_MESSAGES["index.game.social.shareResult.messNorm"].replace("{0}", _0x53fbdf).replace('{1}', _0x256aec);
        }
        _0x830a29.html(window.I18N_MESSAGES["index.game.result.your"]);
        _0x5d08e2.html(_0x256aec);
        _0x9bbc57.html(_0x943f8c);
        _0x508b63.html(_0x527e5d);
        if (_0x2f66a1.qk) {
          var _0x24f2ba = window.I18N_MESSAGES['index.game.result.share'];
          window.I18N_MESSAGES["index.game.social.shareResult.caption"];
          _0x566c72.empty().append(_0x5275de(_0x24f2ba, "https://wormate.io", 'wormate.io', _0x2bc92a, _0x2bc92a, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      _0x4801ef.prototype.T = function () {
        return this.sk;
      };
      _0x4801ef.prototype.U = function () {
        return this.rk;
      };
      return _0x4801ef;
    }();
    var _0xbf64ac = function () {
      var _0x338ba4 = $('#loading-worm-a');
      var _0x1fcd45 = $("#loading-worm-b");
      var _0x3b846d = $("#loading-worm-c");
      var _0x25ee2b = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var _0xcdadb9 = _0x51baad(_0x5f0b22, function () {
        _0x5f0b22.call(this, 0x0);
      });
      _0xcdadb9.prototype.a = function () {};
      _0xcdadb9.prototype.ii = function () {
        _0x5f0b22.fk.stop();
        _0x5f0b22.fk.fadeOut(0x32);
        _0x5f0b22.gk.stop();
        _0x5f0b22.gk.fadeOut(0x32);
        _0x5f0b22.hk.stop();
        _0x5f0b22.hk.fadeOut(0x32);
        _0x5f0b22.ik.stop();
        _0x5f0b22.ik.fadeOut(0x32);
        _0x5f0b22.jk.stop();
        _0x5f0b22.jk.fadeOut(0x32);
        _0x5f0b22.kk.stop();
        _0x5f0b22.kk.fadeIn(0x1f4);
        _0x5f0b22.lk.stop();
        _0x5f0b22.lk.fadeIn(0x1);
        _0x5f0b22.di.stop();
        _0x5f0b22.di.fadeIn(0x1f4);
        _0x220c89.Le(true);
        _0x5f0b22.nk.stop();
        _0x5f0b22.nk.fadeOut(0x32);
        _0x5f0b22.ok.stop();
        _0x5f0b22.ok.fadeOut(0x32);
      };
      _0xcdadb9.prototype.ji = function () {
        this.tk();
      };
      _0xcdadb9.prototype.tk = function () {
        _0x338ba4.css("background-position", "100% 200%");
        for (var _0xac1ab = 0x0; _0xac1ab < _0x25ee2b.length; _0xac1ab++) {
          var _0x5cca59 = Math.floor(Math.random() * _0x25ee2b.length);
          var _0x58ba7e = _0x25ee2b[_0xac1ab];
          _0x25ee2b[_0xac1ab] = _0x25ee2b[_0x5cca59];
          _0x25ee2b[_0x5cca59] = _0x58ba7e;
        }
        _0x338ba4.css("background-position", _0x25ee2b[0x0]);
        _0x1fcd45.css("background-position", _0x25ee2b[0x1]);
        _0x3b846d.css("background-position", _0x25ee2b[0x2]);
      };
      return _0xcdadb9;
    }();
    var _0x7533b9 = function () {
      $("#mm-event-text");
      var _0x1ce828 = $("#mm-skin-canv");
      var _0x31b2f8 = $("#mm-skin-prev");
      var _0x334120 = $("#mm-skin-next");
      var _0x27997c = $('#mm-skin-over');
      var _0x2b9a06 = $("#mm-skin-over-button-list");
      var _0xe6d7de = $("#mm-params-nickname");
      var _0x2c7992 = $("#mm-params-game-mode");
      var _0x5dacef = $("#mm-action-buttons");
      var _0x5da808 = $("#mm-action-play");
      var _0x3db74f = $("#mm-action-guest");
      var _0x53273e = $("#mm-action-login");
      var _0x471cba = $("#mm-player-info");
      var _0x18c2b7 = $("#mm-store");
      var _0xc56807 = $("#mm-leaders");
      var _0xd1a88f = $("#mm-settings");
      var _0x45dc6d = $("#mm-coins-box");
      var _0x227702 = $('#mm-player-avatar');
      var _0x294cd2 = $("#mm-player-username");
      var _0x313647 = $("#mm-coins-val");
      var _0x4e5322 = $("#mm-player-exp-bar");
      var _0x38b651 = $('#mm-player-exp-val');
      var _0x477365 = $("#mm-player-level");
      var _0x4e7c7b = _0x51baad(_0x5f0b22, function () {
        _0x5f0b22.call(this, 0x1);
        var _0x59c9a5 = window.anApp = _0x2ba968;
        this.uk = new _0x5a73b8(_0x1ce828);
        _0x2c7992.click(function () {
          _0x59c9a5.r.Cd();
        });
        _0x1ce828.click(function () {
          if (_0x59c9a5.u.P()) {
            _0x59c9a5.r.Cd();
            _0x59c9a5.s.I(_0x59c9a5.s.$h);
          }
        });
        _0x31b2f8.click(function () {
          _0x59c9a5.r.Cd();
          _0x59c9a5.t.Ah();
        });
        _0x334120.click(function () {
          _0x59c9a5.r.Cd();
          _0x59c9a5.t.zh();
        });
        _0xe6d7de.keypress(function (_0x1b3199) {
          if (_0x1b3199.keyCode == 0xd) {
            _0x59c9a5.na();
          }
        });
        _0x5da808.click(function () {
          _0x59c9a5.r.Cd();
          _0x59c9a5.na();
        });
        _0x3db74f.click(function () {
          _0x59c9a5.r.Cd();
          _0x59c9a5.na();
        });
        _0x53273e.click(function () {
          _0x59c9a5.r.Cd();
          _0x59c9a5.s.I(_0x59c9a5.s.Zh);
        });
        _0xd1a88f.click(function () {
          _0x59c9a5.r.Cd();
          _0x59c9a5.s.I(_0x59c9a5.s.xa);
        });
        _0x471cba.click(function () {
          if (_0x59c9a5.u.P()) {
            _0x59c9a5.r.Cd();
            _0x59c9a5.s.I(_0x59c9a5.s.Yh);
          }
        });
        _0xc56807.click(function () {
          if (_0x59c9a5.u.P()) {
            _0x59c9a5.r.Cd();
            _0x59c9a5.s.I(_0x59c9a5.s.Xh);
          }
        });
        _0x18c2b7.click(function () {
          if (_0x59c9a5.u.P()) {
            _0x59c9a5.r.Cd();
            _0x59c9a5.s.I(_0x59c9a5.s._h);
          }
        });
        _0x45dc6d.click(function () {
          if (_0x59c9a5.u.P()) {
            _0x59c9a5.r.Cd();
            _0x59c9a5.s.I(_0x59c9a5.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $('#final-continue').html("<div id=\"final-continue1\">Lobi </div>");
        $("#final-continue").after("<div id=\"final-replay\">Tekrar Oyna</div>");
        $("#final-replay").click(function () {
          let _0x3d9051 = hoisinhnhanh;
          if (_0x3d9051) {
            anApp.r.Hd();
            anApp.sa(_0x3d9051);
          }
        });
        var _0x370806 = _0xdbcc88(_0x1a491c.va);
        if (_0x370806 != "ARENA" && _0x370806 != "TEAM2") {
          _0x370806 = "ARENA";
        }
        _0x2c7992.val(_0x370806);
        console.log("Load GM: " + _0x370806);
      });
      _0x4e7c7b.prototype.a = function () {
        var _0x68a29a = window.anApp = _0x2ba968;
        var _0x1c6872 = this;
        _0x68a29a.u.V(function () {
          _0x68a29a.s.F.xk();
        });
        _0x68a29a.u.Pi(function () {
          if (_0x68a29a.u.P()) {
            _0x68a29a.t.Bh(_0x68a29a.u.Di(), _0x45dfa9.ia);
            _0x68a29a.t.Bh(_0x68a29a.u.Ei(), _0x45dfa9.ja);
            _0x68a29a.t.Bh(_0x68a29a.u.Fi(), _0x45dfa9.ka);
            _0x68a29a.t.Bh(_0x68a29a.u.Gi(), _0x45dfa9.la);
            _0x68a29a.t.Bh(_0x68a29a.u.Hi(), _0x45dfa9.ma);
          } else {
            _0x68a29a.t.Bh(_0x68a29a.Ga(), _0x45dfa9.ia);
            _0x68a29a.t.Bh(0x0, _0x45dfa9.ja);
            _0x68a29a.t.Bh(0x0, _0x45dfa9.ka);
            _0x68a29a.t.Bh(0x0, _0x45dfa9.la);
            _0x68a29a.t.Bh(0x0, _0x45dfa9.ma);
          }
        });
        _0x68a29a.u.Pi(function () {
          _0x5da808.toggle(_0x68a29a.u.P());
          _0x53273e.toggle(!_0x68a29a.u.P());
          _0x3db74f.toggle(!_0x68a29a.u.P());
          _0xc56807.toggle(_0x68a29a.u.P());
          _0x18c2b7.toggle(_0x68a29a.u.P());
          _0x45dc6d.toggle(_0x68a29a.u.P());
          if (_0x68a29a.u.P()) {
            _0x27997c.hide();
            _0x294cd2.html(_0x68a29a.u.wi());
            _0x227702.attr("src", _0x68a29a.u.xi());
            _0x313647.html(_0x68a29a.u.zi());
            _0x4e5322.width(_0x68a29a.u.Bi() * 0x64 / _0x68a29a.u.Ci() + '%');
            _0x38b651.html(_0x68a29a.u.Bi() + " / " + _0x68a29a.u.Ci());
            _0x477365.html(_0x68a29a.u.Ai());
            _0xe6d7de.val(_0x68a29a.u.ga());
          } else {
            _0x27997c.toggle(_0x2f66a1.qk && !_0x68a29a.Ha());
            _0x294cd2.html(_0x294cd2.data("guest"));
            _0x227702.attr('src', '/images/guest-avatar-xmas2022.png');
            _0x313647.html('10');
            _0x4e5322.width('0');
            _0x38b651.html('');
            _0x477365.html(0x1);
            _0xe6d7de.val(_0xdbcc88(_0x1a491c.Aa));
          }
        });
        _0x68a29a.t.xh(function () {
          _0x1c6872.uk.ak(_0x68a29a.t.ha(_0x45dfa9.ia), false, false);
          _0x1c6872.uk.bk(_0x68a29a.t.ha(_0x45dfa9.ja), false, false);
          _0x1c6872.uk.ck(_0x68a29a.t.ha(_0x45dfa9.ka), false, false);
          _0x1c6872.uk.dk(_0x68a29a.t.ha(_0x45dfa9.la), false, false);
          _0x1c6872.uk.ek(_0x68a29a.t.ha(_0x45dfa9.ma), false, false);
        });
      };
      _0x4e7c7b.prototype.ii = function () {
        _0x5f0b22.fk.stop();
        _0x5f0b22.fk.fadeOut(0x32);
        _0x5f0b22.gk.stop();
        _0x5f0b22.gk.fadeOut(0x32);
        _0x5f0b22.hk.stop();
        _0x5f0b22.hk.fadeIn(0x1f4);
        _0x5f0b22.ik.stop();
        _0x5f0b22.ik.fadeOut(0x32);
        _0x5f0b22.jk.stop();
        _0x5f0b22.jk.fadeOut(0x32);
        _0x5f0b22.kk.stop();
        _0x5f0b22.kk.fadeOut(0x32);
        _0x5f0b22.lk.stop();
        _0x5f0b22.lk.fadeIn(0x1);
        _0x5f0b22.di.stop();
        _0x5f0b22.di.fadeIn(0x1f4);
        _0x220c89.Le(true);
        _0x5f0b22.nk.stop();
        _0x5f0b22.nk.fadeIn(0x1f4);
        _0x5f0b22.ok.stop();
        _0x5f0b22.ok.fadeIn(0x1f4);
      };
      _0x4e7c7b.prototype.ji = function () {
        (window.anApp = _0x2ba968).r.Dd();
        this.uk.Le(true);
      };
      _0x4e7c7b.prototype.ei = function () {
        this.uk.Le(false);
      };
      _0x4e7c7b.prototype.Ra = function () {
        this.uk.Ra();
      };
      _0x4e7c7b.prototype.Pa = function (_0x40f506, _0x58bcb5) {
        this.uk.Pa();
      };
      _0x4e7c7b.prototype.ga = function () {
        return _0xe6d7de.val();
      };
      _0x4e7c7b.prototype.D = function () {
        return _0x2c7992.val();
      };
      _0x4e7c7b.prototype.xk = function () {
        _0x5dacef.show();
      };
      _0x4e7c7b.prototype.vk = function () {
        var _0x4092f4 = $("#mm-advice-cont").children();
        var _0x54d6f4 = 0x0;
        setInterval(function () {
          _0x4092f4.eq(_0x54d6f4).fadeOut(0x1f4, function () {
            if (++_0x54d6f4 >= _0x4092f4.length) {
              _0x54d6f4 = 0x0;
            }
            _0x4092f4.eq(_0x54d6f4).fadeIn(0x1f4).css("display", "inline-block");
          });
        }, 0xbb8);
      };
      _0x4e7c7b.prototype.wk = function () {
        function _0x595ad3() {
          _0x443267.Ka(true);
          setTimeout(function () {
            _0x27997c.hide();
          }, 0xbb8);
        }
        var _0x443267 = window.anApp = _0x2ba968;
        if (_0x2f66a1.qk && !_0x443267.Ha()) {
          _0x27997c.show();
          var _0x2b5230 = window.I18N_MESSAGES['index.game.main.menu.unlockSkins.share'];
          var _0x26ed86 = encodeURIComponent(window.I18N_MESSAGES['index.game.main.menu.unlockSkins.comeAndPlay'] + " https://wormate.io/ #wormate #wormateio");
          var _0x3e4fb2 = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"]);
          _0x2b9a06.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x26ed86 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x2b5230 + '</span></a>').click(_0x595ad3));
          _0x2b9a06.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x3e4fb2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x2b5230 + "</span></a>").click(_0x595ad3));
        }
      };
      return _0x4e7c7b;
    }();
    var _0x3f8fac = function () {
      var _0x7afa0e = _0x51baad(_0x5f0b22, function () {
        _0x5f0b22.call(this, 0x0);
      });
      _0x7afa0e.prototype.a = function () {};
      _0x7afa0e.prototype.ii = function () {
        _0x5f0b22.fk.stop();
        _0x5f0b22.fk.fadeOut(0x32);
        _0x5f0b22.gk.stop();
        _0x5f0b22.gk.fadeOut(0x32);
        _0x5f0b22.hk.stop();
        _0x5f0b22.hk.fadeOut(0x32);
        _0x5f0b22.ik.stop();
        _0x5f0b22.ik.fadeOut(0x32);
        _0x5f0b22.jk.stop();
        _0x5f0b22.jk.fadeOut(0x32);
        _0x5f0b22.kk.stop();
        _0x5f0b22.kk.fadeOut(0x32);
        _0x5f0b22.lk.stop();
        _0x5f0b22.lk.fadeOut(0x1);
        _0x5f0b22.di.stop();
        _0x5f0b22.di.fadeOut(0x32);
        _0x220c89.Le(false);
        _0x5f0b22.nk.stop();
        _0x5f0b22.nk.fadeOut(0x32);
        _0x5f0b22.ok.stop();
        _0x5f0b22.ok.fadeOut(0x32);
      };
      return _0x7afa0e;
    }();
    var _0x208881 = function () {
      var _0x74259b = $('#toaster-stack');
      var _0x19ec3c = _0x51baad(_0x5f0b22, function () {
        _0x5f0b22.call(this, 0x0);
        this.yk = [];
        this.zk = null;
      });
      _0x19ec3c.prototype.a = function () {};
      _0x19ec3c.prototype.ii = function () {
        _0x5f0b22.fk.stop();
        _0x5f0b22.fk.fadeOut(0x32);
        _0x5f0b22.gk.stop();
        _0x5f0b22.gk.fadeOut(0x32);
        _0x5f0b22.hk.stop();
        _0x5f0b22.hk.fadeOut(0x32);
        _0x5f0b22.ik.stop();
        _0x5f0b22.ik.fadeOut(0x32);
        _0x5f0b22.jk.stop();
        _0x5f0b22.jk.fadeIn(0x1f4);
        _0x5f0b22.kk.stop();
        _0x5f0b22.kk.fadeOut(0x32);
        _0x5f0b22.lk.stop();
        _0x5f0b22.lk.fadeIn(0x1);
        _0x5f0b22.di.stop();
        _0x5f0b22.di.fadeIn(0x1f4);
        _0x220c89.Le(true);
        _0x5f0b22.nk.stop();
        _0x5f0b22.nk.fadeOut(0x32);
        _0x5f0b22.ok.stop();
        _0x5f0b22.ok.fadeIn(0x1f4);
      };
      _0x19ec3c.prototype.ji = function () {
        this.Ak();
      };
      _0x19ec3c.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0x0;
      };
      _0x19ec3c.prototype._ = function (_0xca3ea5) {
        this.yk.unshift(_0xca3ea5);
        setTimeout(function () {
          (window.anApp = _0x2ba968).s.ki();
        }, 0x0);
      };
      _0x19ec3c.prototype.Ti = function (_0x5c53f1) {
        this.yk.push(_0x5c53f1);
        setTimeout(function () {
          (window.anApp = _0x2ba968).s.ki();
        }, 0x0);
      };
      _0x19ec3c.prototype.Ak = function () {
        var _0x5da24f = this;
        if (this.zk == null) {
          if (this.yk.length == 0x0) {
            (window.anApp = _0x2ba968).s.gi();
            return;
          }
          var _0x1f7cf5 = this.yk.shift();
          this.zk = _0x1f7cf5;
          var _0x33b820 = _0x1f7cf5.Bk();
          _0x33b820.hide();
          _0x33b820.fadeIn(0x12c);
          _0x74259b.append(_0x33b820);
          _0x1f7cf5.Ck = function () {
            _0x33b820.fadeOut(0x12c);
            setTimeout(function () {
              _0x33b820.remove();
            }, 0x12c);
            if (_0x5da24f.zk == _0x1f7cf5) {
              _0x5da24f.zk = null;
            }
            _0x5da24f.Ak();
          };
          _0x1f7cf5.ji();
        }
      };
      return _0x19ec3c;
    }();
    var _0x3b9f03 = function () {
      var _0x4487f4 = $("#popup-menu-label");
      var _0x38467f = $('#popup-menu-coins-box');
      var _0x4390b2 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var _0x2333b9 = window.anApp = _0x2ba968;
        _0x2333b9.r.Cd();
        _0x2333b9.s.gi();
      });
      _0x38467f.click(function () {
        var _0x2da7a8 = window.anApp = _0x2ba968;
        if (_0x2da7a8.u.P()) {
          _0x2da7a8.r.Cd();
          _0x2da7a8.s.I(_0x2da7a8.s.Wh);
        }
      });
      var _0x4793f1 = _0x51baad(_0x5f0b22, function (_0x157070, _0x4076b1) {
        _0x5f0b22.call(this, 0x1);
        this.ad = _0x157070;
        this.Dk = _0x4076b1;
      });
      _0x4793f1.prototype.a = function () {
        _0x4793f1.parent.prototype.a.call(this);
        if (!_0x4793f1.Ek) {
          _0x4793f1.Ek = true;
          var _0x54cd83 = window.anApp = _0x2ba968;
          _0x54cd83.u.Pi(function () {
            if (_0x54cd83.u.P()) {
              _0x4390b2.html(_0x54cd83.u.zi());
            } else {
              _0x4390b2.html('0');
            }
          });
        }
      };
      _0x4793f1.Fk = $("#coins-view");
      _0x4793f1.Gk = $("#leaders-view");
      _0x4793f1.Hk = $("#profile-view");
      _0x4793f1.Ik = $("#settings-view");
      _0x4793f1.Jk = $("#login-view");
      _0x4793f1.Kk = $("#skins-view");
      _0x4793f1.Lk = $("#store-view");
      _0x4793f1.Mk = $("#wear-view");
      _0x4793f1.Nk = $("#withdraw-consent-view");
      _0x4793f1.Ok = $("#delete-account-view");
      _0x4793f1.Pk = $("#please-wait-view");
      _0x4793f1.prototype.ii = function () {
        _0x5f0b22.fk.stop();
        _0x5f0b22.fk.fadeOut(0xc8);
        _0x5f0b22.gk.stop();
        _0x5f0b22.gk.fadeOut(0xc8);
        _0x5f0b22.hk.stop();
        _0x5f0b22.hk.fadeOut(0xc8);
        _0x5f0b22.ik.stop();
        _0x5f0b22.ik.fadeIn(0xc8);
        _0x5f0b22.jk.stop();
        _0x5f0b22.jk.fadeOut(0xc8);
        _0x5f0b22.kk.stop();
        _0x5f0b22.kk.fadeOut(0xc8);
        _0x5f0b22.nk.stop();
        _0x5f0b22.nk.fadeIn(0xc8);
        _0x5f0b22.ok.stop();
        _0x5f0b22.ok.fadeIn(0xc8);
        _0x4487f4.html(this.ad);
        _0x38467f.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      _0x4793f1.prototype.Rk = function () {};
      _0x4793f1.prototype.Sk = function () {
        _0x3b9f03.Pk.stop();
        _0x3b9f03.Pk.fadeIn(0x12c);
      };
      _0x4793f1.prototype.Qk = function () {
        _0x3b9f03.Pk.stop();
        _0x3b9f03.Pk.fadeOut(0x12c);
      };
      return _0x4793f1;
    }();
    var _0xdc9444 = function () {
      var _0x204ee4 = $('#store-buy-coins_125000');
      var _0x6b5e2c = $('#store-buy-coins_50000');
      var _0x15cfc5 = $("#store-buy-coins_16000");
      var _0x7c1426 = $("#store-buy-coins_7000");
      var _0x3fce3f = $("#store-buy-coins_3250");
      var _0x50f731 = $('#store-buy-coins_1250');
      var _0x277eac = _0x51baad(_0x3b9f03, function () {
        _0x3b9f03.call(this, window.I18N_MESSAGES["index.game.popup.menu.coins.tab"], false);
        var _0x101b08 = window.anApp = _0x2ba968;
        var _0x50e1ff = this;
        _0x204ee4.click(function () {
          _0x101b08.r.Cd();
          _0x50e1ff.Tk('coins_125000');
        });
        _0x6b5e2c.click(function () {
          _0x101b08.r.Cd();
          _0x50e1ff.Tk("coins_50000");
        });
        _0x15cfc5.click(function () {
          _0x101b08.r.Cd();
          _0x50e1ff.Tk('coins_16000');
        });
        _0x7c1426.click(function () {
          _0x101b08.r.Cd();
          _0x50e1ff.Tk("coins_7000");
        });
        _0x3fce3f.click(function () {
          _0x101b08.r.Cd();
          _0x50e1ff.Tk('coins_3250');
        });
        _0x50f731.click(function () {
          _0x101b08.r.Cd();
          _0x50e1ff.Tk("coins_1250");
        });
      });
      _0x277eac.prototype.a = function () {
        _0x277eac.parent.prototype.a.call(this);
      };
      _0x277eac.prototype.Rk = function () {
        _0x3b9f03.Fk.stop();
        _0x3b9f03.Fk.fadeIn(0xc8);
        _0x3b9f03.Gk.stop();
        _0x3b9f03.Gk.fadeOut(0x32);
        _0x3b9f03.Hk.stop();
        _0x3b9f03.Hk.fadeOut(0x32);
        _0x3b9f03.Jk.stop();
        _0x3b9f03.Jk.fadeOut(0x32);
        _0x3b9f03.Ik.stop();
        _0x3b9f03.Ik.fadeOut(0x32);
        _0x3b9f03.Kk.stop();
        _0x3b9f03.Kk.fadeOut(0x32);
        _0x3b9f03.Lk.stop();
        _0x3b9f03.Lk.fadeOut(0x32);
        _0x3b9f03.Mk.stop();
        _0x3b9f03.Mk.fadeOut(0x32);
        _0x3b9f03.Nk.stop();
        _0x3b9f03.Nk.fadeOut(0x32);
        _0x3b9f03.Ok.stop();
        _0x3b9f03.Ok.fadeOut(0x32);
      };
      _0x277eac.prototype.ji = function () {
        (window.anApp = _0x2ba968).r.Dd();
      };
      _0x277eac.prototype.Tk = function (_0x19accc) {};
      return _0x277eac;
    }();
    var _0x486961 = function () {
      var _0x141d7c = $("#highscore-table");
      var _0x4db2a0 = $("#leaders-button-level");
      var _0xdf0782 = $('#leaders-button-highscore');
      var _0x89ab2f = $("#leaders-button-kills");
      var _0x407fc5 = _0x51baad(_0x3b9f03, function () {
        _0x3b9f03.call(this, window.I18N_MESSAGES["index.game.popup.menu.leaders.tab"], true);
        var _0x4c9e83 = window.anApp = _0x2ba968;
        var _0x4f3380 = this;
        this.Uk = {};
        this.Vk = {
          'Wk': {
            'Xk': _0x4db2a0,
            'Yk': 'byLevel'
          },
          'Zk': {
            'Xk': _0xdf0782,
            'Yk': 'byHighScore'
          },
          '$k': {
            'Xk': _0x89ab2f,
            'Yk': 'byKillsAndHeadShots'
          }
        };
        _0x4db2a0.click(function () {
          _0x4c9e83.r.Cd();
          _0x4f3380._k(_0x4f3380.Vk.Wk);
        });
        _0xdf0782.click(function () {
          _0x4c9e83.r.Cd();
          _0x4f3380._k(_0x4f3380.Vk.Zk);
        });
        _0x89ab2f.click(function () {
          _0x4c9e83.r.Cd();
          _0x4f3380._k(_0x4f3380.Vk.$k);
        });
      });
      _0x407fc5.prototype.a = function () {
        _0x407fc5.parent.prototype.a.call(this);
      };
      _0x407fc5.prototype.Rk = function () {
        _0x3b9f03.Fk.stop();
        _0x3b9f03.Fk.fadeOut(0x32);
        _0x3b9f03.Gk.stop();
        _0x3b9f03.Gk.fadeIn(0xc8);
        _0x3b9f03.Hk.stop();
        _0x3b9f03.Hk.fadeOut(0x32);
        _0x3b9f03.Jk.stop();
        _0x3b9f03.Jk.fadeOut(0x32);
        _0x3b9f03.Ik.stop();
        _0x3b9f03.Ik.fadeOut(0x32);
        _0x3b9f03.Kk.stop();
        _0x3b9f03.Kk.fadeOut(0x32);
        _0x3b9f03.Lk.stop();
        _0x3b9f03.Lk.fadeOut(0x32);
        _0x3b9f03.Mk.stop();
        _0x3b9f03.Mk.fadeOut(0x32);
        _0x3b9f03.Nk.stop();
        _0x3b9f03.Nk.fadeOut(0x32);
        _0x3b9f03.Ok.stop();
        _0x3b9f03.Ok.fadeOut(0x32);
      };
      _0x407fc5.prototype.ji = function () {
        (window.anApp = _0x2ba968).r.Dd();
        var _0x5cf510 = this;
        this.Sk();
        $.get("https://gateway.wormate.io/pub/leaders", function (_0x2bb035) {
          _0x5cf510.Uk = _0x2bb035;
          _0x5cf510._k(_0x5cf510.al ?? _0x5cf510.Vk.Wk);
          _0x5cf510.Qk();
        }).done(function () {
          _0x5cf510.Qk();
        });
      };
      _0x407fc5.prototype._k = function (_0x356a65) {
        this.al = _0x356a65;
        for (var _0x5ed432 in this.Vk) {
          if (this.Vk.hasOwnProperty(_0x5ed432)) {
            var _0x4ecd94 = this.Vk[_0x5ed432];
            _0x4ecd94.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        var _0x5a3f30 = this.Uk[this.al.Yk];
        var _0x54ec6b = '';
        for (var _0xd58bbc = 0x0; _0xd58bbc < _0x5a3f30.length; _0xd58bbc++) {
          var _0x5b1115 = _0x5a3f30[_0xd58bbc];
          _0x54ec6b += "<div class=\"table-row\"><span>" + (_0xd58bbc + 0x1) + "</span><span><img src=\"" + _0x5b1115.avatarUrl + "\"/></span><span>" + _0x5b1115.username + '</span><span>' + _0x5b1115.level + "</span><span>" + _0x5b1115.highScore + "</span><span>" + _0x5b1115.headShots + " / " + _0x5b1115.kills + "</span></div>";
        }
        _0x141d7c.empty();
        _0x141d7c.append(_0x54ec6b);
      };
      return _0x407fc5;
    }();
    var _0x503836 = function () {
      var _0x3c39f2 = $("#popup-login-gg");
      var _0x315b71 = $("#popup-login-fb");
      var _0x214143 = _0x51baad(_0x3b9f03, function () {
        _0x3b9f03.call(this, window.I18N_MESSAGES["index.game.popup.menu.login.tab"], false);
        var _0x2e363c = window.anApp = _0x2ba968;
        var _0x295486 = this;
        _0x3c39f2.click(function () {
          _0x2e363c.r.Cd();
          _0x295486.Sk();
          _0x2e363c.u.Qi(function () {
            _0x295486.Qk();
          });
          setTimeout(function () {
            _0x295486.Qk();
          }, 0x2710);
          _0x2e363c.u.Zi();
        });
        _0x315b71.click(function () {
          _0x2e363c.r.Cd();
          _0x295486.Sk();
          _0x2e363c.u.Qi(function () {
            _0x295486.Qk();
          });
          setTimeout(function () {
            _0x295486.Qk();
          }, 0x2710);
          _0x2e363c.u.Vi();
        });
      });
      _0x214143.prototype.a = function () {
        _0x214143.parent.prototype.a.call(this);
      };
      _0x214143.prototype.Rk = function () {
        _0x3b9f03.Fk.stop();
        _0x3b9f03.Fk.fadeOut(0x32);
        _0x3b9f03.Gk.stop();
        _0x3b9f03.Gk.fadeOut(0x32);
        _0x3b9f03.Hk.stop();
        _0x3b9f03.Hk.fadeOut(0x32);
        _0x3b9f03.Jk.stop();
        _0x3b9f03.Jk.fadeIn(0xc8);
        _0x3b9f03.Ik.stop();
        _0x3b9f03.Ik.fadeOut(0x32);
        _0x3b9f03.Kk.stop();
        _0x3b9f03.Kk.fadeOut(0x32);
        _0x3b9f03.Lk.stop();
        _0x3b9f03.Lk.fadeOut(0x32);
        _0x3b9f03.Mk.stop();
        _0x3b9f03.Mk.fadeOut(0x32);
        _0x3b9f03.Nk.stop();
        _0x3b9f03.Nk.fadeOut(0x32);
        _0x3b9f03.Ok.stop();
        _0x3b9f03.Ok.fadeOut(0x32);
      };
      _0x214143.prototype.ji = function () {
        (window.anApp = _0x2ba968).r.Dd();
      };
      return _0x214143;
    }();
    var _0x10c855 = function () {
      var _0x5ecf83 = $("#profile-avatar");
      var _0x4ad97a = $("#profile-username");
      var _0x58c724 = $('#profile-experience-bar');
      var _0x2c1e0d = $("#profile-experience-val");
      var _0x23d4e6 = $("#profile-level");
      var _0x4e8095 = $("#profile-stat-highScore");
      var _0x73b138 = $("#profile-stat-bestSurvivalTime");
      var _0x420f14 = $("#profile-stat-kills");
      var _0x2e8fd8 = $("#profile-stat-headshots");
      var _0x1f7c3a = $("#profile-stat-gamesPlayed");
      var _0x4d86c4 = $('#profile-stat-totalTimeSpent');
      var _0x2e8bd1 = $("#profile-stat-registrationDate");
      var _0x35dc2b = _0x51baad(_0x3b9f03, function () {
        _0x3b9f03.call(this, window.I18N_MESSAGES["index.game.popup.menu.profile.tab"], true);
      });
      _0x35dc2b.prototype.a = function () {
        _0x35dc2b.parent.prototype.a.call(this);
      };
      _0x35dc2b.prototype.Rk = function () {
        _0x3b9f03.Fk.stop();
        _0x3b9f03.Fk.fadeOut(0x32);
        _0x3b9f03.Gk.stop();
        _0x3b9f03.Gk.fadeOut(0x32);
        _0x3b9f03.Hk.stop();
        _0x3b9f03.Hk.fadeIn(0xc8);
        _0x3b9f03.Jk.stop();
        _0x3b9f03.Jk.fadeOut(0x32);
        _0x3b9f03.Ik.stop();
        _0x3b9f03.Ik.fadeOut(0x32);
        _0x3b9f03.Kk.stop();
        _0x3b9f03.Kk.fadeOut(0x32);
        _0x3b9f03.Lk.stop();
        _0x3b9f03.Lk.fadeOut(0x32);
        _0x3b9f03.Mk.stop();
        _0x3b9f03.Mk.fadeOut(0x32);
        _0x3b9f03.Nk.stop();
        _0x3b9f03.Nk.fadeOut(0x32);
        _0x3b9f03.Ok.stop();
        _0x3b9f03.Ok.fadeOut(0x32);
      };
      _0x35dc2b.prototype.ji = function () {
        var _0xfd129d = window.anApp = _0x2ba968;
        _0xfd129d.r.Dd();
        var _0x3e3781 = _0xfd129d.u.Oi();
        var _0x1a422d = moment([_0x3e3781.year, _0x3e3781.month - 0x1, _0x3e3781.day]).format('LL');
        _0x4ad97a.html(_0xfd129d.u.wi());
        _0x5ecf83.attr("src", _0xfd129d.u.xi());
        _0x58c724.width(_0xfd129d.u.Bi() * 0x64 / _0xfd129d.u.Ci() + '%');
        _0x2c1e0d.html(_0xfd129d.u.Bi() + " / " + _0xfd129d.u.Ci());
        _0x23d4e6.html(_0xfd129d.u.Ai());
        _0x4e8095.html(_0xfd129d.u.Ii());
        _0x73b138.html(_0x391bcd(_0xfd129d.u.Ji()));
        _0x420f14.html(_0xfd129d.u.Ki());
        _0x2e8fd8.html(_0xfd129d.u.Li());
        _0x1f7c3a.html(_0xfd129d.u.Mi());
        _0x4d86c4.html(_0x391bcd(_0xfd129d.u.Ni()));
        _0x2e8bd1.html(_0x1a422d);
      };
      return _0x35dc2b;
    }();
    var _0x430e34 = function () {
      var _0x50e72a = $("#settings-music-enabled-switch");
      var _0x54e307 = $("#settings-sfx-enabled-switch");
      var _0x360aa5 = $("#settings-show-names-switch");
      var _0x2bd385 = $('#popup-logout');
      var _0x243223 = $("#popup-logout-container");
      var _0xc7b1f6 = $("#popup-delete-account");
      var _0x5a5854 = $("#popup-delete-account-container");
      var _0x291dbd = $('#popup-withdraw-consent');
      var _0x932e29 = _0x51baad(_0x3b9f03, function () {
        _0x3b9f03.call(this, window.I18N_MESSAGES['index.game.popup.menu.settings.tab'], false);
        var _0x5a8973 = this;
        var _0x2635d9 = window.anApp = _0x2ba968;
        _0x50e72a.click(function () {
          var _0x51153b = !!_0x50e72a.prop("checked");
          _0x184caa(_0x1a491c.Me, _0x51153b, 0x1e);
          _0x2635d9.r.td(_0x51153b);
          _0x2635d9.r.Cd();
        });
        _0x54e307.click(function () {
          var _0x23b90a = !!_0x54e307.prop("checked");
          _0x184caa(_0x1a491c.Ne, _0x23b90a, 0x1e);
          _0x2635d9.r.rd(_0x23b90a);
          _0x2635d9.r.Cd();
        });
        _0x360aa5.click(function () {
          _0x2635d9.r.Cd();
        });
        _0x2bd385.click(function () {
          _0x2635d9.r.Cd();
          _0x5a8973.Sk();
          setTimeout(function () {
            _0x5a8973.Qk();
          }, 0x7d0);
          _0x2635d9.u.Wi();
        });
        _0xc7b1f6.click(function () {
          if (_0x2635d9.u.P()) {
            _0x2635d9.r.Cd();
            _0x2635d9.s.I(_0x2635d9.s.Vh);
          } else {
            _0x2635d9.r.Hd();
          }
        });
        _0x291dbd.click(function () {
          if (_0x2635d9.Y()) {
            _0x2635d9.r.Cd();
            _0x2635d9.s.I(_0x2635d9.s.Uh);
          } else {
            _0x2635d9.r.Hd();
          }
        });
      });
      _0x932e29.prototype.a = function () {
        _0x932e29.parent.prototype.a.call(this);
        var _0x7a5f5b = window.anApp = _0x2ba968;
        var _0x4a0e77 = undefined;
        switch (_0xdbcc88(_0x1a491c.Me)) {
          case "false":
            _0x4a0e77 = false;
            break;
          default:
            _0x4a0e77 = true;
        }
        _0x50e72a.prop("checked", _0x4a0e77);
        _0x7a5f5b.r.td(_0x4a0e77);
        var _0x4b3cff = undefined;
        switch (_0xdbcc88(_0x1a491c.Ne)) {
          case "false":
            _0x4b3cff = false;
            break;
          default:
            _0x4b3cff = true;
        }
        _0x54e307.prop('checked', _0x4b3cff);
        _0x7a5f5b.r.rd(_0x4b3cff);
        var _0x14e3ae = undefined;
        switch (_0xdbcc88(_0x1a491c.ya)) {
          case "false":
            _0x14e3ae = false;
            break;
          default:
            _0x14e3ae = true;
        }
        console.log("Load sPN: " + _0x14e3ae);
        _0x360aa5.prop("checked", _0x14e3ae);
        _0x7a5f5b.u.V(function () {
          _0x243223.toggle(_0x7a5f5b.u.P());
          _0x5a5854.toggle(_0x7a5f5b.u.P());
        });
      };
      _0x932e29.prototype.Rk = function () {
        _0x3b9f03.Fk.stop();
        _0x3b9f03.Fk.fadeOut(0x32);
        _0x3b9f03.Gk.stop();
        _0x3b9f03.Gk.fadeOut(0x32);
        _0x3b9f03.Hk.stop();
        _0x3b9f03.Hk.fadeOut(0x32);
        _0x3b9f03.Jk.stop();
        _0x3b9f03.Jk.fadeOut(0x32);
        _0x3b9f03.Ik.stop();
        _0x3b9f03.Ik.fadeIn(0xc8);
        _0x3b9f03.Kk.stop();
        _0x3b9f03.Kk.fadeOut(0x32);
        _0x3b9f03.Lk.stop();
        _0x3b9f03.Lk.fadeOut(0x32);
        _0x3b9f03.Mk.stop();
        _0x3b9f03.Mk.fadeOut(0x32);
        _0x3b9f03.Nk.stop();
        _0x3b9f03.Nk.fadeOut(0x32);
        _0x3b9f03.Ok.stop();
        _0x3b9f03.Ok.fadeOut(0x32);
      };
      _0x932e29.prototype.ji = function () {
        var _0x473b81 = window.anApp = _0x2ba968;
        _0x473b81.r.Dd();
        if (_0x473b81.Y()) {
          _0x291dbd.show();
        } else {
          _0x291dbd.hide();
        }
      };
      _0x932e29.prototype.wa = function () {
        return _0x360aa5.prop("checked");
      };
      return _0x932e29;
    }();
    var _0x531e76 = function () {
      var _0x37e059 = $('#store-view-canv');
      var _0x5dd3b9 = $("#skin-description-text");
      var _0xba74c6 = $('#skin-group-description-text');
      var _0x25ea31 = $('#store-locked-bar');
      var _0x4931fc = $("#store-locked-bar-text");
      var _0x43e9ba = $("#store-buy-button");
      var _0x58bd49 = $("#store-item-price");
      var _0x5dd39b = $('#store-groups');
      var _0xcb11f1 = $("#store-view-prev");
      var _0x59ee9f = $('#store-view-next');
      var _0x1bd370 = _0x51baad(_0x3b9f03, function () {
        _0x3b9f03.call(this, window.I18N_MESSAGES["index.game.popup.menu.skins.tab"], true);
        var _0x2ffb83 = this;
        var _0x4a3099 = window.anApp = _0x2ba968;
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new _0x5a73b8(_0x37e059);
        _0x43e9ba.click(function () {
          _0x4a3099.r.Cd();
          _0x2ffb83.fl();
        });
        _0xcb11f1.click(function () {
          _0x4a3099.r.Cd();
          _0x2ffb83.bl.gl();
        });
        _0x59ee9f.click(function () {
          _0x4a3099.r.Cd();
          _0x2ffb83.bl.hl();
        });
      });
      _0x1bd370.prototype.a = function () {
        _0x1bd370.parent.prototype.a.call(this);
        var _0x28a514 = this;
        var _0x16ded8 = window.anApp = _0x2ba968;
        _0x16ded8.p.ca(function () {
          var _0x1175e2 = _0x16ded8.p.Ac();
          if (_0x1175e2 != null) {
            _0x28a514.cl = [];
            for (var _0x548b5f = 0x0; _0x548b5f < _0x1175e2.skinGroupArrayDict.length; _0x548b5f++) {
              _0x28a514.cl.push(new _0x1c68ee(_0x28a514, _0x1175e2.skinGroupArrayDict[_0x548b5f]));
            }
            _0x28a514.dl = {};
            for (var _0x5d44ca = 0x0; _0x5d44ca < _0x1175e2.skinArrayDict.length; _0x5d44ca++) {
              var _0x2c9b46 = _0x1175e2.skinArrayDict[_0x5d44ca];
              _0x28a514.dl[_0x2c9b46.id] = _0x2c9b46;
            }
          }
        });
        this.il(false);
        _0x16ded8.t.xh(function () {
          _0x28a514.il(false);
        });
      };
      _0x1bd370.prototype.Rk = function () {
        _0x3b9f03.Fk.stop();
        _0x3b9f03.Fk.fadeOut(0x32);
        _0x3b9f03.Gk.stop();
        _0x3b9f03.Gk.fadeOut(0x32);
        _0x3b9f03.Hk.stop();
        _0x3b9f03.Hk.fadeOut(0x32);
        _0x3b9f03.Jk.stop();
        _0x3b9f03.Jk.fadeOut(0x32);
        _0x3b9f03.Ik.stop();
        _0x3b9f03.Ik.fadeOut(0x32);
        _0x3b9f03.Kk.stop();
        _0x3b9f03.Kk.fadeIn(0xc8);
        _0x3b9f03.Lk.stop();
        _0x3b9f03.Lk.fadeOut(0x32);
        _0x3b9f03.Mk.stop();
        _0x3b9f03.Mk.fadeOut(0x32);
        _0x3b9f03.Nk.stop();
        _0x3b9f03.Nk.fadeOut(0x32);
        _0x3b9f03.Ok.stop();
        _0x3b9f03.Ok.fadeOut(0x32);
      };
      _0x1bd370.prototype.ji = function () {
        (window.anApp = _0x2ba968).r.Dd();
        this.jl();
        this.el.Le(true);
      };
      _0x1bd370.prototype.ei = function () {
        this.el.Le(false);
      };
      _0x1bd370.prototype.Ra = function () {
        this.el.Ra();
      };
      _0x1bd370.prototype.Pa = function (_0x4d72be, _0x10f37c) {
        this.el.Pa();
      };
      _0x1bd370.prototype.jl = function () {
        var _0x477cef = this;
        var _0x212cf4 = this;
        var _0x1c2f51 = window.anApp = _0x2ba968;
        _0x5dd39b.empty();
        for (var _0x5b2dcb = 0x0; _0x5b2dcb < this.cl.length; _0x5b2dcb++) {
          (function (_0x38fa6d) {
            var _0x494595 = _0x477cef.cl[_0x38fa6d];
            var _0x6785f6 = document.createElement('li');
            _0x5dd39b.append(_0x6785f6);
            var _0x150e1c = $(_0x6785f6);
            _0x150e1c.html(_0x494595.kl());
            _0x150e1c.click(function () {
              _0x1c2f51.r.Cd();
              _0x212cf4.ll(_0x494595);
            });
            _0x494595.ml = _0x150e1c;
          })(_0x5b2dcb);
        }
        if (this.cl.length > 0x0) {
          var _0x2f2eeb = _0x1c2f51.t.ha(_0x45dfa9.ia);
          for (var _0x5b2dcb = 0x0; _0x5b2dcb < this.cl.length; _0x5b2dcb++) {
            var _0x3aba97 = this.cl[_0x5b2dcb];
            var _0x474862 = _0x3aba97.nl.list;
            for (var _0x1c0d30 = 0x0; _0x1c0d30 < _0x474862.length; _0x1c0d30++) {
              if (_0x474862[_0x1c0d30] == _0x2f2eeb) {
                _0x3aba97.ol = _0x1c0d30;
                this.ll(_0x3aba97);
                return;
              }
            }
          }
          this.ll(this.cl[0x0]);
        }
      };
      _0x1bd370.prototype.ll = function (_0x221b8b) {
        if (this.bl != _0x221b8b) {
          var _0x2874ed = window.anApp = _0x2ba968;
          this.bl = _0x221b8b;
          _0x5dd39b.children().removeClass('pressed');
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          _0xba74c6.html('');
          if (_0x221b8b.nl != null) {
            var _0x1f2ddd = _0x2874ed.p.Ac().textDict[_0x221b8b.nl.description];
            if (_0x1f2ddd != null) {
              _0xba74c6.html(_0x24c040(_0x1f2ddd).includes("href") ? _0x24c040(_0x1f2ddd).replaceAll("href", "target=\"_black\" href") : _0x24c040(_0x1f2ddd));
            }
          }
          this.il(true);
        }
      };
      _0x1bd370.prototype.pl = function () {
        return this.bl == null ? _0x447791.Yg() : this.bl.ql();
      };
      _0x1bd370.prototype.fl = function () {
        var _0x4721fe = this;
        this.pl().ah(function (_0x518c66) {
          _0x4721fe.rl(_0x518c66);
        });
      };
      _0x1bd370.prototype.rl = function (_0x303f89) {
        var _0x645a2d = this;
        var _0x296a98 = window.anApp = _0x2ba968;
        var _0x15cacf = this.dl[_0x303f89].price;
        if (!(_0x296a98.u.zi() < _0x15cacf)) {
          this.Sk();
          var _0x4137aa = _0x296a98.t.ha(_0x45dfa9.ia);
          var _0x5804d2 = _0x296a98.t.ha(_0x45dfa9.ja);
          var _0x4742c8 = _0x296a98.t.ha(_0x45dfa9.ka);
          var _0x2951bd = _0x296a98.t.ha(_0x45dfa9.la);
          var _0x2865f6 = _0x296a98.t.ha(_0x45dfa9.ma);
          _0x296a98.u.Ui(_0x303f89, _0x45dfa9.ia, function () {
            _0x296a98.t.Bh(_0x4137aa, _0x45dfa9.ia);
            _0x296a98.t.Bh(_0x5804d2, _0x45dfa9.ja);
            _0x296a98.t.Bh(_0x4742c8, _0x45dfa9.ka);
            _0x296a98.t.Bh(_0x2951bd, _0x45dfa9.la);
            _0x296a98.t.Bh(_0x2865f6, _0x45dfa9.ma);
            if (_0x296a98.u.Ch(_0x303f89, _0x45dfa9.ia)) {
              _0x296a98.t.Bh(_0x303f89, _0x45dfa9.ia);
            }
            _0x645a2d.Qk();
          });
        }
      };
      _0x1bd370.prototype.il = function (_0x450451) {
        var _0x14c243 = window.anApp = _0x2ba968;
        this.el.bk(_0x14c243.t.ha(_0x45dfa9.ja), false, false);
        this.el.ck(_0x14c243.t.ha(_0x45dfa9.ka), false, false);
        this.el.dk(_0x14c243.t.ha(_0x45dfa9.la), false, false);
        this.el.ek(_0x14c243.t.ha(_0x45dfa9.ma), false, false);
        var _0x54a80a = this.pl();
        if (_0x54a80a._g()) {
          var _0x24decc = _0x54a80a.$g();
          var _0x26df9d = this.dl[_0x24decc];
          var _0x1ea9da = false;
          if (_0x14c243.t.Ja(_0x24decc, _0x45dfa9.ia)) {
            _0x25ea31.hide();
            _0x43e9ba.hide();
          } else {
            if (_0x26df9d == null || _0x26df9d.nonbuyable == 0x1) {
              _0x1ea9da = true;
              _0x25ea31.show();
              _0x43e9ba.hide();
              _0x4931fc.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
              if (_0x26df9d != null && _0x26df9d.nonbuyable && _0x26df9d.nonbuyableCause != null) {
                var _0x3d760b = _0x14c243.p.Ac().textDict[_0x26df9d.nonbuyableCause];
                if (_0x3d760b != null) {
                  _0x4931fc.text(_0x24c040(_0x3d760b));
                }
              }
            } else {
              _0x25ea31.hide();
              _0x43e9ba.show();
              _0x58bd49.html(_0x26df9d.price);
            }
          }
          _0x5dd3b9.html('');
          if (_0x26df9d != null && _0x26df9d.description != null) {
            var _0x239064 = _0x14c243.p.Ac().textDict[_0x26df9d.description];
            if (_0x239064 != null) {
              _0x5dd3b9.html(_0x24c040(_0x239064).includes("href") ? _0x24c040(_0x239064).replaceAll("href", "target=\"_black\" href") : _0x24c040(_0x239064));
            }
          }
          StoreSkinID.html(_0x26df9d.id);
          this.el.ak(_0x24decc, true, _0x1ea9da);
          if (_0x450451) {
            _0x14c243.t.Bh(_0x24decc, _0x45dfa9.ia);
          }
        }
      };
      var _0x1c68ee = function () {
        function _0x2eedbe(_0x28a45d, _0xe6e872) {
          this.sl = _0x28a45d;
          this.ol = 0x0;
          this.nl = _0xe6e872;
        }
        _0x2eedbe.prototype.gl = function () {
          if (--this.ol < 0x0) {
            this.ol = this.nl.list.length - 0x1;
          }
          this.sl.il(true);
        };
        _0x2eedbe.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0x0;
          }
          this.sl.il(true);
        };
        _0x2eedbe.prototype.kl = function () {
          let _0x21e51f = _0x24c040(this.nl.name);
          if (this.nl.img) {
            var _0xdfb1a8 = "<img src=\"";
            _0xdfb1a8 = _0xdfb1a8 + 'https://wormateserkanconnect.github.io/wormateserkanconnect6' + '/images/paths/' + this.nl.img;
            _0x21e51f = _0xdfb1a8 = _0xdfb1a8 + "\" height=\"43\" width=\"220\" />";
          }
          return _0x21e51f;
        };
        _0x2eedbe.prototype.ql = function () {
          return this.ol >= this.nl.list.length ? _0x447791.Yg() : _0x447791.Zg(this.nl.list[this.ol]);
        };
        return _0x2eedbe;
      }();
      return _0x1bd370;
    }();
    var _0x2467f1 = function () {
      var _0x25ac7e = $("#store-go-coins-button");
      var _0x148e86 = $("#store-go-skins-button");
      var _0xd87bb5 = $('#store-go-wear-button');
      var _0x248c7c = _0x51baad(_0x3b9f03, function () {
        _0x3b9f03.call(this, window.I18N_MESSAGES["index.game.popup.menu.store.tab"], true);
        var _0x8a6484 = window.anApp = _0x2ba968;
        _0x25ac7e.click(function () {
          _0x8a6484.r.Cd();
          _0x8a6484.s.I(_0x8a6484.s.Wh);
        });
        _0x148e86.click(function () {
          _0x8a6484.r.Cd();
          _0x8a6484.s.I(_0x8a6484.s.$h);
        });
        _0xd87bb5.click(function () {
          _0x8a6484.r.Cd();
          _0x8a6484.s.I(_0x8a6484.s.ai);
        });
      });
      _0x248c7c.prototype.a = function () {
        _0x248c7c.parent.prototype.a.call(this);
      };
      _0x248c7c.prototype.Rk = function () {
        _0x3b9f03.Fk.stop();
        _0x3b9f03.Fk.fadeOut(0x32);
        _0x3b9f03.Gk.stop();
        _0x3b9f03.Gk.fadeOut(0x32);
        _0x3b9f03.Hk.stop();
        _0x3b9f03.Hk.fadeOut(0x32);
        _0x3b9f03.Jk.stop();
        _0x3b9f03.Jk.fadeOut(0x32);
        _0x3b9f03.Ik.stop();
        _0x3b9f03.Ik.fadeOut(0x32);
        _0x3b9f03.Kk.stop();
        _0x3b9f03.Kk.fadeOut(0x32);
        _0x3b9f03.Lk.stop();
        _0x3b9f03.Lk.fadeIn(0xc8);
        _0x3b9f03.Mk.stop();
        _0x3b9f03.Mk.fadeOut(0x32);
        _0x3b9f03.Nk.stop();
        _0x3b9f03.Nk.fadeOut(0x32);
        _0x3b9f03.Ok.stop();
        _0x3b9f03.Ok.fadeOut(0x32);
      };
      _0x248c7c.prototype.ji = function () {
        (window.anApp = _0x2ba968).r.Dd();
      };
      return _0x248c7c;
    }();
    var _0x10cf0c = function () {
      var _0x316015 = $("#wear-view-canv");
      var _0x3b2174 = $('#wear-description-text');
      var _0x270fde = $('#wear-locked-bar');
      var _0x2226a5 = $("#wear-locked-bar-text");
      var _0x9c054f = $('#wear-buy-button');
      var _0x3965f1 = $("#wear-item-price");
      var _0x79805a = $('#wear-eyes-button');
      var _0x18c4fb = $('#wear-mouths-button');
      var _0x1ffc5c = $("#wear-glasses-button");
      var _0x526833 = $("#wear-hats-button");
      var _0x5f0232 = $("#wear-tint-chooser");
      var _0x3e8d8e = $("#wear-view-prev");
      var _0x23a162 = $("#wear-view-next");
      var _0x539b7d = _0x51baad(_0x3b9f03, function () {
        var _0x30600c = this;
        _0x3b9f03.call(this, window.I18N_MESSAGES['index.game.popup.menu.wear.tab'], true);
        var _0x554d82 = window.anApp = _0x2ba968;
        var _0x526317 = this;
        this.tl = [];
        this.ja = new _0x3610a4(this, _0x45dfa9.ja, _0x79805a);
        this.ka = new _0x3610a4(this, _0x45dfa9.ka, _0x18c4fb);
        this.la = new _0x3610a4(this, _0x45dfa9.la, _0x1ffc5c);
        this.ma = new _0x3610a4(this, _0x45dfa9.ma, _0x526833);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new _0x5a73b8(_0x316015);
        _0x9c054f.click(function () {
          _0x554d82.r.Cd();
          _0x526317.Bl();
        });
        _0x3e8d8e.click(function () {
          _0x554d82.r.Cd();
          _0x526317.ul.Cl();
        });
        _0x23a162.click(function () {
          _0x554d82.r.Cd();
          _0x526317.ul.Dl();
        });
        _0x79805a.click(function () {
          _0x554d82.r.Cd();
          _0x526317.El(_0x30600c.ja);
        });
        _0x18c4fb.click(function () {
          _0x554d82.r.Cd();
          _0x526317.El(_0x30600c.ka);
        });
        _0x1ffc5c.click(function () {
          _0x554d82.r.Cd();
          _0x526317.El(_0x30600c.la);
        });
        _0x526833.click(function () {
          _0x554d82.r.Cd();
          _0x526317.El(_0x30600c.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      _0x539b7d.prototype.a = function () {
        _0x539b7d.parent.prototype.a.call(this);
        var _0x21e025 = window.anApp = _0x2ba968;
        var _0x1fca7b = this;
        _0x21e025.p.ca(function () {
          var _0x44cc62 = _0x21e025.p.Ac();
          if (_0x44cc62 != null) {
            _0x1fca7b.vl = _0x44cc62.eyesDict;
            _0x1fca7b.wl = _0x44cc62.mouthDict;
            _0x1fca7b.xl = _0x44cc62.glassesDict;
            _0x1fca7b.yl = _0x44cc62.hatDict;
            _0x1fca7b.zl = _0x44cc62.colorDict;
            _0x1fca7b.ja.Fl(_0x44cc62.eyesVariantArray);
            _0x1fca7b.ja.Gl(_0x1fca7b.vl);
            _0x1fca7b.ka.Fl(_0x44cc62.mouthVariantArray);
            _0x1fca7b.ka.Gl(_0x1fca7b.wl);
            _0x1fca7b.la.Fl(_0x44cc62.glassesVariantArray);
            _0x1fca7b.la.Gl(_0x1fca7b.xl);
            _0x1fca7b.ma.Fl(_0x44cc62.hatVariantArray);
            _0x1fca7b.ma.Gl(_0x1fca7b.yl);
          }
        });
        this.il(false);
        _0x21e025.t.xh(function () {
          _0x1fca7b.il(false);
        });
      };
      _0x539b7d.prototype.Rk = function () {
        _0x3b9f03.Fk.stop();
        _0x3b9f03.Fk.fadeOut(0x32);
        _0x3b9f03.Gk.stop();
        _0x3b9f03.Gk.fadeOut(0x32);
        _0x3b9f03.Hk.stop();
        _0x3b9f03.Hk.fadeOut(0x32);
        _0x3b9f03.Jk.stop();
        _0x3b9f03.Jk.fadeOut(0x32);
        _0x3b9f03.Ik.stop();
        _0x3b9f03.Ik.fadeOut(0x32);
        _0x3b9f03.Kk.stop();
        _0x3b9f03.Kk.fadeOut(0x32);
        _0x3b9f03.Lk.stop();
        _0x3b9f03.Lk.fadeOut(0x32);
        _0x3b9f03.Mk.stop();
        _0x3b9f03.Mk.fadeIn(0xc8);
        _0x3b9f03.Nk.stop();
        _0x3b9f03.Nk.fadeOut(0x32);
        _0x3b9f03.Ok.stop();
        _0x3b9f03.Ok.fadeOut(0x32);
      };
      _0x539b7d.prototype.ji = function () {
        (window.anApp = _0x2ba968).r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      _0x539b7d.prototype.ei = function () {
        this.Al.Le(false);
      };
      _0x539b7d.prototype.Ra = function () {
        this.Al.Ra();
      };
      _0x539b7d.prototype.Pa = function (_0x5f27fc, _0x295e50) {
        this.Al.Pa();
      };
      _0x539b7d.prototype.El = function (_0x36fd6c) {
        this.ul = _0x36fd6c;
        for (var _0x195ede = 0x0; _0x195ede < this.tl.length; _0x195ede++) {
          this.tl[_0x195ede].Xk.removeClass('pressed');
        }
        this.ul.Xk.addClass('pressed');
        this.ul.ii();
      };
      _0x539b7d.prototype.Hl = function () {
        return this.ul == null ? _0x447791.Yg() : _0x447791.Zg({
          'Lb': this.ul.ql(),
          'rc': this.ul.rc
        });
      };
      _0x539b7d.prototype.Bl = function () {
        var _0x4902c3 = this;
        this.Hl().ah(function (_0x257f31) {
          _0x4902c3.Ui(_0x257f31.Lb, _0x257f31.rc);
        });
      };
      _0x539b7d.prototype.Ui = function (_0x2656df, _0x2fa119) {
        var _0xe23b86 = this;
        var _0x2e18a3 = window.anApp = _0x2ba968;
        var _0x976861 = undefined;
        switch (_0x2fa119) {
          case _0x45dfa9.ja:
            _0x976861 = this.vl[_0x2656df].price;
            break;
          case _0x45dfa9.ka:
            _0x976861 = this.wl[_0x2656df].price;
            break;
          case _0x45dfa9.la:
            _0x976861 = this.xl[_0x2656df].price;
            break;
          case _0x45dfa9.ma:
            _0x976861 = this.yl[_0x2656df].price;
            break;
          default:
            return;
        }
        if (!(_0x2e18a3.u.zi() < _0x976861)) {
          this.Sk();
          var _0x4d2919 = _0x2e18a3.t.ha(_0x45dfa9.ia);
          var _0x379fc0 = _0x2e18a3.t.ha(_0x45dfa9.ja);
          var _0x37d8fb = _0x2e18a3.t.ha(_0x45dfa9.ka);
          var _0xc46777 = _0x2e18a3.t.ha(_0x45dfa9.la);
          var _0x1dfe39 = _0x2e18a3.t.ha(_0x45dfa9.ma);
          _0x2e18a3.u.Ui(_0x2656df, _0x2fa119, function () {
            _0x2e18a3.t.Bh(_0x4d2919, _0x45dfa9.ia);
            _0x2e18a3.t.Bh(_0x379fc0, _0x45dfa9.ja);
            _0x2e18a3.t.Bh(_0x37d8fb, _0x45dfa9.ka);
            _0x2e18a3.t.Bh(_0xc46777, _0x45dfa9.la);
            _0x2e18a3.t.Bh(_0x1dfe39, _0x45dfa9.ma);
            if (_0x2e18a3.u.Ch(_0x2656df, _0x2fa119)) {
              _0x2e18a3.t.Bh(_0x2656df, _0x2fa119);
            }
            _0xe23b86.Qk();
          });
        }
      };
      _0x539b7d.prototype.Il = function (_0x267bc8, _0x264570) {
        switch (_0x264570) {
          case _0x45dfa9.ja:
            return this.vl[_0x267bc8];
          case _0x45dfa9.ka:
            return this.wl[_0x267bc8];
          case _0x45dfa9.la:
            return this.xl[_0x267bc8];
          case _0x45dfa9.ma:
            return this.yl[_0x267bc8];
        }
        return null;
      };
      _0x539b7d.prototype.il = function (_0x288209) {
        var _0x110809 = window.anApp = _0x2ba968;
        this.Al.ak(_0x110809.t.ha(_0x45dfa9.ia), false, false);
        this.Al.bk(_0x110809.t.ha(_0x45dfa9.ja), false, false);
        this.Al.ck(_0x110809.t.ha(_0x45dfa9.ka), false, false);
        this.Al.dk(_0x110809.t.ha(_0x45dfa9.la), false, false);
        this.Al.ek(_0x110809.t.ha(_0x45dfa9.ma), false, false);
        var _0xca1fb7 = this.Hl();
        if (_0xca1fb7._g()) {
          var _0x23432d = _0xca1fb7.$g();
          var _0x30dd06 = this.Il(_0x23432d.Lb, _0x23432d.rc);
          var _0x100011 = false;
          if (_0x110809.t.Ja(_0x23432d.Lb, _0x23432d.rc)) {
            _0x270fde.hide();
            _0x9c054f.hide();
          } else {
            if (_0x30dd06 == null || _0x30dd06.nonbuyable == 0x1) {
              _0x100011 = true;
              _0x270fde.show();
              _0x9c054f.hide();
              _0x2226a5.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
              if (_0x30dd06 != null && _0x30dd06.nonbuyable && _0x30dd06.nonbuyableCause != null) {
                var _0x3dbb40 = _0x110809.p.Ac().textDict[_0x30dd06.nonbuyableCause];
                if (_0x3dbb40 != null) {
                  _0x2226a5.text(_0x24c040(_0x3dbb40));
                }
              }
            } else {
              _0x270fde.hide();
              _0x9c054f.show();
              _0x3965f1.html(_0x30dd06.price);
            }
          }
          _0x3b2174.html('');
          if (_0x30dd06 != null && _0x30dd06.description != null) {
            var _0x422d07 = _0x110809.p.Ac().textDict[_0x30dd06.description];
            if (_0x422d07 != null) {
              _0x3b2174.html(_0x24c040(_0x422d07).includes("href") ? _0x24c040(_0x422d07).replaceAll("href", "target=\"_black\" href") : _0x24c040(_0x422d07));
            }
          }
          switch (_0x23432d.rc) {
            case _0x45dfa9.ja:
              this.Al.bk(_0x23432d.Lb, true, _0x100011);
              break;
            case _0x45dfa9.ka:
              this.Al.ck(_0x23432d.Lb, true, _0x100011);
              break;
            case _0x45dfa9.la:
              this.Al.dk(_0x23432d.Lb, true, _0x100011);
              break;
            case _0x45dfa9.ma:
              this.Al.ek(_0x23432d.Lb, true, _0x100011);
          }
          if (_0x288209) {
            _0x110809.t.Bh(_0x23432d.Lb, _0x23432d.rc);
          }
        }
      };
      var _0x3610a4 = function () {
        function _0x33387a(_0x12f41c, _0x506b31, _0x192d3f) {
          this.sl = _0x12f41c;
          this.rc = _0x506b31;
          this.Xk = _0x192d3f;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -0xa;
          this.Ml = -0xa;
        }
        _0x33387a.prototype.Fl = function (_0x10542a) {
          this.Kl = _0x10542a;
        };
        _0x33387a.prototype.Gl = function (_0x1c3e4d) {
          this.Jl = _0x1c3e4d;
        };
        _0x33387a.prototype.ii = function () {
          var _0x45023d = window.anApp = _0x2ba968;
          var _0xade038 = _0x45023d.t.ha(this.rc);
          for (var _0x33481c = 0x0; _0x33481c < this.Kl.length; _0x33481c++) {
            for (var _0x11b6d = 0x0; _0x11b6d < this.Kl[_0x33481c].length; _0x11b6d++) {
              if (this.Kl[_0x33481c][_0x11b6d] == _0xade038) {
                this.Nl(_0x33481c);
                this.Ol(_0x11b6d);
                return;
              }
            }
          }
          this.Nl(0x0);
          this.Ol(0x0);
        };
        _0x33387a.prototype.Cl = function () {
          var _0x3e8417 = this.Ll - 0x1;
          if (_0x3e8417 < 0x0) {
            _0x3e8417 = this.Kl.length - 0x1;
          }
          this.Nl(_0x3e8417);
          this.Ol(this.Ml % this.Kl[_0x3e8417].length);
        };
        _0x33387a.prototype.Dl = function () {
          var _0x591f36 = this.Ll + 0x1;
          if (_0x591f36 >= this.Kl.length) {
            _0x591f36 = 0x0;
          }
          this.Nl(_0x591f36);
          this.Ol(this.Ml % this.Kl[_0x591f36].length);
        };
        _0x33387a.prototype.Nl = function (_0x16ffef) {
          var _0xdf88cc = this;
          if (!(_0x16ffef < 0x0) && !(_0x16ffef >= this.Kl.length)) {
            this.Ll = _0x16ffef;
            _0x5f0232.empty();
            var _0x5774e6 = this.Kl[this.Ll];
            if (_0x5774e6.length > 0x1) {
              for (var _0x2a0d88 = 0x0; _0x2a0d88 < _0x5774e6.length; _0x2a0d88++) {
                (function (_0x40bf5d) {
                  var _0x426c94 = _0x5774e6[_0x40bf5d];
                  var _0x4919f7 = _0xdf88cc.Jl[_0x426c94];
                  var _0x3852e8 = '#' + _0xdf88cc.sl.zl[_0x4919f7.prime];
                  var _0x278b17 = $("<div style=\"border-color:" + _0x3852e8 + "\"></div>");
                  _0x278b17.click(function () {
                    (window.anApp = _0x2ba968).r.Cd();
                    _0xdf88cc.Ol(_0x40bf5d);
                  });
                  _0x5f0232.append(_0x278b17);
                })(_0x2a0d88);
              }
            }
          }
        };
        _0x33387a.prototype.Ol = function (_0x5c0916) {
          if (!(_0x5c0916 < 0x0) && !(_0x5c0916 >= this.Kl[this.Ll].length)) {
            this.Ml = _0x5c0916;
            _0x5f0232.children().css("background-color", "transparent");
            var _0x21fb81 = _0x5f0232.children(":nth-child(" + (0x1 + _0x5c0916) + ')');
            _0x21fb81.css("background-color", _0x21fb81.css("border-color"));
            this.sl.il(true);
          }
        };
        _0x33387a.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return _0x33387a;
      }();
      return _0x539b7d;
    }();
    var _0x1e7ad8 = function () {
      var _0x592fd2 = $("#withdraw-consent-yes");
      var _0x24f489 = $('#withdraw-consent-no');
      var _0x55e8ea = _0x51baad(_0x3b9f03, function () {
        _0x3b9f03.call(this, window.I18N_MESSAGES["index.game.popup.menu.consent.tab"], false);
        var _0x33d51e = window.anApp = _0x2ba968;
        _0x592fd2.click(function () {
          _0x33d51e.r.Cd();
          if (_0x33d51e.Y()) {
            _0x33d51e.s.I(_0x33d51e.s.F);
            _0x33d51e.$(false, true);
            _0x33d51e.s.aa._(new _0x46a3ee());
          } else {
            _0x33d51e.s.gi();
          }
        });
        _0x24f489.click(function () {
          _0x33d51e.r.Cd();
          _0x33d51e.s.gi();
        });
      });
      _0x55e8ea.prototype.a = function () {
        _0x55e8ea.parent.prototype.a.call(this);
      };
      _0x55e8ea.prototype.Rk = function () {
        _0x3b9f03.Fk.stop();
        _0x3b9f03.Fk.fadeOut(0x32);
        _0x3b9f03.Gk.stop();
        _0x3b9f03.Gk.fadeOut(0x32);
        _0x3b9f03.Hk.stop();
        _0x3b9f03.Hk.fadeOut(0x32);
        _0x3b9f03.Jk.stop();
        _0x3b9f03.Jk.fadeOut(0x32);
        _0x3b9f03.Ik.stop();
        _0x3b9f03.Ik.fadeOut(0x32);
        _0x3b9f03.Kk.stop();
        _0x3b9f03.Kk.fadeOut(0x32);
        _0x3b9f03.Lk.stop();
        _0x3b9f03.Lk.fadeOut(0x32);
        _0x3b9f03.Mk.stop();
        _0x3b9f03.Mk.fadeOut(0x32);
        _0x3b9f03.Nk.stop();
        _0x3b9f03.Nk.fadeIn(0xc8);
        _0x3b9f03.Ok.stop();
        _0x3b9f03.Ok.fadeOut(0x32);
      };
      _0x55e8ea.prototype.ji = function () {
        (window.anApp = _0x2ba968).r.Dd();
      };
      return _0x55e8ea;
    }();
    var _0x596786 = function () {
      var _0x2fec3e = $('#delete-account-timer');
      var _0x44043d = $("#delete-account-yes");
      var _0x5e7f0a = $("#delete-account-no");
      var _0x5d4051 = _0x51baad(_0x3b9f03, function () {
        _0x3b9f03.call(this, window.I18N_MESSAGES['index.game.popup.menu.delete.tab'], false);
        var _0x77a11f = window.anApp = _0x2ba968;
        _0x44043d.click(function () {
          _0x77a11f.r.Cd();
          if (_0x77a11f.u.P()) {
            _0x77a11f.u.bj();
            _0x77a11f.u.Wi();
          } else {
            _0x77a11f.s.gi();
          }
        });
        _0x5e7f0a.click(function () {
          _0x77a11f.r.Cd();
          _0x77a11f.s.gi();
        });
        this.Pl = [];
      });
      _0x5d4051.prototype.a = function () {
        _0x5d4051.parent.prototype.a.call(this);
      };
      _0x5d4051.prototype.Rk = function () {
        _0x3b9f03.Fk.stop();
        _0x3b9f03.Fk.fadeOut(0x32);
        _0x3b9f03.Gk.stop();
        _0x3b9f03.Gk.fadeOut(0x32);
        _0x3b9f03.Hk.stop();
        _0x3b9f03.Hk.fadeOut(0x32);
        _0x3b9f03.Jk.stop();
        _0x3b9f03.Jk.fadeOut(0x32);
        _0x3b9f03.Ik.stop();
        _0x3b9f03.Ik.fadeOut(0x32);
        _0x3b9f03.Kk.stop();
        _0x3b9f03.Kk.fadeOut(0x32);
        _0x3b9f03.Lk.stop();
        _0x3b9f03.Lk.fadeOut(0x32);
        _0x3b9f03.Mk.stop();
        _0x3b9f03.Mk.fadeOut(0x32);
        _0x3b9f03.Nk.stop();
        _0x3b9f03.Nk.fadeOut(0x32);
        _0x3b9f03.Ok.stop();
        _0x3b9f03.Ok.fadeIn(0xc8);
      };
      _0x5d4051.prototype.ji = function () {
        (window.anApp = _0x2ba968).r.Hd();
        _0x44043d.stop();
        _0x44043d.hide();
        _0x2fec3e.stop();
        _0x2fec3e.show();
        _0x2fec3e.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          _0x2fec3e.text(".. 9 ..");
        }, 0x3e8);
        this.Rl(function () {
          _0x2fec3e.text(".. 8 ..");
        }, 0x7d0);
        this.Rl(function () {
          _0x2fec3e.text(".. 7 ..");
        }, 0xbb8);
        this.Rl(function () {
          _0x2fec3e.text(".. 6 ..");
        }, 0xfa0);
        this.Rl(function () {
          _0x2fec3e.text(".. 5 ..");
        }, 0x1388);
        this.Rl(function () {
          _0x2fec3e.text(".. 4 ..");
        }, 0x1770);
        this.Rl(function () {
          _0x2fec3e.text(".. 3 ..");
        }, 0x1b58);
        this.Rl(function () {
          _0x2fec3e.text(".. 2 ..");
        }, 0x1f40);
        this.Rl(function () {
          _0x2fec3e.text(".. 1 ..");
        }, 0x2328);
        this.Rl(function () {
          _0x2fec3e.hide();
          _0x44043d.fadeIn(0x12c);
        }, 0x2710);
      };
      _0x5d4051.prototype.Rl = function (_0x4c0735, _0x46ad04) {
        var _0x2ca581 = setTimeout(_0x4c0735, _0x46ad04);
        this.Pl.push(_0x2ca581);
      };
      _0x5d4051.prototype.Ql = function () {
        for (var _0x44848f = 0x0; _0x44848f < this.Pl.length; _0x44848f++) {
          clearTimeout(this.Pl[_0x44848f]);
        }
        this.Pl = [];
      };
      return _0x5d4051;
    }();
    var _0x8a0a70 = function () {
      function _0x352288() {
        this.Ck = function () {};
      }
      _0x352288.prototype.Bk = function () {};
      _0x352288.prototype.ji = function () {};
      return _0x352288;
    }();
    var _0x9c729a = function () {
      var _0x4592f2 = _0x51baad(_0x8a0a70, function (_0x1a0673) {
        _0x8a0a70.call(this);
        var _0x2dbe00 = Date.now() + '_' + Math.floor(0x3e8 + Math.random() * 0x2327);
        this.Sl = $("<div id=\"" + _0x2dbe00 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x1a0673 + "</div>    <div class=\"toaster-coins-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + "</div></div>");
        var _0x119aa8 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          (window.anApp = _0x2ba968).r.Cd();
          _0x119aa8.Ck();
        });
      });
      _0x4592f2.prototype.Bk = function () {
        return this.Sl;
      };
      _0x4592f2.prototype.ji = function () {
        (window.anApp = _0x2ba968).r.Fd();
      };
      return _0x4592f2;
    }();
    var _0x5b4965 = function () {
      var _0x4af127 = _0x51baad(_0x8a0a70, function (_0x4afbe0) {
        _0x8a0a70.call(this);
        var _0x4d76b8 = Date.now() + '_' + Math.floor(0x3e8 + Math.random() * 0x2327);
        this.Sl = $("<div id=\"" + _0x4d76b8 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x4afbe0 + "</div>    <div class=\"toaster-levelup-text\">" + window.I18N_MESSAGES['index.game.toaster.levelup'] + "</div>    <div class=\"toaster-levelup-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + "</div></div>");
        var _0x1d5383 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          (window.anApp = _0x2ba968).r.Cd();
          _0x1d5383.Ck();
        });
      });
      _0x4af127.prototype.Bk = function () {
        return this.Sl;
      };
      _0x4af127.prototype.ji = function () {
        (window.anApp = _0x2ba968).r.Ed();
      };
      return _0x4af127;
    }();
    var _0x46a3ee = function () {
      var _0x7ccc41 = _0x51baad(_0x8a0a70, function () {
        _0x8a0a70.call(this);
        var _0x1a5253 = this;
        var _0x4fd1f4 = window.anApp = _0x2ba968;
        var _0x22f9f2 = Date.now() + '_' + Math.floor(0x3e8 + Math.random() * 0x2327);
        this.Sl = $("<div id=\"" + _0x22f9f2 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + "/images/linelogo-xmas2022.png" + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + window.I18N_MESSAGES["index.game.toaster.consent.text"].replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + window.I18N_MESSAGES["index.game.toaster.consent.link"] + "</a>    </div>    <div class=\"toaster-consent-close\">" + window.I18N_MESSAGES["index.game.toaster.consent.iAccept"] + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          _0x4fd1f4.r.Cd();
          if (_0x4fd1f4.Y()) {
            _0x4fd1f4.$(true, true);
          }
          _0x1a5253.Ck();
        });
      });
      _0x7ccc41.prototype.Bk = function () {
        return this.Sl;
      };
      _0x7ccc41.prototype.ji = function () {
        var _0x177c3e = this;
        var _0x55da8a = window.anApp = _0x2ba968;
        if (_0x55da8a.Y() && !_0x55da8a.Z()) {
          _0x55da8a.r.Hd();
          setTimeout(function () {
            _0x177c3e.Tl.fadeIn(0x12c);
          }, 0x7d0);
        } else {
          setTimeout(function () {
            _0x177c3e.Ck();
          }, 0x0);
        }
      };
      return _0x7ccc41;
    }();
    var _0x3db6a6 = {
      main: {
        'Ma': _0x5d8855("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
        'K': _0x5d8855("ltmolilci1iurq1i", "wormate-io_970x250"),
        'ra': _0x2b03cf(),
        'e': 0x4,
        'oa': false,
        'qk': true
      },
      miniclip: {
        'Ma': _0x5d8855('aqnvgcpz05orkobh', "WRM_wormate-io_300x250"),
        'K': _0x5d8855("ltmolilci1iurq1i", "wormate-io_970x250"),
        'ra': _0x2b03cf(),
        'e': 0x4,
        'oa': false,
        'qk': false
      }
    };
    var _0x2f66a1 = _0x3db6a6[window.ENV];
    _0x2f66a1 ||= _0x3db6a6.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (_0x475ebb) {
      _0x475ebb.preventDefault();
      _0x475ebb.stopPropagation();
      return false;
    });
    _0x29e70f('//connect.facebook.net/' + _0x27f1d2 + "/sdk.js", 'facebook-jssdk', function () {
      FB.init({
        'appId': '861926850619051',
        'cookie': true,
        'xfbml': true,
        'status': true,
        'version': 'v8.0'
      });
    });
    _0x29e70f("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          'client_id': "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    _0x2ba968 = _0x90d4e2();
    _0x2ba968.v();
    if (PhoneChecked()) {
      _0x29e70f("https://wormateup.live/up/js/joy.min.js", 'mobileconfig', function () {
        _0x38f514();
      });
    }
    ;
    let _0x38f514 = function () {
      $("#game-canvas").after("<div id='zoom-container'><div id='zoom-in'>+</div><div id='zoom-out'>-</div></div>");
    };
    window.keyMove = 'q';
    window.addEventListener("keydown", function (_0x152a97) {
      console.log("event.key: " + _0x152a97.key);
      if (_0x152a97.key.toLowerCase() !== 'q' || !isPlaying || PilotoAutomatico !== null) {
        if (PilotoAutomatico !== null) {
          clearInterval(PilotoAutomatico);
          PilotoAutomatico = null;
        }
      } else {
        const _0xb27eb4 = window.tuNewScore;
        if (PilotoAutomatico !== null) {
          clearInterval(PilotoAutomatico);
        }
        PilotoAutomatico = setInterval(function () {
          let _0x235be6 = Math.PI / 0x4;
          null.sk += _0x235be6;
          if (null.sk >= 0x2 * Math.PI) {
            null.sk -= 0x2 * Math.PI;
          } else if (null.sk <= -0x2 * Math.PI) {
            null.sk += 0x2 * Math.PI;
          }
          let _0x42f92a = document.getElementById('elementId');
          if (_0x42f92a) {
            _0x42f92a.style.transform = 'rotate(' + null.sk + "rad)";
          }
        }, 0xa5 + (_0xb27eb4 >= 0x186a0 ? 0x5 : _0xb27eb4 >= 0x2710 ? 0xa : 0x0));
      }
      localStorage.setItem('SaveGameXT', JSON.stringify(theoKzObjects));
    }, false);
    theoKzObjects.loading = true;
    var _0x14a876 = '';
    _0x14a876 += '</div>';
    _0x14a876 += '</div>';
    _0x14a876 += "</div>";
    _0x14a876 += "<div id=\"wormcerca\">";
    _0x14a876 += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    _0x14a876 += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    _0x14a876 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    _0x14a876 += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    _0x14a876 += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    _0x14a876 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    _0x14a876 += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    _0x14a876 += "</div>";
    _0x14a876 += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    _0x14a876 += "</div><div class=\"worm_2\"><button id=\"settingBtn\"><img src=\"https://i.imgur.com/bKAe6W9.png\"/></button><div id=\"settingContent\"><div class=\"container1\"><span class=\"settings_span\">Spin-Fast: </span><input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" /></div><div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div><div style=\"display:none\" id=\"zoom-container\"><div id=\"zoom-out\">-</div><div id=\"zoom-in\">+</div><div class=\"worm_3\">x.<span id=\"zoom-percentage\"></span>";
    $("#game-view").append(_0x14a876);
    function _0x1d3e3f(_0x1cff7c) {
      if (theoKzObjects.PropertyManager) {
        _0x1cff7c.skinId = theoKzObjects.PropertyManager.rh;
        _0x1cff7c.eyesId = theoKzObjects.PropertyManager.sh;
        _0x1cff7c.mouthId = theoKzObjects.PropertyManager.th;
        _0x1cff7c.glassesId = theoKzObjects.PropertyManager.uh;
        _0x1cff7c.hatId = theoKzObjects.PropertyManager.vh;
      }
    }
    function _0x112bd1() {
      $('#mm-event-text').replaceWith("<div class=\"text-vnxx\"><a href=\"https://www.wormatefriendsturkey.com\">Wormate Serkan Connect 2025</a></div>");
      $("#mm-store").after("\n    <div id=\"mm-store\" style=\"float: right; position: relative; margin-right: 10px; min-width: 140px;\">\n        <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n            <div onclick=\"openPopup()\">\n                <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: yellow; font-size: 25px;\"></i> Ayarlar\n            </div>\n            <div id=\"popup\" class=\"popup\">\n                <div class=\"phdr1\" style=\"display: flex; justify-content: center; align-items: center;\">\n                    <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: yellow; font-size: 25px; margin-right: 10px;\"></i> \n                    <span> Oyun İçi Ayarlar</span>\n                </div>\n                <button class=\"close-button\" onclick=\"closePopup()\">Kapat</button>\n\n                <!-- Ø£Ø²Ø±Ø§Ø± Ø§Ù„ØªØ¨ÙˆÙŠØ¨Ø§Øª -->\n                <div class=\"tab-buttons\" style=\"display: flex; justify-content: space-around; margin-bottom: 10px;\">\n                    <button class=\"tab-button active\" onclick=\"openTab('gameSettings')\">Genel Ayarlar</button>\n                    <button class=\"tab-button\" onclick=\"openTab('messageSettings')\">Kafa Ve Ã‡arpma</button>\n                    <button class=\"tab-button\" onclick=\"openTab('backgroundSettings')\">Arka Plan Mouse</button>\n                </div>\n\n                <!-- Ù…Ø­ØªÙˆÙ‰ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù„Ø¹Ø¨ -->\n                <div id=\"gameSettings\" class=\"tab-content active\">\n                    <div id=\"kich-hoat\">\n                        ID: <input type=\"text\" value=\"\" class=\"you-id\" />\n                        <button class=\"you-id-copy\" onclick=\"navigator.clipboard.writeText('').then(() => alert('Your ID  Copy!'));\">\n                            COPY\n                        </button>\n                    </div>\n                    <table>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Eat Fast:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-Abilityzoom-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Streamer Mode:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmode-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Total HS:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodesaveheadshot-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodesaveheadshot-switch\"></label>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> 1 Top:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodebatop-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodebatop-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Off Emoj:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeemoj-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodeemoj-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            ğŸ”Š\n                                        </span>\n  <select id=\"sound-selector\">\n    <option value=\"https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\">Head Shot</option>\n    <option value=\"https://wormatefriendsturkey.com/up/video/emaat.mp3\">ÙˆÙ„Ùƒ Ø§Ù…Ø¹Ø·</option>\n    <option value=\"https://www.myinstants.com/media/sounds/sniper-shot.mp3\">Sniper</option>\n    <option value=\"https://www.myinstants.com/media/sounds/headshot_6.mp3\">Head Shot2</option>\n    <option value=\"https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\">Ø§Ù„Ù‚Ù…</option>\n    <option value=\"https://wormateup.live/up/video/Aelo-Adi.MP3\">Ø§Ø¯ÙŠÙ„ÙˆÙˆ Ø§Ø¯ÙŠ</option>\n    <option value=\"https://wormateup.live/up/video/alalobee.mp3\">Ø¹ Ù„ÙˆÙˆØ¨ÙŠ</option>\n    <option value=\"https://wormateup.live/up/video/pew.mp3\">Pew</option>\n    <option value=\"https://wormateup.live/up/video/pingo.mp3\">Pingo</option>\n    <option value=\"https://wormateup.live/up/video/wak-wak.mp3\">wak wak</option>\n    <option value=\"https://wormateup.live/up/video/EBRAHIM-ERHAMNI.MP3\">Ø§Ø¨Ø±Ø§Ù‡ÙŠÙ… Ø§Ø±Ø­Ù…Ù†ÙŠ</option>\n  </select>\n  <input class=\"settings-switchZoom\" id=\"settings-stremingmodeheadshot-switch\" type=\"checkbox\" />\n  <label for=\"settings-stremingmodeheadshot-switch\"></label>\n  <label for=\"sound-selector\"></label>\n</div>\n\n<script>\n  // Ø¹Ù†Ø§ØµØ± Ø§Ù„ØªØ­ÙƒÙ…\n  const soundSelector = document.getElementById('sound-selector');\n  const muteSwitch = document.getElementById('settings-stremingmodeheadshot-switch');\n\n  // Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø£ØµÙˆØ§Øª\n  let audioSrc = localStorage.getItem('selectedSound') || ''; // Ø§Ù„ØµÙˆØª Ø§Ù„Ø§ÙØªØ±Ø§Ø¶ÙŠ ÙØ§Ø±Øº\n  let audio = null; // ÙƒØ§Ø¦Ù† Ø§Ù„ØµÙˆØª ØºÙŠØ± Ù…Ù‡ÙŠØ£\n  let isMuted = localStorage.getItem('isMuted') === 'true'; // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø¥Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª\n\n  // Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„ØµÙˆØª Ø§Ù„Ø£ÙˆÙ„ÙŠØ©\n  soundSelector.value = audioSrc;\n  muteSwitch.checked = isMuted;\n\n  // ØªØ­Ø¯ÙŠØ« Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„ØªØºÙŠÙŠØ± ÙÙŠ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©\n  soundSelector.addEventListener('change', (e) => {\n    audioSrc = e.target.value;\n    localStorage.setItem('selectedSound', audioSrc);\n    if (!isMuted) {\n      if (audio) audio.pause(); // Ø¥ÙŠÙ‚Ø§Ù Ø£ÙŠ ØµÙˆØª Ù‚ÙŠØ¯ Ø§Ù„ØªØ´ØºÙŠÙ„\n      audio = new Audio(audioSrc); // Ø¥Ù†Ø´Ø§Ø¡ ÙƒØ§Ø¦Ù† ØµÙˆØª Ø¬Ø¯ÙŠØ¯\n      audio.play(); // ØªØ´ØºÙŠÙ„ Ø§Ù„ØµÙˆØª Ø§Ù„Ø¬Ø¯ÙŠØ¯\n    }\n  });\n\n  // ØªØ¹Ø·ÙŠÙ„ Ø§Ù„ØµÙˆØª\n  muteSwitch.addEventListener('change', () => {\n    isMuted = muteSwitch.checked;\n    localStorage.setItem('isMuted', isMuted);\n    if (isMuted && audio) {\n      audio.pause(); // Ø¥ÙŠÙ‚Ø§Ù Ø§Ù„ØµÙˆØª Ø¥Ø°Ø§ ØªÙ… ÙƒØªÙ…Ù‡\n    }\n  });\n\n  // ØªØ´ØºÙŠÙ„ Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ ØªÙ…Ø±ÙŠØ± Ø§Ù„Ù…Ø§ÙˆØ³ Ø¹Ù„Ù‰ Ø§Ù„Ø®ÙŠØ§Ø±Ø§Øª\n  const options = soundSelector.querySelectorAll('option');\n  options.forEach((option) => {\n    option.addEventListener('mouseover', () => {\n      if (!isMuted) {\n        const hoverAudio = new Audio(option.value); // Ø¥Ù†Ø´Ø§Ø¡ ÙƒØ§Ø¦Ù† ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„Ù…Ø±ÙˆØ±\n        hoverAudio.play();\n      }\n    });\n  });\n\n  // Ù„Ø§ ÙŠØªÙ… ØªØ´ØºÙŠÙ„ Ø§Ù„ØµÙˆØª Ø§Ù„Ø£ÙˆÙ„ÙŠ Ù‡Ù†Ø§\n</script>\n\n<script>\n\n</script>\n\n            </div>\n\n                   </td>\n                  </tr>\n                </tbody>\n              </table>\n\n              <div class=\"list2\">\n            <div class=\"list2\">\n              <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i><a href=\"/\">Q</a>: TuÅŸu Ä°le oyun iÃ§erisinde solucanÄ±nÄ±zÄ± kendi baÅŸÄ±na bÄ±rakabilirsiniz.\n                </div>\n            <div class=\"list2\">\n             <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> <a href=\"/\">R</a> Oyun iÃ§erisinde hÄ±zlÄ± bir ÅŸekilde dogmanÄ±zÄ± saÄŸlar.\n\n            </div>\n                        <div class=\"list2\">\n             <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i>   <a href=\"/\">Z</a>   Aktif bir zoom var ise direk zoom etkisiz olur.\n\n            </div>\n    \n          </div>\n\n          </div>\n\n            \n            <div id=\"messageSettings\" class=\"tab-content\" style=\"display:none;\">\n                <h3>   Solucan ayalarÄ± yapÄ±landÄ±r. </h3>\n                <div style=\"display: flex; justify-content: center; align-items: center; flex-direction: row;\">\n                    <div style=\"margin-bottom: 15px; width: 100%; max-width: 200px;\">\n                        <label for=\"killSelect\">Solucan Ã‡arpma: </label>\n                        <select id=\"killSelect\" style=\"width: 100%; padding: 5px; box-sizing: border-box; min-width: 150px; max-width: 150px;\">\n                            <option value=\"Well Done!\">Well Done!</option>\n                            <option value=\"Galiba TÄ±r Ã‡arptÄ±ğŸ¤£\"> Galiba TÄ±r Ã‡arptÄ±ğŸ¤£</option>\n                            <option value=\" YavaÅŸ YavaÅŸ Abe Hayran\"> YavaÅŸ YavaÅŸ Abe Hayran</option>\n                            <option value=\" Adam HÄ±zÄ± AlamadÄ± MorukğŸ¤£\">Adam HÄ±zÄ± AlamadÄ± MorukğŸ¤£ </option>\n                            <option value=\" Bu Ne HÄ±z YiÄŸidim\"> Bu Ne HÄ±z YiÄŸidim</option>\n                            <option value=\"Sen ne anlatÄ±yorsun be abi ğŸ¤£ \">Sen ne anlatÄ±yorsun be abi ğŸ¤£ </option>\n                            <option value=\" BÃ¶le biÅŸi yok\"> BÃ¶le biÅŸi yok</option>\n                           <option value=\"ğŸ¤£ğŸ¤£Hadi Oglum HadiğŸ¤£ğŸ¤£\"> ğŸ¤£ğŸ¤£ Hadi Oglum Hadi ğŸ¤£ğŸ¤£ </option>\n                        </select>\n                    </div>\n            \n                    <div style=\"margin-bottom: 15px; width: 100%; max-width: 200px; margin-right: 20px;\">\n                        <label for=\"headshotSelect\">Headshot yazÄ±sÄ±:</label>\n                        <select id=\"headshotSelect\" style=\"width: 100%; padding: 5px; box-sizing: border-box; min-width: 150px; max-width: 150px;\">\n                            <option value=\"HEADSHOT\">HEADSHOT</option>\n                            <option value=\" Tam RafadanğŸ¤£\"> Tam Rafadan ğŸ¤£</option>\n                            <option value=\"NasÄ±l Koydum Ama  ğŸ”ª\"> NasÄ±l Koydum Ama ğŸ”ª</option>\n                            <option value=\" HEADSHOT â˜ ï¸\">HEADSHOT â˜ ï¸</option>\n                            <option value=\"   Kafa GÃ¼zelmi BebeÄŸimğŸ˜‹ğŸ˜‹ \">  Kafa GÃ¼zelmi BebeÄŸimğŸ˜‹ğŸ˜‹  </option>\n                        </select>\n                    </div>\n                </div>\n                <button onclick=\"saveMessages()\" style=\"margin-top: 5px;\">Kaydet </button>\n            </div>\n\n                <!-- Ù…Ø­ØªÙˆÙ‰ ØªØ¨ÙˆÙŠØ¨ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø®Ù„ÙÙŠØ§Øª (ØªÙ… Ø­Ø°Ù ÙƒØ§ÙØ© Ø§Ù„Ø®Ù„ÙÙŠØ§Øª) -->\n                <div id=\"backgroundSettings\" class=\"tab-content\" style=\"display:none;\">\n              <table>\n                <tbody>\n                  <tr>\n                    <td>\n                      <div class=\"spancursor\">\n                        <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #ff8f00; font-size: 25px;\"></i> Select Curos\n                      </div>\n                      <div class=\"cursor-container\">\n                        <div id=\"default-cursor-btn\">\n                          <img style=\"margin-top: -45px; margin-right: 60px; float: right; width: 25px; height: 28px;\" class=\"img\" alt=\"Imgur-Upload\" src=\"https://i.imgur.com/rI522o3.png\">\n                        </div>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"spancursor\">\n                        <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #ff8f00; font-size: 25px;\"></i> Select Backgound\n                      </div>\n                      <div class=\"background-container\"></div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n\n    <style>\n        /* ØªÙ†Ø³ÙŠÙ‚ Ø§Ù„ØªØ¨ÙˆÙŠØ¨Ø§Øª */\n        .tab-buttons button {\n            padding: 10px;\n            background-color: #ddd;\n            border: none;\n            cursor: pointer;\n            flex: 1;\n            text-align: center;\n        }\n\n        .tab-buttons button.active {\n            background-color: #0d7aef;\n            color: white;\n        }\n\n        .tab-content {\n            display: none;\n        }\n\n        .tab-content.active {\n            display: block;\n        }\n\n        /* ØªÙ†Ø³ÙŠÙ‚ Ø®ÙŠØ§Ø±Ø§Øª Ø§Ù„Ø®Ù„ÙÙŠØ© */\n        .background-options {\n            margin-top: 20px;\n        }\n\n        /* ØªÙ†Ø³ÙŠÙ‚ Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø¯Ø§Ø®Ù„ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ */\n        .settings-labelZoom {\n            font-size: 16px;\n        }\n\n\n\n        /* ØªÙ†Ø³ÙŠÙ‚ Ù…Ø­ØªÙˆÙ‰ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ */\n        #messageSettings {\n            display: flex;\n            flex-direction: row; /* ÙˆØ¶Ø¹ Ø§Ù„Ø¹Ù†Ø§ØµØ± ÙÙŠ ØµÙ */\n            justify-content: center; /* Ù…Ø­Ø§Ø°Ø§Ø© Ø§Ù„Ø¹Ù†Ø§ØµØ± ÙÙŠ Ø§Ù„Ù…Ù†ØªØµÙ */\n            align-items: center;\n        }\n\n        #messageSettings div {\n            width: 100%;\n            max-width: 100%;\n        }\n    </style>\n\n    <script>\n        // Ø¯Ø§Ù„Ø© Ø§Ù„ØªÙ†Ù‚Ù„ Ø¨ÙŠÙ† Ø§Ù„ØªØ¨ÙˆÙŠØ¨Ø§Øª\n        function openTab(tabId) {\n            const contents = document.querySelectorAll('.tab-content');\n            const buttons = document.querySelectorAll('.tab-button');\n\n            contents.forEach(content => content.style.display = 'none');\n            buttons.forEach(button => button.classList.remove('active'));\n\n            document.getElementById(tabId).style.display = 'block';\n            event.target.classList.add('active');\n        }\n\n\n// Ø¯Ø§Ù„Ø© Ù„Ø­ÙØ¸ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„\nfunction saveMessages() {\n    // Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ù‚ÙŠÙ… Ù…Ù† Ø§Ù„Ù‚ÙˆØ§Ø¦Ù… Ø§Ù„Ù…Ù†Ø³Ø¯Ù„Ø©\n    const headshotMessage = document.getElementById(\"headshotSelect\").value;\n    const killMessage = document.getElementById(\"killSelect\").value;\n\n    // Ø­ÙØ¸ Ø§Ù„Ù‚ÙŠÙ… ÙÙŠ localStorage\n    localStorage.setItem(\"headshotMessage\", headshotMessage);\n    localStorage.setItem(\"killMessage\", killMessage);\n\n    // Ø¹Ø±Ø¶ Ø±Ø³Ø§Ù„Ø© ØªØ£ÙƒÙŠØ¯\n    alert(\"BaÅŸarÄ±lÄ± ÅŸekilde kayÄ±t edildi   !\");\n\n    // Ù„Ø¹Ø±Ø¶ Ø§Ù„Ù‚ÙŠÙ… Ø§Ù„Ù…Ø¯Ø®Ù„Ø© ÙÙŠ ÙˆØ­Ø¯Ø© Ø§Ù„ØªØ­ÙƒÙ… Ù„ØªØªØ£ÙƒØ¯ Ù…Ù† Ø§Ù„Ø­ÙØ¸\n    console.log(\"Headshot Message: \" + headshotMessage);\n    console.log(\"Kill Message: \" + killMessage);\n}\n\n// Ø¯Ø§Ù„Ø© Ù„Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù…Ø®Ø²Ù†Ø© Ù…Ù† localStorage Ø¹Ù†Ø¯ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø©\nfunction loadMessages() {\n    // Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ù‚ÙŠÙ… Ù…Ù† localStorage\n    const savedHeadshot = localStorage.getItem(\"headshotMessage\");\n    const savedKill = localStorage.getItem(\"killMessage\");\n\n    // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø£Ù† Ø§Ù„Ù‚ÙŠÙ… Ù…Ø®Ø²Ù†Ø© ÙÙŠ localStorage\n    if (savedHeadshot) {\n        const headshotSelect = document.getElementById(\"headshotSelect\");\n        if (headshotSelect) {\n            headshotSelect.value = savedHeadshot;\n        }\n    }\n    if (savedKill) {\n        const killSelect = document.getElementById(\"killSelect\");\n        if (killSelect) {\n            killSelect.value = savedKill;\n        }\n    }\n\n    // Ù„Ø¹Ø±Ø¶ Ø§Ù„Ù‚ÙŠÙ… ÙÙŠ ÙˆØ­Ø¯Ø© Ø§Ù„ØªØ­ÙƒÙ… Ù„Ù„ØªØ£ÙƒØ¯ Ù…Ù† Ø§Ø³ØªØ±Ø¬Ø§Ø¹Ù‡Ø§ Ø¨Ø´ÙƒÙ„ ØµØ­ÙŠØ­\n    console.log(\"Loaded Headshot Message: \" + savedHeadshot);\n    console.log(\"Loaded Kill Message: \" + savedKill);\n}\n\n// Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù…Ø®Ø²Ù†Ø© Ø¹Ù†Ø¯ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø© Ø£Ùˆ Ø¨Ø¹Ø¯ Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ø¬Ø¯ÙŠØ¯\nfunction initializeSettings() {\n    setTimeout(() => {\n        loadMessages();\n    }, 100); // ØªØ£Ø®ÙŠØ± Ø¨Ø³ÙŠØ· Ù„Ù„ØªØ£ÙƒØ¯ Ù…Ù† ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù…Ø­ØªÙˆÙ‰\n}\n\n// Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ initializeSettings Ø¹Ù†Ø¯ Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ø£Ùˆ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø©\ninitializeSettings();\n\n\n\n\n\n        // Ø¯Ø§Ù„Ø© Ù„Ø­ÙØ¸ Ø§Ù„Ø®Ù„ÙÙŠØ©\n        function saveBackground() {\n            const background = document.getElementById(\"backgroundSelect\").value;\n            localStorage.setItem(\"selectedBackground\", background);\n\n            alert(\"ØªÙ… Ø­ÙØ¸ Ø§Ù„Ø®Ù„ÙÙŠØ© Ø¨Ù†Ø¬Ø§Ø­!\");\n        }\n    </script>\n");
      $("#loa831pibur0w4gv").replaceWith("\n        <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n          <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n          <div class=\"label\" id=\"titleSetings\">Welcome</div>\n          <div class=\"bao-list1\">\n            <input type=\"text\" value=\"\" style=\"width: 80%; height: 23px; border-radius: 4px; font-size: 15px; padding: 0 6px; background-color: #fff; color: #806102; display: block; box-sizing: border-box; -webkit-appearance: none; outline: 0; border-width: 0;\" />\n            <button style=\"height: 25px; float: right; margin-top: -24px; margin-right: -6px; line-height: 1.2; font-size: 14px;\" onclick=\"navigator.clipboard.writeText('').then(() => alert('Your ID  copied!'));\">Ù†Ø³Ø®</button>\n            <center>\n              <div class=\"hg\">\n                <a target=\"_blank\" href=\"###\">Akitvasyon</a>\n                <br> <br> <br><br> <br> <br>\n                                <a\">                     </a>\n\n              </div>\n            </center>\n            <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color: #48ff00;\"></i>\n            <a style=\"color: #2ae1eb; font-weight: 600;\" href=\"https://discord.gg/zNJkB8EeUF\">Discord Server</a>\n          </div>\n        </div>\n      ");
      var _0x1242b4 = document.getElementById('settingBtn');
      var _0x4f5c0f = document.getElementById("settingContent");
      _0x1242b4.addEventListener("click", function () {
        if (_0x4f5c0f.style.display === "none") {
          _0x4f5c0f.style.display = 'block';
        } else {
          _0x4f5c0f.style.display = "none";
        }
      });
      $("#PortionSize").on("input", function () {
        theoKzObjects.PortionSize = $(this).val();
        localStorage.PotenciadorSize = theoKzObjects.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        theoKzObjects.PortionAura = $(this).val();
        localStorage.PotenciadorAura = theoKzObjects.PortionAura;
      });
      $("#smoothCamera").on('input', function () {
        theoKzObjects.smoothCamera = $(this).val();
        localStorage.smoothCamera = 0.5;
      });
      $("#FoodSize").on("input", function () {
        theoKzObjects.FoodSize = $(this).val();
        localStorage.ComidaSize = theoKzObjects.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        theoKzObjects.FoodShadow = $(this).val();
        localStorage.ComidaShadow = theoKzObjects.FoodShadow;
      });
      $("#mm-advice-cont").html("\n        <div class=\"vietnam\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr; gap: 8.5px;\">\n          <input type=\"button\" value=\"F.SCREEN\" class=\"fullscreen_button\">\n          <input type=\"button\" value=\"RESPAWN\" id=\"hoisinh\" class=\"fullscreen_respawn\">\n\n          </div>\n      ");
      $(".mm-merchant-cont").html("\n  <div style=\"display: flex; justify-content: center; align-items: center;margin-top:10px\">\n    <a href=\"https://www.youtube.com/wormup\" target=\"_blank\" style=\"margin-right: 10px;\">\n      <img src=\"https://wormateup.live/images/hiep_img/\" alt=\"\" width=\"155\">\n    </a>\n    <a href=\"https://wormateup.live.com\" target=\"_blank\">\n      <img src=\"https://i.imgur.com/V.png\" alt=\"\" width=\"155\">\n    </a>\n  </div>");
      $(document).ready(function () {
        $(".fullscreen_button").on("click", function () {
          if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else {
              if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
              } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
              }
            }
          } else {
            if (document.cancelFullScreen) {
              document.cancelFullScreen();
            } else {
              if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
              }
            }
          }
        });
      });
      $('#hoisinh').click(function () {
        let _0x3a9b29 = _0x3a9b29;
        if (_0x3a9b29) {
          anApp.r.Hd();
          anApp.sa(_0x3a9b29);
        }
      });
      $(".mm-merchant").replaceWith('');
      $(".mm-merchant").replaceWith('');
      $(".description-text").replaceWith("\n        <div class=\"description-text\">\n          <div id=\"title\"></div>\n          <div class=\"description-text-test\">\n            <ul style=\"margin-top: 5px;\" class=\"ui-tabs-nav\">\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n                <a> <span class=\"flag br\" value=\"https://i.imgur.com/dixYLjk.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n                <a> <span class=\"flag mx\" value=\"https://i.imgur.com/JMAvuFN.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n                <a> <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n                <a> <span class=\"flag ca\" value=\"https://i.imgur.com/m1skEsB.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n                <a> <span class=\"flag de\" value=\"https://i.imgur.com/VgCH8iy.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n                <a> <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n                <a> <span class=\"flag sg\" value=\"https://i.imgur.com/ErLcgXP.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n                <a> <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n                <a> <span class=\"flag au\" value=\"https://i.imgur.com/12e0wp4.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n                <a> <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span> </a>\n              </li>\n            </ul>\n            <div class=\"bao-list2\">\n              <div class=\"gachngang\"></div>\n              <div class=\"servers-container\">\n                <div class=\"servers-peru\"></div>\n                <div class=\"servers-mexico\" style=\"display: none;\"></div>\n                <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n                <div class=\"servers-canada\" style=\"display: none;\"></div>\n                <div class=\"servers-germania\" style=\"display: none;\"></div>\n                <div class=\"servers-francia\" style=\"display: none;\"></div>\n                <div class=\"servers-singapur\" style=\"display: none;\"></div>\n                <div class=\"servers-japon\" style=\"display: none;\"></div>\n                <div class=\"servers-australia\" style=\"display: none;\"></div>\n                <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n              </div>\n                <script src=\"https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js\"></script>\n            </div>\n          </div>\n        </div>\n      ");
      $('.ui-tab').on("click", account);
      $(".flag").click(function () {
        let _0x124797 = $(this).attr('value');
        theoKzObjects.flag = _0x124797;
        ctx.containerImgS.texture = ctx.onclickServer;
        retundFlagError();
        console.log(_0x124797);
      });
      for (a = 0x0; a < servers.Api_listServer.length; a++) {
        var _0x1a0f03 = servers.Api_listServer[a].serverUrl;
        var _0x4f7e70 = servers.Api_listServer[a].name;
        var _0x377baf = servers.Api_listServer[a].region;
        let _0x44a76c = document.createElement('p');
        _0x44a76c.value = _0x1a0f03;
        _0x44a76c.innerHTML = _0x4f7e70;
        if (_0x377baf == "peru") {
          $(".servers-peru").prepend(_0x44a76c);
        } else {
          if (_0x377baf == "mexico") {
            $(".servers-mexico").prepend(_0x44a76c);
          } else {
            if (_0x377baf == "eeuu") {
              $(".servers-eeuu").prepend(_0x44a76c);
            } else {
              if (_0x377baf == "canada") {
                $(".servers-canada").prepend(_0x44a76c);
              } else {
                if (_0x377baf == "germania") {
                  $(".servers-germania").prepend(_0x44a76c);
                } else {
                  if (_0x377baf == "francia") {
                    $('.servers-francia').prepend(_0x44a76c);
                  } else {
                    if (_0x377baf == "singapur") {
                      $(".servers-singapur").prepend(_0x44a76c);
                    } else {
                      if (_0x377baf == "japon") {
                        $(".servers-japon").prepend(_0x44a76c);
                      } else {
                        if (_0x377baf == 'australia') {
                          $(".servers-australia").prepend(_0x44a76c);
                        } else if (_0x377baf == "granbretana") {
                          $(".servers-granbretana").prepend(_0x44a76c);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        $(_0x44a76c).attr('id', _0x377baf);
        $(_0x44a76c).attr("class", "selectSala");
        $(_0x44a76c).attr("value", _0x4f7e70);
        $(_0x44a76c).click(function () {
          ctx.setServer($(this).text());
          let _0x33e7ae = $(this).val();
          ctx.containerImgS.texture = ctx.onclickServer;
          retundFlagError();
          window.server_url = _0x33e7ae;
          $('#mm-action-play').click();
          $('#adbl-continue').click();
        });
      }
    }
    function _0x1c76e5(_0x369140, _0x2b2de9) {
      let _0x4d3b0e = function (_0x5f29dc, _0x39f8d8, _0xab9148, _0x104e7b) {
        ctx.setCountGame(_0x5f29dc, _0x39f8d8, _0xab9148, _0x104e7b);
      };
      if (_0x369140 === "count") {
        theoKzObjects.kill = (0x0 || 0x0) + (_0x2b2de9 ? 0x0 : 0x1);
        theoKzObjects.headshot = (0x0 || 0x0) + (_0x2b2de9 ? 0x1 : 0x0);
        theoKzObjects.totalKills = 0x0 + (_0x2b2de9 ? 0x0 : 0x1);
        theoKzObjects.totalHeadshots = 0x0 + (_0x2b2de9 ? 0x1 : 0x0);
        _0x4d3b0e(0x0, 0x0, 0x0, 0x0);
      }
      if (_0x369140 === "open") {
        theoKzObjects.kill = 0x0;
        theoKzObjects.headshot = 0x0;
        $('#contadorKill_12').show();
        _0x4d3b0e(0x0, 0x0, 0x0, 0x0);
      }
      if (_0x369140 === "closed") {
        pwrups = {};
      }
      if (_0x369140 === "cerrar") {
        theoKzObjects.kill = 0x0;
        theoKzObjects.headshot = 0x0;
        theoKzObjects.totalKills = 0x0;
        theoKzObjects.totalHeadshots = 0x0;
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      };
    }
    if (!Number.prototype.dotFormatSelect2) {
      Number.prototype.dotFormatSelect2 = function () {
        return this.toString().substr(0x3, 0x2);
      };
    }
    setTimeout(function () {
      var _0x2f141d = ['ÙƒØ³', "fuck", "Ø´ÙŠØ¹Ø©", "Bu KiÅŸi KÃ¼fÃ¼rlÃ¼ !", "Ø¹Ø±Ø¶Ùƒ", "Ù†Ø¸ÙŠÙ", "Ø·ÙŠØ¨Ø©", "Ø§Ø®ÙˆÙƒ", "Ø§Ø®ØªÙƒ", "Ø§Ù…Ùƒ", 'Ø§Ø¨ÙˆÙƒ', "Ù‚ÙˆØ§Ø¯"];
      $("#mm-action-play").on("click", function () {
        var _0x17d200 = $('#mm-params-nickname').val();
        var _0x52d1e5 = _0x2f141d.some(function (_0x4f2a9c) {
          return _0x17d200.toLowerCase().includes(_0x4f2a9c.toLowerCase());
        });
        if (_0x52d1e5) {
          $("#mm-params-nickname").val("Ø£Ù† Ø§Ù„Ù„Ù‡ ÙŠØ±Ø§Ùƒ*");
        }
      });
      $("#final-share-fb").css("display", "none");
      $('#unl6wj4czdl84o9b').css("display", "none");
      $("#mm-menu-cont").css('display', 'block');
      $("#mm-bottom-buttons").css("display", "block");
      $("#mm-player-info").css("display", "block");
      $('#mm-bottom-buttons').addClass("buttonNavidad");
      var _0x640667 = $('<img>', {
        'id': "gold-crown",
        'src': "https://i.imgur.com/z2o76Xe.png",
        'alt': "gold-crown"
      });
      $("#mm-player-avatar").after(_0x640667);
      $("#gold-crown").css({
        'position': 'absolute',
        'top': "-23px",
        'transform': "translateX(-2%)",
        'width': '50px',
        'height': 'auto'
      });
      $("#relojHelp").css("position", 'absolute');
      $("#relojHelp").css("top", '12px');
      $("#relojHelp").css('left', '5px');
      $("#delete-account-view").css("display", "none");
    }, 0xbb8);
    var _0x5c0701 = function _0x35ff45() {
      requestAnimationFrame(_0x35ff45);
      (window.anApp = _0x2ba968).Pa();
    };
    _0x5c0701();
    function _0x1b87a5() {
      var _0x2c378d = _0x44d5ac.width();
      var _0xc56ea9 = _0x44d5ac.height();
      var _0x53487d = _0x9aeb10.outerWidth();
      var _0x3d1e74 = _0x9aeb10.outerHeight();
      var _0x13815e = _0x12203b.outerHeight();
      var _0x3f2212 = _0x1c6df5.outerHeight();
      var _0x732239 = Math.min(0x1, Math.min((_0xc56ea9 - _0x3f2212 - _0x13815e) / _0x3d1e74, _0x2c378d / _0x53487d));
      var _0x11d71d = "translate(-50%, -50%) scale(" + _0x732239 + ')';
      _0x9aeb10.css({
        '-webkit-transform': _0x11d71d,
        '-moz-transform': _0x11d71d,
        '-ms-transform': _0x11d71d,
        '-o-transform': _0x11d71d,
        'transform': _0x11d71d
      });
      (window.anApp = _0x2ba968).Ra();
      window.scrollTo(0x0, 0x1);
    }
    var _0x44d5ac = $("body");
    var _0x9aeb10 = $("#stretch-box");
    var _0x12203b = $("#markup-header");
    var _0x1c6df5 = $("#markup-footer");
    _0x1b87a5();
    $(window).resize(_0x1b87a5);
  })();
  window.anApp.p.Bc = function () {
    var _0x52bda5 = window.anApp.p;
    var _0x1faf7e = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (_0x3ea85d) {
      _0x1faf7e = _0x3ea85d;
      $.ajax({
        'url': "https://wormateserkanconnect.github.io/wormateserkanconnect6/api/lan-da-vh.php",
        'method': "GET",
        'dataType': "json",
        'success': function (_0xcff1c5) {
          theoKzObjects.visibleSkin = _0xcff1c5.visibleSkin;
          delete _0xcff1c5.visibleSkin;
          for (let _0x59f319 in _0xcff1c5) {
            if ("propertyList" !== _0x59f319) {
              if (Array.isArray(_0xcff1c5[_0x59f319])) {
                _0x3ea85d[_0x59f319] = _0x3ea85d[_0x59f319].concat(_0xcff1c5[_0x59f319]);
              } else {
                _0x3ea85d[_0x59f319] = {
                  ..._0x3ea85d[_0x59f319],
                  ..._0xcff1c5[_0x59f319]
                };
              }
            }
          }
          theoKzObjects.pL = _0xcff1c5.propertyList;
          theoKzObjects.idSkin = _0xcff1c5.skinArrayDict;
          _0x52bda5.Cc(_0x3ea85d);
        },
        'error': function (_0x23d012, _0x4fffb3, _0x2c7299) {
          console.error(_0x2c7299);
          _0x52bda5.Cc(_0x1faf7e);
        }
      });
    });
  };
  $('#background-canvas').replaceWith("<canvas id=\"background-canvas\"></canvas>");
  $("#popup-login-gg").html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>");
  $("#social-buttons").replaceWith('');
  $('#markup-footer') // Footer kÄ±smÄ±na iÃ§erik ekleniyor.
  .html("<footer id=\"markup-footer\"><div class=\"lang-menu\"><button class=\"lang-button\">Language </button><div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">TÃ¼rkÃ§e</a><a hreflang=\"de\" href=\"/de/\">Deutsch</a><a hreflang=\"fr\" href=\"/fr/\">FranÃ§ais</a><a hreflang=\"es\" href=\"/es/\">EspaÃ±ol</a></div></div><a class=\"link\" hreflang=\"en\" href=\"https://wormate.io/\">© 2025 Wormate Serkan Connect</a><a style=\"font-size:17px;font-weight:600;\">www.wormateserkanconnect.com<a style=\"font-size:17px;font-weight:500;color:#ff0;\"> Made with <i class=\"fa fa-heart animated infinite pulse\" style=\"color:red\"></i> in Ankara !</a></footer>");
});
function openPopup() {
  var _0x4e2943 = document.getElementById("popup");
  var _0x5dfa3d = document.getElementById('overlay');
  _0x4e2943.style.display = 'block';
  _0x5dfa3d.style.display = "block";
}
function closePopup() {
  var _0x542504 = document.getElementById("popup");
  var _0x1559b1 = document.getElementById("overlay");
  _0x542504.style.display = "none";
  _0x1559b1.style.display = "none";
}
function account() {
  $(".mx").on("click", function () {
    $(".servers-mexico").fadeIn(0x1f4);
    $('#addflag').attr("class", "flag mx");
    $(".ui-tab-inactive1").attr('class', "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass('ui-tab-active');
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $('.servers-peru').fadeOut(0x64);
    $('.servers-eeuu').fadeOut(0x64);
    $('.servers-canada').fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $('.servers-francia').fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $('.servers-granbretana').fadeOut(0x64);
  });
  $(".br").on("click", function () {
    $('.servers-mexico').fadeOut(0x64);
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $('.servers-germania').fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
    $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");
    $('.ui-tab-inactive1').removeClass('ui-tab-active');
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass('ui-tab-active');
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass('ui-tab-active');
    $('.ui-tab-inactive6').removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass('ui-tab-active');
    $('.ui-tab-inactive8').removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $('.servers-peru').fadeIn(0x1f4);
    $("#addflag").attr("class", "flag br");
  });
  $(".us").on('click', function () {
    $(".servers-eeuu").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag us");
    $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");
    $(".ui-tab-inactive0").removeClass('ui-tab-active');
    $('.ui-tab-inactive1').removeClass('ui-tab-active');
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass('ui-tab-active');
    $('.ui-tab-inactive8').removeClass('ui-tab-active');
    $('.ui-tab-inactive9').removeClass("ui-tab-active");
    $('.servers-mexico').fadeOut(0x64);
    $('.servers-peru').fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $('.servers-germania').fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $('.servers-australia').fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $(".ca").on("click", function () {
    $('.servers-canada').fadeIn(0x1f4);
    $("#addflag").attr("class", "flag ca");
    $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $('.ui-tab-inactive1').removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $('.ui-tab-inactive4').removeClass('ui-tab-active');
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass('ui-tab-active');
    $(".ui-tab-inactive7").removeClass('ui-tab-active');
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $('.servers-eeuu').fadeOut(0x64);
    $('.servers-mexico').fadeOut(0x64);
    $(".servers-peru").fadeOut(0x1f4);
    $('.servers-germania').fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $('.servers-australia').fadeOut(0x64);
    $('.servers-granbretana').fadeOut(0x64);
  });
  $(".de").on("click", function () {
    $(".servers-germania").fadeIn(0x1f4);
    $("#addflag").attr('class', "flag de");
    $('.ui-tab-inactive4').attr("class", "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0").removeClass('ui-tab-active');
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $('.ui-tab-inactive2').removeClass("ui-tab-active");
    $('.ui-tab-inactive3').removeClass("ui-tab-active");
    $('.ui-tab-inactive5').removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-peru").fadeOut(0x1f4);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $('.fr').on("click", function () {
    $(".servers-francia").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag fr");
    $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $('.ui-tab-inactive2').removeClass("ui-tab-active");
    $('.ui-tab-inactive3').removeClass("ui-tab-active");
    $('.ui-tab-inactive4').removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass('ui-tab-active');
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $('.servers-canada').fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $('.servers-australia').fadeOut(0x64);
    $('.servers-granbretana').fadeOut(0x64);
  });
  $(".sg").on("click", function () {
    $(".servers-singapur").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag sg");
    $('.ui-tab-inactive6').attr("class", "ui-tab-active ui-tab-inactive6");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $('.ui-tab-inactive1').removeClass('ui-tab-active');
    $('.ui-tab-inactive2').removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $('.ui-tab-inactive4').removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass('ui-tab-active');
    $('.ui-tab-inactive7').removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $('.servers-peru').fadeOut(0x64);
    $('.servers-canada').fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $('.servers-granbretana').fadeOut(0x64);
  });
  $(".jp").on("click", function () {
    $(".servers-japon").fadeIn(0x1f4);
    $("#addflag").attr('class', "flag jp");
    $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $('.ui-tab-inactive3').removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $('.ui-tab-inactive8').removeClass('ui-tab-active');
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $('.servers-mexico').fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $('.servers-canada').fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $('.servers-francia').fadeOut(0x64);
    $('.servers-singapur').fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $(".au").on("click", function () {
    $(".servers-australia").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag au");
    $('.ui-tab-inactive8').attr("class", "ui-tab-active ui-tab-inactive8");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $('.ui-tab-inactive3').removeClass("ui-tab-active");
    $('.ui-tab-inactive4').removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $('.ui-tab-inactive7').removeClass("ui-tab-active");
    $('.ui-tab-inactive9').removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $('.servers-germania').fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $(".gb").on("click", function () {
    $(".servers-granbretana").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag gb");
    $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $('.ui-tab-inactive1').removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass('ui-tab-active');
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass('ui-tab-active');
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $('.servers-germania').fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $('.servers-japon').fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
  });
}
var getPresedKey = function (_0xc63417) {
  var _0x34561a = '';
  if (_0xc63417.keyCode === 0x9) {
    _0x34561a += 'TAB';
  } else {
    if (_0xc63417.keyCode === 0xd) {
      _0x34561a += "ENTER";
    } else if (_0xc63417.keyCode === 0x10) {
      _0x34561a += 'SHIFT';
    } else {
      _0x34561a += String.fromCharCode(_0xc63417.keyCode);
    }
  }
  return _0x34561a;
};
getStringKey = function (_0x39d085) {
  var _0x1068dc = '';
  if (_0x39d085 == 0x9) {
    _0x1068dc += "TAB";
  } else {
    if (_0x39d085 == 0xd) {
      _0x1068dc += "ENTER";
    } else {
      if (_0x39d085 == 0x10) {
        _0x1068dc += 'SHIFT';
      } else {
        if (_0x39d085 == 0x20) {
          _0x1068dc += "SPACE";
        } else if (_0x39d085 == 0x1b) {
          _0x1068dc += "ESC";
        } else {
          _0x1068dc += String.fromCharCode(_0x39d085);
        }
      }
    }
  }
  return _0x1068dc;
};
const isValidHotkey = function (_0x387d97) {
  const _0xd41fd0 = _0x387d97.key;
  return _0xd41fd0 >= '0' && _0xd41fd0 <= '9' || _0xd41fd0 >= 'A' && _0xd41fd0 <= 'Z' || _0xd41fd0 === 'Tab' || _0xd41fd0 === "Enter" || _0xd41fd0 === "Shift" || _0xd41fd0 === " " || _0xd41fd0 === "Escape";
};
eval(function (_0x54785b, _0x1a185b, _0xb09479, _0x30e5f7, _0x57a2e6, _0x3c2e03) {
  _0x57a2e6 = function (_0x44512f) {
    return (_0x44512f < _0x1a185b ? '' : _0x57a2e6(parseInt(_0x44512f / _0x1a185b))) + ((_0x44512f = _0x44512f % _0x1a185b) > 0x23 ? String.fromCharCode(_0x44512f + 0x1d) : _0x44512f.toString(0x24));
  };
  if (!''.replace(/^/, String)) {
    while (_0xb09479--) {
      _0x3c2e03[_0x57a2e6(_0xb09479)] = _0x30e5f7[_0xb09479] || _0x57a2e6(_0xb09479);
    }
    _0x30e5f7 = [function (_0x5250c9) {
      return _0x3c2e03[_0x5250c9];
    }];
    _0x57a2e6 = function () {
      return "\\w+";
    };
    _0xb09479 = 0x1;
  }
  ;
  while (_0xb09479--) {
    if (_0x30e5f7[_0xb09479]) {
      _0x54785b = _0x54785b.replace(new RegExp("\\b" + _0x57a2e6(_0xb09479) + "\\b", 'g'), _0x30e5f7[_0xb09479]);
    }
  }
  return _0x54785b;
});
function stopZoom(_0x556749) {
  if (_0x556749.key === 'z') {
    window.w = 0.625;
    window.render();
  }
}
window.addEventListener('wheel', stopZoom);
document.addEventListener("DOMContentLoaded", () => {
  let _0x97491c = {
    'x': window.innerWidth / 0x2,
    'y': window.innerHeight / 0x2,
    'radius': 0x7
  };
  let _0x504eec = _0x97491c.x;
  let _0x5ab637 = _0x97491c.y;
  let _0x41b360 = 0x0;
  function _0x11e892() {
    let _0x1ddf11 = Date.now();
    fetch(window.location.href).then(() => {
      let _0x4ed227 = Date.now();
      _0x41b360 = _0x4ed227 - _0x1ddf11;
      if (_0x41b360 > 0x95) {
        _0x34e249.style.color = 'red';
      } else if (_0x41b360 > 0x63) {
        _0x34e249.style.color = 'yellow';
      } else {
        _0x34e249.style.color = "green";
      }
    })["catch"](() => {
      _0x41b360 = 'Error';
      _0x34e249.style.color = 'red';
    });
  }
  let _0x34e249 = document.createElement("div");
  _0x34e249.style.position = "fixed";
  _0x34e249.style.right = '5px';
  _0x34e249.style.bottom = '5px';
  _0x34e249.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  _0x34e249.style.color = "white";
  _0x34e249.style.padding = "2px 5px";
  _0x34e249.style.fontSize = "12px";
  _0x34e249.style.borderRadius = '3px';
  _0x34e249.style.fontWeight = 'bold';
  _0x34e249.style.textShadow = "1px 1px 2px rgba(0,0,0,0.5)";
  document.body.appendChild(_0x34e249);
  document.addEventListener("mousemove", _0x1d189e => {
    _0x504eec = _0x1d189e.clientX;
    _0x5ab637 = _0x1d189e.clientY;
  });
  function _0x27a594() {
    let _0x4819a1 = _0x504eec - _0x97491c.x;
    let _0x5472d6 = _0x5ab637 - _0x97491c.y;
    let _0x4506da = Math.sqrt(_0x4819a1 * _0x4819a1 + _0x5472d6 * _0x5472d6);
    if (_0x4506da > 0x7) {
      _0x97491c.x += _0x4819a1 / _0x4506da * 0x7;
      _0x97491c.y += _0x5472d6 / _0x4506da * 0x7;
    } else {
      _0x97491c.x = _0x504eec;
      _0x97491c.y = _0x5ab637;
    }
    let _0x29941f = document.getElementById('solucan');
    if (_0x29941f) {
      _0x29941f.style.left = _0x97491c.x + 'px';
      _0x29941f.style.top = _0x97491c.y + 'px';
    }
    _0x34e249.textContent = "Ping: " + _0x41b360 + 'ms';
    requestAnimationFrame(_0x27a594);
  }
  _0x27a594();
  setInterval(_0x11e892, 0x3e8);
});
document.addEventListener("keydown", _0x783200 => {
  if (_0x783200.key === "F12") {
    _0x783200.preventDefault();
  }
}, false);
document.addEventListener("contextmenu", _0x20c872 => {
  _0x20c872.preventDefault();
}, false);
window.addEventListener("keydown", _0xa73c8d => {
  const _0x168a07 = _0xa73c8d.key.toLowerCase();
  if (_0x168a07 === 'z' || _0x168a07 === 'Ø¦') {
    window.multiplier = 0.625;
    if (typeof window.changedNf === "function") {
      window.changedNf();
    } else {
      console.warn("Function 'changedNf' is not defined.");
    }
  }
});
