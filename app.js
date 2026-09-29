/* =========================================================
   室內配線乙級
   第二站線路圖練習器

   第一版：
   - 第1～8題
   - 設備
   - 腳位
   - 滑鼠拖曳拉線
   - 刪線
   - 復原
   - 清除
   - 計時
   ========================================================= */


/* =========================================================
   題目資料
   ========================================================= */

const QUESTIONS = {

    1: {

        title: "第1題｜電動機正反轉兼 Y-△ 啟動",

        info: `
            3ψ3W 220V<br>
            15HP<br>
            過門端子：10個<br>
            主電路：15條 5.5mm² 黑色線<br>
            接地線：2條 8mm² 綠色線
        `,

        box: [

            "NFB1",
            "MCF1",
            "MCR1",
            "TH-RY1",
            "MCD1",
            "MCS1",
            "TR1",
            "TB1",
            "TB2",
            "TB3",
            "M1",
            "M2",
            "GND1"

        ],

        door: [

            "BZ1",
            "Y1",
            "R1",
            "G1",
            "OFF1",
            "REV1",
            "FWD1"

        ]

    },


    2: {

        title: "第2題｜正反轉兼 Y-△ 啟動附瞬時停電保護",

        info: `
            3ψ3W 220V<br>
            15HP<br>
            過門端子：13個<br>
            TR2：5 Sec<br>
            TR3：10 Sec
        `,

        box: [

            "NFB1",
            "MCF1",
            "MCR1",
            "MCD1",
            "MCS1",
            "TR1",
            "TR2",
            "TR3",
            "TB1",
            "TB2"

        ],

        door: [

            "EMS",
            "OFF1",
            "FWD1",
            "REV1",
            "G1",
            "KR"

        ]

    },


    3: {

        title: "第3題｜兩台抽水泵手動、自動交替控制",

        info: `
            3ψ3W 220V<br>
            兩台 5HP 泵浦<br>
            浮球開關 FS<br>
            電極棒 E1、E2、E3
        `,

        box: [

            "NFB",
            "MC1",
            "MC2",
            "TH-RY1",
            "TH-RY2",
            "TB1",
            "TB2",
            "TB5",
            "TB6",
            "TB7"

        ],

        door: [

            "OFF1",
            "ON1",
            "OFF2",
            "ON2",
            "COS",
            "FS",
            "E1",
            "E2",
            "E3",
            "MR",
            "G1",
            "G2",
            "BZ"

        ]

    },


    4: {

        title: "第4題｜污排水泵手動、自動交互兼異常水位",

        info: `
            3ψ3W 220V<br>
            兩台 5HP 泵浦<br>
            BS1、BS2 異常水位<br>
            61F-G2
        `,

        box: [

            "NFB1",
            "NFB2",
            "NFB3",
            "MC1",
            "MC2",
            "TH-RY1",
            "TH-RY2",
            "TB1",
            "TB2",
            "TB5",
            "TB6",
            "TB7"

        ],

        door: [

            "OFF1",
            "ON1",
            "OFF2",
            "ON2",
            "COS",
            "S0",
            "S2",
            "BS1",
            "BS2",
            "E1",
            "E2",
            "E3",
            "E4",
            "BZ",
            "G1",
            "G2"

        ]

    },


    5: {

        title: "第5題｜沖床機自動計數直流煞車",

        info: `
            3ψ3W 220V<br>
            3HP<br>
            REC 50mA<br>
            COUNT IN / RESET IN
        `,

        box: [

            "NFB",
            "MC",
            "TH-RY",
            "TB1",
            "TB2",
            "TB5",
            "MCB",
            "TR1",
            "TR2",
            "REC",
            "X1",
            "X2"

        ],

        door: [

            "OFF",
            "ON",
            "COUNT",
            "RESET",
            "Y",
            "R",
            "BZ"

        ]

    },


    6: {

        title: "第6題｜大門控制電路",

        info: `
            1ψ2W 220V<br>
            3/4HP 馬達<br>
            附電磁煞車<br>
            X3、X4 為 3P 電力電驛
        `,

        box: [

            "NFB",
            "MCF",
            "MCR",
            "TH-RY",
            "TB1",
            "TB2",
            "TR1",
            "TR2",
            "TR3",
            "TR4",
            "TR5"

        ],

        door: [

            "EMS",
            "LS1",
            "LS2",
            "X1",
            "X2",
            "X3",
            "X4",
            "PH1",
            "PH2",
            "YL1",
            "YL2",
            "R1",
            "R2"

        ]

    },


    7: {

        title: "第7題｜常用電源與備用電源自動切換",

        info: `
            ATS盤內元件<br>
            過門端子：6個<br>
            TR1：發電機啟動延遲<br>
            TR2：備用轉常用延遲<br>
            TR3：發電機停機冷卻<br>
            TR4：常用轉備用延遲
        `,

        box: [

            "TB1",
            "TR1",
            "TR2",
            "TR3",
            "TR4",
            "X1",
            "X2",
            "X3",
            "X4",
            "TM",
            "Y1",
            "R",
            "W"

        ],

        door: [

            "LSA",
            "LSB",
            "ATS",
            "常用電源",
            "備用電源",
            "TB2"

        ]

    },


    8: {

        title: "第8題｜三相三線式負載監視盤",

        info: `
            3ψ3W 220V<br>
            負載 10kVA<br>
            CT、PT<br>
            WH、VARH、PF<br>
            AS、VS、A、V
        `,

        box: [

            "NFB",
            "TB11",
            "TB1",
            "TB2",
            "CT1",
            "CT2",
            "PT1",
            "PT2",
            "WH",
            "VARH",
            "PF"

        ],

        door: [

            "AS",
            "VS",
            "A",
            "V",
            "LOAD"

        ]

    }

};


/* =========================================================
   每個設備的腳位
   ========================================================= */

const PINS = {

    NFB1: ["1","3","5","2","4","6"],

    NFB: ["1","3","5","2","4","6"],

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

    TH-RY1: [
        "5","7","9",
        "1","2","3",
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

    TB1: [
        "1","2","3","4",
        "5","6","7","8",
        "9","10","11","12",
        "13","14","15","16",
        "17","18","19","20",
        "21","22","23","24",
        "25","26","27","28",
        "29","30","31","32"
    ],

    TB2: [
        "1","2","3","4",
        "5","6","7","8"
    ],

    TB3: [
        "1","2","3","4",
        "5","6","7","8"
    ],

    M1: ["1","2","3"],

    M2: ["1","2","3"],

    GND1: [
        "1","2","3","4",
        "5","6","7","8"
    ],

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

    MC: [
        "1","2","3",
        "4","5","6"
    ],

    MC1: [
        "1","2","3",
        "4","5","6"
    ],

    MC2: [
        "1","2","3",
        "4","5","6"
    ],

    MCB: [
        "1","2","3",
        "4","5","6"
    ],

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

    LSA: ["1","2"],

    LSB: ["1","2"],

    TM: ["1","2"],

    W: ["1","2"],

    WH: ["1","2","3","4"],

    VARH: ["1","2","3","4"],

    PF: ["1","2","3","4"],

    CT1: ["K","k","L","l"],

    CT2: ["K","k","L","l"],

    PT1: [
        "P1","P2","P3",
        "S1","S2","S3"
    ],

    PT2: [
        "P1","P2","P3",
        "S1","S2","S3"
    ],

    AS: ["R","S","T","A0","A"],

    VS: ["R","S","T","V0","V"],

    A: ["+","-"],

    V: ["+","-"],

    LOAD: ["A","B","C","G"]

};


/* =========================================================
   示範答案
   =========================================================

   注意：

   這裡目前只放「測試用」幾條。

   等我們把第一題完整接線整理好，
   再把真正標準答案全部放進來。

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
   系統變數
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

const boxArea =
    document.getElementById("boxArea");

const doorArea =
    document.getElementById("doorArea");

const svg =
    document.getElementById("wiringSvg");

const canvas =
    document.getElementById("canvas");

const message =
    document.getElementById("message");


/* =========================================================
   載入題目
   ========================================================= */

function loadQuestion(questionNumber) {

    currentQuestion = questionNumber;

    wires = [];

    history = [];

    seconds = 0;

    document
        .querySelectorAll(".question-btn")
        .forEach(button => {

            button.classList.toggle(

                "active",

                Number(button.dataset.question)
                === questionNumber

            );

        });


    const question =
        QUESTIONS[questionNumber];


    document.getElementById(
        "questionTitle"
    ).innerHTML =
        question.title;


    document.getElementById(
        "questionInfo"
    ).innerHTML =
        question.info;


    renderEquipment(
        question.box,
        boxArea,
        "box"
    );


    renderEquipment(
        question.door,
        doorArea,
        "door"
    );


    updateStatistics();


    showMessage(
        `已載入${question.title}`
    );

}


/* =========================================================
   建立設備
   ========================================================= */

function renderEquipment(

    equipmentList,

    container,

    side

) {

    container.innerHTML = `

        <div class="area-title">

            ${
                side === "box"
                ? "箱體內設備"
                : "箱門設備"
            }

        </div>

    `;


    const columns =
        side === "box"
        ? 3
        : 2;


    equipmentList.forEach(

        (equipment, index) => {

            const device =
                document.createElement("div");


            device.className =
                "device";


            device.dataset.device =
                equipment;


            const row =
                Math.floor(index / columns);


            const col =
                index % columns;


            const left =
                4 +
                col *
                (
                    90 /
                    Math.max(
                        columns - 1,
                        1
                    )
                );


            const top =
                7 +
                row * 18;


            device.style.left =
                Math.min(
                    left,
                    84
                ) + "%";


            device.style.top =
                Math.min(
                    top,
                    88
                ) + "%";


            const name =
                document.createElement("div");


            name.className =
                "device-name";


            name.textContent =
                equipment;


            device.appendChild(name);


            const pins =
                document.createElement("div");


            pins.className =
                "pins";


            const pinList =
                PINS[equipment]
                || ["1","2"];


            pinList.forEach(

                pinNumber => {

                    const pin =
                        document.createElement(
                            "div"
                        );


                    pin.className =
                        "pin";


                    pin.textContent =
                        pinNumber;


                    pin.dataset.pin =
                        `${equipment}-${pinNumber}`;


                    pin.addEventListener(

                        "mousedown",

                        event => {

                            event.preventDefault();

                            startPin =
                                pin;


                            pin.classList.add(
                                "active"
                            );

                        }

                    );


                    pins.appendChild(
                        pin
                    );

                }

            );


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
   找到腳位中心
   ========================================================= */

function getPinCenter(pinID) {

    const pin =
        document.querySelector(

            `[data-pin="${CSS.escape(pinID)}"]`

        );


    if (!pin) {

        return null;

    }


    const rect =
        pin.getBoundingClientRect();


    const svgRect =
        svg.getBoundingClientRect();


    return {

        x:
            rect.left +
            rect.width / 2 -
            svgRect.left,

        y:
            rect.top +
            rect.height / 2 -
            svgRect.top

    };

}


/* =========================================================
   產生線路
   ========================================================= */

function createPath(a, b) {

    const distance =
        Math.max(

            50,

            Math.abs(
                b.x - a.x
            ) * 0.3

        );


    const direction =
        b.x >= a.x
        ? 1
        : -1;


    return `

        M ${a.x} ${a.y}

        C
        ${a.x + distance * direction}
        ${a.y},

        ${b.x - distance * direction}
        ${b.y},

        ${b.x}
        ${b.y}

    `;

}


/* =========================================================
   滑鼠移動
   ========================================================= */

document.addEventListener(

    "mousemove",

    event => {

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
                event.clientX -
                rect.left,

            y:
                event.clientY -
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
   滑鼠放開
   ========================================================= */

document.addEventListener(

    "mouseup",

    event => {

        if (!startPin) {

            return;

        }


        const target =
            document
                .elementFromPoint(

                    event.clientX,
                    event.clientY

                );


        const endPin =
            target?.closest(
                ".pin"
            );


        if (

            endPin &&
            endPin !== startPin

        ) {

            createWire(

                startPin.dataset.pin,

                endPin.dataset.pin

            );

        }


        stopDrawing();

    }

);


/* =========================================================
   停止拉線
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
   建立正式線
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

                )

                ||

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

        from: from,

        to: to

    });


    drawWires();

    updateStatistics();


    showMessage(
        `${from} → ${to}`
    );

}


/* =========================================================
   畫出所有線
   ========================================================= */

function drawWires() {

    svg
        .querySelectorAll(
            ".wire"
        )
        .forEach(
            wire => wire.remove()
        );


    wires.forEach(

        (wire, index) => {

            const start =
                getPinCenter(
                    wire.from
                );


            const end =
                getPinCenter(
                    wire.to
                );


            if (!start || !end) {

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

                createPath(
                    start,
                    end
                )

            );


            path.addEventListener(

                "click",

                event => {

                    event.stopPropagation();


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
   檢查答案
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
        ANSWERS[
            currentQuestion
        ];


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

            const correctLine =
                correctSet.has(

                    normalizeConnection([

                        wire.from,
                        wire.to

                    ])

                );


            if (correctLine) {

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


    let missing = 0;


    answer.forEach(

        line => {

            if (

                !userSet.has(

                    normalizeConnection(
                        line
                    )

                )

            ) {

                missing++;

            }

        }

    );


    document
        .querySelectorAll(
            ".wire"
        )
        .forEach(

            (element, index) => {

                const wire =
                    wires[index];


                const isCorrect =
                    correctSet.has(

                        normalizeConnection([

                            wire.from,
                            wire.to

                        ])

                    );


                element.classList.toggle(
                    "correct",
                    isCorrect
                );


                element.classList.toggle(
                    "wrong",
                    !isCorrect
                );

            }

        );


    document.getElementById(
        "correctCount"
    ).textContent =
        correct;


    document.getElementById(
        "wrongCount"
    ).textContent =
        wrong;


    showMessage(

        `檢查完成｜正確 ${correct}｜錯誤 ${wrong}｜漏接 ${missing}`

    );

}


/* =========================================================
   統計
   ========================================================= */

function updateStatistics() {

    document.getElementById(
        "wireCount"
    ).textContent =
        wires.length;

}


/* =========================================================
   復原
   ========================================================= */

document.getElementById(
    "undoBtn"
).addEventListener(

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
   清除全部
   ========================================================= */

document.getElementById(
    "clearBtn"
).addEventListener(

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


        document.getElementById(
            "correctCount"
        ).textContent = "-";


        document.getElementById(
            "wrongCount"
        ).textContent = "-";


        showMessage(
            "已清除全部接線。"
        );

    }

);


/* =========================================================
   檢查答案按鈕
   ========================================================= */

document.getElementById(
    "checkBtn"
).addEventListener(

    "click",

    checkAnswer

);


/* =========================================================
   題目切換
   ========================================================= */

document
    .querySelectorAll(
        ".question-btn"
    )
    .forEach(

        button => {

            button.addEventListener(

                "click",

                () => {

                    loadQuestion(

                        Number(
                            button.dataset.question
                        )

                    );

                }

            );

        }

    );


/* =========================================================
   計時器
   ========================================================= */

setInterval(

    () => {

        seconds++;


        const hours =
            String(

                Math.floor(
                    seconds / 3600
                )

            ).padStart(
                2,
                "0"
            );


        const minutes =
            String(

                Math.floor(

                    (seconds % 3600)
                    / 60

                )

            ).padStart(
                2,
                "0"
            );


        const second =
            String(

                seconds % 60

            ).padStart(
                2,
                "0"
            );


        document.getElementById(
            "timer"
        ).textContent =

            `${hours}:${minutes}:${second}`;

    },

    1000

);


/* =========================================================
   提示訊息
   ========================================================= */

function showMessage(text) {

    message.textContent =
        text;

}


/* =========================================================
   視窗大小改變
   ========================================================= */

window.addEventListener(

    "resize",

    () => {

        drawWires();

    }

);


/* =========================================================
   啟動
   ========================================================= */

loadQuestion(1);
