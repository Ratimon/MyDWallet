import { Component, Input } from '@angular/core';
export var NgbDatepickerDayView = (function () {
    function NgbDatepickerDayView() {
    }
    NgbDatepickerDayView.prototype.isMuted = function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
    NgbDatepickerDayView.decorators = [
        { type: Component, args: [{
                    selector: '[ngbDatepickerDayView]',
                    styles: ["\n    :host {\n      text-align: center;\n      width: 2rem;\n      height: 2rem;\n      line-height: 2rem;      \n      border-radius: 0.25rem;\n    }\n    :host.outside {\n      opacity: 0.5;\n    }\n  "],
                    host: {
                        '[class.bg-primary]': 'selected',
                        '[class.text-white]': 'selected',
                        '[class.text-muted]': 'isMuted()',
                        '[class.outside]': 'isMuted()',
                        '[class.btn-secondary]': '!disabled'
                    },
                    template: "{{ date.day }}"
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerDayView.ctorParameters = function () { return []; };
    NgbDatepickerDayView.propDecorators = {
        'currentMonth': [{ type: Input },],
        'date': [{ type: Input },],
        'disabled': [{ type: Input },],
        'selected': [{ type: Input },],
    };
    return NgbDatepickerDayView;
}());
//# sourceMappingURL=datepicker-day-view.js.map