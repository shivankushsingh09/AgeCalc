
# AgeCalc


A beautiful and modern web-based age calculator (AgeCalc) that calculates your exact age in years, months, and days, along with a detailed breakdown including total days, weeks, hours, and minutes. The application also displays your next birthday information.

## ✨ Features

- **Accurate Age Calculation**: Calculate your age in years, months, and days
- **Detailed Breakdown**: View your age in multiple formats:
  - Total Days
  - Total Weeks
  - Total Hours
  - Total Minutes
- **Next Birthday Display**: See when your next birthday is and how many days until it arrives
- **Beautiful UI**: Modern gradient design with smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Input Validation**: Prevents future dates and ensures valid input
- **Smooth Animations**: Number counting animations and fade-in effects
- **User-Friendly**: Clean and intuitive interface with Bootstrap Icons

## 🚀 Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Custom styling with gradients and animations
- **JavaScript (Vanilla)**: Age calculation logic and DOM manipulation
- **Bootstrap 5.3.0**: Responsive grid system and components
- **Bootstrap Icons**: Beautiful iconography
- **Google Fonts (Nunito)**: Modern typography

## 📁 Project Structure

```
AgeCalc/
│
├── index.html          # Main HTML file
├── README.md           # Project documentation
├── License.md          # MIT License
├── .gitignore          # Git ignore file
│
└── assets/
   ├── css/
   │   └── main.css    # Custom styles and animations
   └── js/
      └── main.js     # Age calculation logic
```

## 🎯 How to Use

1. **Clone or Download** the repository
2. **Open** `index.html` in your web browser
3. **Select** your birth date using the date picker
4. **Click** the "Calculate Age" button or press Enter
5. **View** your age details and next birthday information

## 💡 Features in Detail

### Age Display
- **Years, Months, Days**: Primary age display with animated numbers
- **Total Days**: Complete number of days you've been alive
- **Weeks**: Total weeks calculated from days
- **Hours**: Total hours lived
- **Minutes**: Total minutes lived

### Next Birthday
- Shows the date of your next birthday
- Displays the number of days until your next birthday
- Special messages for birthdays today or tomorrow

### Validation
- Prevents selecting future dates
- Validates empty input
- Shows user-friendly error messages

## 🎨 Design Features

- **Gradient Background**: Beautiful purple gradient background
- **Glass Morphism**: Semi-transparent card with backdrop blur
- **Hover Effects**: Interactive elements with smooth transitions
- **Animations**: Fade-in, scale, and pulse animations
- **Color Scheme**: Modern purple and blue gradient palette

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones

## 🔧 Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## 📝 License

This project is licensed under the MIT License - see the [License.md](License.md) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Development

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

## 📄 Code Structure

### JavaScript Functions

- `calculateAge()`: Main function to calculate and display age
- `calculateDetailedAge()`: Core age calculation logic
- `displayResults()`: Updates the UI with calculated results
- `animateValue()`: Animates number counting effect
- `getNextBirthday()`: Calculates next birthday date
- `showError()`: Displays error messages
- `formatNumber()`: Formats numbers with locale-specific separators

### CSS Classes

- `.age-calculator-card`: Main card container
- `.age-box`: Age display boxes (years, months, days)
- `.detailed-breakdown`: Detailed statistics section
- `.next-birthday`: Next birthday information display

## 🌟 Future Enhancements

Potential features for future versions:
- Age in seconds
- Zodiac sign display
- Life milestones calculator
- Share age results
- Multiple date comparisons
- Age difference calculator

---

---

Made with ❤️ using HTML, CSS, and JavaScript
