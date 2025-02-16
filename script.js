const seniors = [
    {name: 'Isheeta Juneja', linkedin: 'https://www.linkedin.com/in/isheeta-juneja-191962205/', company: 'ZS', image:'images/isheeta.jpg'},
    {name: 'Dhruv Saluja', linkedin: 'https://www.linkedin.com/in/dhruv-saluja/', company: 'ZS', image: 'images/dhruv.jpg'},
    {name: 'Ishita Agrawal', linkedin: 'https://www.linkedin.com/in/ishita-ag/', company: 'ZS', image: 'images/isheeta2.jpg'},
    {name: 'Deepanshu Sharma', linkedin: 'https://www.linkedin.com/in/dpnshusharma/', company: 'ZS', image: 'images/deepanshu.jpg'},
    {name: 'Mayank Hora', linkedin: 'https://www.linkedin.com/in/mayankhora/', company: 'EY', image: 'images/mayank.jpg'},
    {name: 'Priyanka Bisht', linkedin: 'https://www.linkedin.com/in/priyanka-bisht-711538211/', company: 'EY', image: 'images/priyanka.jpg'},
    {name: 'Rupanshi Bhatnagar', linkedin: 'https://www.linkedin.com/in/rupanshi-bhatnagar-5b6211214/', company: 'EY', image: 'images/rupanshi.jpg'},
    {name: 'Vasudev Pant', linkedin: 'https://www.linkedin.com/in/vasudevpant/', company: 'Accenture', image: 'images/vasu.jpg'},
    {name: 'Shruti Mishra', linkedin: 'https://www.linkedin.com/in/shruti-mishra-21b452256/', company: 'Accenture', image: 'images/shruti.jpg'},
    {name: 'Aditya Tyagi', linkedin: 'https://www.linkedin.com/in/aditya-tyagi-5833a5230/', company: 'Accenture', image: 'images/aditya.jpg'},
    {name: 'Richa Tayal', linkedin: 'https://www.linkedin.com/in/richa-tayal-4a22a9210/', company: 'Accenture', image: 'images/rich.jpg'},
    {name: 'Aryan Tiwari', linkedin: 'https://www.linkedin.com/in/aryan-tiwari16/', company: 'Scaler Academy', image: 'images/aryantiwari.jpg'},
    {name: 'Aryan', linkedin: 'https://www.linkedin.com/in/aryan0725/', company: 'Scaler Academy', image: 'images/aryan.jpg'},
    {name: 'Vanshika Panwar', linkedin: 'https://www.linkedin.com/in/vanshika-panwar-9b96a222a/', company: 'Colt', image: 'images/vanshika.jpg'},
    {name: 'Richa Kaushik', linkedin: 'https://www.linkedin.com/in/richa-kaushik-592409210/', company: 'Colt', image: 'images/richa.jpg'},
    {name: 'Manvi Vats', linkedin: 'https://www.linkedin.com/in/manvi-vats-72b25922a/', company: 'L&T', image: 'images/manvi.jpg'},
    {name: 'Aksh Gambhir', linkedin: 'https://www.linkedin.com/in/akshgambhir/', company: 'L&T', image: 'images/lnt.jpg'},
    {name: 'Akash Yadav', linkedin: 'https://www.linkedin.com/in/akash-yadav-8377ab243/', company: 'Softage', image: 'images/akash.jpg'},
    {name: 'Gaurav Kumar Mishra', linkedin: 'https://www.linkedin.com/in/gaurav-kumar-mishra-24182226b/', company: 'Softage', image: 'images/vasu.jpg'}
];

function displaySeniors(seniorList) {
    const seniorContainer = document.getElementById('seniorList');
    seniorContainer.innerHTML = '';

    seniorList.forEach(senior => {
        const seniorCard = document.createElement('div');
        seniorCard.className = 'senior';
        seniorCard.innerHTML = `
            <img src="${senior.image}" alt="${senior.name}">
            <div>
                <h3>${senior.name}</h3>
                <p>Company: ${senior.company}</p>
                <p><a href="${senior.linkedin}" target="_blank">LinkedIn Profile</a></p>
            </div>
        `;
        seniorContainer.appendChild(seniorCard);
    });
}

document.getElementById('seniorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const linkedin = document.getElementById('linkedin').value;
    const company = document.getElementById('company').value;
    const image = document.getElementById('image').value;

    seniors.push({name, linkedin, company, image});
    displaySeniors(seniors);

    document.getElementById('seniorForm').reset();
});

function searchSeniors() {
    const searchBar = document.getElementById('searchBar').value.toLowerCase();
    const filteredSeniors = seniors.filter(senior => senior.company.toLowerCase().includes(searchBar));
    displaySeniors(filteredSeniors);
}

// Initial display of all seniors
displaySeniors(seniors);
