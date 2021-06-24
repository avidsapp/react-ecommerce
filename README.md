## Upstream Repos

Built from [this tutorial](https://github.com/ZhangMYihua/lesson-34), but using the GraphQL implementation from [this repo](https://github.com/ZhangMYihua/graphql-practice-complete). See [this repo](https://github.com/ZhangMYihua/lesson-32-complete) for instructions on cloning and forking.

[Backend repo here](https://github.com/avidsapp/react-ecommerce-backend)

## Additional Changes
- Added `lodash` to replace Apollo `compose` as [noted here](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15904174#content)

## Customize
- Change `/public/index.html` title tag to site title
- Change `/public/favicon.ico` to site icon
- Change data on backen

## Local Environment

[Add .env with Stripe secret](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15305912#content)

## Add data to Firestore

[Programmatically done here](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15189164#content)

## For Netlify hosting
- Add `CI= ` before the run command - [link](https://answers.netlify.com/t/how-to-fix-build-failures-with-create-react-app-in-production/17752)
- Add Stripe secret env variable `STRIPE_SECRET_KEY=...`
