import { Component, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
    mouseOverIt: boolean = false;
    clickDropDownButton: boolean = false;

    @Output() navHeight = new EventEmitter<string>();

    @ViewChild('nav') nav!: ElementRef;

    ngAfterViewInit(): void {
        setTimeout(() => {
            console.log(this.nav.nativeElement);
            this.navHeight.emit(this.nav.nativeElement.offsetHeight);
        }, 0);
    }

    @HostListener('window:resize') resize() {
        setTimeout(() => {
            this.navHeight.emit(this.nav.nativeElement.offsetHeight);
        }, 0);
    }

    @HostListener('window:keydown.enter', ['$event']) enterKey(event: KeyboardEvent) {
        console.log('The Enter Key has been pressed');
    }
}
