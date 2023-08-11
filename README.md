
# Github pages release actions

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

==========


name: CI

on:
  push:
    branches: [ master ]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: Clone repository
      uses: actions/checkout@v2
    - name: Use Node.js 14
      uses: actions/setup-node@v1
      with:
        node-version: 14.x
    - name: Install dependencies
      run: npm ci
    - name: Run unit tests
      run: npm test
    - name: Generate build
      run: npm run build --if-present
    - name: Share artifact inside workflow
      uses: actions/upload-artifact@v1
      with:
          name: react-github-actions-build
          path: dist

    - name: Deploy app to github pages
      run: |
        git config --global user.name $user_name
        git config --global user.email $user_email
        git remote set-url origin https://${github_token}@github.com/${repository}
        npm run deploy
      env:
        user_name: 'github-actions[bot]'
        user_email: 'github-actions[bot]@users.noreply.github.com'
        github_token: ${{ secrets.ACTIONS_DEPLOY_ACCESS_TOKEN }}
        repository: ${{ github.repository }}


=================


# cicd-github-pages
