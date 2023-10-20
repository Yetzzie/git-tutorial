const displayNote = document.querySelector('.js-button');
const clearNote = document.querySelector('.js-exit');
const closeButton = document.querySelectorAll('#get-close');
const title = document.querySelector('#get-title');
const paragraph = document.querySelector('#get-paragraph');



function exit() {
  document.querySelector('.pops').classList.remove('active-pops');
}

function openNote() {
  document.querySelector('.pops').classList.add('active-pops');
}

clearNote.addEventListener('click', () => {
  exit();
});

displayNote.addEventListener('click', () => {
  openNote();
});


function putNewContext() {
  let html = `
  <div class="your-note">
  <div class="container container2">
    <span id="get-close">X</span>
    <h2>${title.value}</h2>
    <p>${paragraph.value}</p>
  </div>
</div>
  `;

  return html;
}

document.querySelector('.js-enter-btn').addEventListener('click', () => {
  if(title.value == '') {
    alert('Please input a text');
  } else if(paragraph.value == '') {
    alert('Please input a text')
  } else {
    document.querySelector('#note-container').innerHTML += putNewContext();
  attachCloseListeners();
  }

});

function attachCloseListeners() {
  const closeButtons = document.querySelectorAll('#get-close');
  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.closest('.your-note').remove(); 
    });
  });
}

attachCloseListeners();


  





