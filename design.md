# Design Specification

This game is inspired by the card game [Dixit](https://bargames101.com/howtoplaydixit/)

- [Design Specification](#design-specification)
  - [Rules](#rules)
    - [Basic game flow](#basic-game-flow)
    - [Expansion Rule Ideas](#expansion-rule-ideas)
  - [Logistics](#logistics)
    - [What Advice I could get from Mikel](#what-advice-i-could-get-from-mikel)

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