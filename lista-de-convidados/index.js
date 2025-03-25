var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce']; 

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

for(let i = 0; i <= people.length - 1; i++){
    if(i === 4){
        refused.textContent +=people[4] + " ";
    }else if(i === 5){
        refused.textContent += people[5];
    }else{
        admitted.textContent += " " +people[i];
    }
}