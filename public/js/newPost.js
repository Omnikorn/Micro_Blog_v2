
const submitBtn = document.querySelector("#postbtn");

const createNewPost = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;

    const text = document.querySelector("#text").value;

    const response = await fetch('/api/post/create', {
        method: 'POST',
        body: JSON.stringify({
           title, text
        }),
        headers: { 'Content-Type': 'application/json'},
    });
    if (response.ok) {
        document.location.replace("/dashboard")
    } else {
        alert("failed to create post")
    }
}
    


submitBtn.addEventListener("click", createNewPost)