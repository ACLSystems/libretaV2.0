import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
    selector: 'app-home-cmp',
    templateUrl: './home.component.html'
})


export class HomeComponent implements OnInit, OnDestroy {
    test: Date = new Date();
		ngOnInit() {
      const body = document.getElementsByTagName('body')[0];
			//console.log(body)
      body.classList.add('pricing-page');
      body.classList.add('off-canvas-sidebar');
    }
    ngOnDestroy(){
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('pricing-page');
      body.classList.remove('off-canvas-sidebar');
    }
}
