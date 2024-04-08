const notesContainer = document.getElementById('noteContainer')
const createBtn = document.getElementById('addNote')
let notes = document.querySelectorAll('.input-box')

function showNotes(){
  notesContainer.innerHTML = localStorage.getItem('notes')
}
showNotes();

function updateStorage(){
  localStorage.setItem('notes', notesContainer.innerHTML )
}


createBtn.addEventListener('click' , ()=>{
  let inputBox = document.createElement('p')
inputBox.className = 'input-box bg-slate-500 text-white p-5 m-3 outline-none rounded-md relative w-full max-w-screen-md min-h-fit'
inputBox.setAttribute('contenteditable' , 'true')

let img = document.createElement('img')
img.className = 'w-2 absolute bottom-1 right-1 cursor-pointer'
img.src = "https://static-00.iconduck.com/assets.00/delete-icon-1864x2048-bp2i0gor.png"

inputBox.appendChild(img); // Append the image to the input box
    notesContainer.appendChild(inputBox);
})

notesContainer.addEventListener('click', function(e){
  let parentElement = e.target.parentElement;
  while (parentElement.tagName !== 'P' && parentElement !== notesContainer) {
    parentElement = parentElement.parentElement;
  }
  if (parentElement.tagName === 'P') {
    parentElement.remove();
    updateStorage();
} 
else if(e.target.tagName === 'P'){
    notes = document.querySelectorAll('.input-box');
    notes.forEach(nt => {
      nt.onkeyup = function(){
        updateStorage();
      }
    })
  }
})


