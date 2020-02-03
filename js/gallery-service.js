'use strict'

var gProjects = createProjects()

function getProjectsForDisplay() {
    return gProjects
}

function getProjectForModal(id) {
    return findProject(id)
}

function findProject(projectId) {
    var findProject = gProjects.find(project => {
        return +projectId === project.id
    })
    return findProject
}


function createProjects() {
    var id = 1
    var projects = [
        {
            id: id++,
            name: 'MineSweaper',
            title: 'Watch your legs!',
            desc: 'The good old Microsoft classic game is back with a twist!',
            url: 'https://ramdavidov.github.io/minesweeper/',
            thumbnail: 'img/portfolio/tn/1.png',
            img: 'img/portfolio/full/1.png',
            publishedAt: 'Jan 2020',
            labels: ['Retro', 'Timer']
        },
        {
            id: id++,
            name: 'Touch-Nums',
            title: 'Are you quick enough?',
            desc: 'Test your speed and basic math skills to finish the game as quickly as possible.',
            url: 'https://ramdavidov.github.io/touch-nums/',
            thumbnail: 'img/portfolio/tn/2.png',
            img: 'img/portfolio/full/2.png',
            publishedAt: 'Jan 2020',
            labels: ['Numbers', 'Timer', 'Casual']
        },
        {
            id: id++,
            name: 'Pacman',
            title: 'its 1980 all over again',
            desc: 'Help Pacman deal with those scary ghosts and eat everything you see!',
            url: 'https://ramdavidov.github.io/pacman/',
            thumbnail: 'img/portfolio/tn/3.png',
            img: 'img/portfolio/full/3.png',
            publishedAt: 'Jan 2020',
            labels: ['Retro', 'Arcade']
        },
        {
            id: id++,
            name: 'In-Picture',
            title: 'Play with your Kids!',
            desc: 'test your pokemon knowledge with your toddler',
            url: 'https://ramdavidov.github.io/in-picture/',
            thumbnail: 'img/portfolio/tn/4.png',
            img: 'img/portfolio/full/4.png',
            publishedAt: 'Jan 2020',
            labels: ['Toddlers', 'Casual']
        },
        {
            id: id++,
            name: 'Book Shop',
            title: 'Book store management',
            desc: 'Mange your books and optimize your profits!',
            url: 'https://ramdavidov.github.io/book-shop/',
            thumbnail: 'img/portfolio/tn/5.png',
            img: 'img/portfolio/full/5.png',
            publishedAt: 'Jan 2020',
            labels: ['Management', 'Business']
        },
        {
            id: id++,
            name: 'Guess Who?',
            title: 'Let us guess who\'s on your mind',
            desc: 'Let our bot guess who or help him learn',
            url: 'https://ramdavidov.github.io/guess-who/',
            thumbnail: 'img/portfolio/tn/6.png',
            img: 'img/portfolio/full/6.png',
            publishedAt: 'Feb 2020',
            labels: ['Casual', 'Trivia']
        }
    ]
    return projects
}
