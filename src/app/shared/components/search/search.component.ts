import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  @Output() newSearch = new EventEmitter<string>()

  searchCtrl!:FormControl
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(2)])
  }

  onSearch(){
    if(this.searchCtrl.invalid){
      return
    }
    this.newSearch.emit(this.searchCtrl.value)
    this.searchCtrl.reset()
  }

}
