import React from "react";

function Post(){
    const url = "http://pc39.el.htl.local:3000/set";

    function postData() {

        fetch(url, {

            method: 'POST',
            headers: {

                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },

            body: JSON.stringify({
                key: 5,
                text: "Hartl Corinna"

            })

        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <button onClick={postData}>
                Post
            </button>
        </div>
    );


}
export default Post;
