import "./devcard.css";
import ReactDOM from "react-dom";
import Tilt from "react-parallax-tilt";

import React from "react";

type Props = {};

export default function DevCard({}: Props) {
    return (
        <Tilt
            tiltReverse={true}
            glareEnable={true}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
        >
            <div className="screen shadow-2xl shadow-orange-400 ">
                <div className="screen-image"></div>
                <div className="screen-overlay"></div>
                <div className="screen-content">
                    <i className="screen-icon fa-brands fa-codepen"></i>
                    <div className="screen-user">
                        <span className="name" data-value="CODEPEN">
                            PPLK 2024
                        </span>
                        <a
                            className="link"
                            href="https://youtube.com/@Hyperplexed"
                            target="_blank"
                        >
                            @akuLinuk
                        </a>
                    </div>
                </div>
            </div>

            <div id="blur"></div>

            <div id="links">
                <div className="meta-link">
                    <span className="label">Futuristic Card Effect</span>
                    <span className="dot">·</span>
                    <a
                        className="source"
                        href="https://www.sprite.com/zerolimits"
                        target="_blank"
                    >
                        <i className="fa-solid fa-link"></i>
                    </a>
                    <span className="dot">·</span>
                    <a
                        className="youtube"
                        href="https://youtu.be/jMVhxBB3l0w"
                        target="_blank"
                    >
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>

                <div className="meta-link">
                    <span className="label">Glowy Blob Effect</span>
                    <span className="dot">·</span>
                    <a
                        className="source"
                        href="https://www.poppr.be"
                        target="_blank"
                    >
                        <i className="fa-solid fa-link"></i>
                    </a>
                    <span className="dot">·</span>
                    <a
                        className="youtube"
                        href="https://youtu.be/kySGqoU7X-s"
                        target="_blank"
                    >
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>

                <div className="meta-link">
                    <span className="label">Text Effect</span>
                    <span className="dot">·</span>
                    <a
                        className="source"
                        href="https://kprverse.com"
                        target="_blank"
                    >
                        <i className="fa-solid fa-link"></i>
                    </a>
                    <span className="dot">·</span>
                    <a
                        className="youtube"
                        href="https://youtu.be/W5oawMJaXbU"
                        target="_blank"
                    >
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
        </Tilt>
    );
}
