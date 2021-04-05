//nav bar hamburger toggle
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
   navbarlinks.classList.toggle('active')
})

//scroll arrow svg
const scrollWin = () => {
    window.scrollBy(0, 1200);
  }

//contactform.
function deleteMessages() {        
   if (window.sessionStorage.getItem("messages")) {
       window.sessionStorage.removeItem("messages");
   }
   
                renderMessages();
               }
   
              function submitMessage(event) {
                  event.preventDefault();
                  const email = document.getElementById("email").value;
                  const fullname = document.getElementById("fullname").value;
                  const comment = document.getElementById("comment").value;
   
                  const messageObject = {
                      email, fullname, comment
                  };
   
                  
   
               let currentMessages = [];
   
               if (window.sessionStorage.getItem("messages")) {
                   currentMessages = 
                   JSON.parse(
                       window.sessionStorage.getItem("messages")
                   );
               }
   
               currentMessages.push(messageObject);
               window.sessionStorage.setItem(
                   "messages",
                   JSON.stringify(currentMessages)
               );
   
              } 
   
              function renderMessages() {
               let currentMessages = [];
   
   if (window.sessionStorage.getItem("messages")) {
       currentMessages = 
       JSON.parse(
           window.sessionStorage.getItem("messages")
       );
   }    
   
   let listItems = [];
   for (let i = 0; i < currentMessages.length; i++) {
       let listItem = "";
       const currentMessage = currentMessages[i];
       listItem += `<dt>${currentMessage.fullname} - ${currentMessage.email}</dt>`;
       listItem += `<dd>${currentMessage.comment}</dd>`;
           listItem += `<br />`;
           listItems.push(listItem);
   }
   
   let descList = document.getElementById('currentMessages');
   descList.innerHTML = listItems.join('');
              }
   
              renderMessages();