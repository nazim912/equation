function isVAlid(Side: string): boolean {
    let has_met_digit = false
    if (Side.length > 1) {
        return true
    }
    for (let i = 0; i < Side.length; i++) {
        if (isNaN(Number(Side[i]))) {
            has_met_digit = false
        }
        else if (Side[i] != "0") {
            has_met_digit = true
        }
        else if (Side[i] == "0") {
            if (has_met_digit == false) {
                return false
            }
        }
    }
    return true
}
function solve_equation(expr: string): number {
    let leftSide: string = "";
    let rightSide: string = "";
    let currentString: string = "";

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] == "=") {
            leftSide = currentString;
            currentString = "";
        } else {
            currentString += expr[i];
        }
    }
    rightSide = currentString;
    for (let i = 0; i <= 9; i++) {
        if (isVAlid(leftSide) && isVAlid(rightSide)) {
            let leftValue = eval(leftSide.split('x').join(i.toString()));
            let rightValue = eval(rightSide.split('x').join(i.toString()));
            if (leftValue === rightValue) {
                return i;
            }
        }
    }
    return -1;

}

//Quelques exemples d'équations avec les résultats attendus :

console.log(solve_equation("1+1=x")) //2 
console.log(solve_equation("123*45x=5x088")) //6
console.log(solve_equation("-5x*-1=5x")) //0
console.log(solve_equation("19-45=5x")) //-1
console.log(solve_equation("xx*xx=302x")) //5
console.log(solve_equation("x*11=xx")) //2
console.log(solve_equation("xx*1=xx")) //2
