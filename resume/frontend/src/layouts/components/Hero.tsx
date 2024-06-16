import { Reveal } from "@/framer-motion/Reveal";

const Hero = () => {
    return (
            <div className="container mx-auto py-10 flex-1">
                <Reveal>
                <h1 className="text-8xl font-extrabold text-white font-custom">Hey, I'm Sam.</h1> </Reveal>
                <br></br>
                <Reveal>
                <p className="text-3xl font-light text-white font-custom">I am a <span className="font-bold">Full Stack MERN Developer</span></p></Reveal>
                <Reveal>
                <p className="font-normal text-white font-custom py-2">I've spent the last 5 years building and scaling software for some pretty cool <br/> companies. I also teach people to paint online (in case you've got an empty<br/> canvas laying around 🎨). Let's connect!</p></Reveal>
            </div>

    );       
}

export default Hero;
