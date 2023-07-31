# ComponentXperts

ComponentXperts is a web application that allows users to build their dream PC by selecting components from various categories like CPU, Motherboard, RAM, Power Supply Unit, Storage Device, and Monitor.

Visit Our Website [ComponentXperts](https://component-xperts.vercel.app/)

## Features

-   Choose from a variety of components in different categories.
-   View detailed information about each component, including name, image, category, price, stock status, and rating.
-   Add selected components to the PC Builder page for later reference.
-   Check the overall build status and ensure at least 5 components have been selected before completing the build.
-   Complete the build and post it to the database.
-   View the saved PC builds in the database.

## Technologies Used

-   [Next.js](https://nextjs.org/) - A React framework for server-rendered applications.
-   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
-   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
-   [MongoDB](https://www.mongodb.com/) - A NoSQL database for storing PC builds.
-   [Redux Toolkit](https://redux-toolkit.js.org/) - A package to simplify and manage the application state.

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/zhSHUVO/ComponentXperts.git
    ```

2. Install dependencies:

    ```bash
    cd ComponentXperts
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## API Endpoints

-   `/api/products` - Fetch all products from the MongoDB product collection.
-   `/api/products/:productId` - Fetch a specific product by ID from the MongoDB product collection.
-   `/api/categories` - Fetch all categories from the MongoDB category collection.
-   `/api/categories/:category` - Fetch products filtered by category from the MongoDB product collection.
-   `/api/pc-builder` - Save the PC build to the MongoDB pc-builds collection.

## Folder Structure

-   `pages/` - Contains Next.js pages.
-   `components/` - Reusable React components.
-   `utils/` - Utility functions and custom hooks.
-   `public/` - Static assets like images.

## Contributing

Contributions are welcome! If you find a bug or have an idea for a new feature, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Please note that this is a sample README file, and you can modify it to include more specific information about your project as needed. Additionally, make sure to update the URLs and other details to match your actual project repository and technology choices.
