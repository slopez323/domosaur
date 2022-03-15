//warmup

const messWithMeSpan = document.querySelector('span.mess-with-me');

messWithMeSpan.style.fontSize = '40px';

const messWithMeP = document.querySelector('p.mess-with-me');

messWithMeP.style.backgroundColor = 'green';

const dinosaur2 = document.querySelector('#hide-me-area');

dinosaur2.style.display = 'none';

const dinosaur1 = document.querySelector('#triceratops');

dinosaur1.style.width = '324px';

//event listener
messWithMeSpan.addEventListener('click', function(){
    messWithMeSpan.style.color = 'orange';
});

dinosaur1.addEventListener('click', function(){
    dinosaur1.style.border = '1px solid red';
});

const dinosaur4 = document.querySelector('#feathers');

dinosaur4.addEventListener('click', function(){
    dinosaur4.style.opacity = '50%';
});

const switchBC = document.querySelector('#toggle');
const row = document.querySelector('#row');

switchBC.addEventListener('click', function(){
    if(row.style.backgroundColor === ''){
        row.style.backgroundColor = 'yellow';
    } else {
        row.style.backgroundColor = '';
    };
});

const dinosaur3 = document.querySelector('#biggify');

dinosaur3.addEventListener('mouseover', function(){
    dinosaur3.style.width = '200px';
});

dinosaur3.addEventListener('mouseout', function(){
    dinosaur3.style.width = '';
});