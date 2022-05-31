const titleField = document.getElementById('titleField')
const nameField = document.getElementById('nameField')
const bodyField = document.getElementById('bodyField')
const postBtn = document.getElementById('postBtn')
const form = document.getElementById('form')
// const textarea = document.getElementById("bodyField")
const postArea = document.getElementById("postArea")

const newPage = document.getElementById('newPage')
const month = new Date()
const monthNum = month.getMonth() + 1
const day = new Date()
const dayNum = day.getDate()
    
form.addEventListener('submit', postArticle);

async function postArticle(e){
    e.preventDefault()
    const unformattedUrlEnd = `${titleField.value}-${monthNum}-${dayNum}`
    const urlEnd = unformattedUrlEnd.replaceAll(' ', '-');
    console.log(urlEnd)
    try {
    const articleData = {
        title: e.target.titleField.value,
        name: e.target.nameField.value,
        body: e.target.bodyField.value,
        url_end: urlEnd
    }
    console.log(articleData)
    const options = {
        method: 'POST',
        body: JSON.stringify(articleData),
        headers: { "Content-Type": "application/json" }
    }
    const response = await fetch('http://localhost:3000/', options)
    const data = await response.json()
    window.location.hash = `${data.url_end}`;
    form.style.display = 'none'
    // appendPost(data)
    } catch (err) {
        console.warn(err)
    }
}

function appendPost(postData){
    console.log(postData)
    // const newUl = document.createElement('ul');
    const newTitle = document.createElement('h2');
    newTitle.textContent = postData.title
    newTitle.id = 'newTitle'
    const newName = document.createElement('h4');
    newName.textContent = postData.name
    newName.id = 'newName'
    const newBody = document.createElement('p');
    newBody.textContent = postData.body
    newBody.id = 'newBody'
    postArea.appendChild(newTitle);
    postArea.appendChild(newName);
    postArea.appendChild(newBody);
};

async function loadArticle(e) {
    e.preventDefault();
    const newUrlEnd = window.location.hash.substring(1);
    console.log(newUrlEnd)
    const response = await fetch(`http://localhost:3000/${newUrlEnd}`);
    const postData = await response.json();
    form.style.display = 'none'
    appendPost(postData);
}

window.addEventListener("hashchange", loadArticle);

//Resizes text area to fit content
bodyField.addEventListener("input", function (e) {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});

titleField.addEventListener("input", function (e) {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });