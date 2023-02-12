const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
	const value = e.target.value.toLowerCase()
	users.forEach(user => {
	  const isVisible =
		user.name.toLowerCase().includes(value) ||
		user.email.toLowerCase().includes(value)
	  user.element.classList.toggle("hide", !isVisible)
	})
  })
  
  fetch("https://jsonplaceholder.typicode.com/users") // SAMPLE LINK AS DATA .JSON IN LOCAL NOT FETCHING
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const cardHead = userCardTemplate.content.cloneNode(true).children[0]
      const resumeName = cardHead.querySelector("[data-header]")
      const resumeJobdescription = cardHead.querySelector("[data-body]")
      resumeName.textContent = resume.basics.name
      resumeJobdescription.textContent = resume.basics.AppliedFor
      resumePhoto.textContent = resume.basics.image

      const cardSideBar1= userCardTemplate.content.cloneNode(true).children[0]
      const sideBarHeader1=cardSideBar1.querySelector("[sidedata-header]")
      const sideBarBody1=cardSideBar1.querySelector("[sidedata-body]")
      sideBarHeader1.textContent="Personal Information"
      sideBarBody1.textContent = resume.basics.phone
      sideBarBody1.textContent = resume.basics.email
      sideBarBody1.textContent = resume.basics.profiles.network
     
      const cardSideBar2= userCardTemplate.content.cloneNode(true).children[0]
      const sideBarHeader2=cardSideBar2.querySelector("[sidedata-header]")
      const sideBarBody2=cardSideBar2.querySelector("[sidedata-body]")
      sideBarHeader2.textContent="Technical Skills"
      sideBarBody2.textContent = resume.skills.keywords

      const cardSideBar3= userCardTemplate.content.cloneNode(true).children[0]
      const sideBarHeader3=cardSideBar3.querySelector("[sidedata-header]")
      const sideBarBody3=cardSideBar3.querySelector("[sidedata-body]")
      sideBarHeader3.textContent="Hobbies"
      sideBarBody3.textContent = resume.interests.hobbies

      userCardContainer.append(cardHead,cardSideBar1,cardSideBar2,cardSideBar3)
      return { resumeName: resume.basics.name, resumeJobdescription:resume.basics.AppliedFor, resumePhoto:resume.basics.image, 
               sideBarBody1: resume.basics.phone, sideBarBody1:resume.basics.email, sideBarBody1:resume.basics.profiles.network,
                sideBarBody2: resume.skills.keywords, sideBarBody3: resume.interests.hobbies, element:cardHead,element:cardSideBar1,element:cardSideBar2,element:cardSideBar3}
  })


