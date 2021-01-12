console.log("welcome tonote app")
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes")
    if (notes == null)
        notesObj = [];
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    console.log(notesObj)
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null)
        notesObj = [];
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;>
     <div class=" card-body">
     <h5 class="card-title">Note</h5>
     <p class="card-text">${element}</p>
     <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</a>
 </div>`
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length!= 0)
        notesElm.innerHTML = html;
        else
        {
            notesElm.innerHTML=`nothing to show`;
        }
      

            
}


function deleteNote(index){
    console.log("i am deleting",index);
    let notes = localStorage.getItem("notes");
    if (notes == null)
        notesObj = [];
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}


let search=document.getElementById("searchText");
search.addEventListener('input',function(){
    let inputVal = search.value.toLowerCase();
    let noteCard=document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(e){
        let cardText=e.getElementsByTagName("p")[0].innerText;
        if(cardText.includes(inputVal)){
            e.style.dispay='block';
        }
        else
        {
        e.style.dispay='none';
        }


    });

})
