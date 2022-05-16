function GetInTouch() {
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
          <a href="https://2piratebay.org"></a>
          <br />
          <a href="https://www.embedgooglemap.net"></a>
        </div>
      </div>
      <div className="form-container">
      <div className="form">
      <form>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            name="name"
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            name="email"
            required
          />

          <textarea
            type="textarea"
            rows={4}
            id="message"
            required
            placeholder="Message"
            name="message"
          ></textarea>
          <div className="send">

            <button className="btnFillup2 anglebg2" type="submit" value="Send">
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
       
      </div>
    </div>
  );
}
export default GetInTouch;
