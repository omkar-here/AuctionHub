from flask import Flask,render_template,redirect,session,request,send_file,jsonify
import json
import base64
from db import conn,cursor
import secrets
import string
import pytz
from datetime import datetime,date,time
from cloudinary.uploader import upload
from cloudinary.utils import cloudinary_url
import cloudinary
from flask_cors import CORS
from datetime import datetime
app = Flask(__name__)
CORS(app)

cloudinary.config(cloud_name = "dftin82rh",api_key = "778892232981745",api_secret = "fsc3Dy0zC3FNscrcWrBQevKQahA",secure = True)
alphabet = string.ascii_letters + string.digits
print('working')
watermark_transformation = {
            'overlay': {
                'font_family': 'Verdana',
                'font_size': 120,
                'text': 'AuctionHub.com',
                'text_align': 'center',
                'text_valign': 'bottom',
                'color': 'black',
                'stroke': 'white',
                'stroke_width': 4,
                'opacity': 60
            },
            'gravity': 'south_east'
        }
@app.route('/createAuction',methods=['GET','POST'])
def createAuction():
    print('request detected')
    if request.method == 'POST':
        obj=request.get_json()
        # image = request.files['product_image']

        name = obj['product_name']
        price = obj['product_price']
        expiry_time = obj['expiry_time']
        expiry_date = obj['expiry_date']
        date_obj = datetime.strptime(expiry_date, '%Y-%m-%d')
        expiry_date = datetime.strftime(date_obj, '%d-%m-%Y')
        category = obj['category']
        email = 'Mirza Mohammed Junaid' 
        # print(name)
        random_key = '#' + ''.join(secrets.choice(alphabet) for i in range(5))
        # upload_result = cloudinary.uploader.upload(image, transformation=[watermark_transformation],folder='AuctionHub')
        # image_url = upload_result['secure_url']
        image_url = 'https://res.cloudinary.com/dftin82rh/image/upload/v1683050173/AuctionHub/ijjf7elfr0wzazxabxg6.jpg'

        cursor.execute('INSERT INTO userauction(email,image,ProductName,ProductPrice,expiry_time,expiry_date,category,AuctionId) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)', (email,image_url,name,price,expiry_time,expiry_date,category,random_key))
        cursor.execute('INSERT INTO liveauction(AuctionId,BiddingPrices,FAQs,BidderDetail) VALUES (%s,%s,%s,%s)', (random_key,price,'null','null'))
        conn.commit()
        print("creating auction")
        return jsonify({'msg' : 'Inserted Successfully'})
    else:
        print("hojaa")
        

@app.route('/liveAuction',methods=['GET','POST'])
def liveAuction():
    if request.method == 'GET':
        live_auction = []
        timezone = pytz.timezone('Asia/Kolkata')
        indian_time = datetime.now(timezone)
        indian_date = indian_time.date()
        indian_time = indian_time.time()
        indian_date_str = indian_date.strftime('%d-%m-%Y')
        indian_time_str = indian_time.strftime('%H:%M:%S')
        cursor.execute('SELECT * FROM userauction LEFT OUTER JOIN liveauction ON userauction.AuctionId = liveauction.AuctionId UNION SELECT * FROM userauction RIGHT OUTER JOIN liveauction ON userauction.AuctionId = liveauction.AuctionId WHERE userauction.AuctionId IS NULL;')
        result = cursor.fetchall()
        for i in range(len(result)):
            # datetime1 = datetime(int(indian_date_str[6:10]),int(indian_date_str[3:5]), int(indian_date_str[0:2]), int(indian_time_str[0:2]), int(indian_time_str[3:5]), int(indian_time_str[6:8])) 
            # datetime2 = datetime(int(result[i][7][6:10]),int(result[i][7][3:5]), int(result[i][7][0:2]), int(result[i][4][0:2]),int(result[i][4][3:5]), int(result[i][4][6:8])) 
            # if datetime2 > datetime1:
            live_auction.append(list(result[i]))
        
        passData = jsonify(live_auction)
        print(passData)
        return passData

if __name__ == '__main__':
    app.run(debug=True)