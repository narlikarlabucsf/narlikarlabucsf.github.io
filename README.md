# Narlikar Lab website

The Narlikar Lab website, built with [Jekyll](https://jekyllrb.com/). GitHub Pages builds it automatically: edit a file on github.com, commit, and the live site updates about a minute later. You don't need to install anything to make routine edits.

## Where things live

| What you want to change | File |
|---|---|
| Current lab members | `_data/members.yml` |
| Alumni | `_data/alumni.yml` |
| Publications | `_data/publications.yml` |
| "Recent Highlights" cards on the Home page | `_data/news.yml` |
| Member photos and other images | `assets/images/` |
| Research text | `research.html` |
| PI biography | `pi.html` |
| Contact details | `contact.html` |
| Home page hero text | `index.html` |
| "Join the lab" banner text | `_includes/join-banner.html` (the heading and button text are set where each page includes it) |
| Menu items | `_data/navigation.yml` |
| Header, menu and footer (shared by every page) | `_layouts/default.html` |
| Styles / scripts | `assets/css/style.css`, `assets/js/site.js` |
| Site title, description, base URL | `_config.yml` |

### Editing on github.com

1. Open the file on github.com and click the pencil icon (**Edit this file**).
2. Make the change and click **Commit changes**.
3. Wait a minute or two, then reload the site. If the site didn't update, open the repository's **Actions** tab. A failed "pages build and deployment" run there usually means a typo in a `.yml` file, and the run's log names the file and line.

### YAML tips

The `.yml` files are indentation-sensitive.

- Use spaces, never tabs, and line new entries up exactly with the ones around them.
- Wrap text in double quotes, as the existing entries do.
- If the text itself contains a double quote, write it as `\"`.
- Accented letters (é, ñ, ü) and symbols such as `&`, `α`, `β` and `Å` can be typed as they are.

## Lab members (`_data/members.yml`)

Members are grouped into sections, which appear in the order listed: Principal Investigator, Administrative & Research Staff, Graduate Students, Postdoctoral Fellows, Collaborators, Visiting Professors. Members appear in the order listed within each section.

| Field | Required? | Meaning |
|---|---|---|
| `name` | yes | Shown under the photo. It is also the photo's alt text. |
| `role` | yes | Shown under the name. |
| `photo` | yes | File name of the photo in `assets/images/`. |
| `bio` | no | With a bio, the card flips on hover to show this text. Without one, it is a plain photo card. |
| `photo_position` | no | Which part of the photo stays in view when it is cropped to a square, e.g. `"center 18%"` keeps the upper part. |
| `link` | no | Makes the whole card a link, e.g. `/pi/`. |

To add a member:

1. Upload a square photo to `assets/images/`. On github.com, open that folder and use **Add file → Upload files**. About 800×800 px JPEG works well. Use a lowercase, hyphenated name such as `jane-doe.jpg`.
2. Add an entry under the right section:

```yaml
- section: "Graduate Students"
  members:
    # ...existing members...
    - name: "Jane Doe"
      role: "Graduate Student"
      photo: jane-doe.jpg
      bio: "Jane is a Ph.D. student in the Tetrad Graduate Program studying how chromatin remodelers ..."
```

The optional fields look like this:

```yaml
    - name: "Blanche Chen"
      role: "Postdoctoral Fellow"
      photo: blanche-chen.jpg
      photo_position: "center 18%"
      bio: "Blanche is a postdoctoral researcher at UCSF ..."
```

When someone leaves the lab, delete their entry here (the `- name:` line and the indented lines under it) and add their name to `_data/alumni.yml`.

## Alumni (`_data/alumni.yml`)

Each category has a heading and a list of names, shown in the order listed:

```yaml
- category: "Graduate Students"
  names:
    - "Daniele Canzio"
    - "Jane Doe"
```

A name can include a note, e.g. `- "Hao Wu (collaborator, Yifan Cheng lab)"`.

## Publications (`_data/publications.yml`)

Papers are grouped under year headings ("2025", "2024", … "2020 and earlier"), newest first. Each paper has:

| Field | Meaning |
|---|---|
| `title` | The paper title. |
| `authors` | The author list. Wrap lab members (current or former) in `**double asterisks**` to show them in bold. |
| `journal` | Journal, volume, pages and year, exactly as it should appear. |
| `pmid` | The PubMed ID. It creates the [PubMed] link. |

Don't type the numbers. The site numbers papers automatically, counting down: the top paper gets the total count and the bottom paper gets 1. Adding a paper renumbers everything.

To add a paper, put it at the top of its year group:

```yaml
- year: "2025"
  papers:
    - title: "A new paper title"
      authors: "**Jane Doe**, Collaborator A, **Geeta J. Narlikar**"
      journal: "Nature, 640:123–130 (2025)"
      pmid: 40000000

    - title: "HMGB1 deforms nucleosomal DNA ..."
      # ...existing papers...
```

To start a new year, add a new group above the others:

```yaml
- year: "2026"
  papers:
    - title: "..."
      authors: "..."
      journal: "..."
      pmid: 42000000

- year: "2025"
  papers:
    # ...
```

## Recent Highlights (`_data/news.yml`)

The cards on the Home page appear in the order listed. `body` may use Markdown, e.g. `*Science*` for italics.

```yaml
- date: "2025"
  title: "Autoinhibition imposed by a large conformational switch of INO80 regulates nucleosome positioning"
  body: "Kaur & Wu et al. discover a new auto-inhibition-based mechanism ... Published in *Science*."
  link: https://pubmed.ncbi.nlm.nih.gov/40674492/
  tag: "View on PubMed →"
```

## Previewing locally (optional)

You only need this to check changes on your own computer before pushing.

1. Install Ruby 3.x, for example with [rbenv](https://github.com/rbenv/rbenv) or Homebrew on macOS. Also install Bundler with `gem install bundler`.
2. In this folder, run:

   ```sh
   bundle install
   bundle exec jekyll serve
   ```

3. Open <http://127.0.0.1:4000/>. If `baseurl` is set in `_config.yml`, e.g. `/narlikarlab`, open <http://127.0.0.1:4000/narlikarlab/> instead.

`jekyll serve` rebuilds when you save a file. Changes to `_config.yml` need a restart (Ctrl-C, then run it again). The built site goes into `_site/`, which you shouldn't commit.

## Publishing on GitHub Pages

The site uses only what GitHub Pages supports out of the box. It has no custom plugins and needs no GitHub Actions workflow of its own.

1. Put the contents of this folder at the top level of a GitHub repository and push to the `main` branch.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Choose branch **main** and folder **/ (root)**, then click **Save**.
4. After a minute or two, the page shows the site's address.

### Which URL, and what to set `baseurl` to

| Repository name | Site address | `baseurl` in `_config.yml` |
|---|---|---|
| `NAME.github.io` (user or organisation site) | `https://NAME.github.io/` | `""` (the default) |
| anything else, e.g. `narlikarlab` (project site) | `https://NAME.github.io/narlikarlab/` | `"/narlikarlab"` |
| any, with a custom domain | `https://narlikarlab.example.edu/` | `""` |

All links in the site go through `relative_url`, so `baseurl` is the only setting that has to change.

### Custom domain

1. In **Settings → Pages → Custom domain**, enter the domain, e.g. `narlikarlab.ucsf.edu`, and save. GitHub adds a `CNAME` file containing the domain to the repository. You can also create that file yourself.
2. Whoever controls the domain (for a ucsf.edu address, UCSF IT) must add a DNS record:
   - for a subdomain like `narlikarlab.ucsf.edu`, a `CNAME` record pointing to `NAME.github.io`;
   - for an apex domain, the GitHub Pages `A`/`AAAA` records listed in [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
3. Keep `baseurl: ""`. Once the DNS change has taken effect, tick **Enforce HTTPS** on the same settings page.
