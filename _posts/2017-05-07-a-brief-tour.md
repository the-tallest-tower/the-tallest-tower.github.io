---
layout: post
title:  "A Brief Tour"
date:   2017-05-07 16:00:00 -0800
categories: development
---
For those with a more technical leaning, here's the rundown on what I'm using for the game:

- Custom engine written in D
- SFML for 2D graphics and windowing
- FMOD for audio (low-level API, likely won't use FMOD Studio much)
- dear imgui for debug UI
- msgpack-d (ie. MessagePack) for serialization (save games, debug game state snapshots, dialogue database)
- Python for build tools and miscellaneous scripts

I'll dive into each of these in more in detail at a later date. I'm rolling a custom engine for a few reasons:

- I come from a programming background, so I have some familiarity with the lower-level workings of games
- This will be a 2D game, which makes writing an engine more manageable than for a 3D game.
- I am very picky about my tools, and very picky about making sure the game works exactly the way I want it to.

Where possible I try to give myself total visibility into any source code used in the game, since this allows me to add features and fix issues in library code I'm using. And there are always issues. In its prototype stage, I have already made source modifications to SFML, imgui, msgpack-d, and even the D language runtime and standard library. I anticipate making many more as work continues.

I spent a while evaluating other audio libraries, but none of them had all the features I was looking for. BASS was close, but they don't sell a source code license. Wwise was another contender, but it appears you're forced to work from within their designer tool. Using FMOD for audio makes me a little nervous since it's one of the few parts of the game where I'm using an opaque DLL with no available source code for reference. However I've heard positive reviews of the FMOD API, and so far my experience has been good. Also if all else fails, they do sell an (expensive) source code license.

I just finished fully setting up FMOD (I was using SFML's built-in audio system before as a placeholder). Everything looks golden so far. The next step is to play around with some of FMOD's dynamic music functionality, which should be good fun.
