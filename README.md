# Jekyll blog of IndonesiaX Kabar. 

Themes forked from [Long Haul](https://github.com/brianmaierjr/long-haul) by [@brianmaierjr](https://twitter.com/brianmaierjr).

-----

## How to update the content of sites.

Clone the repo to your local computer

```
$ git clone [this-repo-url]
```

Make changes to the desired `.md` file. For post located in the folder `_posts` and the pages are located in the root folder.

If you want to add new post. Just add new `.md` file with format `[yyyy]-[mm]-[dd]-[your-post-title].md`.

Inside the new file, you must type the following header text:

```
---
layout: post
title:  ["Your Post Title"]
date:   [yyyy-mm-dd]
---
```

Run `jekyll serve` to see the preview of your changes locally and stop it with `ctrl+c` when you already satisfied.

```
$ jekyll serve
```

Make sure you already generated the static sites by running this.

```
$ jekyll build
```

Commit your changes then push it to git remote repository.

```
$ git add .
$ git commit -m "your changes message"
$ git push origin master
```

Login to server `blog.indonesiax.com` and change directory to the repo directory on home.

```
$ ssh -i "yourpemkey.pem" ubuntu@52.221.234.17
$ cd indonesiax.github.io
```

Run the scripts to copy the generated sites to root folder nginx.

```
$ sh update.sh
```




