// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{

  function mulArrBy2(arr) {
    let multiTwo = arr.slice();
    for (let i = 0; i < multiTwo.length; i++) {
      multiTwo[i] *= 2;
    }
    return multiTwo;
  }
  console.log({
    numbers,
    result: mulArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
 
  function powerArrBy2(arr) {
    let multiSquare = arr.slice();
    for (let i = 0; i < multiSquare.length; i++) {
      multiSquare[i] **= 2;
    }
    return multiSquare;
  }

  console.log({
    numbers,
    result: powerArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(arr) {
    let multiToIndex = arr.slice();
    for (i = 0; i < multiToIndex.length; i++) {
      multiToIndex[i] = arr[i] * i;
    }
    return multiToIndex;
  }

  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    let positiveNumb = [];
    let numbA = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > 0){
        positiveNumb[numbA] = arr[i];
        numbA++;
      }
    }
    return positiveNumb
  }

  console.log({
    numbers,
    result: filterPositives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    let negativeNumb = [];
    let numbB = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] < 0){
        negativeNumb[numbB] = arr[i];
        numbB++;
      }
    }
    return negativeNumb
  }
  console.log({
    numbers,
    result: filterNegatives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    let evenNumb = [];
    let numbC = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0){
        evenNumb[numbC] = arr[i];
        numbC++;
      }
    }
    return evenNumb
  }
  console.log({
    numbers,
    result: filterEquals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
      let oddNumb = [];
      let numbD = 0;
      for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1){
          oddNumb[numbD] = arr[i];
          numbD++;
        }
      }
      return oddNumb
  }
  console.log({
    numbers,
    result: filterOdds(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(arr) {
    let negativeToPositive = arr.slice();
    for (let i = 0; i < negativeToPositive.length; i++) {
      if(negativeToPositive[i] < 0) {
        negativeToPositive[i] *= -1;
      }
    }
    return negativeToPositive;
  }

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(arr) {
    let multiSquare = arr.slice();
    for (let i = 0; i < multiSquare.length; i++) {
      multiSquare[i] **= i;
    }
    return multiSquare;
  }
  console.log({
    numbers,
    result: powArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(arr) {
    let naturalNumb = [];
    let numbE = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 1 === 0 && arr[i] > 0 ){
        naturalNumb[numbE] = arr[i];
        numbE++;
      }
    }
    return naturalNumb;
  }
  console.log({
    numbers,
    result: filterNaturals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(arr) {
    let abslNumb = arr.slice();
    for (i = 0; i < abslNumb.length; i++) {
        abslNumb[i] = Math.round((arr[i]));
      }
    return abslNumb;
  }
  console.log({
    numbers,
    result: absArrElements(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr) {
    const everySecond = [];
    for (let i = 0; i < arr.length; i += 2) {
      everySecond[i] = arr[i];
    }
    return everySecond;
  }
  console.log({
    numbers,
    result: filterEverySecond(numbers)
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr) {
    const everyFifth = [];
    for (let i = 0; i < arr.length; i += 5) {
      everyFifth[i] = arr[i];
    }
    return everyFifth;
  }
  console.log({
    numbers,
    result: filterEveryFifth(numbers)
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(arr) {
    for (let i = 0; i <= arr.length -1; i++)
    console.log(`[${i}] => [${arr[i]}]`);
  }
  printArr(numbers);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  } 

  console.log({
    numbers,
    result: sumArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(arr) {
    let avg = 0;;
    for (let i = 0; i < arr.length; i++) {
      avg += arr[i];
    }
    return avg / arr.length;
  }

  console.log({
    numbers,
    result: avgArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr) {
    let maxArr = [0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxArr) {
        maxArr = arr[i];
      }
    }
    return maxArr;
  }

  console.log({
    numbers,
    result: arrMax(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(arr) {
    let maxArr = [0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < maxArr) {
        maxArr = arr[i];
      }
    }
    return maxArr;
  }

  console.log({
    numbers,
    result: arrMin(numbers)
  });
}
console.log('---');
console.groupEnd();