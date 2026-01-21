CampusCatch is a campus-based Lost & Found web application developed using the MERN stack.
It is designed specifically for students and staff inside a college campus to help them report, track, and recover lost items easily.
Users can create an account and log in securely to post details about items they have lost or found. Each post includes item information such as description and an image to help others identify it. Users can also interact through comments, which helps in providing additional details and increases the chances of returning the item to the rightful owner.
CampusCatch provides a centralized platform within the campus environment, reducing the dependency on informal communication methods like group chats and improving the efficiency of finding lost belongings.

🌐 Live Demo:
https://campus-catch-ha5p.vercel.app/

## Key Features & Benefits

*   **User Authentication:** Secure user registration and login functionality.
*   **Item Reporting:** Users can easily report lost or found items with detailed descriptions and images.
*   **Item Search:** Powerful search capabilities allow users to find relevant items based on keywords, categories, and location.
*   **User Profiles:** Users can manage their listings and track the status of reported items.
*   **Image Upload:** Functionality to upload images of lost or found items to aid in identification.
*   **Responsive Design:** The application is designed to be responsive and accessible on various devices.



## Usage Examples & API Documentation

### API Endpoints:

The server provides the following API endpoints:

*   **User Authentication:**
    *   `POST /api/users/register`: Registers a new user.
    *   `POST /api/users/login`: Logs in an existing user.
    *   `GET /api/users/profile`: Retrieves user profile information (requires authentication).
*   **Item Management:**
    *   `POST /api/items`: Creates a new lost or found item report (requires authentication).
    *   `GET /api/items`: Retrieves a list of all items.
    *   `GET /api/items/:id`: Retrieves a specific item by its ID.
    *   `PUT /api/items/:id`: Updates an existing item (requires authentication).
    *   `DELETE /api/items/:id`: Deletes an item (requires authentication).

