
  //password show hide
  // <input type="password" class="inputbox"  name="j_password" id="pass-type" />
 //  <i class="fa fa-eye-slash pass-show-hide" id="eye-icon" aria-hidden="true" onclick="passToggle()"></i>
   function passToggle() { 
    var temp = document.getElementById("pass-type"); 
    if (temp.type === "password") { 
        temp.type = "text"; 
        var el = document.getElementById("eye-icon");
         el.classList.remove('fa-eye-slash'); 
         el.classList.add('fa-eye');  
    } 
    else { 
        temp.type = "password"; 
        var el = document.getElementById("eye-icon");
         el.classList.remove('fa-eye');
        el.classList.add('fa-eye-slash'); 
    } 
  }