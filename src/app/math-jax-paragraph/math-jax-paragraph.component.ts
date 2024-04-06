import {Component, ElementRef, input, Input, OnInit, ViewChild} from '@angular/core';
import { MathJaxService } from '../math-jax.service';

@Component({
  selector: 'app-math-jax-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './math-jax-paragraph.component.html',
  styleUrl: './math-jax-paragraph.component.css'
})
export class MathJaxParagraphComponent implements OnInit {
  @ViewChild('mathParagraph') paragraphElement: any;
  mathString = input.required<string>();

  constructor(private mathJaxService: MathJaxService) {}

  ngOnInit() {
    this.mathJaxService.getMathJaxLoadedPromise().then(() => {
      console.log('MathJax loaded, rendering math');

      // Insert the input string
      this.paragraphElement.nativeElement.innerHTML = this.mathString();

      // Render the Latex
      this.mathJaxService.render();
    });
  }
}