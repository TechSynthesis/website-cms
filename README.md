# Payload Website CMS

This is the code that powers the official website CMS for [TechInverted](https://github.com/payloadcms/payload)
### Features shown

This CMS showcases many powerful features including:

1. [Collections] and [Globals]
1. [Access Control] to restrict who can do what to the site's data
1. [Versions] and [Drafts] functionality
1. A great pattern for how to create [reusable fields] that can be used and re-used easily
1. Many advanced field types, including the [relationship], [blocks], [array], and many more
1. SEO 
1. Form Builder 
1. Auto-generated TypeScript types
1. Lots more

### Running locally

You can clone this repo to your own computer and play around super easily.

To do so, you'll need the following software:

- Yarn or NPM
- NodeJS version 10+
- A Mongo Database - **IMPORTANT: you need to either have MongoDB running locally, or have signed up for a free MongoDB Atlas server in order to test this repo locally.**

##### Local installation steps:

**1. Clone the repo by running the following command at your terminal:**

```bash
git clone git@github.com:TechSynthesis/website-cms.git
```

**Navigate to folder and install dependencies**

Type `cd ./website-name` and then `yarn` or `npm install --legacy-peer-deps` to add all required dependencies.

**Duplicate the example `.env` file and fill in your own values**

Type `cp .env.example .env` in your terminal to make a copy of the example `.env` file, and then edit that file to fill in your own values.

**Fire up the development server**

Finally, type `yarn dev` to start up the server and see it in action!
