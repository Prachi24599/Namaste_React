const API_URL = "https://api.github.com/users/prachi24599";

async function getData(params) {
    const res = await fetch(API_URL);
    console.log(res);
    const data = await res.json();
    console.log(data);
}
getData()