# NanoLink

NanoLink is a lightweight URL shortener built with Next.js, TypeScript, and MongoDB. It lets you create short, human-readable links without accounts or a heavy dashboard, and it redirects visitors from `/{shorturl}` to the original destination.

## 🌐 Live Demo

👉 Try the app here:  
🔗 [https://nanolk.vercel.app/](https://nanolk.vercel.app/)

## Features

- Create short links with a custom slug.
- Redirect short URLs to their saved destination.
- Clean landing page, about page, contact page, and GitHub page.
- MongoDB-backed storage for short-link records.
- Modern UI built with Next.js App Router and Tailwind CSS.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- MongoDB Node.js driver
- Tailwind CSS 4

## Project Structure

- `app/` - App Router pages, API routes, and the dynamic redirect route.
- `components/` - Shared UI such as the navbar, page shell, headers, and forms.
- `lib/` - Shared utilities, including the MongoDB connection helper.
- `public/` - Static assets.

## Core Routes

- `/` - Marketing home page.
- `/shorten` - Link creation form.
- `/{shorturl}` - Redirects to the original URL stored in MongoDB.
- `/about` - Project overview and principles.
- `/contact` - Mail-to contact form.
- `/github` - Project and contribution links.
- `/api/generate` - Saves a new short link.

## Requirements

- Node.js 20 or newer.
- MongoDB running locally or accessible through a connection string.

## Environment Variables

Create a `.env.local` file in the project root with the values your deployment needs:

```bash
MONGODB_URI=mongodb://127.0.0.1:27017
NEXT_PUBLIC_HOST=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=you@example.com
NEXT_PUBLIC_GITHUB_REPO=https://github.com/your-org/your-repo
```

Notes:

- `MONGODB_URI` is required at runtime. The app will fail fast if it is missing.
- `NEXT_PUBLIC_HOST` is used to build the final short-link URL and to redirect unknown slugs back to the site root.
- `NEXT_PUBLIC_CONTACT_EMAIL` powers the contact form mailto link.
- `NEXT_PUBLIC_GITHUB_REPO` powers the GitHub page link.

## Getting Started

1. Install dependencies.

	```bash
	npm install
	```

2. Start MongoDB.

	If you are using a local instance, make sure it is reachable at the URI in `.env.local`.

3. Start the development server.

	```bash
	npm run dev
	```

4. Open `http://localhost:3000` in your browser.

## How It Works

1. A user visits `/shorten` and submits a destination URL plus a custom slug.
2. The client sends the data to `/api/generate`.
3. The API stores the pair in the `nanolink` database, `url` collection.
4. A visitor opens `/{shorturl}`.
5. The dynamic route looks up the slug and redirects to the saved destination.

## NPM Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Database Details

NanoLink stores links in MongoDB using:

- Database: `nanolink`
- Collection: `url`

Each record contains:

- `url` - the destination URL
- `shorturl` - the unique slug used in the short link

## Deployment Notes

- Set `NEXT_PUBLIC_HOST` to your production domain.
- Set `MONGODB_URI` to your hosted MongoDB connection string.
- Make sure the deployed site can reach the database from the server environment.

## Troubleshooting

- If startup fails with a MongoDB error, verify `MONGODB_URI` and that the database is reachable.
- If generated links point to the wrong host, check `NEXT_PUBLIC_HOST`.
- If a short link redirects to the home page, confirm the slug exists in the `url` collection.

## License

Add a license file if you plan to distribute NanoLink publicly.
