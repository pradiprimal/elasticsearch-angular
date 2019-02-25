import {Component} from '@angular/core';
import {BVSearchCriteriaOption} from './BVSearchCriteriaOption';
import {BvSearchService} from './BvSearchService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private bvSearchService: BvSearchService) {

  }

  title = 'Search Bv Data';
  bvSearchData = {
    fieldPath: '',
    fieldValue: ''
  };

  bvSearch = [
    new BVSearchCriteriaOption('statusMessage', 'ebv.statusMessage'),
    new BVSearchCriteriaOption('statusCode', 'ebv.statusCode'),
    new BVSearchCriteriaOption('patientName', 'ebv.data.patient.firstName'),
  ];

  bvFieldsCheckBox = [
    // {name: 'all', isChecked: false},
    {name: 'firstName', isChecked: false},
    {name: 'lastName', isChecked: false},
    {name: 'patientId', isChecked: false},
    {name: 'zipCode', isChecked: false},
    {name: 'dob', isChecked: false},
    {name: 'gender', isChecked: false},
    {name: 'practicePatientId', isChecked: false},
  ];
  bvSearchHeaders = {firstName: '', lastName: '', patientId: '', zipCode: '', dob: '', gender: '', practicePatientId: ''};

  bvSearchResponse;
  bvFieldsCheckBoxData = [];
  tempBvFieldCheckBox = [];

  submitBvData() {
    this.pushCheckedHeader();
    console.log(this.bvSearchData);
    this.bvSearchService.searchBvData(this.bvSearchData).subscribe(value => {
      console.log(value);
      this.bvSearchResponse = value;
      this.prepareAndPopulateData(value);
    });
  }

  pushCheckedHeader() {
    this.tempBvFieldCheckBox = [];
    this.bvFieldsCheckBox.forEach(value => {
      if (value.isChecked && value.name !== 'all') {
        this.tempBvFieldCheckBox.push(value.name);
      }
    });
  }


  populateData(key, data) {
    debugger;
    if (key === 'firstName') {
      return data.firstName;
    }

    if (key === 'lastName') {
      return data.lastName;
    }

    if (key === 'patientId') {
      return data.patientId;
    }

    if (key === 'zipCode') {
      return data.zipCode;
    }

    if (key === 'dob') {
      return data.dob;
    }

    if (key === 'gender') {
      return data.gender;
    }
    if (key === 'gender') {
      return data.practicePatientId;
    }
  }

  prepareAndPopulateData(data) {
    this.bvFieldsCheckBoxData = [];
    data.content.forEach(value => {
      this.bvFieldsCheckBox.forEach(field => {
        // if (field.name === 'all' && field.isChecked) {
        //   this.bvSearchHeaders.firstName = value.ebv.data.patient.firstName;
        //   this.bvSearchHeaders.lastName = value.ebv.data.patient.lastName;
        //   this.bvSearchHeaders.patientId = value.ebv.data.patient.patientId;
        //   this.bvSearchHeaders.zipCode = value.ebv.data.patient.address.zipCode;
        //   this.bvSearchHeaders.dob = value.ebv.data.patient.dob;
        //   this.bvSearchHeaders.gender = value.ebv.data.patient.gender;
        //   this.bvSearchHeaders.practicePatientId = value.ebv.data.patient.practicePatientId;
        // }

        if (field.name === 'firstName' && field.isChecked) {
          this.bvSearchHeaders.firstName = value.ebv.data.patient.firstName;
        }

        if (field.name === 'lastName' && field.isChecked) {
          this.bvSearchHeaders.lastName = value.ebv.data.patient.lastName;
        }

        if (field.name === 'patientId' && field.isChecked) {
          this.bvSearchHeaders.patientId = value.ebv.data.patient.patientId;
        }

        if (field.name === 'zipCode' && field.isChecked) {
          this.bvSearchHeaders.zipCode = value.ebv.data.patient.address.zipCode;
        }

        if (field.name === 'dob' && field.isChecked) {
          this.bvSearchHeaders.dob = value.ebv.data.patient.dob;
        }

        if (field.name === 'gender' && field.isChecked) {
          this.bvSearchHeaders.gender = value.ebv.data.patient.gender;
        }
        if (field.name === 'gender' && field.isChecked) {
          this.bvSearchHeaders.practicePatientId = value.ebv.data.patient.practicePatientId;
        }
      });
      this.bvFieldsCheckBoxData.push(this.bvSearchHeaders);
    });
  }


}
