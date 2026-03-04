🚐 TravelTrucks – Camper Catalog & Booking App
📌 About the Project
TravelTrucks is a React + Vite application where users can browse a catalog of campers, filter by location and features, add favorites, view detailed camper pages, and make reservations.

🛠️ Tech Stack
• 	React + Vite → fast development environment
• 	React Router → page routing
• 	Redux Toolkit + redux-persist → global state management with persistence in localStorage
• 	Formik + Yup → form handling and validation
• 	React Datepicker + date-fns → date selection and formatting
• 	React Loader Spinner → loading animations
• 	React Hot Toast → user notifications
• 	clsx → conditional className management

📂 Project Structure

src/
  assets/             # static assets (icons, images)
  components/         # reusable UI components (CamperCard, Filters, Loader, BookingForm, Comments)
  pages/              # page components (Home, Catalog, CamperDetails, Favorites)
  redux/              # store and persist configuration
  features/campers/   # Redux slice and thunks for campers
  App.jsx             # main app component
  main.jsx            # entry point
  index.css           # global styles
public/
  images/             # camper images (mavericks.jpg, kuga.jpg, etc.)


🚀 Getting Started
Install dependencies:

Run the development server:


📌 Example Mock Data



🎯 Features
• 	Catalog: filter campers by location, equipment, and type; view as cards; load more results
• 	Favorites: add/remove campers from favorites and view them on a dedicated page
• 	CamperDetails: detailed camper info, reviews, and booking form
• 	BookingForm: Formik + Yup validation, date selection with React Datepicker
• 	Loader & Toast: loading animations and user notifications
• 	Responsive Design: optimized for mobile, tablet, and desktop

