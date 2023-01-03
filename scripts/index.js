import {convertDateToTimeLapse} from "./convertDateToTimelapse.js";

let comments;
let body = document.querySelector('body');

async function fetchComments() {
    let data = await fetch('./data.json');
    let result = await data.json();
    let comments = result.comments;
    return comments;
}

async function displayComments() {
    comments = await fetchComments();

    comments.forEach((comment)=>{

       body.appendChild(createComment(comment));
    })

    console.log(comments);
}

function createComment(comment){
    const commentContainer = document.createElement('div');
    const commentHeader = document.createElement('div');
    const commentUser = document.createElement('p');
    const commentTimelapse = document.createElement('p');
    const commentProfilePictureContainer = document.createElement('div');
    const commentProfilePicture = document.createElement('img');

    commentUser.innerText = comment.user.username;
    commentTimelapse.innerText = convertDateToTimeLapse(comment.createdAt);

    commentHeader.appendChild(commentUser);
    commentHeader.appendChild(commentTimelapse);
    commentContainer.appendChild(commentHeader);
    return commentContainer;
}





displayComments();


