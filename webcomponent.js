(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<style>
		:host {
			border-radius: 25px;
			border-width: 4px;
			border-color: black;
			border-style: solid;
		} 
		</style> 
	`;

	class ColoredBox extends HTMLElement {
		constructor() {
			super();
			let shadowRoot = this.attachShadow({mode: "open"});
			shadowRoot.appendChild(template.content.cloneNode(true));
			this.style.height = "100%";
			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});
		}

		set color(newColor) {
			this.style["background-color"] = newColor;
		}

		get color() {
			return this.style["background-color"];
		}
	}

	customElements.define("com-sap-sample-coloredbox", ColoredBox);
})();
