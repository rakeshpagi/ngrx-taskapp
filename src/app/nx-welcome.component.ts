import { Component, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'hello-nx-welcome',
  template: `    
  <div class="container">
    <ng-container useState="message" [value]="'Hello World !! '"   >
            Message :   {{ 'message'|readState|async }}
    </ng-container>
    <hr>
    <form useFormState="biodataform" #form=useFormState  [initialState]="{lastname:'Last',firstname:'Rakesh',birthdate:'1999-09-01'}"  >
        <use-form-field name="firstname"  [errorMessage]="{'required' : 'Please Enter Name'  }" inputClass="form-control" [required]="true"  label="First Name" ></use-form-field>
        
        <use-form-field name="lastname"  label="Last Name"  ></use-form-field>
        <use-form-field name="birthdate" [maxDate]="'2022-01-01'" fieldType="date" label="Birth Date" [errorMessage]="{'maxdate':'Cannot be greater than '+('2022-01-01'|date)}" ></use-form-field>
        <!-- <div class="text-danger text-sm font-sm" >
             {{form.formgroup.form.get('birthdate')?.errors | json }}
        </div> -->
        <!-- <use-form-field name="birthdate" #f   fieldType="any" label="Birth Date" >
                <input type="date" class="form-control"  [formControl]="f.formControl" >
        </use-form-field> -->
        
        <use-form-field  #description name="description"  fieldType="any" label="Description" >
            <textarea class="form-control" [formControl]="description.formControl"  >
            </textarea>
        </use-form-field>        
        <div class="row border-1 m-1 p-1 ">
            <div class="col-auto"></div>
            <div class="col d-flex flex-grow-1 align-content-end justify-content-end">
                    <button class="btn  btn-sm btn-primary mx-2 " [disabled]="form.formgroup.form.invalid"  
                        setStateAction="message" [value]="'Completed'"   
                        doPostAPIAction="save" contextName="api"  >GREET</button>
                    <button ngClass="ml-10" 
                                type="button" class="btn btn-danger" 
                                (click)="form.formgroup.resetForm()" >CLEAR</button>                 
            </div>
        </div>
    </form>
</div>

  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
