import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardListComponentComponent } from './board-list-component.component';

describe('BoardListComponentComponent', () => {
  let component: BoardListComponentComponent;
  let fixture: ComponentFixture<BoardListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
