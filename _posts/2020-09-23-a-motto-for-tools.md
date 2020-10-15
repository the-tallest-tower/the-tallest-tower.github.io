---
layout: post
title: "A Motto for Tools"
date: 2020-09-23 19:00:00
categories: tools, musings
---
I propose that all software tools adhere to the following motto:

> Do your job, then get out of the way.

We all know what it looks like when you don't follow this rule. You get Nvidia GeForce Experience. Or Visual Studio. You get that tool you downloaded for a one-time filetype conversion, only to find it wanted to scan your entire computer first, chew up 75% of your idle CPU time, set up an auto-updating system, subscribe you to its newsletter, and give you handy-dandy tips every time you open the tool.

Think about all the tools you use that assume they're the center of the universe. Where it feels like the software takes every opportunity to remind you how awesome it is, and tell you all the amazing things it does that you don't need.

It sucks, right? Don't do that.

A good software developer thinks like the user. And users don't care _at all_ about your software. They just want to convert three PNGs to JPGs so they can email their mom photos of their dog. What is the software that would best allow them to accomplish this goal? Would this person want to read startup tips? Will they wait around for five minutes while the tool scans their filesystem for images?

The best tools I use are very specialized. They have one job, and they do it damned well. If you want to write a good tool, this is a valuable mindset to take. Not only will it make your tool better at its job, but it will help you:

- Fight scope creep
- Eliminate features that aren't truly needed
- Keep the UI simple and focused
- Keep your software lightweight and trim (and fast)

There's nothing wrong with having many sharp, specialized tools, each finely-tuned for one particular job. I'd rather that over one tool that does a mediocre job at many things. I call this collection of tools my _programmer's toolbelt_. There's a reason carpenters carry a hammer, and a drill, and a nailgun, and a saw, and a framing square, and a level, and a tape measure...

My go-to case study for this philosophy is the search program [Everything](http://www.voidtools.com).

![Everything](/assets/images/Everything.png "Screenshot of Everything")

You hit a hotkey, a window opens. You type until you see what you want, then select it. The file opens. Everything closes, because its work is now done. It does its job, then gets out of the way.

Everything's adherence to this motto makes it a joy to use, and it's been part of my programmer's toolbelt since my first job in the industry. 
