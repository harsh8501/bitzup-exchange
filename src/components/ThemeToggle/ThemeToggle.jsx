const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button
      className="btn btn-outline-warning btn-sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
