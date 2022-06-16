export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabConcent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabConcent.forEach((section) => section.classList.remove('ativo'));
    tabConcent[index].classList.add('ativo');
  }

  if (tabMenu.length && tabConcent.length) {
    tabConcent[0].classList.add('ativo');
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
