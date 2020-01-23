/*window.onload = function () {
    //var isOn = chrome.extension.getBackgroundPage().enabled;
    chrome.runtime.getBackgroundPage(function (backgroundPage) {
        console.log(backgroundPage.isOn);
        backgroundPage.isOn = true;
        console.log(backgroundPage.isOn);
        backgroundPage.enableAdBlock();
        console.log(backgroundPage.setTest());
        console.log(backgroundPage.setTest);
        //setButton();
        
    });
}*/
//window.localStorage.setItem('mode', isOn);
//window.localStorage.getItem('mode');
//var isOn;
$(document).ready(function () {
    //isOn = window.localStorage.getItem('mode');
    if (window.localStorage.getItem('text') != null)
        $("#btn1").val(window.localStorage.getItem('text'));
    if (window.localStorage.getItem('color') != null)
        $("#btn1").addClass(window.localStorage.getItem('color'));
    var background = chrome.extension.getBackgroundPage();
    setButton(background);
    //setBtnName(isOn);
});

function setButton(context) {
    $("#btn1").click(function () {
        context.enableAdBlock();
        $("#btn1").val('Enabled');
        $("#btn1").addClass('on');
        window.localStorage.setItem('text', 'Enabled');
        window.localStorage.setItem('color', 'on');
    });
}

/*function setButton(context) {
    $("#btn1").click(function () {
        if (isOn) {
            isOn = false;
            window.localStorage.setItem('mode', isOn);
            this.value = 'Disabled';
            context.enableAdBlock();
        }
        else {
            isOn = true;
            window.localStorage.setItem('mode', isOn);
            this.value = 'Enabled';
            context.disableAdBlock();
        }

        console.log(context._details);
        console.log(window.localStorage.getItem('status'));
    });
}*/

/*function extenstionStatus() {
    var isOn = chrome.extension.getBackgroundPage().enabled;
    document.getElementById('btn1').value = isOn ? "Disable" : "Enable";
}*/
/*function setBtnName(mode) {
    var btn = $("#btn1");
    if (mode)
        btn.val('Enabled');
    else btn.val('Disabled');
}*/