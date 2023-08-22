let joke = [
        {
            "category": "Pun",
            "type": "single",
            "joke": "I have these weird muscle spasms in my gluteus maximus.\nI figured out from my doctor that everything was alright:\nHe said \"Weird flex, butt okay.\"",
            "id": 82,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "A horse walks into a bar.\n\"Hey\", the Bartender says.\n\"Sure\", the horse replies.",
            "id": 74,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
            "id": 123,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "joke": "How did Harry Potter get down the hill? \n Walking...\nJK, Rolling.",
           
            "id": 206,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "joke": "What's the difference between Harry Potter and the jews? \n Harry escaped the chamber.",
            
            "id": 219,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "joke": "Why do Hong Kong cops like to go to work early? \n To beat the crowd.",
    
            "id": 136,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "joke": "What do an orgasm and a pulse have in common? \n I don't care if she has one.",
            "id": 101,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "joke": "I had a granny that we couldn't decide whether to bury or cremate \n In the end we decided to just let her live.",
    
            "id": 68,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "joke": "What's the difference between Jesus and a hooker \n The look on their face when you are nailing them.",
            "safe": false,
            "id": 261,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "joke": "Why are modern programming languages so materialistic? \n Because they are object-oriented.",
            "id": 21,
            "safe": true,
            "lang": "en"
        }
    ]


var change = document.getElementById('change');
var jokes = document.querySelector('.jokes');

change.addEventListener('click', () => {
    jokes.innerHTML = joke[Math.ceil(Math.random()*joke.length)].joke;
  });