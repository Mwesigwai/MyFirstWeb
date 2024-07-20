


let usersDiv = document.querySelector('.users');
let userDetails = '';
let likeCount = 0;
function likeBtnClicked(event) {
    if(event.target.src == 'http://127.0.0.1:5500/like.svg'){        
        event.target.src = 'http://127.0.0.1:5500/blueLike.svg'
        likeCount = likeCount+1;
    }else{
        event.target.src = 'http://127.0.0.1:5500/like.svg'
    }
}

function loveBtnClicked(event) {
    if(event.target.src == 'C:\Users\IsaacMwesigwa\Desktop\CSS_Assignments\SurveyForm\es6\MyFirstWeb\heart.svg'){        
        event.target.src = 'http://127.0.0.1:5500/redHeart.svg'
    }else{
        event.target.src = 'http://127.0.0.1:5500/heart.svg'
    }
}

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
                            <span id="likes">${likeCount}</span>
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