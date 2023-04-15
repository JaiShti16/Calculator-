let string="";
let buttons=document.querySelectorAll('.button');
let cut=document.querySelector('.cut');
let reverse=document.querySelector('.reverse');
let plus=document.querySelector('.plus');
let mod=document.querySelector('.mod');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else{
        string=string + e.target.innerHTML;
        document.querySelector('input').value=string;}
    })
})
cut.addEventListener('click',(c)=>{
    string="";
    document.querySelector('input').value=string;
})
plus.addEventListener('click',(p)=>{
    string=string+p.target.innerHTML;
    document.querySelector('input').value=string;
})
reverse.addEventListener('click',(r)=>{
    string= string.substring(0,string.length-1);
    document.querySelector('input').value=string;
})
mod.addEventListener('click',(m)=>{
    string=string+m.target.innerHTML;
    document.querySelector('input').value=string;
})
