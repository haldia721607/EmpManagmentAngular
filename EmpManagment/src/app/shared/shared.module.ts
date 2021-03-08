
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TeamSizeValidatorDirective } from '../directives/team-size-validator.directive';
// import { ClientLocationStatusValidatorDirective } from '../directives/client-location-status-validator.directive';
// import { ProjectIDUniqueValidatorDirective } from '../directives/project-idunique-validator.directive';
// import { NumberToWordsPipe } from '../pipes/number-to-words.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from '../pipes/filter.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { PagingPipe } from '../pipes/paging.pipe';
// import { ComponentLoaderDirective } from '../directives/componentloader.directive';


@NgModule({
  declarations: [
    // TeamSizeValidatorDirective,
    // ClientLocationStatusValidatorDirective,
    // ProjectIDUniqueValidatorDirective,
    // NumberToWordsPipe,
    // ComponentLoaderDirective,
    FilterPipe,
    SortPipe,
    PagingPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // TeamSizeValidatorDirective,
    // ClientLocationStatusValidatorDirective,
    // ProjectIDUniqueValidatorDirective,
    // NumberToWordsPipe,
    FilterPipe,
    SortPipe,
    PagingPipe
    // ComponentLoaderDirective
  ]
})
export class SharedModule { }
