function change(val){
    document.getElementById("number").innerText=val;
}

function generate(){
    let staticpassword='';
    let randompassword='';
    var x=document.getElementById("number").innerText
    const characters={
        lowercase:"abcdefghijklmnopqrstuvwxyz",
        uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers:"1234567890",
        symbol:"!@#$%^&*()_~"

    }
    let abc=false
    
    const options=document.querySelectorAll('.options input');

    options.forEach(option => {
        if (option.checked){
            if (option.id==='spaces'){
                staticpassword+='    '+staticpassword+'         ';
            }
            else if(option.id==="duplicates"){
                abc=true

            }
            else
            staticpassword+=characters[option.id]
            
        }
    });
    for(let i=0; i<x; i++){
    
    
    
        randompassword+=staticpassword[Math.floor(Math.random()*staticpassword.length)]
    
}
document.querySelector('.inputext input').value=randompassword

    console.log(randompassword)
}
function copy(){
    text=document.querySelector('.inputext input').value
    navigator.clipboard.writeText(text);
    console.log('mkj')


}

    
