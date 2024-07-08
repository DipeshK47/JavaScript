const form = document.querySelector('form');

//This use will give u empty value as its out of event listner
//const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function(submit){
    submit.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Pls give a valid height ";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Pls give a valid weight ";
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        //print result
        
    let category = ''
    if (bmi < 18.6){
        category = 'Under Weight';
    }
    else if (bmi >=18.6 && bmi <= 24.9){
        category = 'Normal Range'
    }
    else{
        category = 'Overweight'
    }
    results.innerHTML = `<span>${bmi} - ${category}</span> `
}
});