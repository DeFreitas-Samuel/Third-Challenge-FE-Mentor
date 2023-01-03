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
       body.appendChild(document.createElement('hr'));
    })

    console.log(comments);
}

function createComment(comment){
    const commentRenderer = document.createElement('div');
    const commentContainer = document.createElement('div');
    const commentHeader = document.createElement('div');
    const commentReplies = document.createElement('div');


    const commentUser = document.createElement('p');

    const commentTimelapse = document.createElement('p');

    const commentProfilePicture = document.createElement('img');

    const commentContent = document.createElement('p');

    const commentScoreContainer = document.createElement('div')
    const commentScore = document.createElement('p')
    const commentButtonPlus = document.createElement('button');
    const commentButtonMinus = document.createElement('button');
    const commentReplyButton = document.createElement('button');



    commentUser.innerText = comment.user.username;
    commentTimelapse.innerText = convertDateToTimeLapse(comment.createdAt);
    commentProfilePicture.src = comment.user.image.png;
    commentContent.innerText = comment.content;
    commentScore.innerText = comment.score;
    commentButtonPlus.innerText = '+';
    commentButtonMinus.innerText = '-';
    commentReplyButton.innerText = 'Reply';

    commentHeader.appendChild(commentProfilePicture);
    commentHeader.appendChild(commentUser);
    commentHeader.appendChild(commentTimelapse);
    commentScoreContainer.appendChild(commentButtonPlus);
    commentScoreContainer.appendChild(commentScore);
    commentScoreContainer.appendChild(commentButtonMinus);
    commentContainer.appendChild(commentHeader);
    commentContainer.appendChild(commentContent);
    commentContainer.appendChild(commentScoreContainer);
    commentContainer.appendChild(commentReplyButton);
    commentRenderer.appendChild(commentContainer);
    commentRenderer.appendChild(commentReplies);

    if(comment.replies){
        comment.replies.forEach(reply => {
            commentReplies.appendChild(createComment(reply));
        })
    }

    return commentRenderer;
}





displayComments();


