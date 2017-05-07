---
layout: post
title:  "A Brief Tour"
date:   2017-05-07 16:00:00 -0800
categories: development
---
For those with a more technical leaning, here's the rundown on what I'm using:

- Custom engine written in D
- SFML for 2D graphics and windowing
- FMOD for audio (low-level API, likely won't use the designer tool for much)
- dear imgui for debug UI
- msgpack-d (ie. MessagePack) for serialization (save games, debug game state snapshots, dialogue database)
- Python for miscellaneous scripts

I'll dive into each of these in more in detail at a later date. I'm rolling a custom engine for a few reasons:

- I come from a programming background, so I have some familiarity with the lower-level workings of games
- This will be a 2D game, which greatly simplifies the engine
- I am very picky about my tools, and very picky about making sure the game works exactly the way I want it to.

As much as possible I want to have total visibility into the source code of the game, since this allows me to fix issues in library code I'm using. And there are always issues. In its prototype stage, I have already made source modifications to SFML, imgui, msgpack-d, and even the D language runtime and standard library itself. I anticipate making many more as work continues.

Using FMOD for audio makes me a little nervous since I don't have visibility into that, but I've heard good reviews of the API, which lines up with my surface-level experience so far. Also if all else fails, I believe they do sell an (expensive) source code license.
