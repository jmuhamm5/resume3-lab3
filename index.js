// Your Name


// Your career/field

// A short description of yourself

function Jamil(name, career) {
  this.name = name;
  this.career = career;

  this.description = function(){
    return "My name is "+this.name+" and my career path is to be a "+this.career;
  }
}

var jamil = new Jamil('Jamil', 'developer');
console.log(jamil);


// A list of your interests
var interests = ['exercise', 'reading', 'coding', 'traveling'];
console.log(interests);


// A list of your past positions that includes company/place name, title, short description of what you did
var pastPositions = {
  company: {
    name: ['SomeCompany'],
    address: {
        street: '555 Something St',
        city: 'Los Angeles',
        state: 'CA'
    },
    title: ['Associate'],
    descriptions: ['Sell Stuff']
  }
}

console.log(pastPositions);


// You must have a function called `displayPosition` that takes parameters for company name, job title, and description. The function should `console.log` those three items in a format similar to the example below. You will call `displayPosition` several times with different data.

function displayPosition(name, title, description) {
  this.name = name;
  this.title = title;
  this.description = description;
}

var jamil1 = new displayPosition('Jamil Muhammad', 'Web Developer', 'I like oranges.');

console.log(jamil1);

// A list of your skills
var skills = ['cleaning', 'typing', 'biking', 'camping'];
console.log(skills);

// You can make up information if you'd like

// In your skill list, skills that are "cool" should begin with 'Check It:'
// You must have a function called `displaySkill` that takes parameters for skill name and a boolean value for whether the skill is cool (true/false). Inside the function, you should print `Check It:` in front of the skill name only if the skill is cool. If you are not sure if a skill is cool, or if you do not have any cool skills, raise your hand and I will render assistance.

function displaySkill(skill, coolSkill){
    this.skill = new skill;
    this.coolSkill = new coolSkill;



}
