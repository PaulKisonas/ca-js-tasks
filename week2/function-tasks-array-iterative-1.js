const people = [
    {
      name: 'Jonas',
      surname: 'Jonaitis',
      sex: 'male',
      age: 26,
      income: 1200,
      married: false,
      hasCar: false
    },
    {
      name: 'Severija',
      surname: 'Piktutytė',
      sex: 'female',
      age: 26,
      income: 1300,
      married: false,
      hasCar: true
    },
    {
      name: 'Valdas',
      surname: 'Vilktorinas',
      sex: 'male',
      age: 16,
      income: 0,
      married: false,
      hasCar: false
    },
    {
      name: 'Virginijus',
      surname: 'Uostauskas',
      sex: 'male',
      age: 32,
      income: 2400,
      married: true,
      hasCar: true
    },
    {
      name: 'Samanta',
      surname: 'Uostauskienė',
      sex: 'female',
      age: 28,
      income: 1200,
      married: true,
      hasCar: true
    },
    {
      name: 'Janina',
      surname: 'Stalautinskienė',
      sex: 'female',
      age: 72,
      income: 364,
      married: false,
      hasCar: false
    }
  ];
  console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
  {
    function allPeopleInLine(allPeople){
      console.log(allPeople);
    }
    people.forEach(allPeopleInLine);
  }
  console.groupEnd();
  
  console.groupCollapsed('2. Atpausdinkite visus žmonių vadrus ir pavardes, atskirtus brūkšneliu');
  {
    function allPeopleNames(fullnames){
      console.log(`${fullnames.name} - ${fullnames.surname}`);
    }
    people.forEach(allPeopleNames);
  }
  console.groupEnd();
  
  console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
  {
    function allPeopleNamesMarried(namesMarried){
      console.log(`${namesMarried.name} - ${namesMarried.surname} - are married: ${namesMarried.married}`);
    }
    people.forEach(allPeopleNamesMarried);
  }
  console.groupEnd();
  
  console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
  {
    function allIncomeSex(incomeSex){
      return `Sex: ${incomeSex.sex}, Income: ${incomeSex.income}.`
    }
    const incomeAndSex = people.map(allIncomeSex);
    console.log(incomeAndSex);
  }
  console.groupEnd();
  
  console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
  {
    function allPeopleNamesSex(namesSex){
      return `Name: ${namesSex.name}, Surname: ${namesSex.surname}, Sex: ${namesSex.sex}.`;
    }
    const namesAndSex = people.map(allPeopleNamesSex);
    console.log(namesAndSex);
  }
  console.groupEnd();
  
  console.groupCollapsed('6. Atspausdinkite visus vyrus');
  {
    function allPeopleMale(isMale){
      return isMale.sex === 'male';
    }
    const areMale = people.filter(allPeopleMale);
    console.log(areMale);
  }
  console.groupEnd();
  
  console.groupCollapsed('7. Atspausdinkite visas moteris');
  {
    function allPeopleFemale(isfemale){
      return isfemale.sex === 'female';
    }
    const areFemale = people.filter(allPeopleFemale);
    console.log(areFemale);
  }
  console.groupEnd();
  
  console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
  {
    function allPeopleHaveCar(peopleCars){
      if (peopleCars.hasCar === true)
        return `Name: ${peopleCars.name}, Surname: ${peopleCars.surname}.`; 
    }
    const haveCar = people.map(allPeopleHaveCar);
    console.log(haveCar);
  }
  console.groupEnd();
  
  console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
  {
    function allPeopleIsMarried(peopleMarried){
      return peopleMarried.married
    }
    const haveMarried = people.filter(allPeopleIsMarried)
    console.log(haveMarried)
  }
  console.groupEnd();
  
  console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
  {
    let female = 0;
    let male = 0;
    function allPeopleByMale(countCars){
      if (countCars.sex === 'female' && countCars.hasCar === true) 
        female++;
      else if (countCars.sex === 'male' && countCars.hasCar === true)
        male++;
    }
    const sexCountMale = people.filter(allPeopleByMale);
    console.log(`Female count: ${female}\nMale count: ${male}`);
  }
  console.groupEnd();
  
  console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
  {
    function incomeTosalary(incomeSalary) {
      return {
        name: incomeSalary.name,
        surname: incomeSalary.surname,
        sex: incomeSalary.sex,
        age: incomeSalary.age,
        salary: incomeSalary.income,
        married: incomeSalary.married,
        hasCar: incomeSalary.hasCar,
      }
    }
    const incomeNameChange = people.map(incomeTosalary);
    console.log(incomeNameChange);
  }
  console.groupEnd();
  
  console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
  {
    function removeSexSurnameName(removeSexNameSur) {
      return {
        age: removeSexNameSur.age,
        salary: removeSexNameSur.income,
        married: removeSexNameSur.married,
        hasCar: removeSexNameSur.hasCar,
      }
    }
    const remove = people.map(removeSexSurnameName);
    console.log(remove);
  }
  console.groupEnd();
  
  console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
  {
    function changeNameSurname(toFullname) {
      return {
        fullname: `${toFullname.name} ${toFullname.surname}`,
        sex: toFullname.sex,
        age: toFullname.age,
        salary: toFullname.income,
        married: toFullname.married,
        hasCar: toFullname.hasCar,
      }
    }
    const fullNameChange = people.map(changeNameSurname);
    console.log(fullNameChange);
  }
  console.groupEnd();