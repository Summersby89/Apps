let shareBtns = document.querySelectorAll('[data-sharer]');
let shareURL = window.location.href;

let shareTextInput = document.querySelector('[data-share-title]');
let shareTitle = shareTextInput.value;

for (let i = 0; i < shareBtns.length; i++) {
  shareBtns[i].setAttribute('data-url', shareURL);

  shareBtns[i].onclick = function(e) {
    e.preventDefault();
  }
}

function giveTitle(text) {
  for (let i = 0; i < shareBtns.length; i++) {
    shareBtns[i].setAttribute('data-title', text);
  }
}

giveTitle(shareTitle);

shareTextInput.addEventListener('input', function() {
  shareTitle = shareTextInput.value;
  
  giveTitle(shareTitle);
});
