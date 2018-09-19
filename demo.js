function init() {
    var oDiv = document.getElementsByClassName('item');
    for (let i = 0; i < oDiv.length; i++) {
        oDiv[i].onclick = function() {
            console.log(13)
        }
    }
}
init()