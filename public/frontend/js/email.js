const scriptURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5lN9lVaMN_HNW-woga3msNlDkAXKWn9SVf4a68xc-LKSFdw/formResponse'
const form = document.forms['google-sheet']


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(
            // alert("Data Inserted")
            // document.location = "index2.html"
            form.reset(),
            // document.getElementById("mess").innerHTML = "Thank you for the form submition"\
            console.warn('success to send a message')
        )
        .catch(error => console.error('Error!', error.message))

})









