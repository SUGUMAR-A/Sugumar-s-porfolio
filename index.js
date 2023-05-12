var tablinks=document.getElementsByClassName("tab-links");
var tabcontent=document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-links");
            }
            for(tabcontents of tabcontent){
                tabcontents.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-links");
            document.getElementById(tabname).classList.add("active-tab");
        }
let sidemenu=document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right="0"
}
function closemenu(){
    sidemenu.style.right="-200px"
}



// let icon=document.getElementById("icon")
// let b=document.getElementById("body")

//   b.onclick=function(){
//     document.body.classList.toggle("darktheme")
//     if(document.body.classList.contains("darktheme")){
//       icon.innerHTML="<i class='fa-solid fa-sun'></i>"
      
    
//     }else{
//       icon.innerHTML="<i class='fa-solid fa-moon'></i>"
    
      
//     }
//   }




let msg=document.getElementById("msg")


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzBopb0NNyQJr4wFOk-qy9PZbSxgwQTWEH01VxmEh45L8rpf0m25nrZIO1ozrv3c1Tr7A/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="Message sent succesfully"
      setTimeout(function(){
        msg.innerHTML=""
      },5000)
      form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })




  
  // typing animation using java script

// let type=document.getElementById("type")
// let arr=["Python developer","front-end developer"]
var typed=new Typed(".type",{
  strings:["Full-Stack Web development. ","Python-Java.","Back-End Developement."],
  typeSpeed:150,
  BackSpeed:150,
  loop:true
})

