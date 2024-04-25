const _ld = require("lodash");

function sum(arr)
{
    return _ld.sum(arr);
}
function max(arr)
{
    return _ld.max(arr);
}

module.exports = {sum,max};