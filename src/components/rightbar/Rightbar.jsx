import "./rightbar.css"

export default function Rightbar() {
    return (
        <div className="rightBar">
            <div className="rightBarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="birthdayImg" className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Kevin Spencer</b> and <b>Ruby Diamond</b> have their birthday's today.
                    </span>
                </div>
            </div>
        </div>
    )
}
