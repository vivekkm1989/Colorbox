(function()  {
    let d3Script = document.createElement('script');
    d3Script.src = 'https://d3js.org/d3.v5.min.js';
    d3Script.async = false;
    document.head.appendChild(d3Script);

    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <style>
    :host {
        border-radius: 25px;
        border-width: 4px;
        border-color: black;
        border-style: solid;
    } 
    </style> 
    `;

    d3Script.onload = () => 

    customElements.define('com-infy-colorbox-solution', class Gauge extends HTMLElement {


        disconnectedCallback () {
            // your cleanup code goes here
            try{
                document.head.removeChild(d3Script);
            }
            catch{}
            }
    
        constructor() {
            super();
            //Constants
            if (!window._d3){
                window._d3 = d3;
            }
            
            this._shadowRoot = this.attachShadow({mode: 'open'});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.style.height = "100%";  //Beta Workaround
            //this._svgContainer;
    
     

            //Adding event handler for click events
            this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});
        };

        //Getters and Setters
        set color(newColor) {
			this.style["background-color"] = newColor;
		}

		get color() {
			return this.style["background-color"];
		}


    
    
    });
    customElements.define("com-infy-colorbox-solution", ColoredBox);   
})();