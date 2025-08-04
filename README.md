# Weatherly by Ben Smajlovic

Hello to the team at Novig! 👋

Thanks so much for the opportunity! This is my submission for the weather app concept. I'm excited to share it with you and look forward to your feedback.

---

## Running weatherly locally

1. First, make sure to run an `npm install` to install all the required dependencies.
2. Create a ".env.local" file. Add a `VISUAL_CROSSING_API_KEY=your_api_key`. Sign up for a Visual Crossing API key [here](https://www.visualcrossing.com/weather-api/).
3. Start up the development server by using one of the following commands below:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Weatherly Public

You can access Weatherly without running it locally by visiting [this link](https://weathererly-app.vercel.app/).

## Design Choices

I chose Next.js because it’s a modern, full-stack React framework with tools that smoothen the development process. One key reason was the ability to use API routes to securely proxy requests to the Visual Crossing weather API, keeping the API key hidden from the client.

### Weatherly is also built with:

- ShadCN/UI + Tailwind CSS for styling and components. _Note: All the files in components/ui are components created by ShadCN._
- Zustand for state management
- Recharts for charts
- React Hot Toast for toasts
