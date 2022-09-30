function mostrarModal(){
    const btnAbrir = document.querySelector(".header_button")
    const Modal = document.querySelector(".containerModal")
    
    btnAbrir.addEventListener("click",(event)=>{
        event.preventDefault()
     Modal.classList.toggle("containerModal")   
     Modal.classList.add("flex")

    })

}
mostrarModal()

function fecharModal(){
    const Modal = document.getElementById("container")
    const btnFechar = document.querySelector(".fecharModal")

    btnFechar.addEventListener("click",(event)=>{
          event.preventDefault()
        Modal.classList.add("containerModal")   
        Modal.classList.toggle("flex")
        
    })
}
fecharModal()
