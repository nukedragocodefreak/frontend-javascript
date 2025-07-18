interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Noel",
    lastName: "Mangwarira",
    age: 35,
    location: "South Africa"
};

const student2: Student = {
    firstName: "Danai",
    lastName: "Mangwarira",
    age: 34,
    location: "Zimbabwe"
};

const studentsList: Student[] = [student1, student2];

// Render a table showing first name and location
const table = document.createElement('table');

// Optional: Create table headers
const headerRow = document.createElement('tr');
const headerFirstName = document.createElement('th');
headerFirstName.textContent = 'First Name';
const headerLocation = document.createElement('th');
headerLocation.textContent = 'Location';

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Loop through students and add rows
studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

// Append table to the document body
document.body.appendChild(table);

