import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { bypassSanitizationTrustResourceUrl } from '@angular/core/src/sanitization/bypass';
/* import "jquery";
declare var $: any; */
 
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  itemForm: FormGroup;
  validationMessages = {
       'email' : {
         'required' : 'Email is required'
       },
       'title' : {
        'required'  : 'Title is required',
        'minlength' : 'Title must be greater than 10 characters',
        'maxlength' : 'Title must be less than 20 characters'
      },

      'description' : {
        'required' : 'Description is required'
      }
  };

  formErrors = {
    'title': '',
    'description': '',
    'email' : ''
  };
 showCoup = true;

  constructor() { }

   itemOpt(){
    this.itemForm.get('item').valueChanges
    .subscribe(selectedVa => {
        if (selectedVa != '1') {
            //this.addressForm.get('state').reset();
            this.showCoup = true;
        }
        else {
          this.showCoup = !this.showCoup;
        }
    });
    
  }

  ngOnInit() {
    this.itemForm = new FormGroup({
      item: new FormControl(),
      email: new FormControl('' ,Validators.required),
      title: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(20)]),
      inputFileToLoad: new FormControl(),
      imageUrl: new FormControl(),
      description: new FormControl('' ,Validators.required),
      vendor: new FormControl(),
      zipCode: new FormControl(),
      city: new FormControl(),
      keywords: new FormControl(),
      brand: new FormControl(),
      expDate: new FormControl(),
      code: new FormControl(),
      Url: new FormControl(),
      timeStamp: new FormControl(),
      base64ImageBytes: new FormControl()

    });

    /* this.itemForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.itemForm);
    }); */
      this.onChanges();
      
      /* $(document).ready(function(){
        $( function() {
            $("#expDate").datepicker();
            //    $('#expDate').datetimepicker({
            //      format: 'DD/MM/YYYY HH:mm'
            // });
    
        });
      }); */
  }

  onChanges() {
    this.itemForm.get('zipCode').valueChanges
    .subscribe(selectedZip => {
        if (selectedZip != '') {
            //this.addressForm.get('state').reset();
            this.itemForm.get('city').disable();
        }
        else {
            this.itemForm.get('city').enable();
        }
    });
  }
/* 
  chooseUp(){
    this.itemForm.get('inputFileToLoad').valueChanges 
    .subscribe(selectedUp => {
        if (selectedUp != '') {
            //this.addressForm.get('state').reset();
            this.itemForm.get('imageUrl').disable();
        }
        else {
            this.itemForm.get('imageUrl').enable();
        }
    });


  } */

 
  changeValue(){
    this.itemForm.get('imageUrl').valueChanges 
    .subscribe(selectedUrl => {
        if (selectedUrl != '') {
            //this.addressForm.get('state').reset();
            this.itemForm.get('inputFileToLoad').disable();
        }
        else {
            this.itemForm.get('inputFileToLoad').enable();
        }
    });
  }
  
  /* cityChoose(){
    this.itemForm.get('city').valueChanges
    .subscribe(selectedCit => {
        if (selectedCit != '') {
            //this.addressForm.get('state').reset();
            this.itemForm.get('zipCode').disable();
        }
        else {
            this.itemForm.get('zipCode').enable();
        }
    });
  } */

  onSubmit(): void {
        //console.log(this.itemForm.value);
       // this.logValidationErrors(this.itemForm);
        console.log(this.formErrors);
  }

  revert(){
    this.itemForm.reset();
  }

}
