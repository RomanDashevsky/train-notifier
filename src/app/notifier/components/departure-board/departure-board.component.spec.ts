import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureBoardComponent } from './departure-board.component';
import { StoreService } from '../../services/store/store.service'
import { StoreServiceStub } from '../../../../test/stubs/store.service'

describe('DepartureBoardComponent', () => {
  let component: DepartureBoardComponent;
  let fixture: ComponentFixture<DepartureBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartureBoardComponent],
      providers: [{
        provide: StoreService, useClass: StoreServiceStub
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(DepartureBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  describe('isSoonArrived', () => {
    it('should return true', () => {
      const current = new Date();
      const arrive = new Date(current.getTime() + 9 * 60000);
      const result = component.isSoonArrived(arrive.toString(), current.toString())
      expect(result).toBeTruthy();
    });

    it('should return false', () => {
      const current = new Date();
      const arrive = new Date(current.getTime() + 11 * 60000);
      const result = component.isSoonArrived(arrive.toString(), current.toString())
      expect(result).toBeFalse();
    });
  })
});
