const employee = 
{
    name: "name test", 
    streetAddress: "street test"
};

function updateEmployeeWithKeyAndValue(o,k,v)
{
    const newEmployee = {...o};
    newEmployee[k] = v;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(o,k,v)
{
    o[k] = v;
    return o;
}

function deleteFromEmployeeByKey(o,k)
{
    const newEmployee = {...o};
    delete newEmployee[k];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(o,k)
{
    delete o[k];
    return o;
}