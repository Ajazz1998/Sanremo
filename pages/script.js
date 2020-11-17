const thumbImgCont = document.getElementById('thumbnail-section');
const thumbnails = document.getElementsByClassName('thumbnail');
const fullSizeImgs = document.getElementsByClassName('mySlides');

let currentImage = 0; 

function reset() {
  for (let img of fullSizeImgs) {
    img.classList.remove('show');
  }
  for (let thumbs of thumbnails) {
    thumbs.firstElementChild.classList.remove('active');
  }
}

thumbImgCont.addEventListener('click', (e) => {
  reset();
  // Find index of thumbnail clicked
  const index = [...thumbnails].indexOf(e.target.parentNode);
  // Use that index to show its corrolating larger IMG
  fullSizeImgs[index].classList.add('show');

  // Set global variable for currentImage
  currentImage = index;
  
  // Alter the thumbnail to show it's selected
  hiLiteThumbnail();
})

function hiLiteThumbnail() {
  let thumbnail = thumbnails[currentImage].firstElementChild;
  thumbnail.classList.add('active');
}

// Get Arrow Advancers to work
function goBack(e) {
  reset();
  if (e.target.classList.contains("prev") && currentImage > 0) {
    currentImage -= 1;
    fullSizeImgs[currentImage].classList.add('show');
    hiLiteThumbnail();
  } else if (e.target.classList.contains("prev") && currentImage === 0) {
    currentImage = thumbnails.length-1;
    fullSizeImgs[currentImage].classList.add('show');
    hiLiteThumbnail();
  }
}

function goFwd(e) {
  reset();
  if (e.target.classList.contains("next") && currentImage < thumbnails.length-1) {
    currentImage += 1;
    fullSizeImgs[currentImage].classList.add('show');
    hiLiteThumbnail(); 
  } else if (e.target.classList.contains("next") && currentImage === thumbnails.length-1) {
    currentImage = 0;
    fullSizeImgs[currentImage].classList.add('show');
    hiLiteThumbnail();  
  }
}
