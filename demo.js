function init() {
    var oDiv = document.getElementsByClassName('item');
    var btn = document.getElementsByClassName('btn')[0];
    for (let i = 0; i < oDiv.length; i++) {
        oDiv[i].onclick = function(e) {
            if (oDiv[i].style.border == "") {
                oDiv[i].style.border = "2px solid #fff"
            } else {
                oDiv[i].style.border = "2px dashed #fff"
            }

        }
    }


    btn.onclick = function() {
        oDiv.style.border = "2px dashed #fff"
    }
}
init()