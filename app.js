/* =========================================================
   室內配線乙級｜第二站線路圖練習器
   第一題版面修正版
   ========================================================= */

const QUESTIONS = {
  1: {
    title: "第1題｜電動機正反轉兼 Y-△ 啟動",
    info: `3ψ3W 220V<br>
           15HP<br>
           過門端子：10個<br>
           主電路：15條 5.5mm² 黑色線<br>
           接地線：2條 8mm² 綠色線`,
    box: [
      "PW1","NFB1","DF1","DF2",
      "MCF1","MCR1","TR1","TB1",
      "TH-RY1","MCD1","MCS1",
      "TB2","TB3","M1","M2","GND1"
    ],
    door: [
      "TB4","BZ1","Y1","R1","G1",
      "OFF1","REV1","FWD1","GND2"
    ]
  },

  2: {
    title: "第2題｜正反轉兼 Y-△ 啟動附瞬時停電保護",
    info: `3ψ3W 220V<br>
           15HP<br>
           過門端子：13個<br>
           TR2：5 Sec<br>
           TR3：10 Sec`,
    box: [
      "NFB1","MCF1","MCR1","MCD1",
      "MCS1","TR1","TR2","TR3","TB1","TB2"
    ],
    door: [
      "EMS","OFF1","FWD1","REV1","G1","KR"
    ]
  },

  3: {
    title: "第3題｜兩台抽水泵手動、自動交替控制",
    info: `3ψ3W 220V<br>
           兩台 5HP 泵浦<br>
           浮球開關 FS<br>
           電極棒 E1、E2、E3`,
    box: [
      "NFB","MC1","MC2","TH-RY1","TH-RY2",
      "TB1","TB2","TB5","TB6","TB7"
    ],
    door: [
      "OFF1","ON1","OFF2","ON2","COS","FS",
      "E1","E2","E3","MR","G1","G2","BZ"
    ]
  },

  4: {
    title: "第4題｜污排水泵手動、自動交互兼異常水位",
    info: `3ψ3W 220V<br>
           兩台 5HP 泵浦<br>
           BS1、BS2 異常水位<br>
           61F-G2`,
    box: [
      "NFB1","NFB2","NFB3","MC1","MC2",
      "TH-RY1","TH-RY2","TB1","TB2","TB5","TB6","TB7"
    ],
    door: [
      "OFF1","ON1","OFF2","ON2","COS",
      "S0","S2","BS1","BS2","E1","E2","E3","E4",
      "BZ","G1","G2"
    ]
  },

  5: {
    title: "第5題｜沖床機自動計數直流煞車",
    info: `3ψ3W 220V<br>
           3HP<br>
           REC 50mA<br>
           COUNT IN / RESET IN`,
    box: [
      "NFB","MC","TH-RY","TB1","TB2",
      "TB5","MCB","TR1","TR2","REC","X1","X2"
    ],
    door: [
      "OFF","ON","COUNT","RESET","Y","R","BZ"
    ]
  },

  6: {
    title: "第6題｜大門控制電路",
    info: `1ψ2W 220V<br>
           3/4HP 馬達<br>
           附電磁煞車<br>
           X3、X4 為 3P 電力電驛`,
    box: [
      "NFB","MCF","MCR","TH-RY","TB1",
      "TB2","TR1","TR2","TR3","TR4","TR5"
    ],
    door: [
      "EMS","LS1","LS2","X1","X2","X3","X4",
      "PH1","PH2","YL1","YL2","R1","R2"
    ]
  },

  7: {
    title: "第7題｜常用電源與備用電源自動切換",
    info: `ATS盤內元件<br>
           過門端子：6個<br>
           TR1：發電機啟動延遲<br>
           TR2：備用轉常用延遲<br>
           TR3：發電機停機冷卻<br>
           TR4：常用轉備用延遲`,
    box: [
      "TB1","TR1","TR2","TR3","TR4",
      "X1","X2","X3","X4","TM","Y1","R","W"
    ],
    door: [
      "LSA","LSB","ATS","常用電源","備用電源","TB2"
    ]
  },

  8: {
    title: "第8題｜三相三線式負載監視盤",
    info: `3ψ3W 220V<br>
           負載 10kVA<br>
           CT、PT<br>
           WH、VARH、PF<br>
           AS、VS、A、V`,
    box: [
      "NFB","TB11","TB1","TB2","CT1","CT2",
      "PT1","PT2","WH","VARH","PF"
    ],
    door: [
      "AS","VS","A","V","LOAD"
    ]
  }
};


/* =========================================================
   各設備腳位
   ========================================================= */

const PINS = {

  PW1: ["1","2","3"],

  NFB1: ["1","3","5","2","4","6"],
  NFB: ["1","3","5","2","4","6"],

  DF1: ["1","2"],
  DF2: ["1","2"],

  MCF1: [
    "15","16",
    "7","1","3","5","9",
    "11","12","13","14",
    "8","2","4","6","10"
  ],

  MCR1: [
    "15","16",
    "7","1","3","5","9",
    "11","12","13","14",
    "8","2","4","6","10"
  ],

  MCD1: [
    "15","16",
    "7","1","3","5","9",
    "11","12","13","14",
    "8","2","4","6","10"
  ],

  MCS1: [
    "15","16",
    "7","1","3","5","9",
    "11","12","13","14",
    "8","2","4","6","10"
  ],

  "TH-RY1": [
    "5","7","9","1","2","3",
    "6","8","10"
  ],

  "TH-RY2": [
    "5","7","9","1","2","3",
    "6","8","10"
  ],

  "TH-RY": [
    "5","7","9","1","2","3",
    "6","8","10"
  ],

  TR1: [
    "6","5","4","3",
    "7","8","1","2"
  ],

  TR2: ["1","2","3","4"],
  TR3: ["1","2","3","4"],
  TR4: ["1","2","3","4"],
  TR5: ["1","2","3","4"],

  TB1: Array.from(
    {length:32},
    (_,i) => String(i+1)
  ),

  TB2: [
    "1","2","3","4",
    "5","6","7","8"
  ],

  TB3: [
    "1","2","3","4",
    "5","6","7","8"
  ],

  TB4: [
    "1","2","3","4","5",
    "6","7","8","9","10"
  ],

  TB5: ["1","2","3","4","5","6","7","8"],
  TB6: ["1","2","3","4","5","6","7","8"],
  TB7: ["1","2","3","4","5","6","7","8"],

  TB11: ["1","2","3","4","5","6"],

  M1: ["1","2","3"],
  M2: ["1","2","3"],

  GND1: [
    "1","2","3","4",
    "5","6","7","8"
  ],

  GND2: ["1","2"],

  BZ1: ["1","2"],
  Y1: ["1","2"],
  R1: ["1","2"],
  G1: ["1","2"],

  BZ: ["1","2"],
  Y: ["1","2"],
  R: ["1","2"],

  OFF1: ["a","c","b"],
  REV1: ["a","c","b"],
  FWD1: ["a","c","b"],

  OFF: ["a","b"],
  ON: ["a","b"],
  ON1: ["a","b"],
  ON2: ["a","b"],
  OFF2: ["a","b"],

  EMS: ["1","2"],
  KR: ["1","2"],

  MC: ["1","2","3","4","5","6"],
  MC1: ["1","2","3","4","5","6"],
  MC2: ["1","2","3","4","5","6"],
  MCB: ["1","2","3","4","5","6"],

  MCF: ["1","2","3","4","5","6"],
  MCR: ["1","2","3","4","5","6"],

  X1: ["1","2"],
  X2: ["1","2"],
  X3: ["1","2","3"],
  X4: ["1","2","3"],

  FS: ["1","2"],

  S0: ["a","b"],
  S2: ["a","b"],

  BS1: ["a","b"],
  BS2: ["a","b"],

  E1: ["1","2"],
  E2: ["1","2"],
  E3: ["1","2"],
  E4: ["1","2"],

  COS: ["A","M"],
  MR: ["1","2"],
  G2: ["1","2"],

  LSA: ["1","2"],
  LSB: ["1","2"],

  TM: ["1","2"],
  W: ["1","2"],

  WH: ["1","2","3","4"],
  VARH: ["1","2","3","4"],
  PF: ["1","2","3","4"],

  CT1: ["K","k","L","l"],
  CT2: ["K","k","L","l"],

  PT1: ["P1","P2","P3","S1","S2","S3"],
  PT2: ["P1","P2","P3","S1","S2","S3"],

  AS: ["R","S","T","A0","A"],
  VS: ["R","S","T","V0","V"],

  A: ["+","-"],
  V: ["+","-"],

  LOAD: ["A","B","C","G"],

  COUNT: ["1","2"],
  RESET: ["1","2"],
  REC: ["1","2"],

  PH1: ["1","2"],
  PH2: ["1","2"],

  YL1: ["1","2"],
  YL2: ["1","2"],

  LS1: ["1","2"],
  LS2: ["1","2"],

  ATS: ["1","2","3","4","5","6"],

  "常用電源": ["1","2"],
  "備用電源": ["1","2"]
};


/* =========================================================
   第一題答案
   ========================================================= */

const ANSWERS = {

  1: [
    ["NFB1-2","MCF1-15"],
    ["NFB1-4","MCF1-16"],
    ["MCF1-7","TH-RY1-5"],
    ["MCF1-8","TH-RY1-6"]
  ],

  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: []
};


/* =========================================================
   第一題版面
   ========================================================= */

const BOARD_LAYOUTS = {

  1: {

    box: {

      PW1: {
        left: 5,
        top: 3,
        width: 13
      },

      NFB1: {
        left: 5,
        top: 14,
        width: 13
      },

      DF1: {
        left: 46,
        top: 9,
        width: 7
      },

      DF2: {
        left: 62,
        top: 9,
        width: 7
      },

      MCF1: {
        left: 5,
        top: 31,
        width: 21
      },

      MCR1: {
        left: 29,
        top: 31,
        width: 21
      },

      TR1: {
        left: 54,
        top: 31,
        width: 14
      },

      TB1: {
        left: 82,
        top: 29,
        width: 14
      },

      "TH-RY1": {
        left: 5,
        top: 55,
        width: 21
      },

      MCD1: {
        left: 29,
        top: 55,
        width: 21
      },

      MCS1: {
        left: 54,
        top: 55,
        width: 21
      },

      TB2: {
        left: 7,
        top: 78,
        width: 14
      },

      TB3: {
        left: 22,
        top: 78,
        width: 14
      },

      M1: {
        left: 8,
        top: 89,
        width: 11
      },

      M2: {
        left: 23,
        top: 89,
        width: 11
      },

      GND1: {
        left: 55,
        top: 83,
        width: 15
      }
    },

    door: {

      TB4: {
        left: 3,
        top: 5,
        width: 14
      },

      BZ1: {
        left: 22,
        top: 8,
        width: 13
      },

      Y1: {
        left: 39,
        top: 8,
        width: 13
      },

      R1: {
        left: 56,
        top: 8,
        width: 13
      },

      G1: {
        left: 73,
        top: 8,
        width: 13
      },

      OFF1: {
        left: 28,
        top: 61,
        width: 13
      },

      REV1: {
        left: 46,
        top: 61,
        width: 13
      },

      FWD1: {
        left: 64,
        top: 61,
        width: 13
      },

      GND2: {
        left: 3,
        top: 82,
        width: 8
      }
    }
  }
};


/* =========================================================
   精確腳位排列
   ========================================================= */

const PIN_ROWS = {

  PW1: [
    ["1","2","3"]
  ],

  NFB1: [
    ["1","3","5"],
    ["2","4","6"]
  ],

  DF1: [
    ["1"],
    ["2"]
  ],

  DF2: [
    ["1"],
    ["2"]
  ],


  /* =========================================
     MCF / MCR / MCD / MCS
     口字型
     ========================================= */

  MCF1: [
    [null,"15",null,"16",null],
    ["7","1","3","5","9"],
    ["11",null,null,null,"13"],
    ["12",null,null,null,"14"],
    ["8","2","4","6","10"]
  ],

  MCR1: [
    [null,"15",null,"16",null],
    ["7","1","3","5","9"],
    ["11",null,null,null,"13"],
    ["12",null,null,null,"14"],
    ["8","2","4","6","10"]
  ],

  MCD1: [
    [null,"15",null,"16",null],
    ["7","1","3","5","9"],
    ["11",null,null,null,"13"],
    ["12",null,null,null,"14"],
    ["8","2","4","6","10"]
  ],

  MCS1: [
    [null,"15",null,"16",null],
    ["7","1","3","5","9"],
    ["11",null,null,null,"13"],
    ["12",null,null,null,"14"],
    ["8","2","4","6","10"]
  ],


  TR1: [
    ["6","5","4","3"],
    ["7","8","1","2"]
  ],


  "TH-RY1": [
    ["5","7","9","1","2","3"],
    ["6","8","10"]
  ],


  /* =========================================
     TB1
     ========================================= */

  TB1: [
    ["1","17"],
    ["2","18"],
    ["3","19"],
    ["4","20"],
    ["5","21"],
    ["6","22"],
    ["7","23"],
    ["8","24"],
    ["9","25"],
    ["10","26"],
    ["11","27"],
    ["12","28"],
    ["13","29"],
    ["14","30"],
    ["15","31"],
    ["16","32"]
  ],


  /* =========================================
     TB2
     ========================================= */

  TB2: [
    ["1","2","3","4"],
    ["5","6","7","8"]
  ],


  /* =========================================
     TB3
     ========================================= */

  TB3: [
    ["1","2","3","4"],
    ["5","6","7","8"]
  ],


  M1: [
    ["1","2","3"]
  ],

  M2: [
    ["1","2","3"]
  ],


  GND1: [
    ["1","2","3","4"],
    ["5","6","7","8"]
  ],


  GND2: [
    ["1","2"]
  ],


  TB4: [
    ["1","2"],
    ["3","4"],
    ["5","6"],
    ["7","8"],
    ["9","10"]
  ]
};


/* =========================================================
   顯示名稱
   ========================================================= */

const DISPLAY_NAMES = {

  1: {
    PW1:"PW1",
    NFB1:"NFB1",
    DF1:"DF1",
    DF2:"DF2",

    MCF1:"MCF1",
    MCR1:"MCR1",

    TR1:"TR1",
    TB1:"TB1",

    "TH-RY1":"TH-RY1",

    MCD1:"MCD1",
    MCS1:"MCS1",

    TB2:"TB2",
    TB3:"TB3",

    M1:"M1",
    M2:"M2",

    GND1:"GND1",
    GND2:"GND2",

    TB4:"TB4",

    BZ1:"BZ1",
    Y1:"Y1",
    R1:"R1",
    G1:"G1",

    OFF1:"OFF1",
    REV1:"REV1",
    FWD1:"FWD1"
  }
};


/* =========================================================
   內部標示
   第一題全部取消 OFF / OFF[3:0]
   ========================================================= */

const DEVICE_MARKINGS = {};


/* =========================================================
   TB2 / TB3 對位文字
   ========================================================= */

const PIN_LABELS = {

  TB2: ["U","V","W","G"],

  TB3: ["X","Y","Z","G"]
};


/* =========================================================
   M1 / M2 符號
   ========================================================= */

const DEVICE_SYMBOLS = {

  M1: "+",

  M2: "+"
};


/* =========================================================
   程式狀態
   ========================================================= */

let currentQuestion = 1;
let wires = [];
let history = [];
let startPin = null;
let previewWire = null;
let seconds = 0;


/* =========================================================
   DOM
   ========================================================= */

const $ = id => document.getElementById(id);

const boxArea = $("boxArea");
const doorArea = $("doorArea");
const svg = $("wiringSvg");
const message = $("message");


/* =========================================================
   顯示名稱
   ========================================================= */

function displayName(name) {

  return (
    DISPLAY_NAMES[currentQuestion]?.[name] ||
    name
  );

}


/* =========================================================
   載入題目
   ========================================================= */

function loadQuestion(n) {

  currentQuestion = n;

  wires = [];
  history = [];
  seconds = 0;

  document
    .querySelectorAll(".question-btn")
    .forEach(button => {

      button.classList.toggle(
        "active",
        Number(button.dataset.question) === n
      );

    });

  const q = QUESTIONS[n];

  $("questionTitle").innerHTML = q.title;

  $("questionInfo").innerHTML = q.info;

  renderEquipment(
    q.box,
    boxArea,
    "box"
  );

  renderEquipment(
    q.door,
    doorArea,
    "door"
  );

  updateStatistics();

  $("correctCount").textContent = "-";
  $("wrongCount").textContent = "-";

  showMessage(
    `已載入${q.title}`
  );
}


/* =========================================================
   建立腳位
   ========================================================= */

function addPin(
  pinNumber,
  equipment,
  pinContainer
) {

  if (pinNumber === null) {
    return;
  }

  const pin = document.createElement("div");

  pin.className = "pin";

  pin.textContent = pinNumber;

  pin.dataset.pin =
    `${equipment}-${pinNumber}`;

  pin.title =
    `${displayName(equipment)} ${pinNumber}`;

  pin.addEventListener(
    "mousedown",
    e => {

      e.preventDefault();

      startPin = pin;

      pin.classList.add("active");
    }
  );

  pinContainer.appendChild(pin);
}


/* =========================================================
   建立設備
   ========================================================= */

function renderEquipment(
  list,
  container,
  side
) {

  container.innerHTML =
    `<div class="area-title">
      ${
        side === "box"
          ? "箱體內設備"
          : "箱門設備"
      }
    </div>`;

  const layout =
    BOARD_LAYOUTS[currentQuestion]?.[side] || {};

  list.forEach(
    (equipment,index) => {

      const d =
        document.createElement("div");

      d.className = "device";

      d.dataset.device = equipment;

      const p = layout[equipment];

      if (p) {

        d.style.left =
          p.left + "%";

        d.style.top =
          p.top + "%";

        d.style.width =
          p.width + "%";

        d.style.minWidth = "0";
      }

      else {

        const cols =
          side === "box"
            ? 3
            : 2;

        const row =
          Math.floor(index / cols);

        const col =
          index % cols;

        d.style.left =
          (
            4 +
            col *
            (
              88 /
              Math.max(cols - 1,1)
            )
          ) + "%";

        d.style.top =
          Math.min(
            7 + row * 18,
            88
          ) + "%";
      }


      /* =================================
         設備名稱
         ================================= */

      const name =
        document.createElement("div");

      name.className =
        "device-name";

      name.textContent =
        displayName(equipment);

      d.appendChild(name);


      /* =================================
         TB2 / TB3 U V W G
         ================================= */

      if (PIN_LABELS[equipment]) {

        const labelRow =
          document.createElement("div");

        labelRow.className =
          "pin-label-row";

        PIN_LABELS[equipment]
          .forEach(label => {

            const cell =
              document.createElement("span");

            cell.textContent =
              label;

            labelRow.appendChild(cell);

          });

        d.appendChild(labelRow);
      }


      /* =================================
         M1 / M2 中央紅色 +
         ================================= */

      if (DEVICE_SYMBOLS[equipment]) {

        d.classList.add(
          "motor-device"
        );

        const symbol =
          document.createElement("div");

        symbol.className =
          "device-symbol";

        symbol.textContent =
          DEVICE_SYMBOLS[equipment];

        d.appendChild(symbol);
      }


      /* =================================
         腳位
         ================================= */

      const pins =
        document.createElement("div");

      pins.className =
        "pins";


      if (PIN_ROWS[equipment]) {

        pins.classList.add(
          "pin-grid"
        );

        PIN_ROWS[equipment]
          .forEach(row => {

            const r =
              document.createElement("div");

            r.className =
              "pin-row";

            r.style.gridTemplateColumns =
              `repeat(${row.length},1fr)`;


            row.forEach(pin => {

              if (pin === null) {

                const spacer =
                  document.createElement("span");

                spacer.className =
                  "pin-spacer";

                r.appendChild(
                  spacer
                );

              }

              else {

                addPin(
                  pin,
                  equipment,
                  r
                );

              }

            });

            pins.appendChild(r);

          });

      }

      else {

        (
          PINS[equipment] ||
          ["1","2"]
        ).forEach(pin => {

          addPin(
            pin,
            equipment,
            pins
          );

        });

      }

      d.appendChild(pins);

      container.appendChild(d);

    }
  );
}


/* =========================================================
   取得腳位中心
   ========================================================= */

function getPinCenter(id) {

  const pin =
    document.querySelector(
      `[data-pin="${CSS.escape(id)}"]`
    );

  if (!pin) {
    return null;
  }

  const r =
    pin.getBoundingClientRect();

  const s =
    svg.getBoundingClientRect();

  return {

    x:
      r.left +
      r.width / 2 -
      s.left,

    y:
      r.top +
      r.height / 2 -
      s.top

  };
}


/* =========================================================
   線路曲線
   ========================================================= */

function createPath(a,b) {

  const dist =
    Math.max(
      50,
      Math.abs(b.x-a.x)*0.3
    );

  const dir =
    b.x >= a.x
      ? 1
      : -1;

  return `
    M ${a.x} ${a.y}
    C
    ${a.x + dist*dir} ${a.y},
    ${b.x - dist*dir} ${b.y},
    ${b.x} ${b.y}
  `;
}


/* =========================================================
   滑鼠移動預覽
   ========================================================= */

document.addEventListener(
  "mousemove",
  e => {

    if (!startPin) {
      return;
    }

    const a =
      getPinCenter(
        startPin.dataset.pin
      );

    if (!a) {
      return;
    }

    const r =
      svg.getBoundingClientRect();

    const b = {

      x:
        e.clientX-r.left,

      y:
        e.clientY-r.top
    };

    if (!previewWire) {

      previewWire =
        document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );

      previewWire.classList.add(
        "preview-wire"
      );

      svg.appendChild(
        previewWire
      );
    }

    previewWire.setAttribute(
      "d",
      createPath(a,b)
    );
  }
);


/* =========================================================
   滑鼠放開
   ========================================================= */

document.addEventListener(
  "mouseup",
  e => {

    if (!startPin) {
      return;
    }

    const target =
      document.elementFromPoint(
        e.clientX,
        e.clientY
      );

    const end =
      target?.closest(".pin");

    if (
      end &&
      end !== startPin
    ) {

      createWire(
        startPin.dataset.pin,
        end.dataset.pin
      );
    }

    stopDrawing();
  }
);


/* =========================================================
   結束畫線
   ========================================================= */

function stopDrawing() {

  if (startPin) {

    startPin.classList.remove(
      "active"
    );
  }

  startPin = null;

  if (previewWire) {

    previewWire.remove();

    previewWire = null;
  }
}


/* =========================================================
   建立接線
   ========================================================= */

function createWire(
  from,
  to
) {

  const exists =
    wires.some(
      w =>
        (
          w.from === from &&
          w.to === to
        ) ||
        (
          w.from === to &&
          w.to === from
        )
    );

  if (exists) {

    showMessage(
      "這兩個腳位已經接過線。"
    );

    return;
  }

  history.push(
    JSON.parse(
      JSON.stringify(wires)
    )
  );

  wires.push({
    from,
    to
  });

  drawWires();

  updateStatistics();

  showMessage(
    `${from} → ${to}`
  );
}


/* =========================================================
   畫線
   ========================================================= */

function drawWires() {

  svg
    .querySelectorAll(".wire")
    .forEach(
      wire => wire.remove()
    );

  wires.forEach(
    (wire,index) => {

      const a =
        getPinCenter(
          wire.from
        );

      const b =
        getPinCenter(
          wire.to
        );

      if (!a || !b) {
        return;
      }

      const path =
        document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );

      path.classList.add(
        "wire"
      );

      path.dataset.index =
        index;

      path.setAttribute(
        "d",
        createPath(a,b)
      );

      path.addEventListener(
        "click",
        e => {

          e.stopPropagation();

          history.push(
            JSON.parse(
              JSON.stringify(wires)
            )
          );

          wires.splice(
            index,
            1
          );

          drawWires();

          updateStatistics();

          showMessage(
            "已刪除這條線。"
          );
        }
      );

      svg.appendChild(path);

    }
  );
}


/* =========================================================
   標準化接線
   ========================================================= */

function normalizeConnection(c) {

  return [...c]
    .sort()
    .join("|");
}


/* =========================================================
   檢查答案
   ========================================================= */

function checkAnswer() {

  const answer =
    ANSWERS[currentQuestion] || [];

  if (!answer.length) {

    showMessage(
      `第${currentQuestion}題的正式答案尚未建立。`
    );

    return;
  }

  const correctSet =
    new Set(
      answer.map(
        normalizeConnection
      )
    );

  let correct = 0;
  let wrong = 0;

  wires.forEach(w => {

    const ok =
      correctSet.has(
        normalizeConnection([
          w.from,
          w.to
        ])
      );

    if (ok) {
      correct++;
    }
    else {
      wrong++;
    }

  });

  const userSet =
    new Set(
      wires.map(
        w =>
          normalizeConnection([
            w.from,
            w.to
          ])
      )
    );

  const missing =
    answer.filter(
      x =>
        !userSet.has(
          normalizeConnection(x)
        )
    ).length;

  document
    .querySelectorAll(".wire")
    .forEach(
      (el,i) => {

        const w =
          wires[i];

        const ok =
          w &&
          correctSet.has(
            normalizeConnection([
              w.from,
              w.to
            ])
          );

        el.classList.toggle(
          "correct",
          !!ok
        );

        el.classList.toggle(
          "wrong",
          !ok
        );

      }
    );

  $("correctCount")
    .textContent = correct;

  $("wrongCount")
    .textContent = wrong;

  showMessage(
    `檢查完成｜正確 ${correct}｜錯誤 ${wrong}｜漏接 ${missing}`
  );
}


/* =========================================================
   統計
   ========================================================= */

function updateStatistics() {

  $("wireCount")
    .textContent =
    wires.length;
}


/* =========================================================
   復原
   ========================================================= */

$("undoBtn")
  .addEventListener(
    "click",
    () => {

      if (!history.length) {

        showMessage(
          "目前沒有可以復原的動作。"
        );

        return;
      }

      wires =
        history.pop();

      drawWires();

      updateStatistics();

      showMessage(
        "已復原上一個動作。"
      );
    }
  );


/* =========================================================
   清除
   ========================================================= */

$("clearBtn")
  .addEventListener(
    "click",
    () => {

      if (!wires.length) {
        return;
      }

      history.push(
        JSON.parse(
          JSON.stringify(wires)
        )
      );

      wires = [];

      drawWires();

      updateStatistics();

      $("correctCount")
        .textContent = "-";

      $("wrongCount")
        .textContent = "-";

      showMessage(
        "已清除全部接線。"
      );
    }
  );


/* =========================================================
   檢查答案
   ========================================================= */

$("checkBtn")
  .addEventListener(
    "click",
    checkAnswer
  );


/* =========================================================
   題目按鈕
   ========================================================= */

document
  .querySelectorAll(".question-btn")
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () =>
          loadQuestion(
            Number(
              button.dataset.question
            )
          )
      );

    }
  );


/* =========================================================
   計時器
   ========================================================= */

setInterval(
  () => {

    seconds++;

    const h =
      String(
        Math.floor(
          seconds/3600
        )
      ).padStart(2,"0");

    const m =
      String(
        Math.floor(
          (seconds%3600)/60
        )
      ).padStart(2,"0");

    const s =
      String(
        seconds%60
      ).padStart(2,"0");

    $("timer")
      .textContent =
      `${h}:${m}:${s}`;

  },
  1000
);


/* =========================================================
   訊息
   ========================================================= */

function showMessage(text) {

  message.textContent =
    text;
}


/* =========================================================
   視窗大小
   ========================================================= */

window.addEventListener(
  "resize",
  drawWires
);


/* =========================================================
   啟動
   ========================================================= */

loadQuestion(1);
