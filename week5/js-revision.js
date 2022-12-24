const people = [
    {
        name: 'Dominic',
        surname: 'Greed',
        age: 17,
        height: 1.87,
        weight: 78,
        sex: 'male',
    },
    {
        name: 'Jerry',
        surname: 'Smith',
        age: 32,
        height: 1.74,
        weight: 91,
        sex: 'male',
    },
    {
        name: 'Sara',
        surname: 'Simpson',
        age: 21,
        height: 1.70,
        weight: 62,
        sex: 'female',
    },
    {
        name: 'Peter',
        surname: 'Grifin',
        age: 45,
        height: 1.90,
        weight: 98,
        sex: 'male',
    },
    {
        name: 'Elizabeth',
        surname: 'Scott',
        age: 84,
        height: 1.86,
        weight: 74,
        sex: 'female',
    },
    {
        name: 'Leah',
        surname: 'Tomlinson',
        age: 29,
        height: 1.54,
        weight: 60,
        sex: 'female',
    },
]

console.groupCollapsed('1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:')
{
    console.table(people);
}
console.groupEnd()

console.groupCollapsed('2. Panaudojant array.forEach:')
{
    people.forEach((person) => console.log(person));

    people.forEach((person) => console.log(`${person.name} ${person.surname}`));

    people.forEach((person) => console.log(`KMI: ${person.name} ${person.surname} - ${(
        person.weight / (person.height ** 2))
        .toFixed(2)}`));
}
console.groupEnd()

console.groupCollapsed('3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:')
{
    const extendedName = people.filter(({ name }) => name.length > 6);
    console.table(extendedName);

    const overWeight = people.filter(({ weight }) => weight > 80);
    console.table(overWeight);

    const tallPerson = people.filter(({ height }) => height > 1.85)
    console.table(tallPerson)
}
console.groupEnd()

console.groupCollapsed('4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti')
{
    const [...newHeight] = people.map(({ height }) => `Height: ${height}`)
    console.table(newHeight)

    const [...newWeight] = people.map(({ weight }) => `Weight: ${weight}`)
    console.table(newWeight)

    const [...newPersonDetail] = people.map(({ height, weight, age }) => `Height: ${height}; Weight: ${weight}; Age: ${age}`)
    console.table(newPersonDetail)

    const [...newPersonKMI] = people.map(({ name, surname, weight, height }) => `KMI: ${name} ${surname} - ${(
        weight / (height ** 2))
        .toFixed(2)}`);
    console.table(newPersonKMI)

    const [...newPersonAgeKMI] = people.map(({ name, surname, weight, height, age }) => `KMI: ${name} ${surname} - ${(
        weight / (height ** 2))
        .toFixed(2)} - Age: ${age}`);
    console.table(newPersonAgeKMI)


}
console.groupEnd()

console.groupCollapsed('5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti')
{
    const avgWeight = Number(people.reduce((prewSum, { weight }) => prewSum + weight, 0) / people.length).toFixed(1)
    console.log(avgWeight)

    const avgHeight = Number(people.reduce((prewSum, { height }) => prewSum + height, 0) / people.length).toFixed(1)
    console.log(avgHeight)

}
console.groupEnd()

console.groupCollapsed('0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:')
{
    class Person {
        name;
        surname;
        age;
        height;
        weight;
        sex;

        constructor({
            name,
            surname,
            age,
            height,
            weight,
            sex,
        }) {
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.height = height;
            this.weight = weight;
            this.sex = sex;
        }

        getBMI() {
            const bmi = Number(this.weight / this.height ** 2).toFixed(1)
            return bmi
        }

        toString() {
            return `FullName: ${this.name} ${this.surname}, age: ${this.age}, sex: ${this.sex}, height: ${this.height}, weight: ${this.weight}`;
        }
    }

    let classPeopleData;

    classPeopleData = people.map((person) => new Person(person))
    console.dir(Person)

    classPeopleData.forEach((person) => console.log(person.name, person.surname, person.getBMI()))

    classPeopleData.forEach((person) => console.log(person.toString()))

    console.groupCollapsed('0. 1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg ')
    {
        const femaleYoungerAndLighter = classPeopleData.filter(({ sex, age, weight }) => sex === 'female' &&
            age < 20 &&
            weight > 70);

        console.table(femaleYoungerAndLighter);
    }
    console.groupEnd()

    console.groupCollapsed('2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5')
    {
        const maleYoungerAndBMI = classPeopleData.filter((person, { sex }) => sex === 'male' &&
            person.getBMI() < 18, 5);

        console.table(maleYoungerAndBMI);

    }
    console.groupEnd()

    console.groupCollapsed('3. Atrinkti vaikus, su antsvoriu (KMI > 30)')
    {
        const childOverWeight = classPeopleData.filter((person, { age }) => age <= 17 &&
            person.getBMI() < 18, 5);

        console.table(childOverWeight);
    }
    console.groupEnd()

    console.groupCollapsed('Atrinkti pensininkus, su antsvoriu (KMI > 30)')
    {
        const oldPeopleBMI = classPeopleData.filter((person, { age }) => age >= 65 &&
            person.getBMI() > 30);

        console.table(oldPeopleBMI);
    }
    console.groupEnd()

    console.groupCollapsed('5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]')
    {
        const allMiddleBMI = classPeopleData.filter((person) => person.getBMI() < 18.5 || person.getBMI() > 25);
        console.table(allMiddleBMI);
    }
    console.groupEnd()
}
console.groupEnd()