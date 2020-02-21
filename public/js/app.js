window.addEventListener("load", function(){
    var editor = theWYSIWYG.document;
    editor.designMode = "on"
},false);

function execCmd(command){
    theWYSIWYG.document.execCommand(command, false, null);
}

function execCommandWithArg(command , Arg){
    theWYSIWYG.document.execCommand(command, false, Arg);
}


