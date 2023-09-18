const list = [
    { id: 'b122001' },
    { id: 'b122002' },
    { id: 'b122003' },
    { id: 'b122004' },
    { id: 'b122005' },
    { id: 'b122006' },
    { id: 'b122007' },
    { id: 'b122008' },
    { id: 'b122009' },
    { id: 'b122010' },
    { id: 'b122011' },
];

// const data = require('./app/students/[year]/sampleData');

// console.log(data);

const newList = list.sort((a, b) => (b.id.localeCompare(a.id)));

console.log(newList.find(a => (a.id === 'b122007')), newList);