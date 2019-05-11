import './lesson_14.scss';
import { dropDown } from './scrypts/dropdown';

dropDown(
    document.querySelector('#dropDownCountries'),
    ['USA', 'Canada', 'Kongo']
);
dropDown(
    document.querySelector('#otherDropDown'),
    ['USD', 'CAD', 'EUR', 'UHR', 'GBP']
);

const greeting = function() {
    console.log(this);
    console.log(this.name);
}

const user1 = {
    name: 'Ilya',
    age: 27,
    greet: greeting
};

user1.greet();

const user2 = {
    name: 'John',
    age: 35,
    greet: greeting
}

user2.greet();