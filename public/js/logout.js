
const logoutEl= document.querySelector("#logout")

logoutEl.addEventListener("click", async (event)=> {

  event.preventDefault();

  const response = await fetch('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }

})