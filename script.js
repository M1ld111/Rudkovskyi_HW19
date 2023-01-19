const students = [
    {
        name: 'Eren',
        runLab: function () {
            return 'Titan'
        }
    },    
    
    {
        name: 'Armin',
        runLab: function () {
            return 'Titan'
        }
    },  

    {
        name: 'Mikasa',
        runLab: function () {
            return 'Human'
        }
    },

    {
        name: 'Spongebob',
        patric: function () {
            return 'squidward'
        }
    }
]

function gradeLabs(array) {
    // let result
    array.forEach(element => {
        try {
            if (element.runLab() === 'Human') {
                console.log(`${element.name}, You are not Titan!`)
                // result = 'You are not Titan!'
            } else {
                console.log(`${element.name}, You are a Titan! Do not cut yourself`)
                // result = 'You are a Titan! Do not cut yourself'
            }
        } catch (error) {
            console.log(`${element.name}, ERROR! We dont know results!`)
            // result = 'ERROR! We dont know results!'
        }
        // console.log(`${element.name}, ${result}`)
    });
}

// закоментований другий варіант, який ніби виглядає більш правильним з точки зору написання, але я не певен. Чекаю фідбек

gradeLabs(students)