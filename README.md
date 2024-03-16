This is a [Next.js](https://nextjs.org/) 'Who wants to be a millionaire?' game bootstrapped with  
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

**Development**

First, install the dependencies:

```bash
npm install
```

Second, create `.env.local` (you can copy the example) with:
- `NODE_ENV` - either production or development environment
- `DATA_STORAGE_PATH` - path to the questions config from the project root

Then, to start the development server:

```bash
npm run dev
```

To create and run the production build:

```bash
npm run build && npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Edit configuration

Documentation on game configuration can be found in the [Game config](./GAME_CONFIG.md).


## Deploy on Vercel

The application is deployed on Vercel via vercel-cli. You can check it out [here](https://who-wants-to-be-a-millionaire-taupe.vercel.app/).
