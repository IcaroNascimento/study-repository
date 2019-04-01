const writelowercase = require('./lowercase');

test('should change a letter uppercase to lowercase',() =>{
    expect(writelowercase('A')).toEqual('a');
    expect(writelowercase('ICARO')).toEqual('icaro');
});