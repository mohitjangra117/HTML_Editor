function copy_html(){
    let content=document.getElementById("area1").value;
    return content;
}

function html(){
    let h1=document.getElementById("iframe");
let h2=h1.contentDocument;
let h3=h2.getElementById("h1");
    if(h3){
    h3.innerHTML=copy_html();
    }
 
}

function copy_css(){
    let content=document.getElementById("area2").value;
    return content;
}


function css(){
    let h1=document.getElementById("iframe");
let h2=h1.contentDocument;
let h3=h2.getElementById("style");
    if(h3){
    h3.innerHTML=copy_css();
    }
 
}



let h1=document.getElementById("iframe");
let h2=h1.contentDocument;
let h3=h2.getElementById("style");



function run(){
    html();
    css();
}
document.getElementById("btn").addEventListener("click",run);
