console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{

    function sortDrinkByPrice(drinks) {
        function byPrice(a, b){
            return a.price - b.price;
        }
        return drinks.sort(byPrice);
    }


    const drinks1 = [
        {name: 'lemonade', price: 90}, 
        {name: 'lime', price: 432}, 
        {name: 'peach', price: 23}
    ];

    const drinks2 = [
        {name: 'water', price: 120}, 
        {name: 'lime', price: 80}, 
        {name: 'peach', price: 90}
    ];

    const result1 = sortDrinkByPrice(drinks1);
    const result2 = sortDrinkByPrice(drinks2);

    console.log(
        result1,
        result2,
        );
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function addName(obj, name, value) {
        obj[name] = value;
        return obj;
    };

    const result1 = addName({}, "Brutus", 300);
    const result2 = addName({ piano: 500 }, "Brutus", 400);
    const result3 = addName({ piano: 500, stereo: 300 }, "Caligula", 440);

    console.log(
    result1,
    result2,
    result3,
    );
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    function generation(x, y) {
        const f = ['great grandmother','grandmother','mother','me!','daughter','granddaughter','great granddaughter'];
        const m = ['great grandfather','grandfather','father','me!','son','grandson','great grandson'];
        return y === 'm' ? m[3+x] : f[3+x];
    };
    
    const result1 = [generation(-3, "f"), generation(-3, "m")];
    const result2 = [generation(-2, "f"), generation(-2, "m")];
    const result3 = [generation(-1, "f"), generation(-1, "m")];
    const result4 = [generation(0, "f"), generation(0, "m")];
    const result5 = [generation(1, "f"), generation(1, "m")];
    const result6 = [generation(2, "f"), generation(2, "m")];
    const result7 = [generation(3, "f"), generation(3, "m")];

    console.log(
    result1,
    result2,
    result3,
    result4,
    result5,
    result6,
    result7,
    );
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
 

    function maximumScore(tileHand) {
        let scores = 0;
        for (let index = 0; index < tileHand.length; index++) {
            const tile = tileHand[index];
            scores += tileHand[index].score;
        }
        return scores;
    };

    const result1 = maximumScore([
        {tile: 'N', score: 1}, 
        {tile: 'K', score: 5},  
        {tile: 'Z', score: 10}, 
        {tile: 'X', score: 8}, 
        {tile: 'D', score: 2}, 
        {tile: 'A', score: 1}, 
        {tile: 'E', score: 1}
    ]);
    const result2 = maximumScore([
        {tile: 'B', score: 2}, 
        {tile: 'V', score: 4},  
        {tile: 'F', score: 4}, 
        {tile: 'U', score: 1}, 
        {tile: 'D', score: 2}, 
        {tile: 'O', score: 1}, 
        {tile: 'U', score: 1}
    ]);
    const result3 = maximumScore([
        {tile: 'M', score: 3}, 
        {tile: 'Q', score: 10},  
        {tile: 'O', score: 1}, 
        {tile: 'E', score: 1}, 
        {tile: 'E', score: 1}, 
        {tile: 'I', score: 1}, 
        {tile: 'A', score: 1}
    ]);
    const result4 = maximumScore([
        {tile: 'A', score: 1}, 
        {tile: 'E', score: 1},  
        {tile: 'O', score: 1}, 
        {tile: 'E', score: 1}, 
        {tile: 'E', score: 1}, 
        {tile: 'I', score: 1}, 
        {tile: 'A', score: 1}
    ]);

    console.log(
    result1,
    result2,
    result3,
    result4,
    );
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  
    function calculateDifference(obj, limit) {
        const valueArr = Object.values(obj)
        let sum = 0;
        for (let index = 0; index < valueArr.length; index++) {
            sum += valueArr[index];
        }
        return sum - limit;
    };

    const result1 = calculateDifference({ skate: 20000, painting: 30000, shoes: 1 }, 50000);
    const result2 = calculateDifference({ "baseball bat": 31}, 10);
    const result3 = calculateDifference({ stereo: 110, pillow: 41}, 100);

    console.log(
    result1,
    result2,
    result3,
    );
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    function toArray(obj) {
        return Object.entries(obj);
    };

    const result1 = toArray({ a: 1, b: 2 });
    const result2 = toArray({ foo: 33, bar: 45, baz: 67 });
    const result3 = toArray({ shrimp: 15, tots: 12 });

    console.log(
    result1,
    result2,
    result3,
    );
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{

    function inkLevels(inks) {
        const valueArr = Object.values(inks);
        let min = valueArr[0];
        for (let index = 0; index < valueArr.length; index++) {
            if (valueArr[index] < min) {
                min = valueArr[index];
            }            
        }
        return min;
    }

    const result1 = inkLevels({
        "cyan": 23,
        "magenta": 12,
        "yellow": 10
    });
    const result2 = inkLevels({
        "cyan": 432,
        "magenta": 543,
        "yellow": 777
    });
    const result3 = inkLevels({
        "cyan": 700,
        "magenta": 700,
        "yellow": 0
    });

    console.log(
    result1,
    result2,
    result3,
    );
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{

    function calculateLosses(obj) {
        const valueArr = Object.values(obj)
        let sum = 0;
        for (let index = 0; index < valueArr.length; index++) {
            sum += valueArr[index];
        }
        if (sum > 0)
            return sum;
            return 'Lucky you!'
    }
    
    const result1 = calculateLosses({
        tv: 30,
        skate: 20,
        stereo: 50,
    });
    const result2 = calculateLosses({
        ring: 30000,
        painting: 20000,
        bust: 1,
    });
    const result3 = calculateLosses({
        chair: 3500,
    });
    const result4 = calculateLosses({});

    console.log(
    result1,
    result2,
    result3,
    result4,
    );
}
console.groupEnd();