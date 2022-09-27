'use strict'

// 'alisa@mail.ru', 'itgirlschool.ru', '12.05.2021', '+7(910)123-45-67'

class Validator {
    constructor(email, domain, date, phone) {
        this.email = email,
        this.domain = domain,
        this.date = date,
        this.phone = phone
    }

    //метод для проверки емейла
    isEmail(email) {
        const regExpEmail = /\S+@\S+\.\S+/;
        return regExpEmail.test(email);
    }

    //метод для проверки домена
    isDomain(domain) {
        const regExpDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
        return regExpDomain.test(domain);
    }

    //метод для проверки даты
    isDate(date) {
        const regExpDate = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}/;
        return regExpDate.test(date);
    }

    //метод для проверки телефона
    isPhone(phone) {
        const regExpPhone = /\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;
        return regExpPhone.test(phone);
    }
}

//проверки
const validator = new Validator('alisa@mail.ru', 'itgirlschool.ru', '12.05.2021', '+7(910)123-45-67');
console.log('Email is ' + validator.isEmail('alisa@mail.ru'));
console.log('Domain is ' + validator.isDomain('itgirlschool.ru'));
console.log('Date is ' + validator.isDate('12.05.2021'));
console.log('Phone is ' + validator.isPhone('+7(910)123-45-67'));

class ValidatorStatic {
    constructor(email, domain, date, phone) {
        this.email = email,
        this.domain = domain,
        this.date = date,
        this.phone = phone
    }

    //метод для проверки емейла
    static isEmail(email) {
        const regExpEmail = /\S+@\S+\.\S+/;
        return regExpEmail.test(email);
    }

    //метод для проверки  домена
    static isDomain(domain) {
        const regExpDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
        return regExpDomain.test(domain);
    }

    //метод для проверки даты
    static isDate(date) {
        const regExpDate = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}/;
        return regExpDate.test(date);
    }

    //метод для проверки телефона
    static isPhone(phone) {
        const regExpPhone = /\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;
        return regExpPhone.test(phone);
    }
}

console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));