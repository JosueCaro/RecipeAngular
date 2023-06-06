import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {

  @Input() text: string = '';
  @Input() color: string = 'primary';
  @Input() classColor: string = 'text-yellow-400';


}
