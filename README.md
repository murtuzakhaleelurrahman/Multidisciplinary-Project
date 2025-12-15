🚌 Real-Time Bus Tracking & Occupancy System

Multidisciplinary Engineering Project

📌 Project Overview

This project is a real-time public bus tracking and passenger occupancy monitoring system designed as part of a multidisciplinary engineering course project.

The system visualizes live bus locations on an interactive map and displays passenger load status (Seats Available / Standing / Full) to help commuters make informed travel decisions.

🎯 Objectives

Track buses in real time using GPS coordinates

Display bus locations on an interactive web map

Show passenger occupancy status using color-coded markers

Build a working prototype suitable for academic evaluation

🏗️ System Architecture
[ Data Source / Simulator ]
            |
            v
[ Node.js Backend API ]
            |
        JSON (HTTP)
            |
            v
[ Frontend Dashboard (Leaflet Map) ]

🧩 Project Structure
Multidisciplinary-Project/
│
├── backend/
│   ├── index.js            # Node.js Express backend
│   ├── package.json        # Backend dependencies
│   └── package-lock.json
│
├── frontend/
│   └── index.html          # Leaflet-based dashboard UI
│
├── .gitignore
└── README.md

🛠️ Tech Stack
Frontend

HTML, CSS, JavaScript

Leaflet.js (OpenStreetMap)

Vanilla JS (no frameworks)

Backend

Node.js

Express.js

REST API (JSON)

Tools

Visual Studio Code

Git & GitHub

🗺️ Features

📍 Live bus location plotting

🎨 Color-coded markers based on passenger count

🟢 Green: Seats Available (< 10)

🟠 Orange: Standing Room (10–29)

🔴 Red: Full (≥ 30)

⏱️ Auto-refresh polling

🧪 Built-in simulator for demo/testing

🧭 Interactive popups with bus details

▶️ How to Run the Project (Local)
1️⃣ Backend
cd backend
npm install
node index.js


Backend runs on:

http://localhost:3000

2️⃣ Frontend

Open frontend/index.html directly in a browser
OR

Use Live Server extension in VS Code

👨‍💻 Individual Contribution

Role: Software Lead / Full-Stack Developer

Responsibilities handled:

Backend API design and implementation

Frontend dashboard development

Real-time data handling & visualization

GitHub repository management

System integration and testing

The complete working prototype was implemented and integrated by the software lead.

🔮 Future Enhancements

Real GPS & sensor integration (Arduino/Raspberry Pi)

User authentication

Bus route planning

Cloud deployment

Mobile application support

📄 License

This project is developed for academic purposes only.
