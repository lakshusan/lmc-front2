var header = document.getElementById("header");
header.textContent = "Congrats! You made a " + localStorage.getItem("bakedgood") + "!";
var name = "/lmc-frontend/images/" + localStorage.getItem("bakedgood") + ".png";
console.log(name);
var image = document.getElementById("image");
image.style.width = '200px';
image.style.width = '200px';
image.style.objectFit = 'contain';
image.setAttribute("src", name);
console.log(image);
var points = 0;
// After 6 seconds, remove the hidden class from the Danish image to make it visible
setTimeout(function() {
    document.querySelector('.hidden').classList.remove('hidden');
}, 6000);
setTimeout(function() {
    window.location.href = "/lmc-frontend/cook";
}, 9000);
//
//
const url = "https://lmc.stu.nighthawkcodingsociety.com/api/users/";
const options = {
method: 'GET',
mode: 'cors',
cache: 'default',
credentials: 'include',
headers: {
    'Content-Type': 'application/json',
},
};
//
function success()
{
fetch(url, options)
.then(response => response.json())
.then(data => {
    // Handle successful response here
    let currentItems = '';
    for (const row of data) {
        if (row.uid == localStorage.getItem('uid')) {
            currentItems = row.items;
            currentPoints = parseInt(row.points);
        }
    }
    console.log(localStorage.getItem("bakedgood"));
            let list = [];
            try {
                list = JSON.parse(currentItems);
                if (!Array.isArray(list)) {
                    throw new Error('Parsed data is not an array');
                }
            } catch (error) {
                console.error('Error parsing currentItems:', error.message);
            }
            list.push(localStorage.getItem("bakedgood"));
        currentItems = JSON.stringify(list)
    var points = currentPoints + parseInt(localStorage.getItem("points"));
    console.log(typeof points);
    console.log(currentItems); // Logging the retrieved items
    // Manipulate and update the items here
    const body = {
        uid: localStorage.getItem('uid'),
        points:points,
        items: currentItems
    };
    const authoptions = {
        method: 'PUT',
        mode: 'cors',
        cache: 'default',
        credentials: 'include',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    };
fetch(url, authoptions);
})
.catch(error => {
    // Handle error
    console.error('Error fetching user data:', error);
});
}
success();
