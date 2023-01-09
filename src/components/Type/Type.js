import Typewriter from 'typewriter-effect';

function Type({ strings }) {
    return (
        <Typewriter
            options={{
                strings: strings,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
