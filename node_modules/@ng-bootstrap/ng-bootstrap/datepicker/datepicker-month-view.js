import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbDate } from './ngb-date';
import { NgbDatepickerI18n } from './datepicker-i18n';
export var NgbDatepickerMonthView = (function () {
    function NgbDatepickerMonthView(i18n) {
        this.i18n = i18n;
        this.select = new EventEmitter();
    }
    NgbDatepickerMonthView.prototype.doSelect = function (day) {
        if (!this.isDisabled(day) && !this.isCollapsed(day) && !this.isHidden(day)) {
            this.select.emit(NgbDate.from(day.date));
        }
    };
    NgbDatepickerMonthView.prototype.isDisabled = function (day) { return this.disabled || day.disabled; };
    NgbDatepickerMonthView.prototype.isSelected = function (date) { return this.selectedDate && this.selectedDate.equals(date); };
    NgbDatepickerMonthView.prototype.isCollapsed = function (day) { return this.outsideDays === 'collapsed' && this.month.number !== day.date.month; };
    NgbDatepickerMonthView.prototype.isHidden = function (day) { return this.outsideDays === 'hidden' && this.month.number !== day.date.month; };
    NgbDatepickerMonthView.decorators = [
        { type: Component, args: [{
                    selector: 'ngb-datepicker-month-view',
                    host: { 'class': 'd-block' },
                    styles: ["\n    .ngb-dp-weekday, .ngb-dp-week-number {\n      line-height: 2rem;\n    }\n    .ngb-dp-day, .ngb-dp-weekday, .ngb-dp-week-number {\n      width: 2rem;\n      height: 2rem;      \n    }\n    .ngb-dp-day {\n      cursor: pointer;\n    }\n    .ngb-dp-day.disabled, .ngb-dp-day.hidden, .ngb-dp-day.collapsed {\n      cursor: default;\n    }\n    :host/deep/.ngb-dp-day.collapsed > * {\n      display: none;\n    }\n    :host/deep/.ngb-dp-day.hidden > * {\n      visibility: hidden;\n    }\n  "],
                    template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week d-flex\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small text-center text-info font-italic\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <div *ngFor=\"let week of month.weeks\" class=\"ngb-dp-week d-flex\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-center font-italic text-muted\">{{ week.number }}</div>\n      <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"ngb-dp-day\" [class.disabled]=\"isDisabled(day)\"\n      [class.collapsed]=\"isCollapsed(day)\" [class.hidden]=\"isHidden(day)\">\n          <template [ngTemplateOutlet]=\"dayTemplate\"\n          [ngOutletContext]=\"{date: {year: day.date.year, month: day.date.month, day: day.date.day},\n            currentMonth: month.number,\n            disabled: isDisabled(day),\n            selected: isSelected(day.date)}\">\n          </template>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerMonthView.ctorParameters = function () { return [
        { type: NgbDatepickerI18n, },
    ]; };
    NgbDatepickerMonthView.propDecorators = {
        'dayTemplate': [{ type: Input },],
        'disabled': [{ type: Input },],
        'month': [{ type: Input },],
        'outsideDays': [{ type: Input },],
        'selectedDate': [{ type: Input },],
        'showWeekdays': [{ type: Input },],
        'showWeekNumbers': [{ type: Input },],
        'select': [{ type: Output },],
    };
    return NgbDatepickerMonthView;
}());
//# sourceMappingURL=datepicker-month-view.js.map