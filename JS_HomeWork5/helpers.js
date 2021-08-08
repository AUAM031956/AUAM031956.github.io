function $g(selectorrule) {
    //判斷是否為id selector
    if (selectorrule.includes('#')) {
    //回傳Element
    return document.querySelector(selectorrule);
    }
    //回傳NodeList集合
    var nodelist = document.querySelectorAll(selectorrule);
    return nodelist.length == 1 ? nodelist[0] :
    nodelist;
}
function $c(element){
    return document.createElement(element);
}
function $ce(element, text) {
    let el = document.createElement(element);
    if (text !== "" && text !== null) {
        el.innerText = text;
    }
    return el;
}
export { $g as $got, $g , $c , $ce};

// function $g(selectorrule){
//     //單筆
//     if(selectorrule.includes("#"))
//     {
//         return document.querySelector(selectorrule);
//     }
//     //多筆
//     let nodeList = document.querySelectorAll(selectorrule);
//     return nodelist.length == 1 ? nodelist[0] : nodelist;
// }

// function $getRandom( min , max ){
//     return Math.floor( Math.random() * ( max - min ) + min );
// }

// export { $g as $got , $getRandom , $g }; 