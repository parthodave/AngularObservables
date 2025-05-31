import { Component } from '@angular/core';
import { Subject, Observable, EMPTY } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-searchbook',
standalone: true,
 imports: [HttpClientModule, AsyncPipe, NgForOf, NgIf],
  template: `
    <div style="padding: 20px;">
      <h2>📚 Real-Time Book Search (Standalone)</h2>
      <input
        type="text"
        placeholder="Type book title..."
        (input)="onSearch(getInputValue($event))"
        style="padding: 8px; width: 300px;"
      />

      <ul *ngIf="results$ | async as results">
        <li *ngFor="let title of results">{{ title }}</li>
      </ul>
    </div>
  `
})
export class SearchbookComponent {
 // Subject: RxJS Subject for handling search term streams
  searchSubject$ = new Subject<string>();
  // Observable: RxJS Observable for handling asynchronous data streams
  results$: Observable<string[]>;

  // constructor: Angular dependency injection and initialization
  constructor(private http: HttpClient) {
    // pipe(): RxJS method for combining multiple operators
    this.results$ = this.searchSubject$.pipe(
      // debounceTime: RxJS operator that delays emissions by specified time
      debounceTime(300),
      // distinctUntilChanged: RxJS operator that filters out consecutive duplicate values
      distinctUntilChanged(),
      // switchMap: RxJS operator that cancels previous subscriptions and maps to new observable
      switchMap(searchString => {
        const trimmed = searchString.trim();
        if (trimmed) {
          return this.searchBooks(trimmed);
        }
        // EMPTY: RxJS constant representing an empty observable
        return EMPTY;
      })
    );
  }

  // onSearch: Method triggered by input event
  onSearch(inputValue: string) {
    // next(): Subject method to emit new value
    this.searchSubject$.next(inputValue);
  }

  // getInputValue: Helper method for type-safe event handling
  getInputValue(event: Event): string {
    // as: TypeScript type assertion operator
    return (event.target as HTMLInputElement).value;
  }

  // searchBooks: Method that returns Observable of API results
  searchBooks(title: string): Observable<string[]> {
    // encodeURIComponent: JavaScript method to encode URI components
    const encoded = encodeURIComponent(title);
    const url = `https://openlibrary.org/search.json?title=${encoded}`;

    // pipe(): RxJS method for combining operators
    return this.http.get<any>(url).pipe(
      // map: RxJS operator for transforming values
      map(response =>
        // Converts the response to an array of book titles
        response?.docs?.map((book: any) => book.title) || []
      )
    );
  }
}
