
![myLeague_dark](https://github.com/BlazejakPiotr/MyLeagueApp/assets/67067881/834666ab-1fdd-4f71-a61c-18ba1067cc82)


## Table of content

- [1. Introduction](#1-introduction)
- [2. Description](#2-description)
- [3. Tech Stack](#3-tech-stack)
- [4. Navbar](#4-navbar)
- [5. Screens](#5-screens)
  - [5.1. Splash screen](#51-splash-screen)
  - [5.2. Fill profile screen](#52-fill-profile-screen)
  - [5.3. Home Tab](#53-home-tab)
    - [**5.3.1. Match screen details**](#531-match-screen-details)
  - [5.4. Champions Tab](#54-champions-tab)
    - [**5.4.1. Champion details screen**](#541-champion-details-screen)
  - [5.5. Items Tab](#55-items-tab)
    - [**5.5.1 Item details screen**](#551-item-details-screen)
  - [5.6. Leaderboard Tab](#56-leaderboard-tab)
- [6. Design](#6-design)
  - [6.1. Color palette \& typography](#61-color-palette--typography)
  - [6.2. Prototypes](#62-prototypes)

# 1. Introduction

Hello I'm Piotr, and I'm Sofware Engineer currently working as a Junior React-Native Developer.
I've decided to start my personal project but this time I'll be streaming everything live on twitch.tv and then upload recordings on my youtube channel. I'm planning to stream for 1 hour, 4-5 times a week.

Would you like to visit me on stream or watch recordings? Or maybe you have question or just want to talk with me?
Here are my social media where you can reach me out.

- DISCORD:
- YOUTUBE:
- TWITCH:
- LINKEDIN:

# 2. Description

MyLeague is a mobile application for Android and iOS where you can find League of Legends data such as:

- all champions with detailed info about them (skills, lore, photos etc) with search and filtering (eg. current champion pool)
- all items with detailed info about them (price, stats etc)
- Summoners profile including last matches, champion mastery, current rank and search for other Summoners
- leaderboard with players in selected region and search for player by his Summoner name

The myLeague application is an open-source, non-profit and educational project built from scratch by me, live on my Twitch channel and if you want to follow but can't watch live stream then you can watch the recordings on my YouTube channel.

I'm just a Junior Developer so don't treat it as a tutorial. There'll be a lot of mistakes, and it's clue of this project.

Want to code along with me? Feel free to do it, and if you have any doubts, reach me on my socials, I'll do my best to help.

# 3. Tech Stack

- Figma
- React Native
- TypeScript
- RIOT API

# 4. Navbar

Bottom nav:

- Home
- Champions
- Items
- Leaderboard

Top nav:

- Tabs specified for each screen

# 5. Screens

<div style="margin-left: 30px">

## 5.1. Splash screen

Screen with MyLeague logo displayed for two seconds while application launch</p>

## 5.2. Fill profile screen

Displayed after Splash screen if user profile is not filled.
There are mandatory fields to fill:

- Language selection, default language based on system language (additional feature)
- Region (eg. EUW, BR, NA etc)
- Summoners name

This data is stored in Async storage so users don’t have to fill them every time while the application runs.
Screen is also available from Home screen

## 5.3. Home Tab

This is the main screen where users always land. When screen refreshes there’s user profile provided in Fill profile screen but users can find other Summoners by searchbar providing their names and regions.

Home tabs:

- Overview: Summoners data such as stats bar, most played champs, ranked stats
- Champions: Summoners champions stats and mastery
- Match history: Summoners match history
- Statistics: Summoner stats

### <p style="margin-left: 30px">**5.3.1. Match screen details**</p>

<p style="margin-left: 30px">Details for each match…</p>

## 5.4. Champions Tab

List of all champions in the game with searchbar, filters by role, free champion rotation, etc.

### <p style="margin-left: 30px">**5.4.1. Champion details screen**</p>

<p style="margin-left: 30px">Champion screen with detailed information about selected champion eg. lore, stats, abilities, skins etc.

## 5.5. Items Tab

List of all items in the game with searchbar, filters by type (attack speed, magic resist) etc.

### <p style="margin-left: 30px">**5.5.1 Item details screen**</p>

 <p style="margin-left: 30px"> Item detail view</p>

## 5.6. Leaderboard Tab

Leaderboard for Challenger/GM/Master

</div>

# 6. Design

This app is designed by me in figma using League of Legends color palette & typography

<div style="margin-left: 30px">

## 6.1. Color palette & typography

![colors_pallete_typography](https://github.com/BlazejakPiotr/MyLeagueApp/assets/67067881/02922f24-dc42-4ea6-b433-1ee1ae5515f8)

## 6.2. Prototypes

</div>
