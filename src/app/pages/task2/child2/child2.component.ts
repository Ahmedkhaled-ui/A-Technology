import { Component, input, Input, Output, EventEmitter } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { CalldetailesComponent } from '../components/calldetailes/calldetailes.component';
import { CallnoteComponent } from '../components/callnote/callnote.component';
import { CallrecorderComponent } from '../components/callrecorder/callrecorder.component';
import { CallanlComponent } from '../components/callanl/callanl.component';
import { RateComponent } from '../components/rate/rate.component';
import { Idata } from '../../../shared/idata';
import { Calls } from '../../../shared/calls';

@Component({
  selector: 'app-child2',
  imports: [
    CalldetailesComponent,
    CallnoteComponent,
    CallrecorderComponent,
    CallanlComponent,
    RateComponent,
  ],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
})
export class Child2Component {
  @Output() close = new EventEmitter<void>();

  handleClose() {
    this.close.emit();
  }
  callDetails: Calls = {
    number: '+2001012345678',
    name: 'أشرف محمد رزق',
    category: 'خدمة العملاء',
    employ: 'مروان حسن كيلانى',
    duration: '00:01:07',
    inWait: '00:00:00',
    callproblem: 'مشكلة مع العميل',
    textArea:
      'العميل طلب تحديث فوري عن وضع الشحنة المتأخرة. تم الاتفاق على إرسال تحديثات عبر البريد الإلكتروني بشكل يومي حتى يتم حل المشكلة. العميل بدا غير راضٍ، لكنه تقبل الحل مؤقتًا على أن تتم المتابعة الحثيثة. العميل طلب تحديث فوري عن وضع الشحنة المتأخرة. تم الاتفاق على إرسال تحديثات عبر البريد الإلكتروني بشكل يومي حتى يتم حل المشكلة. العميل بدا غير راضٍ، لكنه تقبل الحل مؤقتًا على أن تتم المتابعة الحثيثة. العميل بدا غير راضٍ، لكنه تقبل الحل مؤقتًا على أن تتم المتابعة الحثيثة.',
    employAction:
      'استمع الموظف بكل صبر لمشكلة العميل وقام بحلها استمع الموظف بكل صبر لمشكلة العميل وقام بحلها استمع الموظف بكل صبر لمشكلة العميل وقام بحلها',
    callResult: 'تم جدولة مكالمة مع العميل للتأكيد على حل المشكلة',
    callAction:
      'يجب على الموظف متابعة الشحنة الخاصة بالعميل قبل الأسبوع القادم',
  };
}
