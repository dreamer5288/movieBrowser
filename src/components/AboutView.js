import Hero from "./Hero";

const AboutView = () => {
    return (
        <>
            <Hero text="About Us"/>
            <div className="container ">
                <div className="col-lg-8 offset-lg-2 my-5">
                    <p>
                        This web appliction is about show details of movies. You can search any movie then you can see 
                        the details of that movie by clicking on show details button. On Homepage you can see 
                        the top rated movies.
                    </p>
                </div>

            </div>
            
        </>

    )
}
export default AboutView;