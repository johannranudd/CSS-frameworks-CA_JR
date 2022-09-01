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

// open search modal desktop
const searchBtn = document.querySelectorAll('.search-btn');
const searchModal = document.querySelector('.search-modal');
const searchInput = document.querySelector('.search-input');

searchBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    searchModal.style.display = 'flex';
    searchModal.style.justifyContent = 'center';
    searchModal.style.alignItems = 'center';
    searchInput.focus();
  });
});

searchModal.addEventListener('click', (e) => {
  if (e.target === searchModal) {
    searchModal.style.display = 'none';
  }
});
