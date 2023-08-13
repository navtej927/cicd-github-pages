
# Github pages release actions
This repo is the template for the client react application using github actions. 
## Add GITHUB_TOKEN is the setting tab
Github token is needed to make action acceess to the deploy the codebase.

for auto tag generation: https://github.com/butlerlogic/action-autotag
for advance tag generation: https://github.com/anothrNick/github-tag-action
for the relase of the npm package: https://github.com/cycjimmy/semantic-release-action



best url's
https://gist.github.com/ljmocic/3b171a3ee6e2a613eac7c465480a72e1
https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp

https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/ci-cd/github-actions/triggers.html

https://trekinbami.medium.com/using-environment-variables-in-react-6b0a99d83cf5


To deploy to the github pages I Have used the action https://github.com/peaceiris/actions-gh-pages

==========================================
In order to build the project
run npm version patch
git push patch version
