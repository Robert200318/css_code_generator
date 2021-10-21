function fun1() {
    //Radius rounding Top left corner
    let tlr=document.getElementById('tlr').value;
    //Radius rounding Top right corner
    let trr=document.getElementById('trr').value;
    //Radius rounding Bottom left corner
    let brr=document.getElementById('brr').value;
    //Radius rounding Bottom right corner
    let blr=document.getElementById('blr').value;
    //text
    let tlt=document.getElementById('tlt');
    let trt=document.getElementById('trt');
    let brt=document.getElementById('brt');
    let blt=document.getElementById('blt');
    // Default block
    let block=document.getElementById('block1');
    // text = range
    tlt.value=tlr;
    trt.value=trr;
    brt.value=brr;
    blt.value=blr;
    //CSS
    block.style.borderRadius=tlr+'px '+trr+'px '+brr+'px '+blr+'px ';

    //Rezult
    document.getElementById('rezult_p').innerHTML =
    "border-top-left-radius:" + tlr + "px;"
    + "<br>" +
    "border-top-right-radius:" + trr + "px;"
    + "<br>" +
    "border-bottom-right-radius:" + brr + "px;"
    + "<br>" +
    "border-bottom-left-radius:" + blr + "px;";


  }