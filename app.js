var ul = document.getElementById("uls")
function makeItems(){
    var input = document.getElementById("text")
    var ul = document.getElementById("uls")
    var li = document.createElement("li")
    var text = document.createTextNode(input.value)
    var btn = document.createElement("button")
    var write = document.createTextNode("Remove")
    var editbtn  = document.createElement("button")
    var edit = document.createTextNode("Edit")
    editbtn.appendChild(edit)
    li.appendChild(editbtn)
    btn.appendChild(write)
    li.appendChild(text)
    ul.appendChild(li)
    li.appendChild(btn)
    input.value = ""
    btn.setAttribute("class","remove")
    btn.setAttribute("onclick","removes(this)")
    editbtn.setAttribute("class","edit")
    editbtn.setAttribute("onclick","edit(this)")
    
}
function removes(e){
    e.parentNode.remove()
}
function deletes(){
    ul.innerHTML = ""
}
function edit(e){
    var edit = e.parentNode.childNodes[1].nodeValue
    var p = prompt("Enter edit value",edit)
    e.parentNode.childNodes[1].nodeValue = p
}