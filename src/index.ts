import People from './People'

const root: HTMLElement | null = document.getElementById('root')

const people = new People('Hello World and Israel')
people.sayHello(root)
