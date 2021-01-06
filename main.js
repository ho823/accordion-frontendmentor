    const accordion = document.getElementsByClassName("button-arrow");



    for (i = 0; i < accordion.length; i++) {
      
        accordion[i].addEventListener("click", function() {
          
          console.log(accordion[0])
          console.log(accordion[1])
          this.classList.toggle("active");

          const accordionContent = document.getElementsByClassName("accordion-content")[0];
          const arrowIcon = document.getElementsByClassName("arrow")[0];
          const title = document.getElementsByTagName("h2")[0];

          if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
            arrowIcon.style.transform = "rotate(0deg)";
            title.style.color = "hsl(237, 12%, 33%)";
            title.style.fontWeight = "400";


          } else {
            accordionContent.style.display = "block";
            arrowIcon.style.transform = "rotate(180deg)";
            title.style.color = "black";
            title.style.fontWeight = "700";
          }
        });
      }





