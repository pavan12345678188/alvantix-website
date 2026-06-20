export const adminTemplate = ({
  name,
  email,
  company,
  serviceInterest,
  message,
}) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body{
    font-family:Arial,sans-serif;
    background:#f8fafc;
    margin:0;
    padding:40px;
}
.container{
    max-width:700px;
    margin:auto;
    background:#fff;
    border-radius:14px;
    overflow:hidden;
    box-shadow:0 10px 35px rgba(0,0,0,.08);
}
.header{
    background:linear-gradient(90deg,#2563eb,#4f46e5);
    color:white;
    padding:30px;
    text-align:center;
}
.header h1{
    margin:0;
}
.content{
    padding:35px;
}
.card{
    background:#f8fafc;
    border:1px solid #e2e8f0;
    border-radius:10px;
    padding:18px;
    margin-bottom:16px;
}
.label{
    font-weight:bold;
}
.footer{
    text-align:center;
    padding:25px;
    color:#64748b;
}
</style>
</head>

<body>

<div class="container">

<div class="header">
<h1> New Contact Inquiry</h1>
<p>Alvantix Website</p>
</div>

<div class="content">

<div class="card">
<strong>Name</strong><br>${name}
</div>

<div class="card">
<strong>Email</strong><br>${email}
</div>

<div class="card">
<strong>Company</strong><br>${company || "Not Provided"}
</div>

<div class="card">
<strong>Service</strong><br>${serviceInterest}
</div>

<div class="card">
<strong>Message</strong><br>${message}
</div>

</div>

<div class="footer">
<b>Alvantix</b><br>
Building Intelligent AI Solutions for the Future
</div>

</div>

</body>
</html>
`;