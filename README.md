# AI Therapist Agent

A comprehensive AI-powered therapy platform that provides empathetic, evidence-based therapeutic support through intelligent conversation and session management.

## 🌟 Features

### Core Functionality
- **AI-Powered Therapy Sessions**: Intelligent conversations using Google's Gemini AI
- **Session Management**: Create, track, and manage therapy sessions
- **Chat History**: Persistent conversation history with timestamps
- **User Authentication**: Secure user registration and login
- **Mood Tracking**: Monitor emotional states and progress
- **Activity Logging**: Track therapeutic activities and exercises

### Technical Features
- **Real-time Chat**: Instant AI responses with context awareness
- **Session Analytics**: Progress tracking and emotional state analysis
- **Responsive Design**: Modern UI built with Next.js and Tailwind CSS
- **Database Integration**: MongoDB for persistent data storage
- **API Architecture**: RESTful backend with Express.js
- **Event Processing**: Inngest for background task management

## 🏗️ Architecture

### Frontend (Next.js)
- **Framework**: Next.js 14 with App Router
- **UI Components**: Radix UI + Tailwind CSS
- **State Management**: Zustand
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS with custom components

### Backend (Node.js/Express)
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **AI Integration**: Google Generative AI (Gemini)
- **Event Processing**: Inngest
- **Authentication**: JWT tokens

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB Atlas account or local MongoDB
- Google AI API key (Gemini)
- Inngest account (optional, for event processing)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-therapist-agent
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string
   
   # AI Services
   GEMINI_API_KEY=your_google_ai_api_key
   
   # Authentication
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   
   # Backend API
   BACKEND_API_URL=http://localhost:3001
   
   # Inngest (optional)
   INNGEST_EVENT_KEY=your_inngest_key
   INNGEST_SIGNING_KEY=your_inngest_signing_key
   ```

   Create a `.env` file in the backend directory:
   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string
   
   # AI Services
   GEMINI_API_KEY=your_google_ai_api_key
   
   # Server
   PORT=3001
   JWT_SECRET=your_jwt_secret
   
   # Inngest (optional)
   INNGEST_EVENT_KEY=your_inngest_key
   INNGEST_SIGNING_KEY=your_inngest_signing_key
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:3001`

2. **Start the frontend server** (in a new terminal)
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

3. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
ai-therapist-agent/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   └── chat/          # Chat session endpoints
│   ├── therapy/           # Therapy session pages
│   └── globals.css        # Global styles
├── backend/               # Backend server
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   ├── utils/         # Utility functions
│   │   └── inngest/       # Event processing
│   └── package.json
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── therapy/          # Therapy-specific components
├── lib/                  # Utility libraries
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🔧 API Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/session` - Get current session

### Chat Sessions
- `GET /chat/sessions` - Get all user sessions
- `POST /chat/sessions` - Create new session
- `GET /chat/sessions/:id` - Get specific session
- `GET /chat/sessions/:id/history` - Get session history
- `POST /chat/sessions/:id/messages` - Send message

### Mood & Activities
- `GET /api/mood` - Get mood entries
- `POST /api/mood` - Create mood entry
- `GET /api/activity` - Get activities
- `POST /api/activity` - Log activity

## 🧠 AI Integration

The application uses Google's Gemini AI for therapeutic conversations:

- **Context Awareness**: Maintains conversation context and user history
- **Emotional Analysis**: Analyzes emotional states and risk factors
- **Therapeutic Techniques**: Applies evidence-based therapeutic approaches
- **Safety Monitoring**: Monitors for concerning content and risk factors

## 🛡️ Security Features

- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Comprehensive input sanitization
- **Rate Limiting**: API rate limiting for abuse prevention
- **CORS Protection**: Cross-origin request security
- **Helmet Security**: Security headers and protection

## 📊 Database Schema

### ChatSession
```typescript
{
  sessionId: string;
  userId: ObjectId;
  startTime: Date;
  status: "active" | "completed" | "archived";
  messages: IChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}
```

### User
```typescript
{
  email: string;
  password: string; // hashed
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Railway/Heroku)
1. Connect your repository to your hosting platform
2. Set environment variables
3. Configure MongoDB Atlas connection
4. Deploy the backend service

## 🧪 Testing

```bash
# Run frontend tests
npm test

# Run backend tests
cd backend
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This application is for educational and research purposes. It is not intended to replace professional mental health services. Users experiencing mental health crises should contact appropriate professional services.

## 🆘 Support

For support, email your-email@example.com or create an issue in the repository.

## 🙏 Acknowledgments

- Google AI for Gemini API
- Next.js team for the amazing framework
- Radix UI for accessible components
- MongoDB for database services
- Inngest for event processing
