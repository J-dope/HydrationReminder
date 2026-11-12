# Hydration Reminder App 🥤💧

A cross-mobile React Native application built with **Expo**, **Expo Router**, and **expo-notifications** as part of the Mobile Application Development (Lab 06) practical assignment.

---

## 📌 Features

- **Custom Local Notifications**: Set personalized hydration alert messages and trigger intervals (in minutes).
- **Foreground Notification Handling**: Display alerts even when the app is actively running in the foreground.
- **Tab Navigation**:
  - **⏰ Reminder**: Main interface to start/stop hydration reminders and configure custom messages & time intervals.
  - **💧 Tips**: Information highlighting the key benefits of proper daily hydration.
  - **ℹ️ About**: Details about the application and lab submission.
- **Hardware Permission Management**: Requests OS-level notification permissions dynamically on app startup.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Routing & Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based tab routing)
- **Notifications**: [`expo-notifications`](https://docs.expo.dev/versions/latest/sdk/notifications/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- [Expo Go App](https://expo.dev/go) installed on an iOS or Android physical device

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/](https://github.com/)[Your-Username]/HydrationReminder.git
   cd HydrationReminder