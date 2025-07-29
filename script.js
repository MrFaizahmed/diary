// const addBox = document.querySelector(".add-box"),
//   popupBox = document.querySelector(".popup-box"),
//   popupTitle = popupBox.querySelector("header p"),
//   closeIcon = popupBox.querySelector("header i"),
//   titleTag = popupBox.querySelector("input"),
//   descTag = popupBox.querySelector("textarea"),
//   addBtn = popupBox.querySelector("button");

// // Array of month names
// const months = ["January", "February", "March", "April", "May", "June", "July",
//   "August", "September", "October", "November", "December"];

// // Retrieve notes from localStorage or initialize an empty array
// const notes = JSON.parse(localStorage.getItem("notes") || "[]");

// // Flags and ID for note updates
// let isUpdate = false, updateId;

// // Open the popup box to add a new note
// addBox.addEventListener("click", () => {
//   popupTitle.innerText = "Add a new Note";
//   addBtn.innerText = "Add Note";
//   popupBox.classList.add("show");
//   document.querySelector("body").style.overflow = "hidden";
//   if (window.innerWidth > 660) titleTag.focus();
// });

// // Close the popup box and reset fields
// closeIcon.addEventListener("click", () => {
//   isUpdate = false;
//   titleTag.value = descTag.value = "";
//   popupBox.classList.remove("show");
//   document.querySelector("body").style.overflow = "auto";
// });

// // Display existing notes from localStorage
// function showNotes() {
//   if (!notes) return;
//   document.querySelectorAll(".note").forEach(li => li.remove());
//   notes.forEach((note, id) => {
//     let filterDesc = note.description.replaceAll("\n", '<br/>');
//     let liTag = `<li class="note">
//                         <div class="details">
//                             <p>${note.title}</p>
//                             <span>${filterDesc}</span>
//                         </div>
//                         <div class="bottom-content">
//                             <span>${note.date}</span>
//                             <div class="settings">
//                                 <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
//                                 <ul class="menu">
//                                     <li onclick="updateNote(${id}, '${note.title}', '${filterDesc}')"><i class="uil uil-pen"></i>Edit</li>
//                                     <li onclick="deleteNote(${id})"><i class="uil uil-trash"></i>Delete</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </li>`;
//     addBox.insertAdjacentHTML("afterend", liTag);
//   });
// }

// showNotes();

// // Show menu options for each note
// function showMenu(elem) {
//   elem.parentElement.classList.add("show");
//   document.addEventListener("click", e => {
//     if (e.target.tagName != "I" || e.target != elem) {
//       elem.parentElement.classList.remove("show");
//     }
//   });
// }

// // Delete a specific note
// function deleteNote(noteId) {
//   let confirmDel = confirm("Are you sure you want to delete this note?");
//   if (!confirmDel) return;
//   notes.splice(noteId, 1);
//   localStorage.setItem("notes", JSON.stringify(notes));
//   showNotes();
// }

// Update a specific note
function updateNote(noteId, title, filterDesc) {
  let description = filterDesc.replaceAll('<br/>', '\r\n');
  updateId = noteId;
  isUpdate = true;
  addBox.click();
  titleTag.value = title;
  descTag.value = description;
  popupTitle.innerText = "Update a Note";
  addBtn.innerText = "Update Note";
}

// // Add or update a note on button click
// addBtn.addEventListener("click", e => {
//   e.preventDefault();
//   let title = titleTag.value.trim(),
//     description = descTag.value.trim();
// }
// );


//   if (title || description) {
//     let currentDate = new Date(),
//       month = months[currentDate.getMonth()],
//       day = currentDate.getDate(),
//       year = currentDate.getFullYear();

//     let noteInfo = { title, description, date: ${month} ${day}, ${year} }
//     if (!isUpdate) {
//       notes.push(noteInfo);
//     } else {
//       isUpdate = false;
//       notes[updateId] = noteInfo;
//     }
//     localStorage.setItem("notes", JSON.stringify(notes));
//     showNotes();
//     closeIcon.click();
//   }
 ///);

// new //

// const addBox = document.querySelector(".add-box"),
//       popupBox = document.querySelector(".popup-box"),
//       popupTitle = popupBox.querySelector("header p"),
//       closeIcon = popupBox.querySelector("header i"),
//       titleTag = popupBox.querySelector("input"),
//       descTag = popupBox.querySelector("textarea"),
//       addBtn = popupBox.querySelector("button");

// let isUpdate = false, updateId;
// let notes = JSON.parse(localStorage.getItem("notes") || "[]");

// addBox.addEventListener("click", () => {
//     titleTag.value = descTag.value = "";
//     popupTitle.innerText = "Add a new Note";
//     addBtn.innerText = "Add Note";
//     popupBox.classList.add("show");
// });

// closeIcon.addEventListener("click", () => {
//     isUpdate = false;
//     popupBox.classList.remove("show");
// });

// function showNotes() {
//     document.querySelectorAll(".note").forEach(note => note.remove());
//     notes.forEach((note, index) => {
//         let liTag = `<li class="note">
//             <div class="details">
//                 <p>${note.title}</p>
//                 <span>${note.description}</span>
//             </div>
//             <div class="bottom-content">
//                 <span>${new Date().toLocaleDateString()}</span>
//                 <div class="settings">
//                     <i onclick="editNote(${index}, '${note.title}', '${note.description}')" class="uil uil-pen"></i>
//                     <i onclick="deleteNote(${index})" class="uil uil-trash"></i>
//                 </div>
//             </div>
//         </li>`;
//         addBox.insertAdjacentHTML("afterend", liTag);
//     });
// }

// showNotes();

// addBtn.addEventListener("click", e => {
//     e.preventDefault();
//     let noteTitle = titleTag.value.trim(),
//         noteDesc = descTag.value.trim();

//     if (noteTitle || noteDesc) {
//         let noteInfo = { title: noteTitle, description: noteDesc };
//         if (!isUpdate) {
//             notes.push(noteInfo);
//         } else {
//             notes[updateId] = noteInfo;
//             isUpdate = false;
//         }
//         localStorage.setItem("notes", JSON.stringify(notes));
//         closeIcon.click();
//         showNotes();
//     }
// });

// function deleteNote(noteId) {
//     notes.splice(noteId, 1);
//     localStorage.setItem("notes", JSON.stringify(notes));
//     showNotes();
// }

// function editNote(noteId, title, desc) {
//     updateId = noteId;
//     isUpdate = true;
//     addBox.click();
//     titleTag.value = title;
//     descTag.value = desc;
//     popupTitle.innerText = "Update Note";
//     addBtn.innerText = "Update Note";
// }


// extra  //

// Select elements
// const addBox = document.querySelector(".add-box"),
//       popupBox = document.querySelector(".popup-box"),
//       popupTitle = popupBox.querySelector("header p"),
//       closeIcon = popupBox.querySelector("header i"),
//       titleTag = popupBox.querySelector("input"),
//       descTag = popupBox.querySelector("textarea"),
//       addBtn = popupBox.querySelector("button");

// let isUpdate = false, updateId;
// let notes = JSON.parse(localStorage.getItem("notes") || "[]");

// // Open popup to add a new note
// addBox.addEventListener("click", () => {
//     titleTag.value = descTag.value = "";
//     isUpdate = false;
//     popupTitle.innerText = "Add a new Note";
//     addBtn.innerText = "Add Note";
//     popupBox.classList.add("show");
// });

// // Close popup
// closeIcon.addEventListener("click", () => {
//     popupBox.classList.remove("show");
// });

// // Save or update note
// addBtn.addEventListener("click", e => {
//     e.preventDefault();
//     let noteTitle = titleTag.value.trim(),
//         noteDesc = descTag.value.trim();

//     if (noteTitle || noteDesc) {
//         let noteInfo = { title: noteTitle, description: noteDesc };

//         if (!isUpdate) {
//             notes.push(noteInfo); // Add new note
//         } else {
//             notes[updateId] = noteInfo; // Update existing note
//             isUpdate = false;
//         }

//         localStorage.setItem("notes", JSON.stringify(notes));
//         closeIcon.click(); // Hide popup
//         showNotes(); // Refresh note list
//     }
// });

// // Display notes
// function showNotes() {
//     document.querySelectorAll(".note").forEach(note => note.remove());

//     notes.forEach((note, index) => {
//         // Escape single quotes in title/description for safe HTML embedding
//         const safeTitle = note.title.replace(/'/g, "\\'");
//         const safeDesc = note.description.replace(/'/g, "\\'");

//         let liTag = `<li class="note">
//             <div class="details">
//                 <p>${note.title}</p>
//                 <span>${note.description.replace(/\n/g, '<br/>')}</span>
//             </div>
//             <div class="bottom-content">
//                 <span>${new Date().toLocaleDateString()}</span>
//                 <div class="settings">
//                     <i onclick="editNote(${index}, '${safeTitle}', '${safeDesc}')" class="uil uil-pen"></i>
//                     <i onclick="deleteNote(${index})" class="uil uil-trash"></i>
//                 </div>
//             </div>
//         </li>`;
//         addBox.insertAdjacentHTML("afterend", liTag);
//     });
// }

// // Delete note
// function deleteNote(noteId) {
//     notes.splice(noteId, 1);
//     localStorage.setItem("notes", JSON.stringify(notes));
//     showNotes();
// }

// // Edit existing note
// function editNote(noteId, title, desc) {
//     updateId = noteId;
//     isUpdate = true;
//     addBox.click();
//     titleTag.value = title;
//     descTag.value = desc.replaceAll('<br/>', '\n'); // Clean up line breaks
//     popupTitle.innerText = "Update Note";
//     addBtn.innerText = "Update Note";
// }

// // Show notes on page load
// showNotes();



// update 2 //
const addBox = document.querySelector(".add-box"),
      popupBox = document.querySelector(".popup-box"),
      popupTitle = popupBox.querySelector("header p"),
      closeIcon = popupBox.querySelector("header i"),
      titleTag = popupBox.querySelector("input"),
      descTag = popupBox.querySelector("textarea"),
      addBtn = popupBox.querySelector("button");

let notes = JSON.parse(localStorage.getItem("notes") || "[]");
let isUpdate = false;
let updateId = null;

// Show notes
function showNotes() {
  const existingNotes = document.querySelectorAll(".note");
  existingNotes.forEach(note => note.remove());

  notes.forEach((note, index) => {
    const noteHTML = `
      <li class="note">
        <div class="details">
          <p>${note.title}</p>
          <span>${note.description.replace(/\n/g, "<br/>")}</span>
        </div>
        <div class="bottom-content">
          <span>${new Date().toLocaleDateString()}</span>
          <div class="settings">
            <i class="uil uil-pen" onclick="editNote(${index})"></i>
            <i class="uil uil-trash" onclick="deleteNote(${index})"></i>
          </div>
        </div>
      </li>`;
    addBox.insertAdjacentHTML("afterend", noteHTML);
  });
}

// Open popup for new note
addBox.addEventListener("click", () => {
  titleTag.value = descTag.value = "";
  isUpdate = false;
  updateId = null;
  popupTitle.innerText = "Add a new Note";
  addBtn.innerText = "Add Note";
  popupBox.classList.add("show");
});

// Close popup
closeIcon.addEventListener("click", () => {
  popupBox.classList.remove("show");
  isUpdate = false;
  updateId = null;
});

// Add or update note
addBtn.addEventListener("click", e => {
  e.preventDefault();
  let noteTitle = titleTag.value.trim(),
      noteDesc = descTag.value.trim();

  if (noteTitle || noteDesc) {
    const noteObj = {
      title: noteTitle,
      description: noteDesc
    };

    if (isUpdate && updateId !== null) {
      notes[updateId] = noteObj; // Update existing note
    } else {
      notes.push(noteObj); // Add new note
    }

    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
    closeIcon.click();
  }
});

// Delete note
function deleteNote(noteIndex) {
  notes.splice(noteIndex, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

// Edit note
window.editNote = function(noteIndex) {
  isUpdate = true;
  updateId = noteIndex;
  let note = notes[noteIndex];
  titleTag.value = note.title;
  descTag.value = note.description;
  popupTitle.innerText = "Update Note";
  addBtn.innerText = "Update Note";
  popupBox.classList.add("show");
};

// Initial load
showNotes();









