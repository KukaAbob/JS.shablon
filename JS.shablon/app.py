from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///assortment.db'  
db = SQLAlchemy(app)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)

with app.app_context():
    db.create_all()

@app.route('/')
def home():
    products = Product.query.all()
    return render_template('logreg.html', products=products)

if __name__ == '__main__':
    app.run(debug=True)
