const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const teamArray = []
const fs = require('fs');
function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Manager Name',
            name: 'Name'
        },
        {
            type: 'input',
            message: 'Enter ID',
            name: 'ID'
        },
        {
            type: 'input',
            message: 'Enter Email',
            name: 'Email'
        },
        {
            type: 'input',
            message: 'Enter Office Number',
            name: 'officeNumber'
        },
    ]).then(answers => {
        const manager = new Manager(answers.Name, answers.ID, answers.Email, answers.officeNumber)
        teamArray.push(manager)
        whatsNext()
    })

}
function whatsNext() {
    inquirer.prompt([
        {
            type: 'checkbox',
            message: 'Is there another employee?',
            name: 'whatsNext',
            choices: ['Add Engineer', 'Add Intern', 'Build page', 'Quit']
        },
    ]).then(answer => {
        if (answer.whatsNext[0] === 'Add Engineer') {
            addEngineer()

        }
        if (answer.whatsNext[0] === 'Add Intern') {
            addIntern()

        }
        if (answer.whatsNext[0] === 'Build page') {
            buildPage()
        }
    })
}
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Engineer Name',
            name: 'Name'
        },
        {
            type: 'input',
            message: 'Enter ID',
            name: 'ID'
        },
        {
            type: 'input',
            message: 'Enter Email',
            name: 'Email'
        },
        {
            type: 'input',
            message: 'Enter gitHub name',
            name: 'gitHub'
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.Name, answers.ID, answers.Email, answers.gitHub)
        teamArray.push(engineer)
        console.log(teamArray)
        whatsNext()
    })
}
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Intern Name',
            name: 'Name'
        },
        {
            type: 'input',
            message: 'Enter ID',
            name: 'ID'
        },
        {
            type: 'input',
            message: 'Enter Email',
            name: 'Email'
        },
        {
            type: 'input',
            message: 'Enter school name',
            name: 'gitHub'
        },
    ]).then(answers => {
        const intern = new Intern(answers.Name, answers.ID, answers.Email, answers.gitHub)
        teamArray.push(intern)
        console.log(teamArray)
        whatsNext()
    })
}

function buildPage() {
    const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Team</title>
</head>
<body>
<div>
    ${teamArray.map(person => {

        if (person.getRole() === "Manager") {
            return `<div>
             <h1>${person.name}</h1>
             <h2>${person.getRole()}</h2>
             <p>${person.id}</p>
             <p>${person.officeNumber}</p>
             </div>`

        }
    })}
    </div>
    <div>
    ${teamArray.map(person => {

        if (person.getRole() === "Engineer") {
            return `<div>
             <h1>${person.name}</h1>
             <h2>${person.getRole()}</h2>
             <p>${person.id}</p>
             <p>${person.gitHub}</p>
             </div>`

        }
    })}
    </div>
    <div>
    ${teamArray.map(person => {

        if (person.getRole() === "Intern") {
            return `<div>
             <h1>${person.name}</h1>
             <h2>${person.getRole()}</h2>
             <p>${person.id}</p>
             <p>${person.school}</p>
             </div>`

        }
    })}
    </div>
    <div>
    ${teamArray.map(person => {

        if (person.getRole() === "Engineer") {
            return `<div>
             <h1>${person.name}</h1>
             <h2>${person.getRole()}</h2>
             <p>${person.id}</p>
             <p>${person.gitHub}</p>
             </div>`

        }
    })}
    </div>
    <div>
    ${teamArray.map(person => {

        if (person.getRole() === "Intern") {
            return `<div>
             <h1>${person.name}</h1>
             <h2>${person.getRole()}</h2>
             <p>${person.id}</p>
             <p>${person.school}</p>
             </div>`

        }
    })}
    </div>
</body>
</html>`
    fs.writeFileSync("team.html", HTML);
}
addManager()