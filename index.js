function receivesAFunction(special) {
    special();
}
function returnsANamedFunction() {
    function special(){
        return "forces";
    }
    return special;
}
function returnsAnAnonymousFunction() {
    return function() {
        return "commander";
    }
}
