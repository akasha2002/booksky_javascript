var add_button=document.getElementById("add_id")
var add_popup=document.querySelector(".pop_over")
var add_pop_class=document.querySelector(".pop_class")

function neww(){
    add_popup.style.display="block"
    add_pop_class.style.display="block"
}

var can_button=document.getElementById("cancel_book")
can_button.addEventListener("click",function(event){
    event.preventDefault()
    add_popup.style.display="none"
    add_pop_class.style.display="none"

})

var container=document.querySelector(".con")
var addbook=document.getElementById("add_book")
var book_t_in =document.getElementById("book_title_input")
var book_a_in =document.getElementById("book_author_input")
var book_d_in =document.getElementById("book_description_input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","boo-con")
    div.innerHTML=`<h2>${book_t_in.value}</h2> 
    <h5>${book_a_in.value}</h5>
            <p>${book_d_in.value}</p>
            <button onclick = dell(event)>Delete</button>`
    container.append(div)
    add_popup.style.display="none"
    add_pop_class.style.display="none"

})

function dell(event){
    event.target.parentElement.remove()

}