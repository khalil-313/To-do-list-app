let addBtn = document.querySelector('button');
let taskList = document.querySelector('ul');
let inpot = document.querySelector('input');

addBtn.addEventListener('click' , ()=>{
  let text = inpot.value;
  let task = creatTask(text)
  task.innerHTML+='<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></i></span>'
  taskList.appendChild(task)
  inpot.value= ''
})

taskList.addEventListener('click',(e)=>{
  if(e.target.nodeName ==='I'){
    e.target.parentElement.parentElement.style = 'display : none';
  }
  if(e.target.nodeName === 'LI'){
     e.target.classList.toggle('done');
  }
})

function creatTask(text){
  let li = document.createElement('li');
  li.textContent = text;
  return li;
}
