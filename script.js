document.addEventListener('DOMContentLoaded', function() {
  const commandInput = document.getElementById('commandInput');
  const outputDiv = document.getElementById('output');

  commandInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      const command = commandInput.value.trim();
      handleCommand(command);
      commandInput.value = '';
    }
  });

  function handleCommand(command) {
    if (command.toLowerCase() === 'about') {
      displayAboutMe();
    } else if (command.toLowerCase() === 'clear') {
      clearScreen();
    } else if (command.toLowerCase() === 'man site') {
      displayCommands();
    } else {
      displayTypingOutput('Invalid command. Type "man site" to see the list of available commands.');
    }
  }

  function displayAboutMe() {
    const aboutText = `Hey, My Name is Pavan and I am not a web designer

- Salesforce Developer

- A Linux lover

- An Arch Linux User btw

- A (Neo)/Vim Liker

- Ricing and OCD

- Tracking changes with Git

- Distro hopping specialist

- Window Manager switcher

- ba$h $cript kiddie

`;
    displayTypingOutput(aboutText);
  }

  function clearScreen() {
    outputDiv.innerHTML = '';
  }

  function displayCommands() {
    const commands = [
      'about - Displays information about me',
      'clear - Clears the screen',
      'man site - Displays the list of available commands',
    ];

    const commandsText = commands.join('\n');
    displayTypingOutput(commandsText);
  }

  function displayTypingOutput(text) {
    outputDiv.innerHTML = '>';
    const typingSpeed = 5; // Adjust the typing speed (in milliseconds) as desired

    let i = 0;
    const typeCharacter = () => {
      if (i < text.length) {
        if (text.charAt(i) === '\n') {
          outputDiv.innerHTML += '<br>';
        } else {
          outputDiv.innerHTML += text.charAt(i);
        }
        i++;
        outputDiv.scrollTop = outputDiv.scrollHeight;
        setTimeout(typeCharacter, typingSpeed);
      }
    };

    typeCharacter();
  }

  // Display initial message
  displayTypingOutput('Welcome! Type "man site" to see the list of available commands.');
});
