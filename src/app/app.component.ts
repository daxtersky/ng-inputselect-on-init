import { Component, VERSION, OnInit } from '@angular/core';
// import { DxNumberBoxComponent } from 'devextreme-angular';
// import { DxChartComponent } from 'devextreme-angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
  const inputClick = document.getElementById('inputClick');
    inputClick.focus();
    // inputClick.select()

    setTimeout(() => {
      console.log('setTimeout')
      const inputSetTimeout = document.getElementById('inputSetTimeout');
      inputSetTimeout.focus();
      // inputSetTimeout.select();
    },1000);
  }

}


// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
// https://supportcenter.devexpress.com/ticket/details/q550453/select-text-in-dxnumberbox-automatically