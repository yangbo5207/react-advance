export const createTab = (containerElement) => {
  const titles = containerElement.querySelector('.titles');
  const contents = containerElement.querySelector('.contents');

  let index = 0;

  titles.onclick = (event) => {
    const activeTitle = event.target;
    const aindex = Number(activeTitle.dataset.index);

    if (aindex !== index) {
      titles.children[index].classList.remove('active');
      contents.children[index].classList.remove('active');

      activeTitle.classList.add('active');
      contents.children[aindex].classList.add('active');
      index = aindex;
    }
  }
}