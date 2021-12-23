const url = new URL(location.href);
const userid = url.searchParams.get('id');

const userIhfoDiv = document.getElementsByClassName('about_user')[0];

fetch('https://jsonplaceholder.typicode.com/users/' + userid)
    .then(value => value.json())
    .then(value => {


        let nameDiv = document.createElement('div');
        nameDiv.innerText = ' name : ' + value.name;

        let userNameDiv = document.createElement('div');
        userNameDiv.innerText = ' Username : ' + value.username;

        let emailDiv = document.createElement('div');
        emailDiv.innerText = ' email : ' + value.email;

        let idDiv = document.createElement('div');
        idDiv.innerText = 'id : ' + value.id;


        const address = document.createElement('div');
        address.innerText = 'address'

        const street = document.createElement('li');
        street.innerText = 'street : ' + value.address.street;

        const suite = document.createElement('li');
        suite.innerText = ' suite : ' + value.address.suite;

        const city = document.createElement('li');
        city.innerText = ' City : ' + value.address.city;

        const zipcode = document.createElement('li');
        zipcode.innerText = ' zipcode : ' + value.address.zipcode;


        const geo = document.createElement('li');
        geo.innerText = 'geo';

        const lat = document.createElement('ul');
        lat.innerText = ' lat : ' + value.address.geo.lat;

        const lng = document.createElement('ul');
        lng.innerText = ' lng : ' + value.address.geo.lng;


        const phone = document.createElement('div');
        phone.innerText = ' phine :' + value.phone;

        const website = document.createElement('div');
        website.innerText = ' website : ' + value.website;


        const company = document.createElement('div');
        company.innerText = 'Company :'

        const companyName = document.createElement('ul');
        companyName.innerHTML = `<li> name : ${value.company.name}</li>`

        const catchPhrase = document.createElement('ul');
        catchPhrase.innerHTML = `<li> name : ${value.company.catchPhrase}</li>`

        const bs = document.createElement('ul');
        bs.innerHTML = `<li> name : ${value.company.bs}</li>`;


        const post_of_current_user = document.createElement('button');
        post_of_current_user.innerText = 'post of current user';

        const posts = document.createElement('div');


        post_of_current_user.onclick = function () {

            fetch(`https://jsonplaceholder.typicode.com/users/${userid}/posts`)
                .then(value => value.json())
                .then(value => {
                    for (const valueElement of value) {

                        const tittlepost = document.createElement('div');
                        tittlepost.innerText = ' Title this user : ' + valueElement.title;
                        posts.append(tittlepost);

                            const user_link_post = document.createElement('a');
                            user_link_post.innerText = 'post details';
                            user_link_post.href = 'Post_details.html?id=' +valueElement.id;

                            posts.append(user_link_post);
                    }
                });
        };


        company.append(companyName, catchPhrase, bs);
        geo.append(lat, lng);
        address.append(street, suite, city, zipcode, geo);
        userIhfoDiv.append(idDiv, nameDiv, userNameDiv, emailDiv, address, phone, website, company, post_of_current_user, posts);


    });