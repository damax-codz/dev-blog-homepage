
  function myfunc(){
      var home =document.querySelector("#home")
     
     if(home.style.visibility=="hidden"){
      home.style.visibility="visible"
      home.style.opacity=1
      home.style.width="30%"
      document.getElementById("menu").src="http://cdn.onlinewebfonts.com/svg/img_365816.png"
      document.querySelector(".overlay").style.display="flex"
      document.querySelector(".overlay").style.opacity= 1
      document.body.style.position="fixed"
      document.getElementById("menu").style.transform="translate(0px,20px)"
    }  
     else { 
      home.style.visibility="hidden"
      home.style.opacity=0
      home.style.width="0%"
      document.getElementById("menu").src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/96/iconmonstr-menu-1.png"
      document.querySelector(".overlay").style.display="none"
      document.querySelector(".overlay").style.opacity= 0
      document.body.style.position="absolute"
      document.getElementById("menu").style.transform="translate(0px,0px)"
     }
  }

