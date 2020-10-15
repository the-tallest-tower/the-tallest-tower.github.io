---
layout: post
title: "The Scrapheap"
date: 2020-09-17 18:00:00
categories: development, programming, tech
---

I just wrote what I'm calling the "scrapheap" to supplement the D garbage collector. It's basically just a linear allocator:

- A 16 MB pre-allocated chunk of memory, acquired from the OS on startup and never released
- Other code can allocate into that chunk using a dead simple bump-the-pointer stack
- The stack is reset at the end of each frame, therefore "freeing" the 16MB and making it available for use again

It's very desirable to be able to allocate small amounts of short-lived memory without having to think too much about it. For example, when parsing string input, I might do the following:

```
bool DoesItMatch()
{
    string[] optionWords = optionText.strip().removechars(".,!'").toLower().split();
    return optionWords == someOtherThing;
}
```

Being able to do all that string manupulation in one line is really nice. I don't have to manually allocate buffers or anything, it's all taken care of. In D though, normally this allocates several times via the GC, even though once this function returns, I don't use any of the allocations ever again.

Enter the scrapheap.

To enable it, I add one line to the beginning of this scope:

```
bool DoesItMatch()
{
    mixin(ScopeScrapheap!());
    string[] optionWords = optionText.strip().removechars(".,!'").toLower().split();
    return optionWords == someOtherThing;
}
```

This mixin tells the GC that from now until the end of this scope, every allocation should be redirected to the scrapheap. Now all the allocations in this function are effectively free (just the cost of bumping a pointer), and deallocation is free (resetting the pointer at the end of the frame). As long as I'm not expecting any of the allocations to outlive the frame, I'm in the clear.

For use cases like this, a scrapheap allocator the best of both worlds. Convenient-to-write code, without any allocation or deallocation overhead or contribution to future GC pauses. And these use cases make up a significant portion of the allocations that occur in the game each frame.

We use a stack to keep track of the currently-active allocator. That way we can switch to scrapheap mode for a large function, but then inside have a single function call that switches back to GC mode, and then inside of that have a subsection that uses the scrapheap, and so on. Switching to GC mode is what you'd expect:

```
mixin(ScopeGC!());
```

Each thread gets a separate scrapheap and allocator stack, albeit with a much smaller allocation size if they're worker threads.

The scrapheap also eliminates the need for stack allocations via alloca(). Anywhere you're allocating dynamically on the stack, just use the scrapheap instead. The allocator stack model also means we can easily write additional specialized allocators if we decide to in the future.

The idea of a per-frame linear allocator for throwaway memory is not even remotely new. Despite this, when discussing memory management, I still sometimes hear the refrain that _"Allocating is always going to be expensive."_ If you use the right allocation scemes in the right places, this doesn't have to be the case.
