import { Component } from '@angular/core'
import { faker } from '@faker-js/faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.lorem.sentence()
  enteredText = ''
  solved: boolean = false

  onInput(value: string) {
    this.enteredText = value

    if (value === this.randomText) {
      this.solved = true
    } else {
      this.solved = false
    }
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending'
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect'
  }
}
