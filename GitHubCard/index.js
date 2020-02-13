/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get('https://api.github.com/users/DavidShestopal')

  .then(response => {
    console.log(response);
    const entryPoint = document.querySelector('.cards');
    console.log(entryPoint);
    entryPoint.appendChild(cardCreator(response));
  })
  .catch(error => {
    console.log('data not returned', error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['josiahroa18', 'ajablanco', 'NataliaBeckstead', 'kkslider2130', '	mmussel'];

followersArray.forEach(user => {
  axios
    .get(`https://api.github.com/users/${user}`)

    .then(response => {
      console.log(response);
      const entryPoint = document.querySelector('.cards');
      console.log(entryPoint);
      entryPoint.appendChild(cardCreator(response));
    })
    .catch(error => {
      console.log('data not returned', error);
    });
});
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
// created the lego pieces
const cardCreator = response => {
  let newCard = document.createElement('div');
  let newImage = document.createElement('img');
  let newInfoCard = document.createElement('div');
  let newName = document.createElement('h3');
  let newUsername = document.createElement('p');
  let newLocation = document.createElement('p');
  let newProfile = document.createElement('p');
  let newUrl = document.createElement('a');
  let newFollowers = document.createElement('p');
  let newFollowing = document.createElement('p');
  let newBio = document.createElement('p');
  // glued the lego pieces
  newCard.appendChild(newImage);
  newCard.appendChild(newInfoCard);
  newInfoCard.appendChild(newName);
  newInfoCard.appendChild(newUsername);
  newInfoCard.appendChild(newLocation);
  newInfoCard.appendChild(newProfile);
  newProfile.appendChild(newUrl);
  newInfoCard.appendChild(newFollowers);
  newInfoCard.appendChild(newFollowing);
  newInfoCard.appendChild(newBio);
  // added the classes
  newCard.classList.add('card');
  newInfoCard.classList.add('card-info');
  newUsername.classList.add('username');
  // added the content
  newImage.setAttribute('src', response.data.avatar_url);
  newName.textContent = response.data.name;
  newUsername.textContent = response.data.login;
  newLocation.textContent = `Location:  ${response.data.location}`;
  newProfile.textContent = 'Profile:  ';
  newUrl.textContent = `${response.data.html_url}`;
  newUrl.setAttribute('href', response.data.html_url);
  newUrl.setAttribute('target', '_blank');
  newFollowers.textContent = `Followers: ${response.data.followers}`;
  newFollowing.textContent = `Following: ${response.data.following}`;
  newBio.textContent = `Bio: ${response.data.bio}`;

  return newCard;
};
