from flask import Flask,render_template,redirect,session,request,send_file,jsonify
import json
from db import conn,cursor
import secrets
import string

app = Flask(__name__)

alphabet = string.ascii_letters + string.digits

@app.route('/createAuction',methods=['GET','POST'])
def createAuction():
    if request.method == 'POST':
        image = request.files['product_image']
        image_content = image.read()
        name = request.form.get('product_name')
        price = request.form.get('product_price')
        expiry_time = request.form.get('expiry_time')
        expiry_date = request.form.get('expiry_date')
        category = request.form.get('category')
        email = 'Mirza Mohammed Junaid' 
        random_key = '#' + ''.join(secrets.choice(alphabet) for i in range(5))
        print(image_content,name,price,expiry_time,expiry_date,category,email)
        cursor.execute('INSERT INTO userauction(email,image,ProductName,ProductPrice,expiry_time,expiry_date,category,AuctionId) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)', (email,image_content,name,price,expiry_time,expiry_date,category,random_key))
        cursor.execute('INSERT INTO liveauction(AuctionId,BiddingPrices,FAQs,BidderDetail) VALUES (%s,%s,%s,%s)', (random_key,price,'null','null'))
        conn.commit()
        print('Insereted Successfully')
        return jsonify({'msg' : "Insereted Successfully"})
        """ data = request.get_json()
        userName = data.get('name')
        userEmail = data.get('email')
        userEmail = data.get('image') """
        # return data

@app.route('/liveAuction',methods=['GET','POST'])
def liveAuction():
    if request.method == 'GET':
        cursor.execute('select * from liveauction')
        result = cursor.fetchall()
        print(result)
        return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)