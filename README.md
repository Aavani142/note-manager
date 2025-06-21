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
- Custom CSS
- File System module (`fs`)

---

## Page Structure

### 1. / — Home Page
File: views/index.ejs
Purpose:

Displays a form to create a new note

Lists all existing notes with:

✅ Title

✅ Link to "Read More"

✅ Link to "Edit Filename"

### 2. /create — Create Note (POST Route)
Triggered From: Form on / (home page)
Backend: app.post('/create')
Purpose:

Saves the new note as a .txt file inside the /files folder

Redirects back to /

### 3. /file/:filename — View a Note
File: views/show.ejs
Purpose:

Opens and displays the content of a single note

Renders the full text from the corresponding .txt file

### 4. /edit/:filename — Edit Note (Rename)
File: views/edit.ejs
Purpose:

Shows a form to rename a note

Takes:

Old filename (read-only)

New filename (input)

Submits to /edit (POST)

### 5. /edit — Rename Note (POST Route)
Backend: app.post('/edit')
Purpose:

Uses fs.rename() to rename the .txt file in /files

Redirects to /


---
## Screenshots

![image](https://github.com/user-attachments/assets/6f74347f-4904-4172-88ee-7cdb841f880d)


![image](https://github.com/user-attachments/assets/2532069a-617e-46a7-901e-d323e07f5ede)


![image](https://github.com/user-attachments/assets/3935c8a8-e489-40b0-be1c-d6a8aa06f7fd)


![image](https://github.com/user-attachments/assets/f256c8e8-1a7e-4a8b-b242-58fb90d5590c)





