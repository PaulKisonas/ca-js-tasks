console.group("28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'");
{
  function strReverse(str) {
    const splitStr = str.split("")
    const reverse = splitStr.reverse()
    const joinArr = reverse.join("")
    return joinArr
  }
  console.log('---');
  console.log(strReverse('viens du trys'));
  console.log(strReverse('as tave myliu'));
  console.log(strReverse('Bairis seniuk'));
  console.log('---');

}
console.groupEnd();

console.group("29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)");
{
  function isPalyndrome(str) {
    let i = 0;
    let k = str.length - 1;
    while (i < k) {
      if (str[i] !== str[k]) return false;
      i++;
      k--;
    }
    return true;
  }
  console.log('---');
  console.log({
    'mama': isPalyndrome('mama'),
    'mamam': isPalyndrome('mamam'),
    '123321': isPalyndrome('123321'),
    '123456': isPalyndrome('123456'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
{

  function capitalizeFirstLetter(str) {
    const capLetter = str[0].toUpperCase() + str.slice(1)
    return capLetter
  }

  const fixedParagraph = (paragraph) => paragraph.split(/([.?!])/).slice(0, -1)
    .map((sentence) => sentence.trim())
    .map(capitalizeFirstLetter)
    .join('')
    .replaceAll(/\s+/g, ' ')
    .replaceAll(' ,', ',')
    .replaceAll(/([.?!,])([^\s])/g, '$1 $2')

  const paragraph = '    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ';
  console.log(fixedParagraph(paragraph));
  console.log('---');
}
console.groupEnd();
console.log();


console.group("31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą");
{
  function splitSentence(sentence) {
    const [...result] = sentence.split(' ')
    return result
  }
  console.log('---');
  console.log({
    'Labas aš Jonas': splitSentence('Labas aš Jonas'),
    'Kėgliai yra gerai': splitSentence('Kėgliai yra gerai'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį");
{
  function explode(str, separator) {
    const exp = str.split(`${separator}`)
    return exp
  }
  console.log('---');
  console.log({
    "'Man patinka sniegas', ' '": explode('Man patinka sniegas', ' '),
    "'home/about/13', '/'": explode('home/about/13', '/'),
  })
  console.log('---');
}
console.groupEnd();
console.log();