const { TestWatcher } = require('jest');
const functions = require('./functions');

//toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

//notToBe
test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

//toEqual
test('User should be Cody Jones object', () => {
    expect(functions.createUser()).toEqual({ 
        firstName: 'Cody', 
        lastName: 'Jones'
    });
})

//Less than and greater than
test('Should be under 1600', () =>{
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
})

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

//Arrays 
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})

//Promise
test('User fetched name should be Leanne Graham', () =>{
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
})

//Async Await
test('User fetched name should be Leanne Graham', async () =>{
    expect.assertions(1);
  const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
  
})

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false