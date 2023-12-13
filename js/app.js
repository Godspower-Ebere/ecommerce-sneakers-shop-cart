var menu=document.getElementById("menu");
var pop=document.getElementById("pop");
var close=document.getElementById("close");
var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
var val=document.getElementById("val");
var popup=document.getElementById("popup");
var popupc=document.getElementById("popupc");
var cent=document.getElementById("cent");

var shop=document.getElementById("shop");
var shopcont=document.getElementById("shopcont");
var cartcont=document.getElementById("cart");
var cartbtn=document.getElementById("cartbtn");
var badge=document.getElementById("badge");
var number=document.getElementById("number");
var sum=document.getElementById("sum");
var hide=document.getElementById("hide");
var empty=document.getElementById("empty");
var bin=document.getElementById("bin");

var img=document.getElementById("img");
var nexts=document.getElementById("next");
var prevs=document.getElementById("prev");

var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");

var one2=document.getElementById("one2");
var two2=document.getElementById("two2");
var three2=document.getElementById("three2");
var four2=document.getElementById("four2");

var next=document.getElementById("n");
var prev=document.getElementById("p");

var count=0;
var images=[
      "images/image-product-1.jpg",
      "images/image-product-2.jpg",
      "images/image-product-3.jpg",
      "images/image-product-4.jpg"
]
var imageindex=0;
var local=localStorage.getItem("number");

nexts.addEventListener("click", function(){
      imageindex++;
      if(imageindex>images.length-1){
            imageindex=0;
      }
      img.src=images[imageindex];
  });
prevs.addEventListener("click", function(){
      imageindex--;
      if(imageindex<0){
            imageindex=images.length-1;
      }
      img.src=images[imageindex];
});

badge.textContent=localStorage.getItem("number")
sum.innerText=125*badge.innerText;
number.innerText=badge.innerText;
if (localStorage.getItem("number")==0){
      hide.style.display="none";
      empty.style.display="block"
}
else{
      hide.style.display="flex";
      empty.style.display="none"
}
cartbtn.addEventListener("click", function(){
     if (val.textContent>0){
      localStorage.setItem("number",val.innerText);
      badge.style.display="block";
      badge.textContent=localStorage.getItem("number");
      sum.innerText=125*badge.innerText;
      number.innerText=badge.innerText;
      hide.style.display="flex";
     }
     else{
      badge.style.display="none";
      localStorage.setItem("number",0);
       }
   if (val.textContent==0){
      hide.style.display="none";
      empty.style.display="block"
   }
   else{
      hide.style.display="flex";
      empty.style.display="none"
   }
  });
  
shop.addEventListener("click", function(){
      if (shopcont.style.display==="none"){
            shopcont.style.display="block"
      }
      else{
            shopcont.style.display="none"
      }
  });
  bin.addEventListener("click", function(){
      localStorage.setItem("number",0);
      hide.style.display="none";
      empty.style.display="block";
      badge.textContent=localStorage.getItem("number");
  });

next.addEventListener("click", function(){
      imageindex++;
      if(imageindex>images.length-1){
            imageindex=0;
      }
      img2.src=images[imageindex];
});
prev.addEventListener("click", function(){
      imageindex--;
      if(imageindex<0){
            imageindex=images.length-1;
      }
      img2.src=images[imageindex];
});


one.addEventListener("click", function(){
      img.src="images/image-product-1.jpg";
});

two.addEventListener("click", function(){
      img.src="images/image-product-2.jpg";
});
three.addEventListener("click", function(){
      img.src="images/image-product-3.jpg";
});
four.addEventListener("click", function(){
      img.src="images/image-product-4.jpg";
});

one2.addEventListener("click", function(){
      img2.src="images/image-product-1.jpg";
});
two2.addEventListener("click", function(){
      img2.src="images/image-product-2.jpg";
});
three2.addEventListener("click", function(){
      img2.src="images/image-product-3.jpg";
});
four2.addEventListener("click", function(){
      img2.src="images/image-product-4.jpg";
});

popupc.addEventListener("click", function(){
      popup.style.display="none"
});

close.addEventListener("click", function(){
      pop.style.display="none";
});
menu.addEventListener("click", function(){
      pop.style.display="block";
});
minus.addEventListener("click", function(){
      count--;
      if (count<=0){
            count=0;
      }
    val.innerText=count;
});
plus.addEventListener("click", function(){
    count++;
    val.innerText=count;
});

minus.addEventListener("click", function(){
      pop.style.display="none";
});

if(window.innerWidth<760){
      popup.style.display="none";
      img.addEventListener("click", function(){
            popup.style.display="none"
      });
}
else{
      img.addEventListener("click", function(){
            popup.style.display="flex"
      });
      nexts.style.display="none";
      prevs.style.display="none";
}
