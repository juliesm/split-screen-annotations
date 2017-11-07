import { Component, OnInit } from '@angular/core';

import { AnnotationBoxComponent } from './components/annotation-box/annotation-box.component';

import { MatDialog } from '@angular/material';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	mySelection: String;
	annotations: Array<any> = [];

	constructor(public dialog: MatDialog) {

		this.mySelection = "fennek";

	}

	ngOnInit() {
		const textview = document.getElementById("text-view");
		console.log(textview);
		console.log(document);

		textview.addEventListener("mouseup", () => {
			if(window.getSelection) {
				const selectedText = window.getSelection();
				console.log(selectedText.toString());

				// Add selection to annotations array and save current selection
				this.mySelection = selectedText.toString();
				this.annotations.unshift(selectedText.toString());

				if(selectedText.rangeCount) {
					const range = selectedText.getRangeAt(0);

					// Create a new span element with selected text
					const newNode = document.createElement("span");
					newNode.appendChild(document.createTextNode(selectedText.toString()));
					newNode.style.background = 'pink';

					// Now delete text and replace with pink background text
					range.deleteContents();
					range.insertNode(newNode);
				}

				// Open annotation box dialog
				let dialogRef = this.dialog.open(AnnotationBoxComponent, {
				  height: '200px',
				  width: '300px',
				  disableClose: false
				});
			} 
		});
	}
}
