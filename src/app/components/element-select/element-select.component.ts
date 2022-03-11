import { Component, EventEmitter, HostBinding, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { OpenCDMSApiService } from 'src/app/services/opencdms-api.service';
import { OpenCDMSAPIModel } from 'src/models';

type IElement = OpenCDMSAPIModel.components['schemas']['ObsElementResponse']['result'][0];

@Component({
  selector: 'app-element-select',
  templateUrl: './element-select.component.html',
  styleUrls: ['./element-select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ElementSelectComponent implements OnInit {
  public static componentName = 'element-select';
  public dataIsLoading = true;
  public selectedElements: { [element_id: number]: IElement } = {};
  public elements: IElement[] = [];

  @Output() valueChanged = new EventEmitter<IElement[]>();

  /** Reflect selected value as host attribute */
  @HostBinding('value')
  get value(): IElement[] {
    return Object.values(this.selectedElements);
  }

  constructor(private api: OpenCDMSApiService) {}

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
    const value = Object.values(this.selectedElements);
    this.valueChanged.next(value);
  }
}
