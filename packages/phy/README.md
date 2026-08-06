# @fils/phy

Verlet Physics Package written in TypeScript.

This is part of a series of packages that I use in my studio for personal and commercial web & [THREEjs](https://threejs.org) based work. It might remain undocumented for a long while but feel free to try it out!

## ⚠️ v0.1.0 — constraint/spring ordering change (read before upgrading)

**Existing projects pinned to `^0.0.x` are not affected automatically** — npm's semver range for a `0.0.z` version (`^0.0.7` ⇒ `>=0.0.7 <0.0.8`) is exact-patch-only, so nothing currently installed will pick this up on its own. This note is for when you deliberately bump a project to `0.1.0+`.

**What changed:** `Physics.update()` used to run `Constraint`/`Spring` effectors *before* each particle's own `Particle.update()` (Verlet integration) for the frame. As of `0.1.0` it runs them *after* — integrate first, then relax constraints/springs against the newly-integrated positions (optionally over several passes via `constraintIterations`/`springIterations`). This matches the standard Jakobsen-style Verlet+constraints technique and is almost certainly what you actually want, but it changes the simulation's numeric behavior, not just internal bookkeeping.

**Why it changed:** with the old (pre-`0.1.0`) ordering, any position correction a `Constraint`/`Spring` made was read back into that *same* particle's own implicit velocity term (`position - prev`) by the integration step that ran right after it, within the same frame. For soft/gentle constraints this is easy to not notice. For a stiff or hard constraint — e.g. a collision/wall-type constraint that snaps a particle back out of solid geometry — it's an undamped feedback loop: this frame's correction becomes part of next frame's "velocity", which gets corrected again, compounding frame over frame. This is exactly what happened building a particle system against this library: a hard z-axis clamp constraint caused the whole simulation to blow up (particles flying apart) within a couple of seconds, purely from this ordering — moving the same clamp logic to run after integration instead fixed it immediately, with no other change.

**If you upgrade an existing project:** re-check the *feel* of anything using `Spring` or a custom `Constraint`, especially stiff/high-strength ones — cloth, rope, or any hard positional constraint. Softer/low-strength constraints will likely look identical or even more stable than before; stiffer ones may now settle faster/calmer than they used to (that's the fix working), so strength/damping values tuned against the old ordering may want re-tuning rather than assuming something broke.

### License
© Copyright 2022, fil studio

[fil](https://fil.studio) is a studio with a creative tech soul. We build bespoke interactive journeys primarily using modern web technologies. We deliver tailored solutions for installations and on-line experiences using our internal toolkit + [ThreeJS](https://threejs.org).

fil is the Catalan word for thread. We love threads cause we often talk about them when building applications and, at the same time, threads are something so organic, colourful and playful.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.