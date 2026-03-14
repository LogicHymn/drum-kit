🥁 Drum Kit
/////

A fun interactive drum kit built using **HTML, CSS, and JavaScript**.  
Users can play different drum sounds either by **clicking the drum buttons or pressing keyboard keys**.

Each key triggers a specific drum sound, creating a simple virtual drum experience in the browser.

---

🚀 Features

Play drum sounds using keyboard keys  
Click buttons to trigger drum sounds  
Interactive button animations  
Responsive and clean UI  
Simple JavaScript event handling  

---

🛠️ Tech Stack

HTML5  
CSS3  
JavaScript (DOM Manipulation & Event Listeners)

---

📂 Project Structure

```
drum-kit/
│
├── assets/
│   ├── images/
│   │   ├── crash.png
│   │   ├── kick.png
│   │   ├── snare.png
│   │   ├── tom1.png
│   │   ├── tom2.png
│   │   ├── tom3.png
│   │   └── tom4.png
│   │
│   └── sounds/
│       ├── crash.mp3
│       ├── kick-bass.mp3
│       ├── snare.mp3
│       ├── tom-1.mp3
│       ├── tom-2.mp3
│       ├── tom-3.mp3
│       └── tom-4.mp3
│
├── src/
│   ├── css/
│   │   └── styles.css
│   │
│   └── js/
│       └── index.js
│
├── index.html
├── README.md
└── .gitignore
```

---

▶️ How to Run

Clone the repository

```
git clone https://github.com/LogicHymn/drum-kit.git
```

Open the project folder.

Run using **VS Code Live Server**  
or simply open:

```
index.html
```

in your browser.

---

🎮 Controls

| Key | Drum Sound |
|----|-------------|
| W | Crash |
| A | Kick Bass |
| S | Snare |
| D | Tom 1 |
| J | Tom 2 |
| K | Tom 3 |
| L | Tom 4 |

You can also **click the buttons** to play the sounds.

---

🧠 Game Logic

JavaScript listens for:

Keyboard key presses  
Mouse button clicks  

When triggered:

1. The corresponding sound file is played
2. The button briefly animates to show interaction

Example sound logic:

```
new Audio("assets/sounds/crash.mp3").play();
```

---

🎯 Purpose

This project was created to practice:

DOM manipulation  
JavaScript event listeners  
Handling keyboard inputs  
Playing audio with JavaScript  

---

✨ Future Enhancements

Add drum animation effects  
Add mobile touch support improvements  
Add sound visualizer  
Add recording feature  

---

📄 License

This project is created for **learning and practice purposes**.

---

👨‍💻 Author

Built with ❤️ while learning **JavaScript and Frontend Development**.