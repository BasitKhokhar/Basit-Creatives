
import React from "react";

const GoToTop =() => {
    window.addEventListener('scroll', function () {
        var header = document.getElementById('gotop');
        header.classList.toggle('display_topicon', window.scrollY > 100);
    });
    return(
        <div className="gototop-icon" id="gotop">
            <div className="gototop">
            <img src="src\images\gototop.png" alt="" />
            </div>
           
        </div>
    )
}
export default GoToTop;