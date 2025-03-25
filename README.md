<div align='center'>

<img src=https://github.com/m15kh/iot/blob/main/1.png alt="logo" width=350 height=700 />

<h1>IOT Project for Smart Home Control</h1>
<p>A comprehensive solution for controlling your home lamps, thermostats, and monitoring temperatures via internet connectivity</p>

<h4> <span> · </span> <a href="https://github.com/m15kh/iot/blob/master/README.md"> Documentation </a> <span> · </span> <a href="https://github.com/m15kh/iot/issues"> Report Bug </a> <span> · </span> <a href="https://github.com/m15kh/iot/issues"> Request Feature </a> </h4>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/m15kh/iot)

</div>

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Features](#dart-features)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
- [Usage](#eyes-usage)
- [Roadmap](#compass-roadmap)
- [Contributing](#wave-contributing)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

## :star2: About the Project
This IoT project is designed to create a smart home ecosystem that allows users to control various home devices including lamps and thermostats through an internet connection. The system monitors environmental conditions like temperature and humidity, providing real-time data and remote control capabilities through a mobile application.

### :dart: Features
- **Remote Light Control**: Turn lights on/off from anywhere
- **Temperature Monitoring**: Real-time temperature data from multiple sensors
- **Automated Thermostat Control**: Set temperature thresholds for automatic adjustments
- **Mobile Application**: User-friendly interface for device management
- **Data Visualization**: Graphs and dashboards for monitoring trends
- **Scheduled Operations**: Set timers for device activation/deactivation
- **Energy Consumption Tracking**: Monitor power usage of connected devices

### :camera: Screenshots
<div align="center"> <a href=""><img src=https://github.com/m15kh/iot/blob/main/1.png alt="logo" width=350 height=700 /></a>
<a href=""><img src=https://github.com/m15kh/iot/blob/main/2.png alt="logo" width=350 height=700 /></a>
<a href=""><img src=https://github.com/m15kh/iot/blob/main/3.png alt="logo" width=350 height=700 /></a></div>
<div align="center"> <a href=""><img src=https://github.com/m15kh/iot/blob/main/4.jpg alt="logo" width=1000 height=500 /></a>
<a href=""><img src=https://github.com/m15kh/iot/blob/main/5.jpg alt="logo" width=1000 height=500 /></a>
<a href=""><img src=https://github.com/m15kh/iot/blob/main/6.jpg alt="logo" width=1000 height=500 /></a></div>

### :space_invader: Tech Stack
- **Hardware**:
  - ESP32/ESP8266 microcontrollers
  - DHT22/DHT11 temperature sensors
  - Relay modules
  - LED lights
- **Backend**:
  - MQTT protocol
  - Node.js server
  - MongoDB for data storage
- **Frontend**:
  - React Native mobile application
  - ChartJS for data visualization

## :toolbox: Getting Started

### :bangbang: Prerequisites
- Arduino IDE
- Node.js (v14 or higher)
- npm or yarn
- MQTT broker (e.g., Mosquitto)
- MongoDB

### :gear: Installation
1. Clone the repository
   ```bash
   git clone https://github.com/m15kh/iot.git
   cd iot
   ```

2. Setup the hardware components
   - Connect the ESP32/ESP8266 to your computer
   - Wire the sensors and relays according to the schematics in `/docs/schematics`

3. Install firmware on microcontrollers
   ```bash
   cd firmware
   # Follow instructions in firmware/README.md
   ```

4. Setup the server
   ```bash
   cd server
   npm install
   npm start
   ```

5. Install the mobile app
   ```bash
   cd mobile-app
   npm install
   # For iOS
   npx pod-install ios
   npx react-native run-ios
   # For Android
   npx react-native run-android
   ```

## :eyes: Usage
1. **Mobile App**: 
   - Log in using your credentials
   - Navigate to the dashboard to view all connected devices
   - Control lights by tapping on the corresponding icons
   - View temperature graphs and set thresholds

2. **Voice Commands**:
   - Compatible with Google Assistant and Amazon Alexa
   - Example commands: "Turn on living room lights", "What's the temperature in bedroom?"

3. **Automated Rules**:
   - Create rules in the "Automation" section of the app
   - Example rule: "If temperature exceeds 25°C, turn on the fan"

## :compass: Roadmap
- [ ] Integration with additional sensor types
- [ ] Advanced energy consumption analytics
- [ ] Voice command enhancements
- [ ] Support for water leak detection
- [ ] AI-driven automation suggestions

## :wave: Contributing
Contributions are always welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## :warning: License
Distributed under the MIT License. See `LICENSE` for more information.

## :handshake: Contact

Mohammad Khalili (Liam Williams) - mohammad.khalili1515@gmail.com

Project Link: [https://github.com/m15kh/iot](https://github.com/m15kh/iot)

## :gem: Acknowledgements
- [ESP32 Community](https://esp32.com/)
- [MQTT Protocol](https://mqtt.org/)
- [React Native Documentation](https://reactnative.dev/)
- [All the contributors who have helped this project grow](https://github.com/m15kh/iot/contributors)
