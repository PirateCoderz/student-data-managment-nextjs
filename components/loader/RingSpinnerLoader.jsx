import './RingSpinnerLoader.css';

const Loader = () => {

    return (
        <div className='loader'>
            {/* partial:index.partial.html */}
            <input className='input' type="checkbox" />
            <div className="bg" />
            <div className="dotbox">
                <div className="dots">
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="ring" />
                </div>
            </div>
            {/* partial */}
        </div>
    );
}

export default Loader;