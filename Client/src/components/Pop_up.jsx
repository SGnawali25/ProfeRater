import React from "react";

function Pop_up() {
  return (
    <div id="popup" className="popup">
      <div className="popup-content">
        <span className="close" id="closePopupButton">
          &times;
        </span>
        <h2>Rate Professor</h2>
        <p>Please rate the professor:</p>
        <div className="star-rating">
          <input type="radio" id="5-stars" name="rating" value="5" />
          <label for="5-stars" className="star">
            &#9733;
          </label>
          <input type="radio" id="4-stars" name="rating" value="4" />
          <label for="4-stars" className="star">
            &#9733;
          </label>
          <input type="radio" id="3-stars" name="rating" value="3" />
          <label for="3-stars" className="star">
            &#9733;
          </label>
          <input type="radio" id="2-stars" name="rating" value="2" />
          <label for="2-stars" className="star">
            &#9733;
          </label>
          <input type="radio" id="1-star" name="rating" value="1" />
          <label for="1-star" className="star">
            &#9733;
          </label>
        </div>
        <div>
          <textarea placeholder="Additional Thoughts(Optional)"></textarea>
        </div>
        <button id="submitRatingButton">Submit</button>
      </div>
    </div>
  );
}

export default Pop_up;
