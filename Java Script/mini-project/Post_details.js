const url2 = new URL(location.href);
const postOFid = url2.searchParams.get('id');


const about_postDiv = document.getElementsByClassName('about_post')[0];

fetch('https://jsonplaceholder.typicode.com/posts/' + postOFid)
    .then(value => value.json())
    .then(value => {

        const userIdpost = document.createElement('div');
        userIdpost.innerText = ' User ID this user : ' + value.userId;
        userIdpost.classList.add('postStyle');

        const Idpost = document.createElement('div');
        Idpost.innerText = '  ID this user : ' + value.id;
        Idpost.classList.add('postStyle');

        const tittlepost = document.createElement('div');
        tittlepost.innerText = ' Title this user : ' + value.title;
        tittlepost.classList.add('postStyle');

        const bodypost = document.createElement('div');
        bodypost.innerText = ' Body this user : ' + value.body;
        bodypost.classList.add('postStyle');

        const coment_of_current_user = document.createElement('button');
        coment_of_current_user.innerText = 'Comments of current user';
        coment_of_current_user.classList.add('btnEnd');


        const comments = document.createElement('div');
        comments.classList.add('conteinerComments');


        coment_of_current_user.onclick = function () {

            fetch(`https://jsonplaceholder.typicode.com/posts/${postOFid}/comments`)
                .then(value => value.json())
                .then(value => {
                    for (const commentItem of value) {


                        const userIdComments = document.createElement('div');
                        userIdComments.innerText = ' User ID this comments : ' + commentItem.postId;


                        const IdComments = document.createElement('div');
                        IdComments.innerText = ' ID this comments : ' + commentItem.id;


                        const nameComents = document.createElement('div');
                        nameComents.innerText = ' Name this comments : ' + commentItem.name;


                        const emailComents = document.createElement('div');
                        emailComents.innerText = ' Email this comments : ' + commentItem.email;


                        const bodyComents = document.createElement('div');
                        bodyComents.innerText = ' Body this comments : ' + commentItem.body;


                        const fukcomments = document.createElement('div');
                        fukcomments.classList.add('fukcomments');

                        fukcomments.append(userIdComments, IdComments, nameComents, emailComents, bodyComents);
                        comments.append(fukcomments)
                    }
                });
        };


        about_postDiv.append(userIdpost, Idpost, tittlepost, bodypost);
        document.body.appendChild(coment_of_current_user);
        document.body.appendChild(comments);

    });