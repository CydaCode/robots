import React from "react";

const Card = (props) => {
    return(
        <div className="bg-light-blue dib br3 pa3 ma2 tc grow shadow">
            <img alt="Robots" src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                <p>{props.name}</p>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;