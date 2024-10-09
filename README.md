# Frontend Dev Assessment

## Accessing hosted assessment:

A hosted assessment is available at [https://meta-frontend-dev-test.vercel.app/](https://meta-frontend-dev-test.vercel.app/)

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js (LTS version recommended)
- npm

### Installation

Navigate to the project directory:

`cd <your-project-name>`

`npm install`

### Running the Development Server

Start the development server with one of the following commands:

`npm run dev`

## Assessment Tasks

### Completed

1. Build using Next.js and Tailwind CSS [DONE]
2. Build responsive UIs [DONE]
3. loading states [DONE]
4. Cache data in storage [DONE] - use React Query with a default garbage collection of 5 minutes
5. Commit your code to a GitHub repo [DONE]
6. Deploy your app (for example: Netlify, Vercel) [DONE]
7. Provide instructions in the repo README for running your application locally [DONE]

### Skipped

1. Handle error states [INCOMPLETE] - similar to how loading states are handled, destructured from fetch hook and conditionally rendered, not necessary to illusrate here
2. Use https request caching [INCOMPLETE]
3. Infinite Loading [INCOMPLETE] - Building blocks are here for paginated api,
4. tests [IMCOMPLETE]
5. ssr [INCOMPLETE] - fairly easy to acheive: sending a serialized version of the data to the client and using as initial data for the query
