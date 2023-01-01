let comments;

async function fetchComents() {
    let data = await fetch('./data.json');
    let result = await data.json();
    return result;
}

async function displayComments() {
    comments = await fetchComents();
    console.log(comments);
}

displayComments();



