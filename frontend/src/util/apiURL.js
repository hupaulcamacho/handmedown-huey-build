export const apiURL = () => {
    return window.location.hostname === 'localhost' ?
    'http://localhost:3001' : 'https://handmedown-huey.herokuapp.com'
}