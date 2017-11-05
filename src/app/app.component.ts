import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mySelection: String;
  annotations: Array<any> = [];

  constructor() {

  	this.mySelection = "fennek";

  	document.addEventListener("mouseup", () => {
	   if(window.getSelection) {
	        const selectedText = window.getSelection();
	        console.log(selectedText.toString());

	        // Add selection to annotations array and save current selection
	        this.mySelection = selectedText.toString();
	        this.annotations.unshift(selectedText.toString());

	        if (selectedText.rangeCount) {
	            const range = selectedText.getRangeAt(0);

	            // Create a new span element with selected text
	            const newNode = document.createElement("span");
				newNode.appendChild(document.createTextNode(selectedText.toString()));
				newNode.style.background = 'pink';

				// Now delete text and replace with pink background text
	            range.deleteContents();
	            range.insertNode(newNode);
	        }

	   } 
  	});

  	
  	//this.mySelection = "panda";
  }
}
