

const add = (first, second)=>{
    return first + second;
}

const multiply = (first, second) => {
    
    return first * second;
}

const dividedTheFirstNumberByTheSecondNumber = (first, second) =>{
    return first / second;
} 





// export default add

// if we want to export multiple , we have to use object to export the component or other file

// const calculator = {
//     add : add,
//     multiply: multiply
// }

// export default calculator


export {add, multiply, dividedTheFirstNumberByTheSecondNumber}