const titleField = document.getElementById('titleField')
const nameField = document.getElementById('nameField')
const bodyField = document.getElementById('bodyField')
const postBtn = document.getElementById('postBtn')
const form = document.getElementById('form')

const newPage = document.getElementById('newPage')


form.addEventListener('submit', postArticle);

async function postArticle(e){
    e.preventDefault()
    const month = new Date()
    const monthNum = month.getMonth() + 1
    const day = new Date()
    const dayNum = day.getDate()

    const urlEnd = `${e.target.titleField.value}-${monthNum}-${dayNum}`
    console.log(urlEnd)
    try {
    const articleData = {
        title: e.target.titleField.value,
        name: e.target.nameField.value,
        body: e.target.bodyField.value,
        url_end: e.target.titleField.value
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(articleData),
        headers: { "Content-Type": "application/json" }
    }
    const response = await fetch('http://localhost:3000/', options)
    const data = await response.json()
    appendPost(data)
} catch (err) {
    console.warn(err)
}
    
    // fetch('http://localhost:3000/', options)
    //     .then(r => r.json())
    //     .then(appendPost)
    //     .then(() => e.target.reset())
    //     .catch(console.warn)
}

function appendPost(postData){
    const newUl = document.createElement('ul');
    const newTitle = document.createElement('ul');
    newTitle.textContent = postData.title
    const newName = document.createElement('ul');
    newName.textContent = postData.name
    const newBody = document.createElement('ul');
    newBody.textContent = postData.body
    newUl.appendChild(newTitle)
    newUl.appendChild(newName)
    newUl.appendChild(newBody)
    form.append(newUl);
};

newPage.addEventListener('click', goNewPage)

function goNewPage(e) {
    e.preventDefault()
    const newUrl = "https://google.co.uk/"
    window.location.replace(newUrl);
}

