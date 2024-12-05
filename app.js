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




// document.getElementById("btn").addEventListener("click",run);



function autoCall() {
   run();
}

setInterval(autoCall, 1000);
