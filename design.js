    


 /*<!--- section 3 (image slider) --->*/

    let image1=document.querySelector('.m1');
    let image2=document.querySelector('.m2');
    let image3=document.querySelector('.img_hover_text');
    let indictor_img=document.querySelector('.indicator_img');
    let first=document.getElementById('first');
    let second=document.getElementById('second');
    let third=document.getElementById('third');
    

   
    image1.onmouseover=function(){
        first.style.display='none';
        
        second.style.marginLeft='20px';
         second.style.display='block';
        third.style.display='block';
        
        indictor_img.style.display='block';
        indictor_img.style.marginLeft='0px';
        
        
        
    }
     image2.onmouseover=function(){
         first.style.display='block';
        second.style.display='none';
         indictor_img.style.marginLeft='20px';
        indictor_img.style.display='block';
        
         third.style.display='block';
        third.style.marginLeft='40px';
        
        
    }
      image3.onmouseover=function(){
        first.style.display='block';
        indictor_img.style.display='block';
          indictor_img.style.marginLeft='40px';
        third.style.display="none";
        second.style.display='block';
        
        
    }










/* <!--- section 2 contact form --->*/


    var btn=document.querySelector(".btn_contact");
    var form=document.getElementById('contact_form');
    var cancel=document.querySelector(".cancel");
    var cont=document.querySelector(".btn_contact2");
     
    
        cont.onclick=function(){
        form.style.display='none';

        form.addEventListener(setTimeout(function(){
        location.reload();
        },5000));
        }
             
        btn.onclick=function(){
        form.style.display='block';
        }

        cancel.onclick=function(){
        form.style.display='none';
        }
        
    
        
 
   /*  <!--- section 5  --->*/
    
    var slide=document.querySelector(".slider");
    var text1=document.querySelector(".text1");
    var text2=document.querySelector(".text2");
    var text3=document.getElementById("text3");

    text1.onmouseover=function(){  
        slide.style.transform="translateX(0px)";
        }   
      
    text2.onmouseover=function(){    
        slide.style.transform="translateX(-100%)";        
        }   
        
    text3.onmouseover=function(){    
        slide.style.transform="translateX(-200%)";
        
        }   
    