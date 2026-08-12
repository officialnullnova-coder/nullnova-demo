from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/contact", methods=["POST"])
def contact():

    name = request.form.get("name")
    email = request.form.get("email")
    subject = request.form.get("subject")
    message = request.form.get("message")

    print("\n========== NEW CONTACT MESSAGE ==========")
    print("Name:", name)
    print("Email:", email)
    print("Subject:", subject)
    print("Message:", message)
    print("=========================================\n")

    return redirect(url_for("home") + "#contact")


if __name__ == "__main__":
    app.run(debug=True)