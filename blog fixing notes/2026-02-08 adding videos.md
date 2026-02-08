I tried making a video and putting it in the blog. It works directly in obsidian using the same sort of link to the file with a leading exclamation point as for photos.  

# CoPilot's summary:

Here’s a compact, bedtime‑safe summary that captures **what we tried**, **where we looked**, and **why** — without going into the weeds. You can paste this straight into your notes.

**Quartz video debugging — short recap with locations + reasons**

- **Tried putting the video in project‑root `static/videos/`**  
    _Reason:_ Quartz docs imply this should work.  
    _Result:_ Quartz ignored this folder entirely.
- **Checked `quartz.config.ts` for `baseUrl` and `staticDir`**  
    _Reason:_ Wrong config can break static paths.  
    _Result:_ Fixed config, but Quartz still didn’t copy the file.
- **Discovered Quartz was building from the wrong folder**  
    _Reason:_ Running the build from inside a content subfolder made Quartz think the site root was inside `content/`.  
    _Result:_ Only 8 files emitted → static files never copied.
- **Ran Quartz from the correct project root**  
    _Reason:_ Needed a full, correct build.  
    _Result:_ Quartz emitted 1121 files → proper build restored.
- **Placed the video in `quartz/static/videos/`**  
    _Reason:_ Quartz 4 only copies static files from _this_ folder, not the project‑root `static/`.  
    _Result:_ File was finally in the correct Quartz static location.
- **Quartz serves static files at `/videos/...`**  
    _Reason:_ Quartz strips the `static` folder name when serving.  
    _Result:_ Correct website path is `/videos/filename.mp4`.
- **Obsidian preview still failed**  
    _Reason:_ Obsidian sandboxes HTML and cannot access files in `quartz/static/`.  
    _Result:_ Only paths inside `content/` work in Obsidian.
- **Last embed that _did_ work in Obsidian**
````
<video controls>
  <source src="static/videos/2026-02-08_osenstitch.mp4">
</video>
`````

- _Reason:_ Obsidian can only load media inside the vault’s content area.

If you keep this list, you’ll have a clean map of what we tried and why each step behaved the way it did. When you’re ready to pick this up again, we’ll make the final adjustments with a clear head.
