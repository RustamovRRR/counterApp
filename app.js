// ilkin countun taninmasi
// set initial count
let count = 0;

//select value and buttons
// value ve buttonu secmek
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn)=>{
      btn.addEventListener("click", (e)=>{
          const styles = e.currentTarget.classList;
          if (styles.contains("decrease")) {
              count--;              
          } else if (styles.contains("increase")) {
              count++;              
          }else if (styles.contains("reset")) {
            count=0;
        }
        if (count>0) {
            value.style.color = "green";  
        }
        if (count<0) {
            value.style.color = "red";  
        }
        if (count === 0) {
            value.style.color = "hsl(209, 61%, 16%)";
        }
          value.innerHTML = count;
      });
});

