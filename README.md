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

We've created the web element <team-poll></team-poll> . As we can see, we use it straigh away in the html providing the title input and capturing the output emmiter in JS

```
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

