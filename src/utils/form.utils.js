//getting letters for generate the password
const getletter = () => {
    let charset = "ABCDENOPhijklmnopQRSTUVWXYZabcdeFGHIJKLMfgqrstuvwxyz"
    let ranindx = Math.floor(Math.random() * charset.length);
    return charset[ranindx];
}

//getting numbers for generate the password
const getnumber = () => {
    let charset = "3456012789"
    let ranindx = Math.floor(Math.random() * charset.length);
    return charset[ranindx];
}

//getting symbols for generate the password
const getsymbol = () => {
    let charset = "!_-=+{[}]@#$%&*~^():;'";
    let ranindx = Math.floor(Math.random() * charset.length);
    return charset[ranindx];
}

//generating the password
const genpwd = (hasNumber=false, hasSymbols=false, len=6) => {
    let functionSet =  [getletter]
        
    functionSet = hasNumber ? [...functionSet, getnumber] : functionSet;
    functionSet = hasSymbols ? [...functionSet, getsymbol] : functionSet;


    let password = [];
    for(let i = 0; i < len; i++ ){
        let ranindx = Math.floor(Math.random() * functionSet.length);
        let character = functionSet[ranindx]();
        password.push(character);
    }

    return password.join("");
};
//exporting the generated password
export {genpwd};