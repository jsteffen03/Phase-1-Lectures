// Lets start by reviewing object manipulation
// Objects are a collection of data in a key value pair format
const obj = {
  keyoverhere: "valuepairoverhere"
}
const userInfo = {
  firstName: {
    n1: "Avi",
    n2: "Av",
    n3: "A"
  },
  lastName: "Flombaum",
  companyName: "Flatbook Labs",
  jobTitle: "Developer Apprentice",
  friend1firstName: "Nancy",
  friend1lastName: "Burgess",
  friend1companyName: "Flatbook Labs",
  friend1jobTitle: "Developer Apprentice",
  friend2firstName: "Corinna",
  friend2lastName: "Jackson",
  friend2companyName: "Flatbook Labs",
  friend2jobTitle: "Senior Developer",
  project1title: "Flatbook",
  project1description:
    "The premier Flatiron School-based social network in the world.",
  project2title: "Scuber",
  project2description:
    "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
};

// We can use . or brackets in order to get different keys from the data
//// We can iterate through this using a for loop!
/*
const key = "firstname"
console.log(userInfo.jobTitle)

for(let key in userInfo){
  console.log(userInfo[key])
}
*/
// We can nest within the object as we've seen before!

// Now let us start grabbing specific data from that

// DOM Events


// Event Listeners
//* Add a eventListener to an element and log the event object

// A common event listener you will see, why is that? What does it do?
// document.addEventListener('DOMContentLoaded', () => {})
document.addEventListener('DOMContentLoaded', () => { // also can use defer befroe src script
  const header = document.querySelector("h1")
    header.addEventListener("click",(event)=>{
      console.log(event)
      if (header.textContent === bookStore.name){
         header.textContent = bookStore.address
       } else {
         header.textContent = bookStore.name
       }
      })

// Renders Header
  function renderHeader(){
    document.querySelector('h1').textContent = bookStore.name;
  }
// Renders Footer
  function renderFooter(){
    const footerDivs = document.querySelectorAll('footer div');
    footerDivs[0].textContent = bookStore.name;
    footerDivs[1].textContent = bookStore.address;
    footerDivs[2].textContent = bookStore.hours;
  }


  renderFooter()
  renderHeader()



  bookStore.inventory.forEach(displayBook)
      /*
      div.addEventListener("mouseenter",()=>{
        div.append(image)
      })

      div.addEventListener("mouseleave",()=>{
        image.remove()
      })
      */

    

    const bookForm = document.querySelector("#book-form")
    bookForm.addEventListener("submit",(event)=>{
      event.preventDefault()

      const newBook = {
        title:event.target.title.value,
        author:event.target.author.value,
        price:event.target.price.value,
        imageUrl:event.target.imageUrl.value,
      }
      displayBook(newBook)
    })

})


function displayBook(book){
    const book_list = document.querySelector("#book-list")
    const div = document.createElement("div")
    const title = document.createElement("h3")
    const auth = document.createElement("p")
    const price = document.createElement("p")
    const image = document.createElement("img")
    const button = document.createElement("button")

    title.textContent = book.title
    auth.textContent = book.author
    price.textContent = book.price
    image.src = book.imageUrl
    button.textContent = "Show More"
    
    div.append(title,auth,price,button)
    book_list.append(div)

    let displayImage = false

      button.addEventListener("click",()=>{
        if(displayImage){
          image.remove()
          displayImage = false
          button.textContent = "Show More"
          } 
        else {
            div.append(image)
            displayImage = true
            button.textContent = "Show Less"
        }

      })
    }
    


// Let us create a function that rerenders each of the books

// Add a button element to this function
// Now we can add an event listener to remove it!


// Now how would we handle the form we have?

// Lets add an event listener! Make it a submit type and pass into it a function

// Now we can create a function to handle this form! We need to now use
// e.preventDefault()
// use e.target to get specific items out of the event
// now we can create a new book object!