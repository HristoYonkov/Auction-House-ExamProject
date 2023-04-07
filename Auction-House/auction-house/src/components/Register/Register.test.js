import { render, screen, fireEvent, } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { Register } from './Register';
import { AuthContext } from "../../context/AuthContext";

describe("Register Component", () => {

    const mockedUser = {
        user: false,
    };

    it("Register rendering checking!", () => {
        render(
            <Router>
                <AuthContext.Provider value={mockedUser}>
                    <Register />
                </AuthContext.Provider>
            </Router>
        );

        const usernameInput = screen.getByTestId("username");
        const emailInput = screen.getByTestId("email");
        const passwordInput = screen.getByTestId("password");
        const repassInput = screen.getByTestId("repass");

        expect(usernameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(repassInput).toBeInTheDocument();
    });

    it("Updates the email and password when inputs are changed!", () => {
        render(
            <Router>
                <AuthContext.Provider value={mockedUser}>
                    <Register />
                </AuthContext.Provider>
            </Router>
        );

        const usernameInput = screen.getByTestId("username");
        fireEvent.change(usernameInput, { target: { value: "Pencho" } });
        expect(usernameInput.value).toBe("Pencho");

        const emailInput = screen.getByTestId("email");
        fireEvent.change(emailInput, { target: { value: "test@mail.bg" } });
        expect(emailInput.value).toBe("test@mail.bg");

        const passwordInput = screen.getByTestId("password");
        fireEvent.change(passwordInput, { target: { value: 'asdasd' } });
        expect(passwordInput.value).toBe("asdasd");

        const repassInput = screen.getByTestId("repass");
        fireEvent.change(repassInput, { target: { value: 'asdasd' } });
        expect(repassInput.value).toBe("asdasd");
    });
    
    it("Render erros for invalid email", () => {
        render(
            <Router>
                <AuthContext.Provider value={mockedUser}>
                    <Register />
                </AuthContext.Provider>
            </Router>
        );
        const emailInput = screen.getByTestId("email");
        const usernameInput = screen.getByTestId("username");

        fireEvent.change(emailInput, { target: { value: "test" } });
        fireEvent.blur(emailInput);
        expect(screen.getByText("Invalid E-mail!"))
            .toBeInTheDocument();

        fireEvent.change(usernameInput, { target: { value: "a" } });
        fireEvent.blur(usernameInput);
        expect(screen.getByText("Username must be between 2 and 10 characters long!"))
            .toBeInTheDocument();
    });

    it("Check on blur if passwords don't match!", () => {
        render(
            <Router>
                <AuthContext.Provider value={mockedUser}>
                    <Register />
                </AuthContext.Provider>
            </Router>
        );

        const passwordInput = screen.getByTestId("password");
        const repassInput = screen.getByTestId("repass");

        fireEvent.change(passwordInput, {target: {value: "123456"}});
        fireEvent.blur(passwordInput);

        fireEvent.change(repassInput, {target: {value: "123"}});
        fireEvent.blur(repassInput);

        expect(screen.getByText("Password's must match!"))
            .toBeInTheDocument();
    })

    it("Renders error for both password and repass if shortern than 6 characters", () => {
        render(
            <Router>
                <AuthContext.Provider value={mockedUser}>
                    <Register />
                </AuthContext.Provider>
            </Router>
        );

        const passwordInput = screen.getByTestId("password");

        fireEvent.change(passwordInput, { target: { value: 12345 } });
        fireEvent.blur(passwordInput);
        expect(screen.getByText("Password must be between 6 and 15 character's long!"))
            .toBeInTheDocument();

        fireEvent.change(passwordInput, { target: { value: 1234567890123456 } });
        fireEvent.blur(passwordInput);
        expect(screen.getByText("Password must be between 6 and 15 character's long!"))
            .toBeInTheDocument();
    });


    it("it redirects after successful login", () => {
        render(
            <Router>
                <AuthContext.Provider value={mockedUser}>
                    <Register />
                </AuthContext.Provider>
            </Router>
        );

        const usernameInput = screen.getByTestId("username");
        const emailInput = screen.getByTestId("email");
        const passwordInput = screen.getByTestId("password");
        const repassInput = screen.getByTestId("repass");

        const regButton = screen.getByTestId('regButton');

        fireEvent.change(usernameInput, { target: { value: "Test" } });
        fireEvent.change(emailInput, { target: { value: "test@mail.bg" } });
        fireEvent.change(passwordInput, { target: { value: 123456 } });
        fireEvent.change(repassInput, { target: { value: 123456 } });
        
        fireEvent.submit(regButton);
        expect(window.location.href).toEqual("http://localhost/");
    });
});