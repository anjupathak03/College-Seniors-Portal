const seniors = [
    {name: 'Isheeta Juneja', linkedin: 'https://www.linkedin.com/in/isheeta-juneja-191962205/', company: 'ZS', image: 'https://media.licdn.com/dms/image/D4D03AQFdoznFrYeDow/profile-displayphoto-shrink_800_800/0/1683047207874?e=1727308800&v=beta&t=ts64PbPQzCAq6_ZbPga76PZluG48xqBf_JeiPzC-Q90'},
    {name: 'Dhruv Saluja', linkedin: 'https://www.linkedin.com/in/dhruv-saluja/', company: 'ZS', image: 'https://media.licdn.com/dms/image/C4D03AQGgNuLh5uuPhw/profile-displayphoto-shrink_800_800/0/1658215323483?e=1727308800&v=beta&t=ww-RSaAi1bYU8N6ezZOIfOg2wenR0OJ4D6ZPudk_vvk'},
    {name: 'Ishita Agrawal', linkedin: 'https://www.linkedin.com/in/ishita-ag/', company: 'ZS', image: 'https://media.licdn.com/dms/image/D5635AQEfp-UtIICqzw/profile-framedphoto-shrink_800_800/0/1711793044303?e=1722189600&v=beta&t=SvVeomAT0x2fCJpZZBPI8WrWCjBcNugM6I7CM2hjljY'},
    {name: 'Deepanshu Sharma', linkedin: 'https://www.linkedin.com/in/dpnshusharma/', company: 'ZS', image: 'https://media.licdn.com/dms/image/C4D03AQEc00ExpVkR3w/profile-displayphoto-shrink_400_400/0/1634823179326?e=1727308800&v=beta&t=t0r7r0fExM8-yGX6U9_FcHiC0hIyKlUq-o0zq7jOabk'},
    {name: 'Mayank Hora', linkedin: 'https://www.linkedin.com/in/mayankhora/', company: 'EY', image: 'https://media.licdn.com/dms/image/D5603AQHCAnXgIIsuvA/profile-displayphoto-shrink_400_400/0/1713386528261?e=1727308800&v=beta&t=2C4ozAvFyCbdInGxUPA2LP4caeo4xD-s2NSD3Y-vnGw'},
    {name: 'Priyanka Bisht', linkedin: 'https://www.linkedin.com/in/priyanka-bisht-711538211/', company: 'EY', image: 'https://media.licdn.com/dms/image/D5603AQHDEoH0KaCkWQ/profile-displayphoto-shrink_400_400/0/1707281991716?e=1727308800&v=beta&t=mS5gHgUvstBdWl2PBlm-3dYOZM1_DlvQxI3kWclIwVc'},
    {name: 'Rupanshi Bhatnagar', linkedin: 'https://www.linkedin.com/in/rupanshi-bhatnagar-5b6211214/', company: 'EY', image: 'https://media.licdn.com/dms/image/D4D03AQH3ruajcfSCHQ/profile-displayphoto-shrink_400_400/0/1692879808892?e=1727308800&v=beta&t=RZS5N69J4CdKpaP_7uINzyoJWLmn0WQUzl9joIiXh9A'},
    {name: 'Vasudev Pant', linkedin: 'https://www.linkedin.com/in/vasudevpant/', company: 'Accenture', image: 'https://media.licdn.com/dms/image/D4E03AQHuNDs1s3fSuw/profile-displayphoto-shrink_400_400/0/1633148781538?e=1727308800&v=beta&t=0efAaZx5FPZtfvI5Svatd0g4OG6V-wHOjRw8J-2T5ic'},
    {name: 'Shruti Mishra', linkedin: 'https://www.linkedin.com/in/shruti-mishra-21b452256/', company: 'Accenture', image: 'https://media.licdn.com/dms/image/D5603AQEOd40PMl82Rw/profile-displayphoto-shrink_400_400/0/1721055644662?e=1727308800&v=beta&t=91Y7PkTF9pIATcVMwuSqkp__sTZihhMlteAbfdXionQ'},
    {name: 'Aditya Tyagi', linkedin: 'https://www.linkedin.com/in/aditya-tyagi-5833a5230/', company: 'Accenture', image: 'https://media.licdn.com/dms/image/D4D03AQEpUa-gUa0n2w/profile-displayphoto-shrink_400_400/0/1687630086156?e=1727308800&v=beta&t=lmE31kwLXjfmJ_wONS1UxEeHDWu_5xvh2YcLrAt2WF8'},
    {name: 'Richa Tayal', linkedin: 'https://www.linkedin.com/in/richa-tayal-4a22a9210/', company: 'Accenture', image: 'https://media.licdn.com/dms/image/D4D35AQHOyve0L-sAuw/profile-framedphoto-shrink_400_400/0/1684046083632?e=1722193200&v=beta&t=peeKb5qLzL-naPDiYNHiZ8pYBFBpYiA8E4wDpH4w808'},
    {name: 'Aryan Tiwari', linkedin: 'https://www.linkedin.com/in/aryan-tiwari16/', company: 'Scaler Academy', image: 'https://media.licdn.com/dms/image/D5603AQGYtSCvUwrNPg/profile-displayphoto-shrink_400_400/0/1707327464983?e=1727308800&v=beta&t=oB_3bWFJoVRqm6LPw1Zq97xp7yCzQiVNx0XJR08qocM'},
    {name: 'Aryan', linkedin: 'https://www.linkedin.com/in/aryan0725/', company: 'Scaler Academy', image: 'https://media.licdn.com/dms/image/D4D03AQFUkK53oK6i0g/profile-displayphoto-shrink_400_400/0/1684815338172?e=1727308800&v=beta&t=3SSmJzKCqXnciGVxFgzA-mOe_vlqLCd7c5xg-rE8OsQ'},
    {name: 'Vanshika Panwar', linkedin: 'https://www.linkedin.com/in/vanshika-panwar-9b96a222a/', company: 'Colt', image: 'https://media.licdn.com/dms/image/D4D03AQE-vshhOK1pmw/profile-displayphoto-shrink_400_400/0/1668352838929?e=1727308800&v=beta&t=APo3wZfcqD0fDhJDy9fHFQ9FjrjzN4bDr7zurKmefKs'},
    {name: 'Richa Kaushik', linkedin: 'https://www.linkedin.com/in/richa-kaushik-592409210/', company: 'Colt', image: 'https://media.licdn.com/dms/image/D4D03AQGBjEcXaumUCg/profile-displayphoto-shrink_400_400/0/1670427883982?e=1727308800&v=beta&t=BO04PW0CcoPpm6uQymNXzNQ0svVpnb_UMt39AHNZgCw'},
    {name: 'Manvi Vats', linkedin: 'https://www.linkedin.com/in/manvi-vats-72b25922a/', company: 'L&T', image: 'https://media.licdn.com/dms/image/D5603AQG3G2rHPhgB0w/profile-displayphoto-shrink_400_400/0/1720500090245?e=1727308800&v=beta&t=USKAYZaVQ5f8w_AZBuAGITt4nrwbxIj-rFEAjYaS6mY'},
    {name: 'Aksh Gambhir', linkedin: 'https://www.linkedin.com/in/akshgambhir/', company: 'L&T', image: 'https://media.licdn.com/dms/image/D5603AQEGQVdg7ZOucA/profile-displayphoto-shrink_400_400/0/1700131217862?e=1727308800&v=beta&t=4l7X4H5vYNWasKVbS52_skF5AaXWbvqmNeSLIzr_lKk'},
    {name: 'Akash Yadav', linkedin: 'https://www.linkedin.com/in/akash-yadav-8377ab243/', company: 'Softage', image: 'https://media.licdn.com/dms/image/D5635AQGOLMRbqdgHvA/profile-framedphoto-shrink_400_400/0/1714241678680?e=1722193200&v=beta&t=VG7r8vKiGfXV6KM51cn1ya2vc1HYqARv4G-QPRkUjk0'},
    {name: 'Gaurav Kumar Mishra', linkedin: 'https://www.linkedin.com/in/gaurav-kumar-mishra-24182226b/', company: 'Softage', image: 'https://media.licdn.com/dms/image/D4D03AQFZkFe69ORIKQ/profile-displayphoto-shrink_400_400/0/1695832811924?e=1727308800&v=beta&t=8vN7TMX-uPtdNo_r0RResxswNtG4Z-NS-AWPp1133d0'}
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
