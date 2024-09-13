import { useRouter } from "next/router";
import { useState } from "react";

import { createClient } from "@/utils/supabase/component";

import {
  Form,
  Main,
  Label,
  Input,
  ErrorMessage,
  SignInButton,
} from "@/components/login-styled-component/LoginStyles";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  async function logIn() {
    setIsLoggingIn(true);
    setErrorMessage("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setErrorMessage(error.message);
      setIsLoggingIn(false);
      return;
    }
    setIsLoggingIn(false);
    router.push("/");
  }

  return (
    <Main>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          logIn();
        }}
      >
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            required
            id="email"
            type="email"
            value={email}
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            required
            id="password"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <SignInButton>
            {!isLoggingIn ? <>Sign in</> : <>Signing in...</>}
          </SignInButton>
        </div>
        {errorMessage ? (
          <div>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </div>
        ) : null}
      </Form>
    </Main>
  );
}
