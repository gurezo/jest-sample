import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleService } from './sample.service';
import { SampleComponent } from './sample.component';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;
  let service: SampleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SampleComponent],
      providers: [SampleService]
    }).compileComponents();
    service = TestBed.get(SampleService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('sample components!!!');
  });

  it('ngOnInit() check', () => {
    spyOn(service, 'method');
    component.ngOnInit();
    expect(service.method).toHaveBeenCalled();
  });
});
