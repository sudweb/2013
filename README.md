# Sud Web 2013

[Sud Web 2013](http://sudweb.fr/2013/) is a yearly Web conference happening
in the South of France.

It is held on a 2 days format:

1. one day of monotrack conferences for sharing experience
1. one day of elaboratories, a participative approach to experiment and learn together new stuff with skilled and motivated people

This repository contains the whole `/2013` website, statically generated.
We found out it was easier to setup, code and maintain in time.
No security issue!

## Install

You don't anything special to do once the repository is cloned.
TypeKit fonts are setup for these domains:

* `sudweb.fr`,
* `localhost`
* `local.sudweb.fr`

## Contribute

If you detect a bug, or have a nice idea. Submit an issue or a pull-request.

### Speakers Pictures

If you add or update a picture located in `img/speakers/orig`, make sure to
run the thumbnail generator script based on [imagemagick](http://www.imagemagick.org/).

```bash
cd to/sudweb/2013/repo
./bin/speakers-thumbs.sh
git add img/speakers/150/*
git commit -m "Updated speakers thumbs"
```