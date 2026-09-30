const QUESTIONS = {
    1: {
        title: "第1題｜電動機正反轉兼 Y-△ 啟動",
        info: `3ψ3W 220V<br>
15HP<br>
過門端子：10個<br>
主電路：15條 5.5mm² 黑色線<br>
接地線：2條 8mm² 綠色線`,
        box: [
            "PW1", "NFB1", "DF1", "DF2",
            "MCF1", "MCR1", "TR1", "TB1",
            "TH-RY1", "MCD1", "MCS1",
            "TB2", "TB3", "M1", "M2", "GND1"
        ],
        door: [
            "BZ1", "Y1", "R1", "G1",
            "OFF1", "REV1", "FWD1", "GND2"
        ]
    },

    2: {
        title: "第2題｜正反轉兼 Y-△ 啟動附瞬時停電保護",
        info: `3ψ3W 220V<br>15HP<br>過門端子：13個`,
        box: [
            "NFB1", "MCF1", "MCR1", "MCD1",
            "MCS1", "TR1", "TR2", "TR3",
            "TB1", "TB2"
        ],
        door: [
            "EMS", "OFF1", "FWD1", "REV1", "G1", "KR"
        ]
    },

    3: {
        title: "第3題｜兩台抽水泵手動、自動交替控制",
        info: `3ψ3W 220V<br>兩台 5HP 泵浦<br>浮球開關 FS`,
        box: [
            "NFB", "MC1", "MC2", "TH-RY1",
            "TH-RY2", "TB1", "TB2", "TB5",
            "TB6", "TB7"
        ],
        door: [
            "OFF1", "ON1", "OFF2", "ON2", "COS",
            "FS", "E1", "E2", "E3", "MR",
            "G1", "G2", "BZ"
        ]
    },

    4: {
        title: "第4題｜污排水泵手動、自動交互兼異常水位",
        info: `3ψ3W 220V<br>兩台 5HP 泵浦`,
        box: [
            "NFB1", "NFB2", "NFB3", "MC1",
            "MC2", "TH-RY1", "TH-RY2",
            "TB1", "TB2", "TB5", "TB6", "TB7"
        ],
        door: [
            "OFF1", "ON1", "OFF2", "ON2", "COS",
            "S0", "S2", "BS1", "BS2",
            "E1", "E2", "E3", "E4",
            "BZ", "G1", "G2"
        ]
    },

    5: {
        title: "第5題｜沖床機自動計數直流煞車",
        info: `3ψ3W 220V<br>3HP`,
        box: [
            "NFB", "MC", "TH-RY", "TB1",
            "TB2", "TB5", "MCB", "TR1",
            "TR2", "REC", "X1", "X2"
        ],
        door: [
            "OFF", "ON", "COUNT", "RESET", "Y", "R", "BZ"
        ]
    },

    6: {
        title: "第6題｜大門控制電路",
        info: `1ψ2W 220V<br>3/4HP 馬達`,
        box: [
            "NFB", "MCF", "MCR", "TH-RY",
            "TB1", "TB2", "TR1", "TR2",
            "TR3", "TR4", "TR5"
        ],
        door: [
            "EMS", "LS1", "LS2", "X1", "X2",
            "X3", "X4", "PH1", "PH2",
            "YL1", "YL2", "R1", "R2"
        ]
    },

    7: {
        title: "第7題｜常用電源與備用電源自動切換",
        info: `ATS盤內元件<br>過門端子：6個`,
        box: [
            "TB1", "TR1", "TR2", "TR3",
            "TR4", "X1", "X2", "X3",
            "X4", "TM", "Y1", "R", "W"
        ],
        door: [
            "LSA", "LSB", "ATS",
            "常用電源", "備用電源", "TB2"
        ]
    },

    8: {
        title: "第8題｜三相三線式負載監視盤",
        info: `3ψ3W 220V<br>負載 10kVA<br>CT、PT`,
        box: [
            "NFB", "TB11", "TB1", "TB2",
            "CT1", "CT2", "PT1", "PT2",
            "WH", "VARH", "PF"
        ],
        door: [
            "AS", "VS", "A", "V", "LOAD"
        ]
    }
};


/* =========================================================
   腳位資料
   ========================================================= */

const PINS = {

    PW1: ["1", "2", "3"],

    NFB1: ["1", "3", "5", "2", "4", "6"],
    NFB: ["1", "3", "5", "2", "4", "6"],

    DF1: ["1", "2"],
    DF2: ["1", "2"],

    MCF1: [
        "15", "16", "7", "1", "3", "5", "9",
        "11", "12", "13", "14",
        "8", "2", "4", "6", "10"
    ],

    MCR1: [
        "15", "16", "7", "1", "3", "5", "9",
        "11", "12", "13", "14",
        "8", "2", "4", "6", "10"
    ],

    MCD1: [
        "15", "16", "7", "1", "3", "5", "9",
        "11", "12", "13", "14",
        "8", "2", "4", "6", "10"
    ],

    MCS1: [
        "15", "16", "7", "1", "3", "5", "9",
        "11", "12", "13", "14",
        "8", "2", "4", "6", "10"
    ],

    "TH-RY1": [
        "5", "7", "9", "6", "8", "10",
        "1", "2", "3"
    ],

    TR1: [
        "6", "5", "4", "3",
        "7", "8", "1", "2"
    ],

    TB1: Array.from(
        { length: 32 },
        (_, i) => String(i + 1)
    ),

    TB2: [
        "1", "2", "3", "4",
        "5", "6", "7", "8"
    ],

    TB3: [
        "1", "2", "3", "4",
        "5", "6", "7", "8"
    ],

    M1: ["1", "2", "3"],
    M2: ["1", "2", "3"],

    GND1: [
        "1", "2", "3", "4",
        "5", "6", "7", "8"
    ],

    GND2: ["1", "2"],

    TB4: [
        "1", "2", "3", "4", "5",
        "6", "7", "8", "9", "10"
    ],

    BZ1: ["1", "2"],
    Y1: ["1", "2"],
    R1: ["1", "2"],
    G1: ["1", "2"],

    OFF1: ["a", "c", "b"],
    REV1: ["a", "c", "b"],
    FWD1: ["a", "c", "b"],

    EMS: ["1", "2"],
    KR: ["1", "2"],

    MC: ["1", "2", "3", "4", "5", "6"],
    MC1: ["1", "2", "3", "4", "5", "6"],
    MC2: ["1", "2", "3", "4", "5", "6"],

    MCF: ["1", "2", "3", "4", "5", "6"],
    MCR: ["1", "2", "3", "4", "5", "6"],

    X1: ["1", "2"],
    X2: ["1", "2"],
    X3: ["1", "2", "3"],
    X4: ["1", "2", "3"],

    FS: ["1", "2"],

    S0: ["a", "b"],
    S2: ["a", "b"],

    BS1: ["a", "b"],
    BS2: ["a", "b"],

    E1: ["1", "2"],
    E2: ["1", "2"],
    E3: ["1", "2"],
    E4: ["1", "2"],

    COS: ["A", "M"],
    MR: ["1", "2"],

    LSA: ["1", "2"],
    LSB: ["1", "2"],

    TM: ["1", "2"],
    W: ["1", "2"],

    WH: ["1", "2", "3", "4"],
    VARH: ["1", "2", "3", "4"],
    PF: ["1", "2", "3", "4"],

    CT1: ["K", "k", "L", "l"],
    CT2: ["K", "k", "L", "l"],

    PT1: ["P1", "P2", "P3", "S1", "S2", "S3"],
    PT2: ["P1", "P2", "P3", "S1", "S2", "S3"],

    AS: ["R", "S", "T", "A0", "A"],
    VS: ["R", "S", "T", "V0", "V"],

    A: ["+", "-"],
    V: ["+", "-"],

    LOAD: ["A", "B", "C", "G"],

    COUNT: ["1", "2"],
    RESET: ["1", "2"],
    REC: ["1", "2"],

    PH1: ["1", "2"],
    PH2: ["1", "2"],

    YL1: ["1", "2"],
    YL2: ["1", "2"],

    LS1: ["1", "2"],
    LS2: ["1", "2"],

    ATS: ["1", "2", "3", "4", "5", "6"],

    "常用電源": ["1", "2"],
    "備用電源": ["1", "2"]
};


/* =========================================================
   答案
   ========================================================= */

const ANSWERS = {
    1: [
        ["NFB1-2", "MCF1-15"],
        ["NFB1-4", "MCF1-16"],
        ["MCF1-7", "TH-RY1-5"],
        ["MCF1-8", "TH-RY1-6"]
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
   第1題版面
   ========================================================= */

const BOARD_LAYOUTS = {

    1: {

        box: {

            PW1: {
                left: 7,
                top: 3,
                width: 12
            },

            NFB1: {
                left: 7,
                top: 12,
                width: 12
            },

            DF1: {
                left: 39,
                top: 7,
                width: 7
            },

            DF2: {
                left: 51,
                top: 7,
                width: 7
            },

            MCF1: {
                left: 6,
                top: 27,
                width: 20
            },

            MCR1: {
                left: 28,
                top: 27,
                width: 20
            },

            TR1: {
                left: 51,
                top: 27,
                width: 13
            },

            TB1: {
                left: 79,
                top: 24,
                width: 11
            },

            "TH-RY1": {
                left: 6,
                top: 47,
                width: 20
            },

            MCD1: {
                left: 28,
                top: 47,
                width: 20
            },

            MCS1: {
                left: 51,
                top: 47,
                width: 20
            },

            TB2: {
                left: 7,
                top: 70,
                width: 13
            },

            TB3: {
                left: 22,
                top: 70,
                width: 13
            },

            M1: {
                left: 7,
                top: 83,
                width: 13
            },

            M2: {
                left: 22,
                top: 83,
                width: 13
            },

            GND1: {
                left: 48,
                top: 70,
                width: 14
            }
        },

        door: {

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
   緊密腳位排列
   ========================================================= */

const PIN_ROWS = {

    PW1: [
        ["1", "2", "3"]
    ],

    NFB1: [
        ["1", "3", "5"],
        ["2", "4", "6"]
    ],

    DF1: [
        ["1"],
        ["2"]
    ],

    DF2: [
        ["1"],
        ["2"]
    ],

    MCF1: [
        [null, "15", null, "16", null],
        ["7", "1", "3", "5", "9"],
        ["11", null, null, null, "13"],
        ["12", null, null, null, "14"],
        ["8", "2", "4", "6", "10"]
    ],

    MCR1: [
        [null, "15", null, "16", null],
        ["7", "1", "3", "5", "9"],
        ["11", null, null, null, "13"],
        ["12", null, null, null, "14"],
        ["8", "2", "4", "6", "10"]
    ],

    MCD1: [
        [null, "15", null, "16", null],
        ["7", "1", "3", "5", "9"],
        ["11", null, null, null, "13"],
        ["12", null, null, null, "14"],
        ["8", "2", "4", "6", "10"]
    ],

    MCS1: [
        [null, "15", null, "16", null],
        ["7", "1", "3", "5", "9"],
        ["11", null, null, null, "13"],
        ["12", null, null, null, "14"],
        ["8", "2", "4", "6", "10"]
    ],

    TR1: [
        ["6", "5", "4", "3"],
        ["7", "8", "1", "2"]
    ],

    TB1: [
        ["1", "17"],
        ["2", "18"],
        ["3", "19"],
        ["4", "20"],
        ["5", "21"],
        ["6", "22"],
        ["7", "23"],
        ["8", "24"],
        ["9", "25"],
        ["10", "26"],
        ["11", "27"],
        ["12", "28"],
        ["13", "29"],
        ["14", "30"],
        ["15", "31"],
        ["16", "32"]
    ],

    TB2: [
        ["1", "2", "3", "4"],
        ["5", "6", "7", "8"]
    ],

    TB3: [
        ["1", "2", "3", "4"],
        ["5", "6", "7", "8"]
    ],

    M1: [
        ["1", "2", "3"]
    ],

    M2: [
        ["1", "2", "3"]
    ],

    GND1: [
        ["1", "2", "3", "4"],
        ["5", "6", "7", "8"]
    ],

    GND2: [
        ["1", "2"]
    ],

    OFF1: [
        ["a", "c", "b"]
    ],

    REV1: [
        ["a", "c", "b"]
    ],

    FWD1: [
        ["a", "c", "b"]
    ]
};


/* =========================================================
   顯示名稱
   ========================================================= */

const DISPLAY_NAMES = {
    1: {
        PW1: "PW1",
        NFB1: "NFB1",
        DF1: "DF1",
        DF2: "DF2",
        MCF1: "MCF1",
        MCR1: "MCR1",
        TR1: "TR1",
        TB1: "TB1",
        "TH-RY1": "TH-RY1",
        MCD1: "MCD1",
        MCS1: "MCS1",
        TB2: "TB2",
        TB3: "TB3",
        M1: "M1",
        M2: "M2",
        GND1: "GND1",
        GND2: "GND2",
        BZ1: "BZ1",
        Y1: "Y1",
        R1: "R1",
        G1: "G1",
        OFF1: "OFF1",
        REV1: "REV1",
        FWD1: "FWD1"
    }
};


const PIN_LABELS = {
    TB2: ["U", "V", "W", "G"],
    TB3: ["X", "Y", "Z", "G"]
};


const DEVICE_SYMBOLS = {
    M1: "+",
    M2: "+"
};


/* =========================================================
   狀態
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

const $ = id =>
    document.getElementById(id);

const boxArea =
    $("boxArea");

const doorArea =
    $("doorArea");

const svg =
    $("wiringSvg");

const message =
    $("message");


/* =========================================================
   名稱
   ========================================================= */

function displayName(name) {

    return (
        DISPLAY_NAMES[currentQuestion]?.[name] ||
        name
    );
}


/* =========================================================
   建立腳位
   ========================================================= */

function addPin(
    pinNumber,
    equipment,
    container
) {

    if (
        pinNumber === null ||
        pinNumber === undefined
    ) {
        return;
    }

    const pin =
        document.createElement("div");

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

    container.appendChild(pin);
}


/* =========================================================
   TH-RY1
   ========================================================= */

function renderTHRY1(device) {

    const layout =
        document.createElement("div");

    layout.className =
        "thry-layout";


    /* 左側 5 7 9 / 6 8 10 */

    const left =
        document.createElement("div");

    left.className =
        "thry-left";


    const row1 =
        document.createElement("div");

    row1.className =
        "thry-row";

    ["5", "7", "9"].forEach(pin => {

        addPin(
            pin,
            "TH-RY1",
            row1
        );
    });


    const row2 =
        document.createElement("div");

    row2.className =
        "thry-row";

    ["6", "8", "10"].forEach(pin => {

        addPin(
            pin,
            "TH-RY1",
            row2
        );
    });


    left.appendChild(row1);
    left.appendChild(row2);


    /* 右側 OFF / 1 / 2 3 */

    const right =
        document.createElement("div");

    right.className =
        "thry-right";


    const off =
        document.createElement("div");

    off.className =
        "thry-off";

    off.textContent =
        "OFF";

    right.appendChild(off);


    const one =
        document.createElement("div");

    one.className =
        "thry-one";

    addPin(
        "1",
        "TH-RY1",
        one
    );

    right.appendChild(one);


    const bottom =
        document.createElement("div");

    bottom.className =
        "thry-bottom";

    addPin(
        "2",
        "TH-RY1",
        bottom
    );

    addPin(
        "3",
        "TH-RY1",
        bottom
    );

    right.appendChild(bottom);


    layout.appendChild(left);
    layout.appendChild(right);

    device.appendChild(layout);
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
        ` +
        `</div>`;


    const layout =
        BOARD_LAYOUTS[currentQuestion]?.[side] || {};


    list.forEach(
        (equipment, index) => {

            const device =
                document.createElement("div");

            device.className =
                "device";

            device.dataset.device =
                equipment;


            const position =
                layout[equipment];


            if (position) {

                device.style.left =
                    position.left + "%";

                device.style.top =
                    position.top + "%";

                device.style.width =
                    position.width + "%";
            }


            /* 名稱 */

            const name =
                document.createElement("div");

            name.className =
                "device-name";

            name.textContent =
                displayName(equipment);

            device.appendChild(name);


            /* TB2 / TB3 */

            if (PIN_LABELS[equipment]) {

                const labels =
                    document.createElement("div");

                labels.className =
                    "pin-label-row";


                PIN_LABELS[equipment]
                    .forEach(label => {

                        const span =
                            document.createElement("span");

                        span.textContent =
                            label;

                        labels.appendChild(
                            span
                        );
                    });


                device.appendChild(labels);
            }


            /* M1 / M2 */

            if (DEVICE_SYMBOLS[equipment]) {

                device.classList.add(
                    "motor-device"
                );


                const symbol =
                    document.createElement("div");

                symbol.className =
                    "device-symbol";

                symbol.textContent =
                    DEVICE_SYMBOLS[equipment];

                device.appendChild(symbol);
            }


            /* TH-RY1 */

            if (
                equipment === "TH-RY1"
            ) {

                renderTHRY1(
                    device
                );

                container.appendChild(
                    device
                );

                return;
            }


            /* 一般腳位 */

            const pins =
                document.createElement("div");

            pins.className =
                "pins pin-grid";


            if (PIN_ROWS[equipment]) {

                PIN_ROWS[equipment]
                    .forEach(row => {

                        const rowEl =
                            document.createElement("div");

                        rowEl.className =
                            "pin-row";

                        rowEl.style.gridTemplateColumns =
                            `repeat(${row.length}, 1fr)`;


                        row.forEach(pin => {

                            if (
                                pin === null
                            ) {

                                const spacer =
                                    document.createElement("span");

                                spacer.className =
                                    "pin-spacer";

                                rowEl.appendChild(
                                    spacer
                                );

                            } else {

                                addPin(
                                    pin,
                                    equipment,
                                    rowEl
                                );
                            }
                        });


                        pins.appendChild(
                            rowEl
                        );
                    });

            } else {

                (
                    PINS[equipment] ||
                    ["1", "2"]
                ).forEach(pin => {

                    addPin(
                        pin,
                        equipment,
                        pins
                    );
                });
            }


            device.appendChild(
                pins
            );


            container.appendChild(
                device
            );
        }
    );
}


/* =========================================================
   取得腳位位置
   ========================================================= */

function getPinCenter(id) {

    const pin =
        document.querySelector(
            `[data-pin="${CSS.escape(id)}"]`
        );


    if (!pin) {
        return null;
    }


    const pinRect =
        pin.getBoundingClientRect();

    const svgRect =
        svg.getBoundingClientRect();


    return {
        x:
            pinRect.left +
            pinRect.width / 2 -
            svgRect.left,

        y:
            pinRect.top +
            pinRect.height / 2 -
            svgRect.top
    };
}


/* =========================================================
   線路
   ========================================================= */

function createPath(a, b) {

    const distance =
        Math.max(
            40,
            Math.abs(b.x - a.x) * 0.3
        );

    const direction =
        b.x >= a.x ? 1 : -1;


    return `
        M ${a.x} ${a.y}
        C
        ${a.x + distance * direction} ${a.y},
        ${b.x - distance * direction} ${b.y},
        ${b.x} ${b.y}
    `;
}


/* =========================================================
   拉線預覽
   ========================================================= */

document.addEventListener(
    "mousemove",
    e => {

        if (!startPin) {
            return;
        }


        const start =
            getPinCenter(
                startPin.dataset.pin
            );


        if (!start) {
            return;
        }


        const rect =
            svg.getBoundingClientRect();


        const end = {
            x:
                e.clientX -
                rect.left,

            y:
                e.clientY -
                rect.top
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
            createPath(
                start,
                end
            )
        );
    }
);


/* =========================================================
   放開滑鼠
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
   結束拉線
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
   建立線
   ========================================================= */

function createWire(
    from,
    to
) {

    const exists =
        wires.some(
            wire =>
                (
                    wire.from === from &&
                    wire.to === to
                ) ||
                (
                    wire.from === to &&
                    wire.to === from
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
            JSON.stringify(
                wires
            )
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
            wire =>
                wire.remove()
        );


    wires.forEach(
        (wire, index) => {

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


            path.setAttribute(
                "d",
                createPath(a, b)
            );


            path.addEventListener(
                "click",
                e => {

                    e.stopPropagation();


                    history.push(
                        JSON.parse(
                            JSON.stringify(
                                wires
                            )
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


            svg.appendChild(
                path
            );
        }
    );
}


/* =========================================================
   檢查
   ========================================================= */

function normalizeConnection(
    connection
) {

    return [...connection]
        .sort()
        .join("|");
}


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


    wires.forEach(
        wire => {

            const ok =
                correctSet.has(
                    normalizeConnection([
                        wire.from,
                        wire.to
                    ])
                );


            if (ok) {
                correct++;
            } else {
                wrong++;
            }
        }
    );


    const userSet =
        new Set(
            wires.map(
                wire =>
                    normalizeConnection([
                        wire.from,
                        wire.to
                    ])
            )
        );


    const missing =
        answer.filter(
            item =>
                !userSet.has(
                    normalizeConnection(
                        item
                    )
                )
        ).length;


    $("correctCount")
        .textContent =
        correct;

    $("wrongCount")
        .textContent =
        wrong;


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
                    JSON.stringify(
                        wires
                    )
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
   檢查按鈕
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
    .querySelectorAll(
        ".question-btn"
    )
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
                    seconds / 3600
                )
            )
            .padStart(2, "0");


        const m =
            String(
                Math.floor(
                    (seconds % 3600) / 60
                )
            )
            .padStart(2, "0");


        const s =
            String(
                seconds % 60
            )
            .padStart(2, "0");


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
   重畫
   ========================================================= */

window.addEventListener(
    "resize",
    drawWires
);


/* =========================================================
   啟動
   ========================================================= */

loadQuestion(1);
