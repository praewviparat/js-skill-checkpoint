// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUserdata = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
}

let newUsers = [];

getUserdata()
.then((data) => data.json())
.then((data) => {
    for(let i = 0; i < data.length; i++){
        newUsers.push(data[i].name);
    }
    console.log(newUsers)
}
)

