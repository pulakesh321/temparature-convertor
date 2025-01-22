function convertTemp() {
    const displayField = document.getElementById('display');
    const celTemp = displayField.value;
    document.getElementById('tempForm').addEventListener('change', function(event) {
        if (event.target.name === 'temparature') {
          console.log('Selected value:', event.target.value);
        }
      });
    const convertedValue = convertCelToFaren(celTemp);
    document.getElementById("message").innerHTML = convertedValue;
    
}

function convertCelToFaren(celTemp) {
    return (celTemp*9+160)/5;
}   

  
