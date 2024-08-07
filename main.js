//when you click a number -> event listener to create number val

//global vars, will change to local
    //array containing the expression arrays
    let expressions = [];

//result: concat or create new array to add to main array
document.querySelector('#one').addEventListener('click', aggregate)

//result: array of arrays that store each expression
document.querySelector('.key').addEventListener('click', aggregate)

//result: parse through main array in order of pemdas
// document.querySelector('#=').addEventListener('click', equate)

//fn that creates number, key and aggregates expressions
//result: aggregate num or key
function aggregate(click) {
    //if input is number
    if (click.target.classList.contains('num')){
        //check expression status
        handleExpression()
    }
    //if input  is key
    if (click.target.classList.contains('key')){
        //check expression status
        checkExpressions()
    }
    //if input is '.'
    if (click.target.attributes.contains('.')){
        //check expression status
        checkExpressions()
    }
    //if input is equals 
    if (click.target.attributes.contains('=')){
        //check expression status
        checkExpressions()
    }
}
//either creates new expression or adds to existing expression
function handleExpression(val) {
    let status = checkExpressions()
    if (status === 'none' || status === 'complete') {
        //return new expression object
    } else if (status === 'incomplete') {
        //add to last expression object
    }
}

function checkExpressions() {
    //if there are expressions
    if (expressions.length > 0) {
        expressions.forEach(function(x,a) {
            //all expressions are complete, return 'complete'        
            if (x[x.length-1].classList.contains('key')) {
                return 'complete'
            //one expression is incomplete, return 'incomplete'
            } else {
                return 'incomplete'
            }
        });
    }
    //there are no expressions, return 'none'
    return 'none'
}
class Clickable{
    constructor(value) {
        this._value = value
    }
    get value() {
        return this._value
    }
    click(element, method) {
        document.querySelector(element).addEventListener('click', method)
    }
}
/* Expression is an obj that creates arrays which contain number values and key
    - each number click adds to a respective array until key is added to array
    - each key click sets off the following events:
        - join nums
        - push key to array
        - create new array
    - each equals click begins method parse() which does the following
        - creates a final array with the expression sum
        - calls another method called displaySum()
            - displaySum() clears display and displays value of final array
*/
class Expression{
    constructor(array) {
        this.expressionArr = []
    }
    newArray() {
        let array = []
        return array;
    }
    pushKey() {
        let index = 0;
        for (let arr of this.expressionArr) {
            //if all arrays are complete, add a new array

            //else, add key to the incomplete array

        }
    }
}

/* NumberVal is an obj that is created upon clicking a number on the calc
    - it's primary function is to do the following:
        - add itself to the correct expression array
            - if no array exists, it creates one
            - if array exists and no key @ end, adds itself to that
*/
class NumberVal extends Clickable{
    constructor(num) {
        super(num)
    }

}

/* Key is an obj that is created upon clicking the division, 
multiplication, subtraction, or addition key on the calc.

It's primary function is to do the following:
    - add itself to the correct expression array
        - if no array or no uncompleted array (i.e., array without key at end) exists, don't do anything
        - if array exists and no key @ end, adds itself to that and create new Expression array
*/
class Key extends Clickable{
    constructor(sign) {
        super(sign)
    }
}

class Equals extends Clickable{
    constructor() {}
}

/*
A. clicking multiple numbers before key
    - pushing val1 nums to array1
    - until key is hit
        - val1 nums are joined with .join() and turned back into num w Number()
        - key is pushed to end of array1
        - array2 created
    - push val2 nums onto array2
    - continue storing key and making new arrays
    - until equals is hit

B. computing after equals is hit
    - expression object?
    - parse through expression according to pemdas
    - for those arrays with 'x' and '/' stored at end
        - create sum with following array
        - store sum in following array
        - delete prior array
    - move to arrays with '+' and '-' @ end, once 'x' and '/' arrays are deleted
        - create sum with following array
        - store sum in following array
        - delete prior array
        - rinse and repeat until one array is left
        - pop off key from end

    - display sum
        - clear display
        - replace with value of last array




*/
//clicking multiple numbers before key 
//hitting key before equals


//storing the expression after equals
//clearing the display after equals
//populating display with sum 