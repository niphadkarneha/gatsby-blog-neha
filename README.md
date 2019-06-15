# nehaniphadkar.in [![Netlify Status](https://api.netlify.com/api/v1/badges/c9c98465-1f52-4a58-bde2-9ed838bf4c28/deploy-status)](https://app.netlify.com/sites/nehaniphadkar/deploys) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Personal website running on Gatsby, React, and Node.js.

## Installation

Make sure gatsby is installed on your system if not follow the simple instructions below

1. Open your Terminal.
2. See if Homebrew is installed by running brew -v. You should see “Homebrew” and a version number. If not, download and install Homebrew with the instructions for your operating system (Mac, Linux or Windows). 

> https://docs.brew.sh/Installation

3. Once you’ve installed Homebrew, repeat step 2 to verify.

## Mac Users: install XCode Command Line Tools

4. Open your Terminal.
5. On a Mac, install XCode Command line tools by running 

> xcode-select --install.

6. After being prompted to start the installation, you’ll be prompted again to accept a software license for the tools to download.
7. Run brew update to make sure you have the latest version of Homebrew.
8. Run this command to install Node and npm in one go: 

> brew install node

9. Run node --version. (If you’re new to the command line, “run command” means “type node --version in the command prompt, and hit the Enter key”. From here on, this is what we mean by “run command”).
Run npm --version.

10. The Gatsby CLI is available via npm and should be installed globally by running 

> npm install -g gatsby-cli.

Close the terminal and open again.

```bash
git clone https://github.com/niphadkarneha/site.git
cd site
gatsby develop
```

Navigate to `localhost:8000`.


## Acknowledgements

- Kyle Mathews - [One who introduced GatsbyJS to the world.](https://www.bricolage.io/blog/)
- Tania Rascia - [Full stack developer and an inspiration](https://www.taniarascia.com/)
- Ruben Harutyunyan - [Gatsby Advanced Starter](https://github.com/vagr9k/gatsby-advanced-starter/)
- Muhammad Muhsin - [Using React Context API with Gatsby](https://www.gatsbyjs.org/blog/2019-01-31-using-react-context-api-with-gatsby/)
- Thomas Frössman - [ExitWP](https://github.com/thomasf/exitwp) - WordPress XML to Markdown

## License

This project is open source and available under the [MIT License](LICENSE).
