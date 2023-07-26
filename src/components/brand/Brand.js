import React from 'react'
import "./brand.css"
import google from "../../assests/google.png"
import dropBox from "../../assests/dropbox.png"
import atlassian from "../../assests/atlassian.png"
import shopify from "../../assests/shopify.png"
import slack from "../../assests/slack.png"

function Brand() {
  return (
    <div className="brand_main">
      <img src={google} alt="google" />
      <img src={slack} alt="slack" />
      <img src={atlassian} alt="atlassian" />
      <img src={dropBox} alt="dropBox" />
      <img src={shopify} alt="shopify" />

    </div>
  )
}

export default Brand
