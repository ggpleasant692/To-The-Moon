async function fetchData() {
    const url = 'https://wordsapiv1.p.rapidapi.com/words/discography/definitions';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '224ce32396msh8c966221aca4045p17b191jsn83f870dfe4f6',
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json(); 
        
        
        const definition = data.definitions && data.definitions.length > 0 ? data.definitions[0].definition : 'No definition found';

      
        const dataContainer = document.getElementById('dataContainer');
        dataContainer.textContent = definition;
    } catch (error) {
        console.error('Error fetching data:', error);

        const dataContainer = document.getElementById('dataContainer');
        dataContainer.textContent = 'Error fetching data. Please try again later.';
    }
}

fetchData();
updateCount();

document.addEventListener("DOMContentLoaded", function() {
    
    let modal = document.getElementById('feedbackModal');
    let btn = document.getElementById("openModalBtn");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
   
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        let email = document.getElementById("email").value;
        let feedback = document.getElementById("feedback").value;

        console.log("Email:", email);
        console.log("Feedback:", feedback);
      
        modal.style.display = "none";
    });
});
