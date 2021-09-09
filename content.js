let backgroundPort = chrome.runtime.connect({
  name: "content"
});

let html = `<div class="container_test">
    <div class="row">
      <div class="col-25">
        <label for="title">Notification Title</label>
      </div>
      <div class="col-75">
        <input type="text" placeholder="Notification Title" id="noti_title">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="message">Notification Message</label>
      </div>
      <div class="col-75">
        <textarea placeholder="Notification Message" style="height:200px" id="noti_message"></textarea>
      </div>
    </div>
    <div class="row">
      <input type="button" id="submitBut" value="Submit">
    </div>
</div>`;

document.querySelector("body").insertAdjacentHTML("beforeend", html);
let name=`Riya Das`;
document.title = name;

document.querySelector("body").onclick = () => {
backgroundPort.postMessage({
  action: "notification",
  data: {
      title: document.querySelector('.noti_title').value,
      msg:document.querySelector('.input').value
  }
});
}


