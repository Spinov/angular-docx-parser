import { Component } from '@angular/core';
import * as mammoth from 'mammoth';
// import * as mammoth from "mammoth/mammoth.browser";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parseWordDocxFile(inputElement) {
    const file = inputElement.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      let arrayBuffer = reader.result;

      mammoth
        .convertToHtml({ arrayBuffer: arrayBuffer })
        .then(function (resultObject) {
          const el = document.createElement('div');
          el.innerHTML = resultObject.value;
          const box = document.getElementById('box');
          box?.appendChild(el);
          console.log('1', resultObject.value);
        });

      mammoth
        .extractRawText({ arrayBuffer: arrayBuffer })
        .then(function (resultObject) {
          const el = document.createElement('div');
          el.innerHTML = resultObject.value;
          const box = document.getElementById('box');
          box?.appendChild(el);
          console.log('2', resultObject.value);
        });

      mammoth
        .convertToMarkdown({ arrayBuffer: arrayBuffer })
        .then(function (resultObject) {
          const el = document.createElement('div');
          el.innerHTML = resultObject.value;
          const box = document.getElementById('box');
          box?.appendChild(el);
          console.log('3', resultObject.value);
        });
    };
    reader.readAsArrayBuffer(file);
  }
}
