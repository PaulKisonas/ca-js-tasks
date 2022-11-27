console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  function returnsFirst(array){
    return array[0];
  }
  const numbers = [1, 2, 3, 4, 5,];
  const text = ['one', 'two', 'three', 'four', 'five',];
  const returnsFirstArray = returnsFirst(numbers);
  const returnsFirstArrayText = returnsFirst(text);
  console.log('First number', returnsFirstArray);
  console.log('First number', returnsFirstArrayText);
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  function deleteFirst(array){
    const firstElement = array[0];
    let i = 0;
    while (i < array.length) {
      i++;
      array[i - 1] = array[i];
    }
    --array.length;
    return firstElement;
  }
  const numbers1 = [1, 2, 3, 4, 5,];
  const text1 = ['one', 'two', 'three', 'four', 'five',];
  deleteFirst(numbers1);
  deleteFirst(text1);
  console.log('Delete first number', numbers1);
  console.log('Delete first number', text1);
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function returnLast(array){
    return array[array.length - 1];
  }
  const numbers2 = [1, 2, 3, 4, 5,];
  const text2 = ['one', 'two', 'three', 'four', 'five',];
  const lastElement = returnLast(numbers2);
  const lastElementText = returnLast(text2);
  console.log('Last number', lastElement);
  console.log('Last number', lastElementText);
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function deleteLast(array){
    const lastDelElement = array[0];
    let i = 0;
    while (i < array.length) {
      i++;
    }
    --array.length;
    return lastDelElement;
  }
  const numbers3 = [1, 2, 3, 4, 5,];
  const text3 = ['one', 'two', 'three', 'four', 'five',];
  deleteLast(numbers3);
  deleteLast(text3);
  console.log('Delete last number', numbers3);
  console.log('Delete last number', text3);
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function elementsCount(array){
    return length = array.length
  }
  const numbers4 = [1, 2, 3, 4, 5,];
  const text4 = ['one', 'two', 'three', 'four', 'five',];
  const allElements = elementsCount(numbers4);
  const allElementsText = elementsCount(text4);
  console.log('Elements Count', allElements);
  console.log('Elements Count', allElementsText);
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function LastIndex(array) {
    return array.indexOf(array[array.length - 1])
  }
  const numbers5 = [5, 6, 7, 8, 9,];
  const text5 = ['five', 'six', 'seven', 'eight',];
  const lastElements = LastIndex(numbers5);
  const lastElementsText = LastIndex(text5);
  console.log('Last Index', lastElements);
  console.log('Last Index', lastElementsText);
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function allIndexDown(array) {
    let i = 0;
    while (i < array.length) {
      { console.log(i); };
      i++;
    }
  }

  const numbers6 = [5, 6, 7, 8, 9,];
  const text6 = ['five', 'six', 'seven', 'eight', 'nine', 'ten'];
  console.log('All Index down');
  allIndexDown(numbers6);
  console.log('All text Index down');
  allIndexDown(text6);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  function allElementsLine(array) {
    let i = 0;
    while (i <= array.length - 1) {
      console.log(array[i]);
      i++;
    }
  }

  const numbers7 = [5, 6, 7, 8, 9,];
  const text7 = ['five', 'six', 'seven', 'eight',];
  console.log('All Elements down');
  allElementsLine(numbers7);
  console.log('All text Elements down');
  allElementsLine(text7);
  
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function allIndexElementsLine(array) {
    let i = 0;
    while (i <= array.length - 1) {
      console.log(`[${[i]}] => ${array[i]}`);
      i++;
    }
  }

  const numbers8 = [5, 6, 7, 8, 9,];
  const text8 = ['five', 'six', 'seven', 'eight',];
  console.log('All Index and Elements down');
  allIndexElementsLine(numbers8);
  console.log('All text Index and Elements down');
  allIndexElementsLine(text8);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function allIndexElementsLineRev(array) {
    let i = array.length - 1;
    while (i >= 0) {
      { console.log(array[i]); };
      i--;
    }
  }

  const numbers9 = [5, 6, 7, 8, 9,];
  const text9 = ['five', 'six', 'seven', 'eight',];
  console.log('All Elements reverse down');
  allIndexElementsLineRev(numbers9);
  console.log('All text Elements reverse down');
  allIndexElementsLineRev(text9);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function allIndexElementLine(array) {
  let resultLine = '';
  let i = 0;
    while (i < array.length) {
      const isNotLast = i < array.length - 1;
      resultLine += [i];
      i++;
      if (isNotLast) {
        resultLine += ', ';
      }
    }
    console.log(resultLine)
  }
  const numbers10 = [5, 6, 7, 8, 9,];
  const text10 = ['five', 'six', 'seven', 'eight',];
  console.log('All Index inline');
  allIndexElementLine(numbers10);
  console.log('All text Index inline');
  allIndexElementLine(text10);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  function allIndexElementLine(array) {
    let resultLine = '';
    let i = 0;
      while (i < array.length) {
        const isNotLast = i < array.length - 1;
        resultLine += array[i];
        i++;
        if (isNotLast) {
          resultLine += ', ';
        }
      }
      console.log(resultLine)
    }
    const numbers11 = [5, 6, 7, 8, 9,];
    const text11 = ['five', 'six', 'seven', 'eight',];
    console.log('All Elements inline');
    allIndexElementLine(numbers11);
    console.log('All text Elements inline');
    allIndexElementLine(text11);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  function allIndexElementLine(array) {
    let resultLine = '';
    let i = 0;
      while (i < array.length) {
        const isNotLast = i < array.length - 1;
        resultLine += `[${[i]}] => ${array[i]}`;
        i++;
        if (isNotLast) {
          resultLine += ', ';
        }
      }
      console.log(resultLine)
    }
    const numbers12 = [5, 6, 7, 8, 9,];
    const text12 = ['five', 'six', 'seven', 'eight',];
    console.log('All Index and Elements inline');
    allIndexElementLine(numbers12);
    console.log('All text Index and Elements inline');
    allIndexElementLine(text12);
}
console.groupEnd();