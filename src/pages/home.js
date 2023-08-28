window.addEventListener("load", function (e) {
  const $ = this.document.querySelector.bind(this.document);
  const $$ = this.document.querySelectorAll.bind(this.document);

  const app = {
    initApp: async function () {
      // fetch data init app here
    },
    eventListener: async function () {
      // click event
      document.addEventListener("click", function (e) {
        if (e.target.matches("--css selector--")) {
          //handle click event
        }
        if (e.target.matches("--css selector--")) {
          //handle click event
        }
        if (e.target.matches("--css selector--")) {
          //handle click event
        }
        if (e.target.matches("--css selector--")) {
          //handle click event
        }
        if (e.target.matches("--css selector--")) {
          //handle click event
        }
      });

      // other event: submit, keyup ...
    },
    run: function () {
      this.initApp();
      this.eventListener();
    },
  };
});
