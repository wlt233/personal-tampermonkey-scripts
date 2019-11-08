// ==UserScript==
// @name         pzl_all_selecter_script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  jp_pzlsystem judge_teacher all_select_A
// @author       wlt233
// @include      *://www.jianping.com.cn/pzlschoolweb/JZXPW3004.ASPX*
// @include      *://www.hsjp.pdedu.sh.cn/pzlschoolweb/JZXPW3004.ASPX*
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function sr(i){
        document.getElementsByName("XDataGrid1:_ctl2:XP3064_0_"+i)[0].click();
        document.getElementsByName("XDataGrid1:_ctl3:XP3081_1_"+i)[0].click();
        document.getElementsByName("XDataGrid1:_ctl4:XP3088_2_"+i)[0].click();
        document.getElementsByName("XDataGrid1:_ctl5:XP3089_3_"+i)[0].click();
        document.getElementsByName("XDataGrid1:_ctl6:XP3116_4_"+i)[0].click();
        document.getElementsByName("XDataGrid1:_ctl7:XP3117_5_"+i)[0].click();
        document.getElementsByName("XDataGrid1:_ctl8:XP3118_6_"+i)[0].click();
        document.getElementsByName("XDataGrid1:_ctl9:XP3119_7_"+i)[0].click();
        document.getElementsByName("XDataGrid1:_ctl10:XP3121_8_"+i)[0].click();
        document.getElementsByName("XDataGrid1:_ctl11:XP3122_9_"+i)[0].click();
        document.getElementsByName("XDataGrid1:_ctl12:XP3123_10_"+i)[0].click();
        document.getElementsByName("XDataGrid1:_ctl13:XP3124_11_"+i)[0].click();
        document.getElementsByName("XDataGrid1:_ctl14:XP3125_12_"+i)[0].click();
    }
    var tab=document.getElementById("XDataGrid1");
    var tradd=tab.insertRow(0);
    tradd.style.background='orange'
    tradd.innerHTML+='<td><a href="javascript:void(0);" id="selectall" title="全部全选"><em>全部全选</em></td>'
    tradd.innerHTML+='<td></td>'
    for (var _tri = 3; _tri <= 20; _tri++)
    {
        tradd.innerHTML+='<td><a href="javascript:void(0);" id="selectall'+_tri+'" title="全选"><em>全选</em></td>';
     }
    $("#selectall3").click(function () {
            sr(4);
    });
    $("#selectall4").click(function () {
            sr(5);
    });
    $("#selectall5").click(function () {
            sr(6);
    });
    $("#selectall6").click(function () {
            sr(7);
    });
    $("#selectall7").click(function () {
            sr(8);
    });
    $("#selectall8").click(function () {
            sr(9);
    });
    $("#selectall9").click(function () {
            sr(10);
    });
    $("#selectall10").click(function () {
            sr(11);
    });
    $("#selectall11").click(function () {
            sr(12);
    });
    $("#selectall12").click(function () {
            sr(13);
    });
    $("#selectall13").click(function () {
            sr(14);
    });
    $("#selectall14").click(function () {
            sr(15);
    });
    $("#selectall15").click(function () {
            sr(16);
    });
    $("#selectall16").click(function () {
            sr(17);
    });
    $("#selectall17").click(function () {
            sr(18);
    });
    $("#selectall18").click(function () {
            sr(19);
    });
    $("#selectall19").click(function () {
            sr(20);
    });
    $("#selectall20").click(function () {
            sr(21);
    });
    $("#selectall").click(function () {
        for (var _i = 4; _i <= 21; _i++){
            sr(_i);
        }
    });
})();
