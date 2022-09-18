let navlinks= document.querySelectorAll('.nav-links a');

let nav= document.querySelector('.nav-links');

let burger = document.querySelector('.fa-bars');
let Xmark = document.querySelector('.fa-xmark');









burger.addEventListener('click', ()=>{



   nav.style.top='0';
   Xmark.classList.add('active');
   burger.classList.remove('active');


 
   for(let i of navlinks){
    i.addEventListener('click', (e)=>{
        
        nav.style.top='-55%';
        Xmark.classList.remove('active');
        burger.classList.add('active');
    })
   }
  

})



    Xmark.addEventListener('click', ()=>{

  
    
    nav.style.top='-55%';
    Xmark.classList.remove('active');
    burger.classList.add('active');
 
 })






navlinks.forEach((e)=>{
   
    

    e.addEventListener('click',()=>{
        for(let i of navlinks){
   
       
            i.classList.remove('current');
          
    
    }
        e.classList.add('current');
    })
})
