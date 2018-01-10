function field_focus(field, email) {
    if (field.value == email) {
        field.value = '';
    }
}

function signIn() {
    let email = $("#email").val();
    let pwd = $("#pwd").val();
    const a = JSON.stringify({
        username: email,
        password: pwd
    });
    const url =  "http://mutex.demo/login?username="+email+"&password="+pwd;
console.log(url);
    // const postData = {
    //     url: "http://mutex.demo/login?username:"+username+"&password:"+password,
    //     contentType: "application/json",
    //     data: a,
        // success: function (result) {
        //     alert(result)
        //     if (result.success) {
        //         alert("Login success...", result.message);
        //     } else {
        //         alert("Login Failed", result.message);
        //     }
        // }
    // }
    $.get(url,function (result) {
        console.log("We got success ......")
        alert(result)
        if (result.success) {
            alert("Login success...", result.message);
        } else {
            alert("Login Failed", result.message);
        }
    });
}

function field_blur(field, email) {
    if (field.value == '') {
        field.value = email;
    }
}

//Fade in dashboard box
$(document).ready(function () {
    $('.box').hide().fadeIn(1000);
});

//Stop click event
$('a').click(function (event) {
    event.preventDefault();
});