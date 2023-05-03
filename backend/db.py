import mysql.connector
conn = mysql.connector.connect(
        host='localhost',
        user='root',
        password='omkar@123',
        database='AuctionHub'
)
cursor = conn.cursor()