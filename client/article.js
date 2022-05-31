import urlEnd from './index'

const newTitle = document.getElementById('newTitle')
const newName = document.getElementById('newName')
const newBody = document.getElementById('newBody')

//have a standard article.html//
//fetch the data dynamically
//redirect to article.html//
//e.target.url_end for api
//perhaps module.export

function getArticle(){
    fetch(`http://localhost:3000/${urlEnd}`)
        .then(r => r.json())
        .then(appendArticle)
        .catch(console.warn)
};

// function appendArticle() {

// }

console.log(urlEnd)