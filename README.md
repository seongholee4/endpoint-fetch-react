# endpoint-fetch-react

## Web site created using create-react-app
```
npx create-react-app . --template minimal
```
- Using this api endpoint :https://randomuser.me/api/?results=5
- Show first name and city in a table.

## To begin the development, run `npm start` or `yarn start`.

Using api endpoint https://randomuser.me/api/?results=5, Website displays first name and city in  a table.


`/src/components` directory contains `App.jsx` and `Users.jsx`.

`Users.jsx` fetches data from api endpoint and shows first name and city of 5 random users in a table format.

`App.jsx` imports `Users` component.