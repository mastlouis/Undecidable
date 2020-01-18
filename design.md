# Design Specification

This game is inspired by the card game [Dixit](https://bargames101.com/howtoplaydixit/)

- [Design Specification](#design-specification)
  - [Rules](#rules)
    - [Basic game flow](#basic-game-flow)
    - [Expansion Rule Ideas](#expansion-rule-ideas)
  - [Logistics](#logistics)
    - [What Advice I could get from Mikel](#what-advice-i-could-get-from-mikel)
  - [Resources](#resources)
  - [Project information](#project-information)
  - [Tutorial Project Information](#tutorial-project-information)
  - [Unresolved Project Errors](#unresolved-project-errors)

## Rules

### Basic game flow
* There is a group of players, and it will be one player's turn (the *designated player*)
* The designated player will select an item from a list presented to them
  * For the first iteration, this will be a list of words
  * We will try to extend the game so that this will be a list of pictures, at least some of the time
* The designated player gives one hint to describe their *chosen item*
  * This will initially be a word they enter into a text box
* The other players then each select an item from each of their own lists. This is the *false item*
  * False items will be the same type as the chosen item, initially words
* The chosen item and false items get presented to all players except the designated player. All non-designated players will select an item. They are rewarded for choosing the chosen item and for having other players choosing their false item.
* A new player becomes the designated player

### Expansion Rule Ideas
* Images instead of words
* Themed images (e.g. Putin, Bezos, parks, fro-yo)

## Logistics

### What Advice I could get from Mikel
* This game will be hosted on some server and players can connect with their computers or phones
* Firebase (Mikel's server thing of choice for Hackathons)
  * Real time database service
  * Generous Free Tier
  * They host the database, you have a client ID and password
  * Calls made to the SDK
  * Firestore for documents and collections
  * No server-side code
    * Saves time for a hackathon
    * You don't have to write the API end-points
  * Original Firebase object that's like a big JSON object
  * If you're using React, there's some good front ends
    * Rebase Node Package lets you sync firebase collection with your react state
    * Firebase syncs to all clients at the same time
      * Real time like Google Docs with 3 lines of code
* Writing our own server
  * Node Back End/whatever front end
* There are student packs for AWS and Google Cloud
  * We could 
* Node server on Heroku with a SQL container
  * Free platform
  * you can stick a project on a repo, yaml files that describe how to build/run a project and heroku will do it for you

## Resources
* [The easiest way to build a firebase/react app](https://medium.com/hackernoon/the-easiest-way-by-far-to-build-a-real-react-firebase-web-app-5dc6fa6f1b61)
  * The [software they want](https://reactstudio.com) is only for mac
* Firebase
  * [Get Started](https://firebase.google.com/docs/web/setup?authuser=0)
  * [Web SDK API Reference](https://firebase.google.com/docs/reference/js/?authuser=0)
  * [Samples](https://firebase.google.com/docs/samples/?authuser=0)
* [Firebase security Guide](https://firebase.google.com/docs/firestore/security/get-started?authuser=0)

## Project information
- Project ID: undecidable-app
- Project Name: undecidable-app-id
- [Firebase console](https://console.firebase.google.com/project/undecidable-app/overview)
  - Using project undecidable-app (undecidable-app-id)
- Firestore Location: nam5 (us-central)

## Tutorial Project Information
```javascript
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAdlTmyQHnnxg6Kr-2aHzDypJZkxCExXoI",
    authDomain: "restaurant-clone-tutorial.firebaseapp.com",
    databaseURL: "https://restaurant-clone-tutorial.firebaseio.com",
    projectId: "restaurant-clone-tutorial",
    storageBucket: "restaurant-clone-tutorial.appspot.com",
    messagingSenderId: "110260248566",
    appId: "1:110260248566:web:9b323b4d86e435cdc371d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
```

## Unresolved Project Errors
* Error: Cloud resource location is not set for this project but the operation you are attempting to perform in Cloud Firestore requires it. Please see this documentation for more details: https://firebase.google.com/docs/projects/locations