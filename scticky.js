
const addbox=document.querySelector(".sticky-addbox");
popupbox =document.querySelector(".popup-box");
const closebtn=document.getElementById("closebtn")
const submit=document.querySelector(".notes-submit")
const notetitle=document.querySelector("input");
const notedesc=document.querySelector("textarea");
const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const notes=JSON.parse(localStorage.getItem("notes")||"[]");
addbox.addEventListener("click", () => {
    popupbox.classList.add('show');
});
closebtn.addEventListener("click", () => {
    popupbox.classList.remove('show');
    notetitle.value="";
    notedesc.value="";
});
function showNotes(){
    document.querySelectorAll(".sticky-notes").forEach(note=>note.remove());
    notes.forEach((note) => {
      let liTag =`<li class="sticky-notes">
                <div class="notes-wrap">
                  <p>
                   ${note.title}
                  </p>
                  <span>
                    ${note.description}
                  </span>
                </div>
                <div class="sticky-notes__bottomcnt">
                    <span class="date">${note.date}</span>
                    <div class="sticky-notes___settings">
                        <div class="imagsection">
                         <img src="images/three-dots-ellipsis-svgrepo-com.svg" alt="">

                        </div>
                        <div class="sticky-notes__bottomcnt-update">
                            <div class="edit">
                                <div class="icon">
                                    <img src="images/icons8-edit-24.png" alt="">
                                </div>
                             <div  class="operation">
                                Edit
                             </div>
                            </div>
                            <div class="delete">
                                <img src="images/delete.svg" alt="">
                                <div  class="operation">
                                    Delete
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>`;
            addbox.insertAdjacentHTML("afterend",liTag);
    });

}

submit.addEventListener("click", e => {
    e.preventDefault()
    let inputbox=notetitle.value;
    let areabox=notedesc.value;
    if(inputbox||areabox){
        let dateObj=new Date();
        month= months[dateObj.getMonth()];
        day= dateObj.getDate();
        year= dateObj.getFullYear();
        let notesummery={
            title:inputbox,
            description:areabox,
            date:`${month} ${day},${year}`
        }
       const notes=[];
       notes.push(notesummery)
       localStorage.setItem("notes",JSON.stringify(notes))
       closebtn.click();
       showNotes();
    }
    
});
function showdata(){

}
