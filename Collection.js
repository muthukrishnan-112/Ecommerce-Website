var container=document.getElementById("product")
var searching=document.getElementById("search")
var elementlist=container.querySelectorAll("div")

searching.addEventListener("keyup",function(){
    entervalue=event.target.value.toUpperCase()

    for(count=0;count<elementlist.length;count=count+1){
        var productname=elementlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(entervalue)<0){
            elementlist[count].style.display="none"
        }
        else{
            elementlist[count].style.display="block"
        }
    }
})