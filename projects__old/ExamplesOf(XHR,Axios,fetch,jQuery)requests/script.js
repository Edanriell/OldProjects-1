const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

const xhrBtn = document.querySelector("#xhr");
const fetchBtn = document.querySelector("#fetch");
const jQueryBtn = document.querySelector("#jquery");
const axiosBtn = document.querySelector("#axios");
const quoteField = document.querySelector("#quote");

//check data  !!!

// XHR
xhrBtn.addEventListener("click", () => {
  const XHR = new XMLHttpRequest;

  XHR.onreadystatechange = () => {
    if(XHR.readyState == 4 && XHR.status == 200){
      let data = JSON.parse(XHR.responseText)[0];
      quoteField.textContent = `${data}`;
    }
  };
  XHR.open("GET", url);
  XHR.send();
});

// FETCH
fetchBtn.addEventListener("click", () => {
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateQuote)
  .catch(printError);
});

function handleErrors(res){
  if(!res.ok) {
    throw Error(res.status);
  }
  return res;
}

function parseJSON(res){
  return res.json().then((parsedData) =>{
    return parsedData[0];
  });
}

function updateQuote(data){
  quoteField.textContent = `${data}`;
  // $('#quote').text(data[0]); jQuery
}

function printError(err){
  console.log(err);
}

// jQuery
$(jQueryBtn).click(() => {
  $.ajax({
    method: "GET",
    url: url
  })
  .done(updateQuote)
  .fail(() => {
    console.log("OOPS! Something went wrong..");
  });
});

//Axios
axiosBtn.addEventListener("click", sendRequest);

function sendRequest(){
  axios.get(url)
  .then(updateQuoteAxios)
  .catch(handleErrorsAxios)
 }

function updateQuoteAxios(res){
  quoteField.textContent = `${res.data[0]}`;
}

function handleErrorsAxios(err) {
    if (err.response) {
      console.log("Problem With Response ", err.response.status);
    } else if (err.request) {
      console.log("Problem With Request!");
    } else {
      console.log('Error', err.message);
    }
  }


  // Bit shorter way

//   var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
// var xhrbtn = document.querySelector("#xhr");
// var fetchbtn = document.querySelector("#fetch");
// var axiosbtn = document.querySelector("#axios");
// var display = document.querySelector("#quote");

// xhrbtn.addEventListener("click", function(){
//   var XHR = new XMLHttpRequest();
//   XHR.onreadystatechange = function(){
//     if(XHR.readyState == 4 && XHR.status == 200){
//       var quote = JSON.parse(XHR.responseText)[0];
//       display.innerText = quote;
//     }
//   }
//   XHR.open("GET", url);
//   XHR.send();
// });


// fetchbtn.addEventListener("click", function(){
//   fetch(url)
//   .then(function(req){
//     req.json().then(function(data){
//       display.innerText = data[0];
//     })
//   })
//   .catch(function(){
//     alert("ERROR!")
//   })
// });



// $('#jquery').click(function(){
//   $.getJSON(url)
//   .done(function(data){
//     $('#quote').text(data[0]);
//   });
// });


// axiosbtn.addEventListener("click",function(){
//   axios.get(url)
//   .then(function(res){
//     display.innerText = res.data[0];
//   })
//   .catch(function(){
//     alert("ERROR!");
//   })
// });