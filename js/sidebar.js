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
