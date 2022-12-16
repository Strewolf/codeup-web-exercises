var longest = arr.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
);