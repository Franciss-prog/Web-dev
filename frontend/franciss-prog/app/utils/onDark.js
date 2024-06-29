export const onDark = (setDark, dark) => {
    // body
    const body = document.body; 
  
    // containers    
    const leftBorder = document.getElementById("leftcontainer");
    const mainBorder = document.getElementById("maincontainer");
    const buttonBorder = document.getElementById("toggleBtn");
    const cardBorder = document.getElementById("card");

    // toggle body   
    body.classList.toggle("bg-[#28282B]", !dark);
    body.classList.toggle("text-[#F7F9F2]", !dark);
    body.classList.toggle("bg-white", dark);
    body.classList.toggle("text-black", dark);
  
    // toggle containers
    if (leftBorder) {
      leftBorder.classList.toggle("border-black", dark);
      leftBorder.classList.toggle("border-white", !dark);
    }
    if(cardBorder){
      cardBorder.classList.toggle("border-black", dark)
      cardBorder.classList.toggle("border-white", !dark)
    }
    if (mainBorder) {
      mainBorder.classList.toggle("border-black", dark);
      mainBorder.classList.toggle("border-white", !dark);
    }
    if (buttonBorder){
        buttonBorder.classList.toggle("border-black", dark)
        buttonBorder.classList.toggle("border-white", !dark)
    }

    
    setDark(!dark);
  };
  