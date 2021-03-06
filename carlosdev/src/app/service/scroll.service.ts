import { OnDestroy, Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService implements OnDestroy {
    scrolledWindows: EventEmitter<ScrollEventArgs> = new EventEmitter<ScrollEventArgs>();

    constructor() {
        window.addEventListener('scroll', this.scrollEvent, true);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scrollEvent, true);
    }

    scrollEvent = (event: any): void => {
        if (event.currentTarget.scrollY == 0) {
            this.scrolledWindows.emit(new ScrollEventArgs(true));
        } else {
            this.scrolledWindows.emit(new ScrollEventArgs(false));
        }
    }

    scrollToElementId(id: string): void {
        const element = document.getElementById(id);
        console.log(element);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
export class ScrollEventArgs {
    constructor(public isTop: boolean) { }
}