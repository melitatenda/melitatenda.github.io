# Melinda's Personal Website

A Swiss Style portfolio website built with plain HTML, CSS, and JavaScript. No frameworks, no build step: what you see in the files is exactly what the browser renders.

**Color palette:** `#F9DBBD` peach · `#FFA5AB` salmon · `#DA627D` rose · `#A53860` raspberry · `#450920` wine
**Fonts:** [Archivo & Archivo Expanded](https://fonts.google.com/specimen/Archivo) (loaded from Google Fonts in each page's `<head>`)

---

## Folder structure

```
Personal Website/
├── index.html        Home: hero, research interests, education, honors, featured projects
├── experience.html   Work experience, skills, leadership, volunteer work
├── projects.html     All nine projects
├── research.html     Publications and research projects
├── teaching.html     Graduate teaching assistantships
├── css/
│   └── style.css     All styling for every page (one shared file)
├── js/
│   └── main.js       All animations and interactions (one shared file)
└── images/
    └── profile.jpeg  Your profile photo
```

Every page shares the same `<header>` (nav), `<footer>` (the "Let's connect" block), stylesheet, and script. If you change the nav or footer, change it on **every** page so they stay in sync.

---

## Viewing the site locally

Option 1, the simplest: double-click any `.html` file and it opens in your browser.

Option 2, a local server (better, because it behaves exactly like a real website):

```bash
cd "/Users/mel/Personal Website"
python3 -m http.server 4173
```

Then open <http://localhost:4173> in your browser. Press `Ctrl+C` in the terminal to stop the server. After editing a file, save it and refresh the browser to see the change.

---

## Editing existing pages

Open the `.html` file in any text editor (VS Code is a good free choice). Each page is divided into clearly labelled sections:

```html
<!-- ================= 01 WORK ================= -->
```

Find the section you want, edit the text between the tags, save, refresh. Some common edits:

### Change wording
Just edit the text inside `<p>`, `<h3>`, etc. Avoid deleting the tags themselves.

### Add a job to Experience
In `experience.html`, copy an existing `<article class="timeline__item reveal">...</article>` block, paste it where you want it in the timeline (they are ordered newest first), and edit the date, title, organization, and description.

### Add a project
In `projects.html`, copy one `<article class="project reveal">...</article>` block and edit it. The pieces are:
- `project__no` : the project number (P·10, P·11, ...)
- `project__year` : the year
- `project__tags` : the small labels (add or remove `<span>` items freely)
- `project__tools` : optional tools line (delete the whole `<p>` if not needed)
- `project__link` : optional GitHub link (delete the `<a>` if there is no repo)

### Add an award
In `index.html`, copy one `<div class="award reveal">...</div>` row and edit the year, name, and organization.

### Add a publication
In `research.html`, copy one `<article class="pub reveal">...</article>` block and edit it.

### Change the profile photo
Replace `images/profile.jpeg` with a new image using the same file name, or use a new name and update the `<img src="images/...">` line in `index.html`. Portrait orientation works best (the frame is 5:6).

### Change colors
All colors are defined once at the top of `css/style.css`:

```css
:root {
  --peach: #F9DBBD;
  --salmon: #FFA5AB;
  ...
}
```

Change a value there and it updates across the whole site.

---

## Adding a new page

1. **Copy an existing subpage** (e.g. `teaching.html`) and rename it, e.g. `speaking.html`. This gives you the nav, page hero, section scaffolding, footer, and script hookups for free.
2. **Edit the page hero**: the kicker (`page-hero__kicker`), title (`page-hero__title`, the `<em>` part renders in raspberry), and lede.
3. **Edit the `<title>` and `<meta name="description">`** in the `<head>`.
4. **Fill in sections.** Number them 01, 02, ... per page (the big outlined numbers are `section__num`). Useful ready-made building blocks from `style.css`:
   - `section` (plain), `section section--tinted` (darker cream), `section section--dark` (wine background)
   - `timeline` + `timeline__item` : the experience-style rows
   - `projects` + `project` : the bordered card grid
   - `cards` / `cards cards--three` + `card` : leadership/volunteer-style cards
   - `awards` + `award` : the honors-style list rows
   - `teach teach--quad` + `teach__item` : the teaching cards
5. **Add the page to the nav on every page** (all six files, including the new one), keeping the numbering consistent:
   ```html
   <a href="speaking.html"><sup>06</sup>Speaking</a>
   ```
   On the new page itself, give its own link `class="is-active"`.
6. **Animations come free.** Add `class="reveal"` to anything you want to fade in on scroll, and optionally `data-delay="120"` (milliseconds) to stagger items. The floating shapes use `data-parallax="0.25"`. All of this is wired up by `js/main.js` automatically on any page that includes it.

---

## Putting this on GitHub (and making it live)

You already have a GitHub account (`melitatenda`) and an old Jekyll site in the `melitatenda.github.io` repository. The cleanest path is to replace its contents with this site, because a repo with that exact name is automatically published at `https://melitatenda.github.io`.

### One-time setup

```bash
cd "/Users/mel/Personal Website"

# Turn this folder into a git repository
git init
git add .
git commit -m "New Swiss Style portfolio"

# Point it at your GitHub repo
git remote add origin https://github.com/melitatenda/melitatenda.github.io.git

# Replace the old site (this overwrites the old Jekyll site's history on main)
git push --force origin main
```

Notes:
- If git asks who you are first, run `git config --global user.name "Melinda Mudzurandende"` and `git config --global user.email "you@example.com"` (the email only goes into commit metadata; use your GitHub no-reply email if you prefer privacy: find it under GitHub → Settings → Emails).
- If you want to keep the old Jekyll site around just in case, rename that repo on GitHub first (Settings → General → Repository name, e.g. `old-jekyll-site`), then create a fresh repo named `melitatenda.github.io` and push to that instead, without `--force`.
- GitHub may ask you to log in via browser the first time you push. If it asks for a password in the terminal, you need a Personal Access Token instead (GitHub → Settings → Developer settings → Personal access tokens).

### Check it's live

Go to the repo on GitHub → Settings → Pages, and make sure the source is "Deploy from a branch", branch `main`, folder `/ (root)`. Within a couple of minutes the site appears at:

**https://melitatenda.github.io**

Because this site is plain HTML (not Jekyll), also add an empty file named `.nojekyll` to the folder before pushing. It tells GitHub to serve the files as-is:

```bash
touch .nojekyll
git add .nojekyll
git commit -m "Disable Jekyll processing"
git push
```

### Publishing future edits

After any edit, three commands:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

The live site updates automatically within a minute or two.

---

## Other useful details

- **The mobile menu** (hamburger) appears below 720px wide; the layout also reflows at 1000px. Test by making your browser window narrow, or use your browser's device toolbar (right-click → Inspect → the phone icon).
- **Accessibility:** the site respects "reduce motion" system settings (animations switch off automatically), and images have `alt` text. Keep writing `alt` text for any image you add.
- **Don't rename `css/` or `js/`** folders without updating the `<link>` and `<script>` paths in every page.
- **Keep contact details off the site.** The footers intentionally link to LinkedIn and other public profiles instead of showing your email or phone number. Anything you publish here is visible to the whole internet and gets indexed by search engines.
- **Custom domain (optional):** if you ever buy a domain (e.g. `melindamudzurandende.com`), you can attach it under repo Settings → Pages → Custom domain. GitHub provides free HTTPS.
- **Favicon (optional):** drop a `favicon.png` into `images/` and add `<link rel="icon" href="images/favicon.png">` to each page's `<head>` to get a little icon in the browser tab.
- **Updating your CV content:** the site's content came from your CVs (June 2026). When your CV changes, the quickest workflow is to edit the matching section by hand; everything is plain text in the HTML.
