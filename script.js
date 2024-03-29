window.onload = () => {
  const myInput = document.getElementById("dummyKeyboard");
  myInput.onpaste = (e) => e.preventDefault();
};

const COMMANDS = {
  help: 'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>, <span class="code">ls</span>',
  ls: "<a href='./project' target='blank'>projects</a>",
  projects: "window.open('./project/index.html', '_blank');",
  about:
    "Hello 👋<br>I'm Anandhu K B. I’m a 20 yr old pentester and bug bounty hunter currently living in India.",
  skills:
    '<span class="code">Skill:</span> Ethical Hacking, Pen-Testing, Bug Hunting,..<br>',
  education:
    "Christ College Puliyanmala, Idukki, Kerala, India<br> BCA pursuing student",
  
  experience: "No Experience😥",

  contact:
    "You can contact me on any of following links:<br><a href='https://t.me/d4rk4c3' class='success link'>Telegram</a>, <a href='https://www.instagram.com/anandh.uh_/' class='success link'>Instagram</a>, <a href='https://twitter.com/d4rk_4c3' class='success link'>Twitter</a>",
};

const userInput = document.getElementById("userInput");
const terminalOutput = document.getElementById("terminalOutput");
const inputfield = document.getElementById("dummyKeyboard");

inputfield.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let input = e.target.value;
    input = input.toLowerCase();
    if (input.length === 0) {
      return;
    }
    let output;
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">no such command: ${input}</div>`;
      console.log("Oops! no such command");
    } else {
      if (input === "projects") {
        eval(COMMANDS[input]);
      } else {
        output += COMMANDS[input];
      }
    }
    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    e.target.value = "";
  }
});
