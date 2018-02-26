module.exports = function solveEquation(equation) {
    equation = equation.replace(/\s/g,'');
    var  arr = equation.split('x');

    var a = parseInt(arr[0]),
        b = parseInt(arr[1].slice(2)),
        c = parseInt(arr[2]),
        d = b * b - 4 * a * c;

    if (d > 0) {
        var solutions = [];
        var x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
        var x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));

        solutions.push(x1,x2);

        return solutions.sort(function (f, g) {
            return f - g;
        });

    } else {
        return 0;
    }
}