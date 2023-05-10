
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTQ1MWRhMzdiODJkNDcyOGQ5YzExMzMxYWZmOGZkMyIsInN1YiI6IjY0NTk0N2MwNmM4NDkyMDBmZGQwNDQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BlV58MI9bvfJgLBiNRTUKwgTcX5tO20DOnhk0khXFew'
    }
  };


const movieListings = async(x) =>{
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${x}&include_adult=false&language=en-US&page=1`, options)
    const response = await data.json()
    console.log(response.results[0])
}

// -------------------------------------------------------------------------------------------------//

const searchBar = document.querySelector(".search-bar")

searchBar.addEventListener("keypress", function(event){
    if(event.keyCode ==13 && searchBar.value.length >= 1){
        console.log(searchBar.value)
        const search = searchBar.value
        // movieListings(search)
        const movieListings = async(search) =>{
            const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
            const response = await data.json()
            const searchItem = response.results[0]
            console.log(searchItem)

            let displayItem =`
            <img src="https://image.tmdb.org/t/p/original${searchItem.poster_path}" alt="">
            <div class="displayItem-info">
                <div>${searchItem.original_title}</div>
                <div>Rating: ${searchItem.vote_average}</div>
                <div>${searchItem.overview}</div>
    
            </div>
        </div>
            `
            console.log(displayItem)
            const searchBarResult = document.querySelector(".search-bar-result")
            searchBarResult.innerHTML = displayItem
        }
        movieListings(search)
        

       


    } else{
        return 
    }
})
  
// -------------------------------------------------------------------------------------------------------------//
// NAVBAR

const hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", function(){
    const rightNavbar = document.querySelector(".right-navbar")
    rightNavbar.classList.toggle("active")
})


const home = () =>{
    const homeSection = document.querySelector(".welcome")
    
    window.scrollTo({
        right:0,
        top:homeSection.offsetTop,
        behavior:"smooth"
    })
}

const contact = () =>{
    const contactSection = document.getElementById("contact")
    
    window.scrollTo({
        right:0,
        top:contactSection.offsetTop,
        behavior:"smooth"
    })
}

const info = () =>{
    const infoSection = document.getElementById("info")
    
    window.scrollTo({
        right:0,
        top:infoSection.offsetTop,
        behavior:"smooth"
    })
}




//-----------------------------------------------------------------------------------------------------------------//
//To display movies


const topRated = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    const topRatedListings = await data.json()
    const results = topRatedListings.results
    console.log(results)

    let displayResults = results.map((item=>{
        return `
        <div class="display-movie-item">
            <img src="https://image.tmdb.org/t/p/original${item.poster_path}" alt="">
        </div>
        `
    }))

    displayResults = displayResults.join("")
    const topRated = document.querySelector(".top-rated")
    topRated.innerHTML = displayResults




}

topRated()

const left = (id) =>{
    // const topRated = document.querySelector(".top-rated")
    // topRated.scrollBy(-250,0)
    const element = document.querySelector(`.${id}`)
    console.log(element)
    element.scrollBy(-250,0)
    
}

const right = (id) =>{
    // const topRated = document.querySelector(".top-rated")
    // topRated.scrollBy(250,0)
    const element = document.querySelector(`.${id}`)
    console.log(element)
    element.scrollBy(250,0)
}

const popular = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const topRatedListings = await data.json()
    const results = topRatedListings.results
    console.log(results)

    let displayResults = results.map((item=>{
        return `
        <div class="display-movie-item">
            <img src="https://image.tmdb.org/t/p/w300${item.poster_path}" alt="">
        </div>
        `
    }))
    displayResults = displayResults.join("")
    const popular = document.querySelector(".popular")
    popular.innerHTML = displayResults




}

popular()

const upcoming = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    const upcomingList = await data.json()
    const results = upcomingList.results
    console.log(results)

    let displayResults = results.map((item=>{
        return `
        <div class="display-movie-item">
            <img src="https://image.tmdb.org/t/p/w300${item.poster_path}" alt="">
        </div>
        `
    }))
    displayResults = displayResults.join("")
    const upcoming = document.querySelector(".upcoming")
    upcoming.innerHTML = displayResults




}
upcoming()


// -----------------------------------------------------------------------//
