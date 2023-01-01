let comments;
//let commentDiv = document.createElement('div');
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
    commentUser.innerText = comment.user.username;
    commentTimelapse.innerText = convertDateToTimeLapse(comment.createdAt);
    commentHeader.appendChild(commentUser);
    commentHeader.appendChild(commentTimelapse);
    commentContainer.appendChild(commentHeader);
    return commentContainer;
}


function convertDateToTimeLapse(timeString){
    const currentDateObject = new Date();
    const commentTime = new Date(timeString);
    const currentYear = currentDateObject.getFullYear();
    const currentMonth = currentDateObject.getMonth()+1;
    const currentDay = currentDateObject.getDate();

    const commentTimeYear = commentTime.getFullYear();
    const commentTimeMonth = commentTime.getMonth()+1;
    const commentTimeDay = commentTime.getDate();

    if(currentYear > commentTimeYear){
        return `${currentYear - commentTimeYear} year ago`
    }

    //console.log(`${commentTimeYear} ${commentTimeMonth} ${commentTimeDay}`);
    //console.log(commentTime);
    //return `${commentTimeYear} ${commentTimeMonth} ${commentTimeDay}`;



}


displayComments();
convertDateToTimeLapse();


