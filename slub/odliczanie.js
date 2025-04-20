function updateCountdown() {
    const targetDate = new Date(2025, 8, 27, 14, 30); // 27 września 2025 14:30
    const now = new Date();
  
    if (now >= targetDate) {
      document.getElementById("countdown").innerHTML = "🎉 Ślub! 🎉";
      return;
    }
  
    let years = targetDate.getFullYear() - now.getFullYear();
    let months = targetDate.getMonth() - now.getMonth();
    let days = targetDate.getDate() - now.getDate();
    let hours = targetDate.getHours() - now.getHours();
    let minutes = targetDate.getMinutes() - now.getMinutes();
  
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
  
    if (hours < 0) {
      hours += 24;
      days--;
    }
  
    if (days < 0) {
      const prevMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }
  
    if (months < 0) {
      months += 12;
      years--;
    }
  
    // Wyświetlanie
    document.getElementById("months").textContent = months + years * 12;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
  }
  
  // Odświeżaj co sekundę
  setInterval(updateCountdown, 1000);
  updateCountdown();
