# CodeReview AI: Dual-Mode Code Analysis Platform

## Project Specifics

### Core Components
1. **Code Review Mode**
   - Built with React Simple Code Editor
   - Real-time syntax highlighting using PrismJS
   - Split-screen interface:
     - Left: Code input area
     - Right: AI feedback display
   - Supports JavaScript with expandable language support
   - Markdown-based review output

2. **AI Chat Mode**
   - Powered by Gemini 1.5 Pro
   - Clean, minimalist interface
   - Real-time response streaming
   - Context-aware conversations
   - Code-specific optimizations

## Technical Implementation

### Code Review Component
```javascript
// Key features of the Review component
const Review = () => {
  // Real-time code editing with syntax highlighting
  <Editor
    highlight={code => prism.highlight(code, prism.languages.javascript)}
    style={{
      fontFamily: '"Fira code", "Fira Mono", monospace',
      fontSize: 16
    }}
  />
  
  // AI Review Integration
  async function reviewCode() {
    const response = await axios.post('/ai/get-review', { code })
    // Markdown-based review display
    <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
  }
}
```

### AI Chat Implementation
```javascript
// Main chat component features
const Main = () => {
  // Context-based state management
  const {onSent, recentPrompt, showResult, loading, resultData} = useContext(Context)
  
  // Dynamic response rendering
  <div className="result-data">
    {loading ? <LoadingIndicator/> : 
     <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
  </div>
}
```

## Specific Features

### 1. Code Review Mode
- **Editor Features**
  - Fira Code font for better code readability
  - Custom syntax highlighting themes
  - Automatic code formatting
  - Real-time preview
  - Error handling with user feedback

### 2. Chat Interface
- **UI Components**
  - Clean, minimalist design
  - Loading animations
  - Typing indicators
  - Message history
  - Code snippet support

### 3. AI Integration
- **Gemini Configuration**
```javascript
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192
}
```
- Safety settings for content filtering
- Error handling and retry mechanisms
- Response streaming for better UX

## Technical Stack Details

### Frontend Framework
- React 19.0
- Vite 6.2 for development
- CSS3 with custom animations
- React Router 7.3 for navigation

### Code Processing
- PrismJS for syntax highlighting
- React Simple Code Editor for code input
- Rehype-highlight for review formatting
- Axios for API communication

### State Management
- React Context API
- Custom hooks for AI interaction
- Local state for UI components

## User Interface Details

### Review Mode
1. **Code Editor Panel**
   - Customizable font size
   - Line numbers
   - Syntax highlighting
   - Review button
   - Error indicators

2. **Review Panel**
   - Markdown formatting
   - Code snippets
   - Suggestions
   - Performance tips

### Chat Mode
1. **Message Interface**
   - User message input
   - AI responses
   - Loading indicators
   - Error messages
   - History tracking

2. **Navigation**
   - Sidebar toggle
   - Recent chats
   - Settings access
   - Help section

## Security Implementation

### API Security
- Rate limiting
- Input validation
- Error handling
- Secure API key storage

### Content Filtering
```javascript
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
  },
  // Additional safety categories...
]
```

## Getting Started

### Installation
```bash
# Clone the repository
git clone [your-repo]

# Install dependencies
npm install

# Start development server
npm run dev
```

### Configuration
1. Set up Gemini API key
2. Configure backend URL
3. Customize editor settings
4. Set up safety parameters

## Current Status
-  Code review functionality
-  AI chat integration
-  Syntax highlighting
-  Real-time responses
-  Error handling
-  User authentication (in progress)
-  Multiple language support (in progress)

## Immediate Roadmap
1. Complete authentication system
2. Add more programming languages
3. Implement team collaboration
4. Add code version tracking
5. Enhance AI response quality

This platform combines code review capabilities with AI assistance, providing developers with a powerful tool for code improvement and learning. The dual-mode approach allows for both structured code review and flexible AI interaction, making it a versatile development assistant.
