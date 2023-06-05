import { ThemeProvider } from "./ThemeProvider";
import { StartScreen } from "./StartScreen/StartScreen";

export default function App() {
    return (
        <ThemeProvider>
            <StartScreen />
        </ThemeProvider>
    );
}
