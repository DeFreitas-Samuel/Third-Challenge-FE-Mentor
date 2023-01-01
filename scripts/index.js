let comments;
//let commentDiv = document.createElement('div');
let body = document.querySelector('body');

async function fetchComents() {
    let data = await fetch('./data.json');
    let result = await data.json();
    let comments = result.comments;
    return comments;
}

async function displayComments() {
    comments = await fetchComents();

    comments.forEach((comment)=>{

       body.appendChild(createComment(comment));
    })
}

function createComment(comment){
    const commentContainer = document.createElement('div');
    const commentHeader = document.createElement('div');
    const commentUser = document.createElement('p');
    commentUser.innerText = comment.user.username;
    commentHeader.appendChild(commentUser);
    commentContainer.appendChild(commentHeader);
    return commentContainer;
}


displayComments();



