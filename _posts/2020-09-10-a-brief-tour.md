---
layout: post
title:  "A Brief Tour"
date:   2020-09-10 16:00:00
categories: development
---
For those with a more technical leaning, here's the rundown on what I'm using for the game:

- Custom 3D engine written in D
- SDL2 for windowing, events, and other utilities
- D3D11 for 3D rendering
- FMOD for audio
- dear imgui for debug UI and in-game development tools
- msgpack-d (ie. MessagePack) for serialization (save games, debug game state snapshots, dialogue database)
- Python for build tools and miscellaneous scripts

I'll dive into each of these in more in detail at a later date. For the prototype, I'm using SFML for 2D graphics, windowing, and events. This will be tossed out in favour of the above once the prototype is complete.

## Aren't custom engines a terrible idea for indies?

Rolling a custom engine is a huge undertaking, and can be risky if I'm not careful. However I decided to go with it because:

- I'm picky about my tools. Writing my own engine lets me handcraft custom tools to create efficient workflows.

- I've been bitten many times by closed-source libraries and engines that exhibit bugs, poor performance, or crucial missing features that I have no recourse for fixing. If I'm serious about shipping a robust game, I always need the ability to dive in if needed and make things work right.

- I come from a programming background, specifically rendering programming. I have some familiarity with the lower-level workings of games and a head start on the knowledge required to build a 3D engine. This won't stop it from still being a ton of work though.

- I can better leverage my strengths as a programmer to work around my weaknesses (like art). For example, I have total
control over the shading pipeline, and can build one that supports a visually pleasing look without requiring enormous amounts of
high-fidelity art. I can spend time writing a good lighting model that makes even simple coloured cubes in a grey room look good.

- To make an engine, I don't have to reimplement all of Unity or Unreal. The tech I build only needs to drive my game alone. I
can make enormous simplifications based on assumptions that hold true for the particular game I'm developing.

- Writing a game engine is fun

Where possible I try to give myself total visibility into any source code used in the game, since this allows me to add features and fix issues in library code I'm using. And there are *always* issues. In its prototype stage, I've already made source modifications to SFML, imgui, msgpack-d, and even the D language runtime and standard library. I anticipate making many more as work continues.

I spent a while evaluating other audio libraries, but none of them had all the features I was looking for. BASS was close, but they don't sell a source code license. Wwise was another contender, but it appears you're forced to work from within their designer tool. Using FMOD for audio makes me a little nervous since it's really the only place I'm using an opaque DLL with no available source code. However I've heard positive reviews of FMOD and its API, and so far my experience has been great. If all else fails, they do sell an (expensive) source code license.
