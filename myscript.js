/**
 * Created by root on 16/1/17.
 */
//chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerText);
$('div').mouseup(function(e) {
    var text=getSelectedText();
    if (text!=''){
        chrome.runtime.sendMessage(text);
        e.stopPropagation();

    }
});

function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}


