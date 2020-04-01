import React from 'react';

import hero from '../assets/images/illustration-mockups.svg';

function Content() {
    return (
        <div className="flex">
            <section>
                <img src={hero} alt="hero-image"/>
            </section>

            <div className="info">
                <h1>Build the community your fans will love</h1>
                <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                <a clasName="link" href={"#"}>Register</a> 
            </div>
        </div>
    )
}

export default Content
