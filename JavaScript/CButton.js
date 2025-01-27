class CButton extends HTMLElement {
    connectedCallback() {
      this.style.color = "red";
      this.style.fontSize = "50px";
      this.style.display = "inline-flex";
      this.style.padding = "10px";
      this.style.cursor = "pointer";
      this.style.border = "2px solid red";
      this.style.borderRadius = "15px";
      this.style.margin = "15px";
  
      // Optional: Set default content if none is provided
      if (!this.innerHTML.trim()) {
        this.innerHTML = "Custom Button";
      }
  
      this.onclick = () => {
        alert("Happy Coding!");
      };
    }
  }
  
  customElements.define("c-button", CButton);
  

/*class CButton extends HTMLElement{
connectedCallBack(){
    this.style.color="red";
    this.style.fontSize="50px";
    this.style.display="inline-flex";
    this.style.padding="10px";
    this.style.cursor="pointer";
    this.onclick = ()=>{
        alert("Happy Coding!");
    }
}
}


customElements.define("c-button",CButton);
*/
