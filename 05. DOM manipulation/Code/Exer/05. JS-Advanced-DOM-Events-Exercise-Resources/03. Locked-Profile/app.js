function lockedProfile() {
    /* <--- My code --->
    let locked1 = document.querySelector('input[name="user1Locked"]').checked;
    let locked2 = document.querySelector('input[name="user2Locked"]').checked;
    let locked3 = document.querySelector('input[name="user3Locked"]').checked;

    let user1Btn = document.querySelectorAll(".profile button")[0];
    let user2Btn = document.querySelectorAll(".profile button")[1];
    let user3Btn = document.querySelectorAll(".profile button")[2];
    if (locked1 == false) {
        user1Btn.addEventListener("click", showMore1);
    }
    user2Btn.addEventListener("click", showMore2);
    user3Btn.addEventListener("click", showMore3);

    function showMore1() {
        let user1MoreInfo = document.getElementById('user1Username');
        console.log(user1MoreInfo.children[0]);
    }

    function showMore2() {
        console.log("I was clicked and i am the second User");
    }

    function showMore3() {
        console.log("I was clicked and i am the third User");
    }
    <--- End --->*/

    // <--- Sensei Code --->

    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', toggle));

    function toggle(e) {
        let profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            let div = profile.querySelector('div');

            if (e.target.textContent = 'Show more') {
                div.style.display = 'block';
                e.target.textContent = 'Hide it'
            } else {
                div.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }

}