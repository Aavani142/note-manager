#  Note Manager

A simple web-based note-taking app built with **Node.js**, **Express**, and **EJS**.  
You can create, read, and rename notes — everything is stored as individual `.txt` files on the server.

---

##  Features

-  Create a new note
-  View note contents
-  Rename a note file
-  Files are stored locally in the `files/` folder
-  Styled with Tailwind CSS

---

##  Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Tailwind CSS
- File System module (`fs`)

---

## Page Structure
### 1. Home Page (/)
Displays the app title.

Includes a form to create notes (title and details).

Dynamically lists saved notes with options to read or rename them.

### 2. Note Viewer Page (/file/:filename)
Displays full content of a note.

Clean layout with a back link to the home page.

### 3. Edit Note Page (/edit/:filename)
Allows renaming of existing notes.

Shows current filename (read-only).

Accepts new filename through a form.



## Screenshots

![image](https://github.com/user-attachments/assets/d3bf1925-728f-4611-8c07-7fa7ee45b182)

![image](https://github.com/user-attachments/assets/ed6faf36-8dfd-4e7d-93ff-e8f9e73cabfc)

![image](https://github.com/user-attachments/assets/7f1cd553-9d55-4819-bb3e-437c5c1dc53d)

![image](https://github.com/user-attachments/assets/e5a9cb6c-df24-4f4e-9058-fc652667f396)




