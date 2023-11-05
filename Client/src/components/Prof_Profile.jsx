import React from 'react'

function Prof_Profile() {
    return (
        <div className="Background">
          <div className="Prof_Profile_Container">
            <img src="./public/img/Professor_img.jpg" alt="Professor image" />
                <div className='professor_info'>
                    <p className='professor_detail' id='prof_name'>Prof Name </p>
                    <p className='professor_detail' id='prof_university'>Fisk University </p>
                    <p className='professor_detail' id='prof_course'>CSCI390 </p>
                    <div className ="rating">
                        &#9733;&#9733;&#9733;&#9733;&#9734;
                    </div>
                </div>
               
                
          
          </div>
        </div>
    );
}

export default Prof_Profile