# Frontend-Stage0: Multi-Page Web Application

A **multi-page web application** featuring a profile card, contact form, and about page. Built with **semantic HTML**, **modern CSS**, and **vanilla JavaScript** with full accessibility and responsive design.

---

## 🚀 Features

- Multi-page navigation system
- Fully semantic HTML structure
- Responsive layout (mobile, tablet, desktop)
- Accessibility-friendly (proper alt text, focus states, and keyboard navigation)
- Contact form with client-side validation
- Live display of current time in milliseconds (auto-updates every second)
- Clean design with modern CSS (Flexbox layout)
- `data-testid` attributes for automated test targeting

---

## 🧱 Project Structure

```bash
Frontend-Stage0/
├── index.html      # Profile card page
├── contact.html    # Contact form page
├── about.html      # About me page
├── style.css       # Styling and layout
├── script.js       # JavaScript logic (time updater)
└── contact.js      # Form validation logic
```

---

## 🔄 Frontend-Stage1 Updates

### New Pages Added:
- **Contact Us Page** (`contact.html`) - Form with validation for name, email, subject, and message
- **About Me Page** (`about.html`) - Personal reflections and program goals

### Enhanced Features:
- **Navigation System** - Seamless navigation between all pages
- **Form Validation** - Real-time validation with error messages and success feedback
- **Accessibility Improvements** - ARIA associations, proper labeling, and keyboard navigation
- **Responsive Design** - All pages optimized for mobile, tablet, and desktop

### Technical Improvements:
- Added `contact.js` for form validation logic
- Enhanced CSS with form styling and responsive breakpoints
- Implemented semantic HTML structure across all pages

---

## 🧩 Required Test IDs
All visible elements contain stable test IDs for automated tests:

### Profile Page
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

### Contact Page
| Element | data-testid |
|----------|--------------|
| Full name input | `test-contact-name` |
| Email input | `test-contact-email` |
| Subject input | `test-contact-subject` |
| Message textarea | `test-contact-message` |
| Submit button | `test-contact-submit` |
| Error messages | `test-contact-error-<field>` |
| Success message | `test-contact-success` |

### About Page
| Element | data-testid |
|----------|--------------|
| About page container | `test-about-page` |
| Biography section | `test-about-bio` |
| Goals section | `test-about-goals` |
| Confidence section | `test-about-confidence` |
| Future note section | `test-about-future-note` |
| Extra thoughts section | `test-about-extra` |

---

## 💻 How to Run Locally

Follow these steps to run the project on your local machine:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/Frontend-Stage0.git
```

### 2️⃣ Navigate into the project folder
```bash
cd Frontend-Stage0
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
