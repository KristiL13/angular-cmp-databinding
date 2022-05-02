import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output()
  serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated')
  blueprintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('contentInput', { static: true })
  contentInput: ElementRef;

  constructor() {}

  // lifecycle hook
  ngOnInit(): void {}

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.contentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.contentInput.nativeElement.value,
    });
  }
}
