export const setAuthToken = (user)=>{
    const currentUser = {
        email: user.email,
      }

    fetch('https://genius-car-server-blush-five.vercel.app/jwt', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => { 
        console.log(data)
        // Local storage is easiest but not the best place for jwt token
      
        localStorage.setItem('genius-token', data.token)

      })

}