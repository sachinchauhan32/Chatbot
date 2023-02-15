function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    else if (input == "Whats going on?") {
        return "Nothing just chilling";
    }
    else if (input == "How do you think about me") {
        return "I think you are smart enough to solve any problem";
    }
    else if (input == "Good night") {
        return "Good night take,care sweet dreams!";
    }
    else if (input == "Where are you from?") {
        return "I am from Milky Way Galaxy, What you think about me?";
    }
    else if (input == "can you solve any programming problem?") {
        return "Yes, I can solve any programming problem";
    }else {
        return "Try asking something else!";
    }
}