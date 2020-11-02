const chalk = require('chalk');


let students = [
  {
    name: 'Aya',
    color: 'blue'
  },
  {
    name: 'Jane',
    color: 'red'
  },
  {
    name: 'Jacopo',
    color: 'yellow'
  },
  {
    name: 'Ioan',
    color: 'green'
  },
]

for(let i =0; i < students.length; i++){
  console.log(chalk[students[i].color](students[i].name))
}
