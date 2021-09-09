chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "background") {
    port.onMessage.addListener((request) => {
      if (request.type === "contentLoaded") {
        port.postMessage({
          type: "alert",
          msg: text,
        });
      }
    });
  }

  if (port.name === "background_2") {
    port.onMessage.addListener((request) => {
      if (request.type === "popup") {
        chrome.tabs.query({url: ["https://*.stackoverflow.com/*"]}, function (tabs) {
          chrome.tabs.sendMessage(
            tabs[0].id,
            {
              type: "alert",
              msg: "Hey i am from background",
            },
            function (response) {
              console.log(response);
            }
          );
        });
      }
    });
  }
});