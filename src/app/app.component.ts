import { Component } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emoji-angular';

  // sentence:string[];
  isReading = false;
  sentence: string[] = ["ai","l","au","uu"];
  word;
  phone = null;

  async play() {
    for(var i=0; i < this.sentence.length; i++) {
      await this.delay(300);
      this.isReading = true;
      this.phone = this.sentence[i];
      console.log("sentence "+i+" is : " +this.sentence[i]);
      this.word = this.sentence[i];
    }
    this.isReading = !this.isReading;
    this.phone = null;

  }

  private delay(ms: number)
  {
    console.log("inside delay function");
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
