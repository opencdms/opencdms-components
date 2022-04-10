import { TestBed } from '@angular/core/testing';

import { DialogDataService } from './dialog-data.service';

describe('DialogDataService', () => {
  let service: DialogDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

// TODO - create mock service to render test data and image responses
export const MOCK_TABLE_DATA_SUBMISSION_RESPONSE = {
  status: 'success',
  request: {},
  response: {
    type: 'table',
    tableData: testData(),
    tableHeaders: Object.keys(testData()[0]),
  },
};
function testData() {
  return [
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 1,
      mean_obsValue: 24.282258064516128,
      max_obsValue: 31.4,
      min_obsValue: 18.5,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 2,
      mean_obsValue: 23.239655172413794,
      max_obsValue: 28.7,
      min_obsValue: 18.5,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 3,
      mean_obsValue: 23.60483870967742,
      max_obsValue: 28.4,
      min_obsValue: 18.7,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 4,
      mean_obsValue: 22.231666666666666,
      max_obsValue: 28,
      min_obsValue: 16,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 5,
      mean_obsValue: 19.536666666666665,
      max_obsValue: 25.7,
      min_obsValue: 11.9,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 6,
      mean_obsValue: 17.97,
      max_obsValue: 23.6,
      min_obsValue: 12.9,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 7,
      mean_obsValue: 17.490322580645163,
      max_obsValue: 26.1,
      min_obsValue: 11.7,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 8,
      mean_obsValue: 19.047540983606556,
      max_obsValue: 28.1,
      min_obsValue: 12.4,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 9,
      mean_obsValue: 24.60754716981132,
      max_obsValue: 30.5,
      min_obsValue: 17.2,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 10,
      mean_obsValue: 26.24642857142857,
      max_obsValue: 32.4,
      min_obsValue: 19.7,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 11,
      mean_obsValue: 24.329310344827586,
      max_obsValue: 31.2,
      min_obsValue: 18.4,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 12,
      mean_obsValue: 24.175862068965518,
      max_obsValue: 31,
      min_obsValue: 16.3,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 1,
      mean_obsValue: 27.438709677419354,
      max_obsValue: 30.7,
      min_obsValue: 22.4,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 2,
      mean_obsValue: 25.97586206896552,
      max_obsValue: 30.3,
      min_obsValue: 20.6,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 3,
      mean_obsValue: 26.861290322580643,
      max_obsValue: 29.3,
      min_obsValue: 24,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 4,
      mean_obsValue: 25.393333333333334,
      max_obsValue: 27.6,
      min_obsValue: 21.5,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 5,
      mean_obsValue: 22.296774193548387,
      max_obsValue: 25.4,
      min_obsValue: 14.5,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 6,
      mean_obsValue: 20.236666666666668,
      max_obsValue: 22.4,
      min_obsValue: 16,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 7,
      mean_obsValue: 20.01290322580645,
      max_obsValue: 25.1,
      min_obsValue: 15.6,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 8,
      mean_obsValue: 21.664516129032258,
      max_obsValue: 26.6,
      min_obsValue: 16.7,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 9,
      mean_obsValue: 26.75,
      max_obsValue: 29.7,
      min_obsValue: 22.5,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 10,
      mean_obsValue: 28.087096774193547,
      max_obsValue: 31.7,
      min_obsValue: 19.7,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 11,
      mean_obsValue: 27.426666666666666,
      max_obsValue: 31.6,
      min_obsValue: 22.3,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 12,
      mean_obsValue: 27.532258064516128,
      max_obsValue: 31.7,
      min_obsValue: 18.7,
    },
  ];
}
