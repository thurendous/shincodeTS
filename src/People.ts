export default class People {
  message: string

  // constructor
  constructor(message: string) {
    this.message = message
  }

  public sayHello(elem: HTMLElement | null): void {
    if (elem) elem.innerHTML = this.message
  }
}
