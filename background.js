/**
 * Created by root on 16/1/17.
 */
document.write('<script type="text/javascript" src="FileSaver.js"></script>');
chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
   // alert(response);

    var r = confirm("Do you want to save the text");
    if (r == true) {
        saveTextAs(response,"Select And Save ,"+ new Date().toLocaleString());
    }


})


