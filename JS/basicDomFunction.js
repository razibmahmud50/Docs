  //work after dom loaded
  document.addEventListener("DOMContentLoaded", function(){ })

  //work after all content loaded
  window.addEventListener("load", function(){ });

  //add css
    document.querySelectorAll("#myButtom").style.display = "flex";
    document.getElementById("myButtom").style.cssText = "opacity: 1; transform: unset";

  //add,remove,toogle class
  document.getElementById("myButtom").addEventListener('click', function(){
      var element = document.getElementById("myDiv");
      element.classList.add('active');
      element.classList.remove('active');
      element.classList.toggle('active');
  })
  
  //select item in foreach
  items.forEach((el)=>{
    el.querySelector(".element")
  })


