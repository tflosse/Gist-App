# `gist/`

### What is `gist/`?

App aims to provide innovators, developers, and potential investors a platform where they can share ideas and get input, find projects and collaborators, and build new relationships over common interests and potential future ventures.

#### `gist/` user stories:

*As a(n) ______ , I can...*

- **Innovators:** 
    - Share and get feedback on products, apps, ventures ideas I have.
    - Receive and send private messages from and to other users.
    - Track comments and upvotes on my ideas.
    - Submit new versions with adjustments and new features.
    - Get additional features, like intellectual prop. rights with file sharing.

- **Developers:** 
    - Comment and upvote ideas I feel strongly about, source new projects, and pin posts as projects to the top of my feed.
    - Reach out to the author and offer direct feedback, resources, or help.
    - Submit mockups and models, or full proposals.
    - Request a link to existing Github Repo.
    - Submit prototype Apps for bidding.

- **Investors:** 
    - Source new business and development opportunities.
    - Gauge user/client interest and viability of projects.
    - Find new talent.
    
## Dev.


- #### Routes and Descriptions

Refer to References link above for details.

![Routes](https://i.imgur.com/3J2IQJB.png)

- #### Models:

```js
Models:
- user
- idea
- comment
- message
```

`Users`
```js
const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: String,
        photo: { src: String, alt: String},
        ideas: [{
            ref: "Idea",
            type: mongoose.Schema.Types.ObjectId
        }],
        saved: [{
            ref: "Idea",
            type: mongoose.Schema.Types.ObjectId
        }]
    },
);  
// exported as "User" 
```

`Posts`
```js
const commentSchema = new mongoose.Schema(
    {
        username: {
            ref: "User",
            type: mongoose.Schema.Types.ObjectId},
        commentBody: { type: String, required: true },
    },
    {timestamps: true}
);

const ideaSchema = new mongoose.Schema(
    {
        username: {
            ref: "User",
            type: mongoose.Schema.Types.ObjectId},
        title: { type: String, required: true },
        description: { type: String, required: true },
        imgSrc: String,
        keywords: Array,
        votes: { type: Number, default: 0 },
        comments: {type: [commentSchema], default: []}
    },
    {timestamps: true}
);
```

```js
const messageSchema = new mongoose.Schema(
    {
        sender: {
            ref: "User",
            type: mongoose.Schema.Types.ObjectId
        },
        sendTo: {
            ref: "User",
            type: mongoose.Schema.Types.ObjectId
        },
        messageBody: { type: String, required: true }
    },
    {timestamps: true}
);
// exported as "Message"
```

## Design

- #### Wireframes

![Mobile](https://i.imgur.com/9aDbj8C.png)
![Tablet](https://i.imgur.com/d5vYBqd.png)
![Desktop](https://i.imgur.com/qaBDMd5.png)

- #### Theme & Fonts
##### Brights:
![Brights](https://i.imgur.com/cEDA3lK.png)

```js
black-ish: rgb(29,28,23)
teal: rgb(65,186,178)
orange: rgb(243,168,40)
off-white: rgb(247,247,248)
```

##### Darks:
![Darks](https://i.imgur.com/4PZhzy1.png)

```js
black-ish: rgb(29,28,23)
teal: rgb(65,186,178)
orange: rgb(243,168,40)
off-white: rgb(247,247,248)
```

#### Fonts

![Titles & Body](https://i.imgur.com/jK6hGYE.png)
![Comments](https://i.imgur.com/hzdn3jU.png)

```js
font-family: 'Bebas Neue', cursive;
font-family: 'Lato', sans-serif;
font-family: 'Source Sans Pro', sans-serif;

<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato&family=Source+Sans+Pro:ital,wght@1,300;1,400&display=swap" rel="stylesheet">
```

