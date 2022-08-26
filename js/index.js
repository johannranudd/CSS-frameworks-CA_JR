const sidebar = document.querySelector('.sidebar');
const postsContainer = document.querySelector('.posts-container');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
// console.log(sidebar.getBoundingClientRect().width);

window.addEventListener('resize', (e) => {
  const sidebarWidth = sidebar.getBoundingClientRect().width;
  console.log(sidebarWidth);
  //   postsContainer.style.marginRight = '300px';
});
