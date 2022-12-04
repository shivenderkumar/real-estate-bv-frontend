const propertyList = [{
    name: "name1",
    email: "email1",
    password: "password1",
    gender: "gender1",
    address: "address1",
    age: "age1",
    mobile: "mobile1",
    school: "school1",
    city: "city1"
}];

function validateToken(token) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (token == null || token=="TOKEN-INVALID") {
                resolve("login")
            }
            else{
                resolve("home")
            }    
        },2000)
    }).then((resolveRes) => {
        return resolveRes
    },(rejectRes) =>{
        return rejectRes
    });
}

function login(token) {
    if (token != null) {
        return "NEW-TOKEN-VALID"
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let token = "TOKEN-VALID";
            resolve(token);
            //reject("TOKEN-INVALID")
        }, 2000);
    }).then((resolveRes) => {
        return resolveRes
    },(rejectRes) =>{
        return rejectRes
    });
}

function getPropertyListApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let res = propertyList;
            resolve(res)
        }, 1000);
    }).then(resolveRes => {
        return resolveRes
    });
}

function addPropertyApi(data) {
    var ans = ""
    let dateObj = new Date();
    let date = dateObj.toLocaleTimeString();
    data["date"] = "" + date;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            propertyList.push(data);
            ans = propertyList;
            let res = {
                status: "success",
                data: ans.length
            }
            resolve(res);
            //reject("failed")
        }, 3000);
    }).then((resolveRes) => {
        return resolveRes
    }, (rejectRes) => {
        return rejectRes;
    })
}


//demo api fnc
// function createPost(data) {
//     return fetch(BASE_URL +'/posts/create', {
//         method: 'POST',
//         body: formData
//     }).then(res => res.data)
// }

export {
    validateToken,
    login,
    addPropertyApi,
    getPropertyListApi
}