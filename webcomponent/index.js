class MyClicker extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const button = document.createElement("button");
    button.textContent = "Click me";
    button.addEventListener("click", () => {
      console.log("MyClicker clicked!");
    });
    shadow.appendChild(button);
  }

  connectedCallback() {
    console.log("MyClicker connected to the DOM!");
  }

  disconnectedCallback() {
    console.log("MyClicker disconnected from the DOM!");
  }
}

customElements.define("my-clicker", MyClicker);
