
// if users add a notes, add it to the localstorage.
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){
let addTxt = document.getElementById('addTxt');
let notes = localStorage.getItem("notes");
if(notes == null){
    notesObj = [];
}
else{
    notesObj = JSON.parse(notes);
}
notesObj.push(addTxt.value);
localStorage.setItem("notes", JSON.stringify(notesObj));
addTxt.value="";
console.log(notesObj);
showNotes();
})
// function to show element from local storage.
function showNotes() {
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
        <div class="mx-2 my-2 noteCard card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Node</button>
        </div>
      </div>
        `;
    });
    let noteElm = document.getElementById('notes');
    if(notesObj.length != 0){
        noteElm.innerHTML = html;

    }
    else{
        noteElm.innerHTML = `Nothing in notebook use "Add Notes" to store your note here....`;
    }
}
// function to delete a note
function deleteNote(index) {
    console.log('i am deleting', index);
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}
// let search = document.getElementById('searchtxt');
// search.addEventListener("input", function(){
//     let inputVal = search.value.toLowerCase();
//     console.log('input event is fired!', inputVal);
//     let noteCards = document.getElementsByClassName('noteCard');
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("p")[0].innerText;
//         if (cardTxt.includes(inputval)){
//             element.style.display = "block";
//         }
//         else{
//             element.style.display = "none";
//         }
//     })
// })

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
     //console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        //console.log(cardTxt);
    })
})