// Manager Setup
const Manager = require('../lib/Manger');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Esse', 23, 'essedirie@uoft.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Esse', 23, 'essedirie@uoft.com', 1);

    expect(manager.getRole()).toEqual("Manager");
}); 