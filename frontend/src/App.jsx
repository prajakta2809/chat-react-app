import { useState } from "react";

import "./App.css";

import AuthPage from "./../src/assets/AuthPage";
import ChatsPage from "./../src/assets/ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;