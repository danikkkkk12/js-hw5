let day = parseInt(prompt("Введіть номер дня тижня (1-7):"));

switch (day) {
    case 1:
        console.log("Понеділок");
        break;
    case 2:
        console.log("Вівторок");
        break;
    case 3:
        console.log("Середа");
        break;
    case 4:
        console.log("Четвер");
        break;
    case 5:
        console.log("П'ятниця");
        break;
    case 6:
        console.log("Субота");
        break;
    case 7:
        console.log("Неділя");
        break;
    default:
        console.log("Невірний номер дня!");
}


let month = parseInt(prompt("Введіть номер місяця (1-12):"));

switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("Зима");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Весна");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Літо");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Осінь");
        break;
    default:
        console.log("Невірний номер місяця!");
}

let age = parseInt(prompt("Введіть свій вік:"));

switch (true) {
    case (age >= 0 && age <= 12):
        console.log("Дитина");
        break;
    case (age >= 13 && age <= 17):
        console.log("Підліток");
        break;
    case (age >= 18 && age <= 64):
        console.log("Дорослий");
        break;
    case (age >= 65):
        console.log("Пенсіонер");
        break;
    default:
        console.log("Невірний вік!");
}

let operation = prompt("Введіть операцію (+, -, *, /):");
let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));

switch (operation) {
    case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "/":
        if (num2 !== 0) {
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
        } else {
            console.log("Ділення на нуль неможливе!");
        }
        break;
    default:
        console.log("Невірна операція!");
}

let monthName = prompt("Введіть назву місяця (наприклад, 'Січень'):").toLowerCase();

switch (monthName) {
    case "січень":
        console.log("1");
        break;
    case "лютий":
        console.log("2");
        break;
    case "березень":
        console.log("3");
        break;
    case "квітень":
        console.log("4");
        break;
    case "травень":
        console.log("5");
        break;
    case "червень":
        console.log("6");
        break;
    case "липень":
        console.log("7");
        break;
    case "серпень":
        console.log("8");
        break;
    case "вересень":
        console.log("9");
        break;
    case "жовтень":
        console.log("10");
        break;
    case "листопад":
        console.log("11");
        break;
    case "грудень":
        console.log("12");
        break;
    default:
        console.log("Невірна назва місяця!");
}

let service = prompt("Оцініть обслуговування ('відмінно', 'добре', 'задовільно'):").toLowerCase();
let bill = parseFloat(prompt("Введіть суму рахунку:"));

switch (service) {
    case "відмінно":
        console.log(`Чайові: ${bill * 0.2}`);
        break;
    case "добре":
        console.log(`Чайові: ${bill * 0.15}`);
        break;
    case "задовільно":
        console.log(`Чайові: ${bill * 0.1}`);
        break;
    default:
        console.log("Невірна оцінка обслуговування!");
}
