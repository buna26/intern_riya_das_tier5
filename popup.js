let backgroundPort = chrome.runtime.connect({
  name: "backgroundConnection",
});

let Search = document.getElementById("search");
let Print = document.getElementById("print");

submit.addEventListener("click", async () => {
  var message = document.getElementById('input').value;
  console.log(message);
    backgroundPort.postMessage({
      type: "popup",
    msg: message,
  });
});

print.addEventListener('click',async()=>{
  backgroundPort.postMessage({
    type:"print",
  })
})