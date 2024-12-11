async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let j = await response.json();
  return j;
}

async function getPosts() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let j = await response.json();
  return j;
}

async function getComments() {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments");
  let j = await response.json();
  console.log(j);
  return j;
}

async function getRandomPhoto() {
  let response = await fetch("https://api.thecatapi.com/v1/images/search");
  let j = await response.json();
  return j[0].url;
}

async function getRandomUser() {
  let users = await getUsers();
  return users[Math.ceil(Math.random() * 9)].name;
}

async function getRandomPost() {
  let posts = await getPosts();
  return posts[Math.ceil(Math.random() * 99)].body;
}
async function getRandomComment() {
  let comments = await getComments();
  return comments[Math.ceil(Math.random() * 499)].body;
}

//gets all random images
for (let i = 0; i < $(`.post`).length * 3; i++) {
  getRandomPhoto().then(function (json) {
    console.log(json);
    $(`#img${i + 1}`).attr("src", json);
  });
}

//gets all random names
for (let i = 0; i < $(`.post`).length * 2; i++) {
  getRandomUser().then(function (json) {
    console.log(json);
    $(`#name${i + 1}`).html(json);
  });
}

//gets all random post bodies
for (let i = 0; i < $(`.post`).length; i++) {
  getRandomPost().then(function (json) {
    console.log(json);
    $(`#post-body${i + 1}`).html(json);
  });
}

//gets all random comment bodies
for (let i = 0; i < $(`.post`).length; i++) {
  getRandomComment().then(function (json) {
    console.log(json);
    $(`#comment-body${i + 1}`).html(json);
  });
}
//fake serach bar
//https://stackoverflow.com/questions/18160342/jquery-how-to-trigger-click-event-on-pressing-enter-key
$("#search").keypress(function (e) {
  var key = e.which;
  if (key == 13) {
    alert("This doesn't work! Refresh the page for more cats.")
  }
});   