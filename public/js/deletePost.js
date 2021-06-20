const deleteEl = document.querySelector("#deletebtn")

const deleteProject = async (event) =>{
    event.preventDefault();
    let post=event.target.getAttribute("data-id")
    console.log ("///////////////////////// the post id=" + post);

    const delres = await fetch ("/api/post/delete/" 
    , {
        method:"DELETE",
        body: JSON.stringify({
            id: post
        }),
        headers:{ "Content-Type": "application/json"}
    })
    if (delres.ok){
        document.location.replace("/dashboard")
    } else {
        alert ("failed to delete project")
    }
}



deleteEl.addEventListener("click",deleteProject)