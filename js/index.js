const imgInput = document.querySelector('#image-input');
const imgDisplayer = document.querySelector('.image-displayer');

imgInput.addEventListener('change', () => {
  // console.log(imgInput.files);
  const reader = new FileReader();
  reader.onload = function () {
    const img = new Image();
    img.src = reader.result;
    imgDisplayer.style.backgroundImage = `url(${img.src})`;
  };
  reader.readAsDataURL(imgInput.files[0]);
  imgDisplayer.style.height = '300px';
  imgDisplayer.style.width = '300px';
});

// textarea
const textarea = document.querySelector('.textarea');
textarea.innerHTML = 'Post something';
textarea.addEventListener('focus', () => {
  if (textarea.innerHTML === 'Post something') {
    textarea.innerHTML = '';
  }
});
textarea.addEventListener('blur', () => {
  if (textarea.innerHTML === '') {
    textarea.innerHTML = 'Post something';
  }
});
