import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripItemComponent {
  @Input() name: string;
  @Input() arrival: string;
  @Input() departure: string;
}
