# Profile Card Component

A simple, accessible, and responsive **Profile Card** built using **semantic HTML**, **modern CSS**, and **vanilla JavaScript**. The card displays user details such as name, biography, current time in milliseconds, avatar, social links, hobbies, and dislikes. Each visible element includes a `data-testid` attribute for automated testing.

---

## 🚀 Features

- Fully semantic HTML structure
- Responsive layout (mobile, tablet, desktop)
- Accessibility-friendly (proper alt text, focus states, and keyboard navigation)
- Live display of current time in milliseconds (auto-updates every second)
- Clean design with modern CSS (Flexbox layout)
- `data-testid` attributes for automated test targeting

---

## 🧱 Project Structure

```bash
profile-card/
├── index.html      # Main HTML file
├── style.css       # Styling and layout
└── script.js       # JavaScript logic (time updater)
```

---

## 🧩 Required Test IDs
All visible elements contain stable test IDs for automated tests:

| Element | data-testid |
|----------|--------------|
| Profile card container | `test-profile-card` |
| User name | `test-user-name` |
| User bio | `test-user-bio` |
| Current time | `test-user-time` |
| Avatar image | `test-user-avatar` |
| Social links list | `test-user-social-links` |
| Individual social links | `test-user-social-<network>` |
| Hobbies list | `test-user-hobbies` |
| Dislikes list | `test-user-dislikes` |

---

## 💻 How to Run Locally

Follow these steps to run the project on your local machine:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/profile-card.git
```

### 2️⃣ Navigate into the project folder
```bash
cd profile-card
```

### 3️⃣ Open in your browser
You can open the `index.html` file directly:
- **Option 1:** Double-click the `index.html` file.
- **Option 2:** Serve it locally using VS Code Live Server or any static server:

```bash
# If you have Python installed
python -m http.server 5500
```
Then visit 👉 `http://localhost:5500` in your browser.

---

## 🧠 Implementation Details
- The current time uses `Date.now()` and updates every second via `setInterval()`.
- The layout adjusts automatically for smaller or larger screens.
- All links open safely in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.

---

## 📸 Screenshot (Optional)
_Add a preview image of your profile card here_

---

## 🧪 Testing
This project was built to pass automated accessibility and functionality tests. All elements can be queried by their respective `data-testid` attributes.

Example:
```js
const nameElement = screen.getByTestId('test-user-name');
```

---

## 🧑‍💻 Author
**Amakor Divine**  
Final-Year Industrial Mathematics & Computer Science Student  
Passionate about AI, finance, and full-stack development.

---

## 🪪 License
This project is open-source and available under the [MIT License](LICENSE).
