// ==UserScript==
// @name         pzl_all_selecter_script
// @namespace    https://tqlwsl.moe/
// @version      1.0
// @description  pzlsystem judge_teacher all_select_A
// @author       wlt233
// @include      *://$website$/pzlschoolweb/JZXPW3004.ASPX*
// @grant        none
// ==/UserScript==

// code by wlt233 | v1.0 2020.11.13

// 先生の事好きですかー？ (ハーイハイハイハーイハイ)
// 手を上げてない人は 居残りですよ
// ----イノコリ先生

(function() {
    'use strict';

    let teacherNumber = document.querySelectorAll(".pzlsheader")[0].childElementCount - 3;   // 2021.06.04 fixed bug
    let tab = document.getElementById("XDataGrid1");
    let tradd = tab.insertRow(1);
    tradd.style.background = "orange";
    tradd.innerHTML += "<td></td>";
    tradd.innerHTML += '<td><a href="javascript:void(0);" id="selectAll" title="全部全选 A"s><em>全部全选</em></td>';
    for (let i = 1; i <= teacherNumber; ++i) {
        tradd.innerHTML += '<td><a href="javascript:void(0);" id="selectTeacherAll' + i + '" title="全选 A"><em>全选</em></td>';
    }
    tradd.innerHTML += "<td></td>";

    function selectRow(i){
        let questionList = [
            "2:XP3064_0_",
            "3:XP3081_1_",
            "4:XP3088_2_",
            "5:XP3089_3_",
            "6:XP3116_4_",
            "7:XP3117_5_",
            "8:XP3118_6_",
            "9:XP3119_7_",
            "10:XP3121_8_",
            "11:XP3122_9_",
            "12:XP3123_10_",
            "13:XP3124_11_",
            "14:XP3125_12_",
            "15:XP3126_13_",
            "16:XP3127_14_",
            "17:XP3128_15_"
        ];
        questionList.forEach((name) => {
            if (document.getElementsByName("XDataGrid1:_ctl" + name + i).length) {
                document.getElementsByName("XDataGrid1:_ctl" + name + i)[0].click();
                // 0 for A, 1 for B, etc..
            }
        });
    }

    for (let i = 1; i <= teacherNumber; ++i) {
       document.querySelector("#selectTeacherAll" + i).onclick = () => {
           selectRow(i + 3);
       };
    }

    document.querySelector("#selectAll").onclick = () => {
        for (let i = 1; i <= teacherNumber; i++){
            selectRow(i + 3);
        }
    };

    document.querySelectorAll(".padlinetd")[1].appendChild(document.createTextNode("Fast select script by wlt233  2020.11.13"));

})();
