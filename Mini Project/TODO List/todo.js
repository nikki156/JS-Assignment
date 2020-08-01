
const button1 = document.querySelector('#btn-1');
const button2 = document.querySelector('#btn-2');
const list = document.querySelector('#list');

//add items
button1.onclick = function(){
    let item = document.querySelector("#todo").value;

    console.log(item, typeof(item));

    let text = document.createTextNode(item);
    console.log(text);
    let listItem = document.createElement('li');
    listItem.appendChild(text);
    list.appendChild(listItem);
    document.forms.myForm.reset();
}





//remove items
button2.onclick = function removeAll(){
    let lst = document.getElementsByTagName("ol");
      lst[0].innerHTML = "";
  }

