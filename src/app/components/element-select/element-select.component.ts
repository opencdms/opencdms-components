import { ChangeDetectorRef, Component, forwardRef, OnInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormComponentBase } from 'src/app/common/form-component-base';
import { OpenCDMSApiService } from 'src/app/services/opencdms-api.service';
import { OpenCDMSAPIModel } from 'src/models';

type IElement = OpenCDMSAPIModel.components['schemas']['ObsElementResponse']['result'][0];

@Component({
  selector: 'app-element-select',
  templateUrl: './element-select.component.html',
  styleUrls: ['./element-select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ElementSelectComponent),
      multi: true,
    },
  ],
})
export class ElementSelectComponent extends FormComponentBase implements OnInit {
  public static componentName = 'element-select';
  public dataIsLoading = true;
  public selectedElements: { [element_id: number]: IElement } = {};
  public elements: IElement[] = [];

  constructor(cdr: ChangeDetectorRef, private api: OpenCDMSApiService) {
    super(cdr);
  }

  async ngOnInit() {
    const req = this.api.path('/v1/obselements/').method('get').create();
    const res = await req({}).catch((err) => this.api.handleError(err));
    if (res) {
      this.elements = res.data.result;
    }
    this.dataIsLoading = false;
  }

  public toggleElementSelected(element: IElement) {
    if (this.selectedElements.hasOwnProperty(element.element_id)) {
      delete this.selectedElements[element.element_id];
    } else {
      this.selectedElements[element.element_id] = element;
    }
    const value = Object.values(this.selectedElements).map((el) => el.element_id);
    this.value = value;
  }
}
