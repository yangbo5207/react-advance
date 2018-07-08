import './styles/RA5_01.css';

const titles = document.querySelector('.titles');
const contents = document.querySelector('.contents');

let index = 0;

titles.onclick = (event) => {
  const activeTitle =  event.target;
  const aindex = Number(activeTitle.dataset.index);
  
  if (aindex !== index) {
    titles.children[index].classList.remove('active');
    contents.children[index].classList.remove('active');
    
    activeTitle.classList.add('active');
    contents.children[aindex].classList.add('active');
    index = aindex;
  }
}