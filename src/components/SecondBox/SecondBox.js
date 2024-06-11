import React from "react";
import "./SecondBox.css";
import { AiFillEdit } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { TbMessageDots } from "react-icons/tb";

function SecondBox() {
  return (
    <section className="second-wrapper">
      <div className="second-container">
        <div className="s-top">
          <div className="s-top-left">
            <img src="user-logo.png" alt="logo" width={60} />
            <div className="left-user">
              <span>
                <strong>Neha Bhat</strong> &#40;You&#41;
              </span>
              <span>Jun 27, 2023</span>
            </div>
          </div>
          <div className="s-top-right">
            <AiFillEdit />
            <span>Edit</span>
          </div>
        </div>

        <div className="s-ans-span">
          <span>
            Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum
            enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat
            fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus
            sit pel sit elit morbi. Mi sed mauris aenean odio egestas
            ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum {''}
            <span className="ans-innerSpan">
               interdum ut velit quam. Bibendum amet mi....
              <strong className="strong-span">Show more</strong>
            </span>
          </span>
        </div>
        <div className="second-bottom">
          <div className="bottom-left">
            <SlLike size={20} />
            <span className="bottom-like">Like</span>
          </div>
          <div className="bottom-right">
            <TbMessageDots size={26} />
            <form>
              <input type="text" placeholder="Add a comment" />
            </form>
            <button className="bottom-button">Post</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondBox;
