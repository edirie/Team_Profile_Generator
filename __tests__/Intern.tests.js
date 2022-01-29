// Intern Setup
const Intern = require('../lib/Intern');

// gets school from getSchool()
test('checks if the school is a valid answer', () => {
    const intern = new Intern('Esse', 23, 'essedirie@uoft.com', 'UofT');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const intern = new Intern('Esse', 23, 'essedirie@uoft.com', 'UofT');

    expect(intern.getRole()).toEqual("Intern");
});