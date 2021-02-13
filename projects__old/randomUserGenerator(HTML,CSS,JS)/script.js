const btn = document.querySelector("#btn");
const avatar = document.querySelector("#avatar");
const fullname = document.querySelector("#fullname");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const city = document.querySelector("#city");
const spinner = document.querySelector(".spinner");

btn.addEventListener("click", () => {
  const url = "https://randomuser.me/api/";
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(printError);
});

function handleErrors(res){
  addSpinner();
  if(!res.ok) {
    throw Error(res.status);
  }
  return res;
}

function parseJSON(res){
  return res.json().then((parsedData) =>{
    return parsedData.results[0];
  });
}

function updateProfile(data){
  setTimeout(() =>{
    avatar.src = data.picture.large;
    fullname.textContent = `${data.name.first} ${data.name.last}`;
    username.textContent = data.login.username;
    email.textContent = data.email;
    city.textContent = data.location.city;
    removeSpinner();
  }, 4000);
}

function printError(err){
  console.log("INSIDE displayErrors!");
  console.log(err);
}

function addSpinner(){
  spinner.classList.add("lds-ellipsis");
  btn.textContent = " ";
}

function removeSpinner(){
  spinner.classList.remove("lds-ellipsis");
  btn.textContent = "Next User!";
}






// var btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//   var url = 'https://api.github.com/users/coltasdas';
//   fetch(url)
//   .then(handleErrors)
//   .then(function(request){
//     console.log("EVERYTHING IS FINE!");
//     console.log(request);
//   })
//   .catch(function(error){
//     console.log(error);
//   });
// });

// function handleErrors (request){
//   if(!request.ok) {
//     throw Error(request.status);
//   }
//   return request;
// }