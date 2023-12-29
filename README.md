# Aawaz - Voice to Every Indiviual 


<img src="https://static.wixstatic.com/media/9c5d56_fff85c81cc66455fbb8a88bcfe5a307d~mv2.png/v1/fill/w_640,h_512,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c5d56_fff85c81cc66455fbb8a88bcfe5a307d~mv2.png" alt="Aawaz - Voice to Every Indiviual " width="100%" height=600>


## Table of Contents
<ol>
<li>Introduction</li>
<li>Modules</li>
<li>Features</li>
<li>Installation</li>
<li>Configuration</li>
<li>Conclusion</li>
<li>Running the application</li>
</ol>

## Introduction
Aawaz is a  user-friendly, cost-effective Police Feedback System designed to help every indiviual give his/her feedback to Police Staion.

## The app contains following three Modules. 

### <ol> <li> User Module 👤 </li> </ol> 

User Module is for common people, who are supposed to add public feedback for the police stations. In this module user can see the most rated police station in order of, number of feedbacks and rating out of 5. User can see the feedbacks given by other users as well. Along with this user can manage his profile in the login itself. 


### <ol start=2> <li> Police Station Module 🚨 </li> </ol> 
The Module for Police station allows Police Stations to see and manage the feedback received to them. For ensuring the authenticity and clarity of the application, we have incorporated a report button for reviews. This functionality enables Police Stations to report feedback that may be irrelevant or unrelated to actual experiences with the police station, this makes a more accurate and reliable feedback system. 

<p align="left">
<img src="question.jpeg" alt="Logo" width="190" height="350">
<img src="severity.jpg" alt="Logo" width="190" height="350">
</p>

### <ol start=3> <li> Admin Module 📝 </li> </ol> 
The Admin Module of system give super interface. In which all the registered police stations can seen and managed. Admin has right to approve the police station on the platform, only after Admin's approval police station get onboarded to the system.

<p align="left">
<img src="awareness.jpg" alt="Logo" width="190" height="350">
<img src="AwarnessSoln.jpeg" alt="Logo" width="190" height="350">
</p>

## Features

### <ol> <li>User-Friendly Interface 📱 </li> </ol> 
The app is user-friendly and easy to navigate. Users can access all features of the application easily, and the interface is designed to be simple and intuitive.

### <ol start=2> <li>User Registration and Login: </li> </ol> 
The user starts by registering on the platform, and providing necessary details.To ensure authenticity, they verify their account either through email or SMS.

### <ol start=3> <li>Independent Dashboard Access:  </li> </ol> 
User/Police Station/Admin: Each user type accesses a dedicated dashboard with features relevant to their role, enhancing usability.

### <ol start=4><li>Accessibility Features (For physically challenged people):  </li> </ol> 
The feedback system is designed to be accessible to individuals with disabilities, supporting screen readers and other assistive technologies for a more
inclusive user experience.

### <ol start=5> <li>Gamification:  </li> </ol> 
Police station on the system are ranked based on the number of feedback received and rating out of 5, fostering a healthy and competitive environment on the platform.

### <ol start=6> <li>Anonymity Option:  </li> </ol> 
Users can submit feedback anonymously, promoting honest and unbiased contributions.

### <ol start=7> <li>User Engagement:  </li> </ol> 
Regular notifications keep users, police stations, and admins engaged with updates and relevant activities on the platform.

### <ol start=8> <li>Generating Review Links:  </li> </ol> 
Unique review links are generated for each police station, which can be provided to users to add feedback directly to that police station

### <ol start=9> <li>Community Interaction:  </li> </ol> 
Users engage with each other's feedback, adding comments and reactions, fostering a sense of community on the platform.

### <ol start=10> <li>Data Analysis:  </li> </ol> 
The dashboard displays feedback data through charts and graphs, allowing for effective analysis with multiple filters such as highest, lowest, recent, and oldest.

### <ol start=11> <li>Inclusive Language Processing:  </li> </ol> 
• System: Natural language processing algorithms identify and address biased or
discriminatory language in feedback, ensuring a fair and inclusive platform.


### <ol start=12> <li>Secure Data Storage:  </li> </ol> 
• System: The platform ensures secure data storage in compliance with data protection
laws (specially encrypting the data while storing it), prioritizing user privacy and
information security



<p align="left">
<img src="police.jpeg" alt="Logo" width="190" height="350">
<img src="ngo.jpeg" alt="Logo" width="190" height="350">
</p>


## Installation
To run this app, follow the steps below:
<ol>
<li>Clone the repository, open cmd in the desired folder and type:</li>

```
git clone https://github.com/SheRights/SheRights-Application.git
```

<li>Navigate to the project's root directory.</li>
<li>Install the project dependencies using:</li>

```
npm install
```

</ol>

## Configuration
SheRights uses Firebase for authentication and database. To use Firebase in the app, you will need to create a new Firebase project and add the configuration details to the project. Here's how:
<ol>
<li>Create a new Firebase project on the Firebase Console.</li>
<li>Navigate to the project's settings and click on the "Add Firebase to your app" button.</li>
<li>Copy the Firebase configuration object.</li>
<li>Download Google-Services file and place it in your project.</li>
</ol>

## Running the Application
To run the application on your device or emulator, run the following command:
<ol>
<li>Open command prompt in your root directory and run:</li>

```
npx react-native start
```

<li>Open command prompt in your root directory and run:</li>

```
npx react-native run-android
```

</ol>
This will start the React server and open the React Developer Tools in your prompt. From here, you can choose to run the app on a physical device, emulator and start the test runner and run all the tests for the application.

## Conclusion
That's it! You now have a fully functional SheRights application running on your device or emulator. Feel free to explore the application and test out its features. If you have any feedback or suggestions for the application, please feel free to contact us. We hope that SheRights can make a positive impact on the lives of women worldwide.
