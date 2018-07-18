# angular-web-elements

> Simple team poll example with angular web elements

## Quick start

```bash
# Clone the repo
git clone https://github.com/adrigardi90/angular-web-elements.git

# Change into the repo directory
cd angular-web-elements

# install
npm install

# build
npm run build:prod

# serve the app
npm run serve

```

## Explanation

We've created the web element **team-poll** . As we can see, we use it straigh away in the html providing the title input and capturing the output emmiter in JS

```
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Angular - Web Elements</title>
  <link rel="stylesheet" href="styles.css">
  <script type="text/javascript" src="my-element.js"></script>
</head>

<body>
  <team-poll
    title="BEST TEAM EVER?">
  </team-poll>

  <script type="text/javascript">
    const element = document.querySelector('team-poll');
    element.addEventListener('vote', (event) => {
      alert('You have voted ' + event.detail);
    })
  </script>
</body>

```

