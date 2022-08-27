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
