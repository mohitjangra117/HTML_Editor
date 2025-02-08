function copy_html(){
    let content=document.getElementById("area1").value;
    return content;
}

function html(){
    let h1=document.getElementById("iframe");
let h2=h1.contentDocument;
let h3=h2.getElementById("body");
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

function copy_js(){
    let content=document.getElementById("area3").value;
    return content;
}


function js(){
    let h1=document.getElementById("iframe");
let h2=h1.contentDocument;
let h3=h2.createElement("script");
    if(h3){
    h3.innerHTML=copy_js();
     h2.body.appendChild(h3); 
    }
 
}

// function js(){
//     let iframe = document.getElementById("iframe");
//     let iframeDoc = iframe.contentDocument || iframe.contentWindow.document; // Ensure compatibility

//     // Create a new <script> element
//     let script = iframeDoc.createElement("script");
    
//     // Get the JavaScript content from the textarea
//     script.innerHTML = copy_js();

//     // Append the script to the iframe's document body (or head)
//     iframeDoc.body.appendChild(script); // You can also append it to the head if needed
// }


function run(){
    html();
    css();
    js();
}

document.getElementById("btn").addEventListener("click",run);



// function autoCall() {
//    run();
// }

// setInterval(autoCall, 40000);


function left(){

    let x=document.getElementById("box");
    Object.assign(x.style,{
       
    });
    
    let p = document.getElementById("box");
    p.style.gridTemplateColumns = "0.3fr 1fr";
    
    let c = document.getElementById("container");
    c.style.display = "flex";
    c.style.width = "90%";
    c.style.flexDirection = "column";

    let a1=document.getElementById("area1");
    a1.style.height="22vh";
    a1.style.width="100%";


    let a2=document.getElementById("area2");
    a2.style.height="22vh";
    a2.style.width="100%";

    let a3=document.getElementById("area3");
    a3.style.height="22vh";
    a3.style.width="100%";

    let f=document.getElementById("iframe");
    f.style.height="95%";
    
    let h=document.getElementById("html1");
    h.style.height="30px";

    let cs=document.getElementById("css1");
    cs.style.height="30px";

    let js=document.getElementById("js1");
    js.style.height="30px";   
}

function right(){
    console.log("Right");
}

function medium(){
    console.log("Medium");
}
