function OldConstructor(id, name, type) {
  this.id = id;
  this.name = name;
  this.type = type;
}
const oldInstance = new OldConstructor(1, "이상해씨", "풀");
console.log(oldInstance)

class NewConstructor {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}

const newInstance = new NewConstructor(4, "파이리", "불");
console.log(newInstance)

const root = document.getElementById('root')

class createTag {
  constructor(parentTag, ChildTag){
    this.parentTag = document.createElement(parentTag);
    this.ChildTag = document.createElement(ChildTag);
    root.appendChild(this.parentTag)
    this.parentTag.appendChild(this.ChildTag)
    this.ChildTag.id = "child"
  }
}

const newCreateTag = new createTag('div', 'ul')

console.log(newCreateTag)
const Child = document.getElementById('child')
console.log(Child)

console.log(document.body.children[0].children[0].children[0])

console.log(newCreateTag)