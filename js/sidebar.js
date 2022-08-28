const sidebar = document.querySelector('.sidebar');
const postsContainer = document.querySelector('.posts-container');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');

window.addEventListener('resize', (e) => {
  removeSidebarWidth();
});

function removeSidebarWidth() {
  const sidebarWidth = sidebar.getBoundingClientRect().width;
  postsContainer.style.marginLeft = `${sidebarWidth}px`;
}
removeSidebarWidth();

// test
// const imgBtn = document.querySelector('.image-btn');
const imgInput = document.querySelector('#image-input');
const imgDisplayer = document.querySelector('.image-displayer');

imgInput.addEventListener('change', (e) => {
  // console.log(imgInput.files);
  const reader = new FileReader();
  reader.onload = function () {
    const img = new Image();
    img.src = reader.result;
    imgDisplayer.style.backgroundImage = `url(${img.src})`;
    console.log(img.width);
  };
  reader.readAsDataURL(imgInput.files[0]);
  imgDisplayer.style.height = '300px';
  imgDisplayer.style.width = '300px';
});

//
//
//
//
//
//
//
//

// let uploadedImage = '';
// imgInput.addEventListener('change', () => {
//   // console.log(imgInput.value);
//   const reader = new FileReader();
//   reader.addEventListener('load', () => {
//     uploadedImage = reader.result;
//     imgDisplayer.style.backgroundImage = `url(${uploadedImage})`;
//   });
//   reader.readAsDataURL(this.files[0]);
// });

//
//
//
//
//
//
//
//
//

// async function openFile() {
//   let [fileHandle] = await window.showOpenFilePicker();
//   let fileData = await fileHandle.getFile();
//   console.log(fileData);
// }

// imgBtn.addEventListener('click', () => {
//   openFile();
// });
