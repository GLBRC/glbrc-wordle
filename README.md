# ASM Wordle - https://wordle.glbrc.org

This is a fork of React Wordle from https://github.com/cwackerfuss/react-wordle.

## Build and run

### To Run Locally:

Clone the repository and perform the following command line actions:

```bash
$> cd react-wordle
$> npm install
$> npm run start
```

### To build/run docker container:

#### Development

```bash
$> docker build -t reactle:dev -f docker/Dockerfile .
$> docker run -d -p 3000:3000 --name reactle-dev reactle:dev
```

Open [http://localhost:3000](http://localhost:3000) in browser.

#### Production

```bash
$> docker build --target=prod -t reactle:prod -f docker/Dockerfile .
$> docker run -d -p 80:8080  --name reactle-prod reactle:prod
```

Open [http://localhost](http://localhost) in browser.

# Customizing:

- Edit settings in .env
- Edit src/constants/strings.ts
- Add solutions to src/constants/wordlist.ts (must be bioenergy related!)
