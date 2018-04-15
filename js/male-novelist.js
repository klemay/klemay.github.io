function describe() {
// list all descriptors
var colA = ['boobs', 'a bust', 'a butt', 'lips', 'an ass', 'breasts', 'hair', 'eyes', 'a voice', 'curves', 'a rump', 'legs', 'a rear end', 'mammaries', 'jugs', 'calves', 'a badonkadonk', 'gams', 'knockers', 'a complexion', 'a pout', 'hooters', 'a booty', 'cheeks', 'thighs', 'tresses'];

var colB = ['silken', 'creamy', 'shiny', 'ripe', 'juicy', 'middle-aged', 'rippling', 'wrinkled', 'luscious', 'frigid', 'voluptuous', 'expensive', 'plump', 'bountiful', 'tempestuous', 'withered', 'haughty', 'shrill', 'fat', 'dewy', 'soft', 'wiry', 'gleaming', 'withholding', 'bulbous', 'brittle'];

var colC = ['kitten', 'mountain', 'pillow', 'ice cream cone', 'tulip', 'lake', 'fortress', 'lemon', 'popsicle', 'librarian', 'python', 'pony', 'melon', 'bedsheet', 'muffin', 'bunny rabbit', 'fish', 'princess', 'ghost', 'waterfall', 'mango', 'harpy', 'ship', 'nun', 'berry', 'car'];

var colD = ['longed', 'lusted', 'wished', 'wanted', 'resolved', 'dared', 'detested', 'trembled', 'thirsted', 'expected', 'planned', 'deigned', 'proposed', 'shuddered', 'refused', 'hated', 'scorned', 'dreaded', 'did not care', 'ached', 'intended', 'hungered', 'craved', 'hankered', 'needed', 'pined'];

var colE = ['ravish', 'climb', 'invade', 'grope', 'marry', 'raw dog it with', 'caress', 'proposition', 'correct', 'emotionally manipulate', 'spar with', 'compliment', 'hire', 'booty call', 'mansplain to', 'insult', 'date', 'teabag', 'ignore', 'fondle', 'worship', 'examine', 'manhandle', 'touch', 'admire', 'demand things from'];

//make an array of arrays
var colsArr = [colA, colB, colC, colD, colE];
var descriptorsArr = [];

//iterate through colsArr to make descriptorsArr
for (i = 0; i < colsArr.length; i++) {
    var randomNumber = Math.floor(Math.random() * 26);
    descriptorsArr.push(colsArr[i][randomNumber]);
};
//take words from descriptorsArr and replace placeholders  
    document.getElementById('placeholderA').innerHTML=descriptorsArr[0];
    document.getElementById('placeholderB').innerHTML=descriptorsArr[1];
    document.getElementById('placeholderC').innerHTML=descriptorsArr[2];
    document.getElementById('placeholderD').innerHTML=descriptorsArr[3];
    document.getElementById('placeholderE').innerHTML=descriptorsArr[4];
  
    var newQuote = document.getElementById('description').innerText;
    document.getElementById('tweetThis').setAttribute('href', 'https://twitter.com/intent/tweet?text=' + 'How a male author would describe me: ' + newQuote + ' ' + '(via the Male Author Description Generator: www.katelynlemay.com/male-novelist-description)');

};
