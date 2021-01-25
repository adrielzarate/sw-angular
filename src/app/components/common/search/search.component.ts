import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {

  @Input() customPlaceholder: string = 'Search...';
  @Output() onSearchTermReady = new EventEmitter<string>();

  public searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({ search: '' });
    this.searchForm
    .get('search')
    .valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        // switchMap(valueToSearch => of(valueToSearch))
    )
    .subscribe({
        next: searchTerm => {
            this.onSearchTermReady.emit(searchTerm);
        }
    });
  }

  ngOnDestroy() {}

}
