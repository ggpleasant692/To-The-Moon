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
