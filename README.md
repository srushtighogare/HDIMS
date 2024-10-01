# HDIMS

Health Data and Information Management System, is a system designed to unify the current process of collecting health data from hospitals, verifying the data, and displaying the relevant data to the government in a graphical format, allowing for better insights and thus assisting in policy making. 

Our prototype has two parts - the front end using react native, and the back end & database using express.js and PostGRE SQL. 

The current prototype has been created with the view to understand the basic working logic of our app, before moving ahead with complete development, and thus is very primitive.


<—front end react part here—>

 The back end of prototype utilizes PostgreSQL for data storage, Express.js as the framework for building API routes, and Argon2 for password hashing, focusing on user registrations and healthcare data management (e.g., ANC-related data) for now.

##Database Structure:
1. **profileinfo Database**:
    - govregis Table: Stores government registration information, including usernames, hashed passwords, user levels, and area names.
    - anc Table: Stores antenatal care (ANC) data, including hospital ID, ANC registrations, early ANC registrations, TT2 vaccinations, and calculated health indicators.

##Key Functionalities:
1. **Government Registration (POST):**
    - New user registrations are saved in the `govregis` table.
    - Passwords are securely hashed using Argon2 before being stored.

2. **Retrieve Profile Information (GET):**
    - Retrieves a specific government registration profile based on the username.

3. **Update Profile:**
    - Username Update (PUT): Allows users to update their usernames using their unique `regiid`.
    - Password Update (PUT): Allows users to update their passwords.

4. **ANC Data Management (POST):**
    - Collects and stores data related to ANC services, such as ANC registrations, early ANC registrations, and TT2 vaccinations. Before storing, two key health indicators are calculated:
        - ***Early Registration Rate:*** The percentage of early ANC registrations.
        - ***TT2 to Total ANC Ratio:*** The percentage of TT2 vaccinations among total ANC registrations.
    - Validation is done to ensure early ANC registrations and TT2 vaccinations do not exceed total ANC registrations.

5. **Indicator Retrieval (GET):**
    - Retrieves specific health indicators over a user-specified time range from the ANC data.

6. **Developer Endpoint (GET):**
    - Retrieves all government registrations for development and testing purposes.

##Technologies Used:
- **PostgreSQL:** For relational database management.
- **Express.js:** For API routes.
- **Argon2:** For secure password hashing.
- **pg (node-postgres):** For interacting with the PostgreSQL database.

This prototype backend is designed to handle user registrations, data collection, indicator calculations, and data querying for health-related metrics, providing a foundational framework for further development.
