# NextStep Advisor (Full Stack Demo)

## Structure
- `server/` : TypeScript Express + Socket.IO backend
- `client/` : React frontend with NextStepAdvisorDashboard.jsx

## Setup

### Server
```bash
cd server
npm install
npm run dev   # starts with ts-node + nodemon
npm run build # compiles to dist/
npm start     # runs compiled version
```

### Client
Use any React app (CRA/Vite). Copy `NextStepAdvisorDashboard.jsx` into `src/`.
Install deps:
```bash
npm install socket.io-client recharts framer-motion
```

Set `.env` in client:
```
REACT_APP_API_BASE=http://localhost:4000
```

Run React dev server:
```bash
npm start
```

Then open browser at http://localhost:3000
