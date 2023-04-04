import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

describe('Home', () => {
    const mockUser = {
        user: false,
    };

    it("renders without crashing", () => {
        render(
            <Router>
                <AuthContext.Provider value={mockUser}>
                    <Home />
                </AuthContext.Provider>
            </Router>
        );

        const welcomeTitle = screen.getByTestId("welcome");
        expect(welcomeTitle).toBeInTheDocument();
    });
});