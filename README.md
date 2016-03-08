# screeps-globals

This is a package that serves to help get Screeps objects off of the global namespace.  They're really still there, but by using this module, you'll be able to pretend like they aren't.

## Where is Game?

Game is an object literal, with the way that require caching works in Screeps, there isn't a way to export it while still having it update each tick.  This is one global that you'll still have to allow in your code.

## Why?

JavaScript has been moving away from using the global namespace for a while.  First with amd, then commonjs, and umd.  Now it's officially part of the spec, there isn't a reason to use the global namespace anymore, it makes code harder to grok and to refactor.

## You missed XXX

Yea, this is a really early phase in the module, expect breaking changes, missing globals and the like.
