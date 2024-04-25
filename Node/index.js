const {sum,max} = require("./arrayOperation")
const os = require('os')

function greet()
{
    const array = [1,2,3,4,5];
    console.log(sum(array));
    console.log(max(array));
    console.log(os.homedir());
}

greet();
process.exit(0);