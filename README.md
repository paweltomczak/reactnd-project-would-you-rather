# Would You Rather App

Would You Rather is a game built in React and Redux where the user can vote for one of the two questions in the poll. Each answer is giving the user 1 point. User can also creates own Poll with two given questions that also is scored for 1 point.

## Installation

Using npm

```
git clone https://github.com/paweltomczak/reactnd-project-would-you-rather.git
npm install
npm start
```

Using yarn

```
git clone https://github.com/paweltomczak/reactnd-project-would-you-rather.git
yarn install
yarn start
```

## App Sections

| Section       | Description   |
| ------------- | ------------- |
| Sign In  | This section depends on `authedUser` state. If the user is not authorised (`authedUser` is `null`), user needs to select which user needs to be Signed In. There are 3 users taken from the 'fake' database ([_DATA.js](src/utils/_DATA.js)) that user can select (`users` state). If the user is logged in ( `authedUser` is populated with the user ID), then the Questions Page is shown. |
| Questions Page  | This section contains all questions taken from the `questions` state that are separate into two category. One has filtered Unanswered questions for the `authedUser`. The second has filtered Answered questions for the `authedUser`. Each of the questions/polls can be accessed by clicking the **VIEW POLL** button. |
| Question Details | Question Details lives under `/questions/:id` path. If the `authedUser` has not yet voted (based on `isVoted` prop) for particular question, two options are shown and user can select only one of them. If the user voted for the question, the details of the answers is calculated and votes for each answer are showing along with precentage number off of it’s total value. |
| New Question | New Question section path is `/add`. It contains two inputs. One is for Option One and second one is for Option Two. User needs to fill both of them in order to add the question to the 'fake' database. |
| Leaderboard | Leaderboard path is `/leaderboard`. Section shows the list of all users with the Score of each of them. Score is calculated of the sum of Answered Questions and Created questions. Users are sorted in descending order based of that score. |
| Navigation | Navigation contains 3 links that user can easily changing : **HOME**, **NEW QUESTIONS**, **LEADER BOARD** and based on `authedUser` the User Navigation which is showing the user's `name` and `avatar` and link to **LOGOUT** |
