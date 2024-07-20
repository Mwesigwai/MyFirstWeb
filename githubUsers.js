


let usersDiv = document.querySelector('.users');
let userDetails = '';

function getUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);
    xhr.onload = ()=>{
        if(xhr.status == 200){
            let users = JSON.parse(xhr.responseText);
            for (const i in users) {
                let user = 
                `
                    <div class="user">
                        <img src= "${users[i].avatar_url}" width="100px" height="100px">
                        <ul>
                            <li>Id:  ${users[i].id}</li>
                            <li>Name:  ${users[i].login}</li>
                        </ul>
                        <div class="icons">
                            <img src = "/like.svg" class="likeIcon" onclick="likeBtnClicked(event)">
                            <img src = "/heart.svg" class="likeIcon" onclick = "loveBtnClicked(event)">
                            <span>23</span>
                            <span id="likes"></span>
                        </div>
                    </div>
                `
                userDetails += user;
            }
            usersDiv.innerHTML = userDetails;
        }
        else{
            alert('no')
        }
    }

    xhr.send();
}

getUsers();
