'use strict';
 let array=[];

function Subject(name,title,subject,content,day,month,year,image){
  this.name=name;
  this.title=title;
  this.subject=subject;
  this.content=content;
  this.day=day;
  this.month=month;
  this.year=year;
  this.like=generaterandomlikes();
  this.id=generaterandomid();
  this.image='./image'+`${image}`;
  array.push(this);
}

function generaterandomid(){
  return Math.ceil(Math.random()*10);
}
function generaterandomlikes(){
  return Math.ceil(Math.random()*500);
}

let div=document.getElementById('display');

Subject.prototype.renderresult=function(){
  let unorederlist=document.createElement('ul');

  let nameorder=document.createElement('li');
  nameorder.textContent=this.name;
  unorederlist.appendChild(nameorder);
  let imageorder=document.createElement('img');
  imageorder.textContent=this.image;
  unorederlist.appendChild(imageorder);
  let titleorder=document.createElement('li');
  titleorder.textContent=this.title;
  unorederlist.appendChild(titleorder);

  let subjectorder=document.createElement('li');
  subjectorder.textContent=this.subject;
  unorederlist.appendChild(subjectorder);

  let dayorder=document.createElement('li');
  dayorder.textContent=this.day+'/'+this.month+'/'+this.year;
  unorederlist.appendChild(dayorder);

  let likes=document.createElement('li');
  likes.textContent=this.like;
  unorederlist.appendChild(likes);

  let contentorder=document.createElement('li');
  contentorder.textContent=this.content;
  unorederlist.appendChild(contentorder);

  div.appendChild(unorederlist);
};

let form=document.getElementById('regester');

form.addEventListener('submit',articles);

function articles(event){
  event.preventDefault();
  let name=event.target.authorname.value;
  let title=event.target.articletitle.value;
  let subject=event.target.subject.value;
  let content=event.target.content.value;
  let day=event.target.day.value;
  let month=event.target.month.value;
  let year=event.target.year.value;
  let newsubject= new Subject(name,title,subject,content,day,month,year);
  newsubject.renderresult();
  localStorage.setItem('subject',JSON.stringify(array));
}

function cheaklocalstorage(){
  if(localStorage.getItem('subject')){
    array=JSON.parse(localStorage.getItem('subject'));
  }
}
function renderallarticles(){
  let unorederlist=document.createElement('ul');

  for (let index = 0; index < array.length; index++) {

    let titleorder=document.createElement('li');
    titleorder.textContent=array[index].title;
    unorederlist.appendChild(titleorder);

    let nameorder=document.createElement('li');
    nameorder.textContent='author'+array[index].name;
    unorederlist.appendChild(nameorder);

    let dayorder=document.createElement('li');
    dayorder.textContent=array[index].day+'/'+array[index].month+'/'+array[index].year;
    unorederlist.appendChild(dayorder);
    let subjectorder=document.createElement('li');
    subjectorder.textContent=array[index].subject;
    unorederlist.appendChild(subjectorder);

    let likes=document.createElement('li');
    likes.textContent=array[index].like;
    unorederlist.appendChild(likes);
    let contentorder=document.createElement('li');
    contentorder.textContent=array[index].content;
    unorederlist.appendChild(contentorder);

  }
  div.appendChild(unorederlist);
}
cheaklocalstorage();
renderallarticles();
