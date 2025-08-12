<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EduKnights Admin Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1e2a78;
            color: #fff;
            padding: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 12px;
            border: 1px solid #fff;
            text-align: left;
        }
        th {
            background-color: #f1c40f;
            color: #1e2a78;
        }
    </style>
</head>
<body>
    <h1>EduKnights Admin Dashboard</h1>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody id="userTable">
            <!-- User data will be populated here -->
        </tbody>
    </table>

    <script>
        const adminCredentials = {
            username: "arushpadmawar12",
            password: "arushpad1234"
        };

        // Step 1: Login as Admin to get token
        fetch('https://eduknights-backend.onrender.com/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(adminCredentials)
        })
        .then(res => res.json())
        .then(loginData => {
            if (loginData.token) {
                // Step 2: Fetch users with token
                fetch('https://eduknights-backend.onrender.com/admin/users', {
                    headers: { 
                        'Authorization': Bearer ${loginData.token}
                    }
                })
                .then(res => res.json())
                .then(users => {
                    const tableBody = document.getElementById('userTable');
                    users.forEach(user => {
                        const row = `<tr>
                                        <td>${user.name}</td>
                                        <td>${user.email}</td>
                                        <td>${user.password}</td>
                                     </tr>`;
                        tableBody.innerHTML += row;
                    });
                })
                .catch(err => console.error("Error fetching users:", err));
            } else {
                console.error("Admin login failed:", loginData);
            }
        })
        .catch(err => console.error("Error logging in:", err));
    </script>
</body>
</html>
