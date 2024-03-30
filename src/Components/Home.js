import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import React from "react";
import "./Home.css";
import Mintbtn from "./MintBtn";
import Mintbtn2 from "./MintBtn2";
import Mintbtn3 from "./MintBtn3";

import Img1 from "../Images/Dr.jpg";
import Img2 from "../Images/Dr1.jpg";
import Img4 from "../Images/We Before Reveam Img.gif";
import Img3 from "../Images/Wu Before Reveal Image.gif";
import Img5 from "../Images/ether.png";
import ShuImg1 from "../Images/Shu BR Img.gif";

import Logo from '../Images/space_war_nft_logo.png'

export default function Home() {
  return (
    <div>
      <div className="container-fluid sec1">
        <div className="container">
          <div className="row space">
            <div className="col-md-12 text-left">
              <div className="">
                <img className="" src={Logo} />
              </div>
              {/* <h1 className="main-head">Going to</h1>
              <h1 className="head">space</h1> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h6 className="pt-3">NFT Collection</h6>
              <p className="pt-3">
                Space War: 3 Kingdoms is a NFT collection of Shiba space
                <br />
                warriors inspired by the 3 kingdoms’ historic background. In the
                <br />
                coming year, our team will launch a NFT card game, players need
                <br />
                to collect at least 1 warrior from each collection to form an
                <br />
                invincible army! Each kingdom has 1000 NFTs, grab your almighty
                <br />
                Shiba now!
              </p>
              <h6 className="pt-4">Discover & Collect</h6>
              <p className="pt-3">
                Our NFTs are powered by the global space community from
                <br />
                astronauts, engineers, scientists, and artists, Going to Space
                <br />
                publishes collections that excite and inspire the space
                <br />
                community worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Main-bg">
        <div className="container">
          <div className="row sec2">
            <div className="col-md-6">
              <div className="row align-items-center">
                <div className="col-2">
                  <img className="w-100 Dr" src={Img1} />
                </div>
                <div className="col-10 text-left">
                  <h4>Space War: Shu Kingdom</h4>
                </div>
              </div>
              <p className="pt-3">
                This is a collection of Shiba Space Warriors in the Shu Kingdom.
                They all have armours, weapons, background in green colour,
                representing the element of “wood”. You need these green
                warriors to grow the morale and health of your army.
              </p>
              <h6 className="pt-3">NFT Description</h6>
              <p className="pt-3">SHU - Edition: 1000 Pieces</p>
              <p className="">
                Minting price: 1 ETH <br />
                Inspired by the renowned Shu warriors: Guan Yu and Zhao Yun.
              </p>
            </div>
            <div className="col-md-6">
              <img className="w-100" src={ShuImg1}></img>
              {/* <video className="video" loop autoPlay muted>
                <source src={video1} type="video/mp4"></source>
                Your browser does not support the video tag.
              </video> */}
              <div className="container mt-4">
                <div className="row  pt-3  mx-auto">
                  <div className="col-6">
                    <h5 className="text-center">Counter</h5>
                  </div>
                  <div className="col-6">
                    <h5 className="text-center">0.25Eth</h5>
                  </div>
                </div>

                <div className="row d-block mx-auto">
                  <div>
                    <div className="  pb-3 rounded-bottom">
                      <Mintbtn />
                      <CrossmintPayButton
                        className="mx-auto mt-2"
                        collectionTitle="<TITLE_FOR_YOUR_COLLECTION>"
                        collectionDescription="<DESCRIPTION_OF_YOUR_COLLECTION>"
                        collectionPhoto="<OPT_URL_TO_PHOTO_COVER>"
                        clientId="<YOUR_CLIENT_ID>"
                        environment="<YOUR_DESIRED_ENVIRONMENT>"
                        mintConfig={{
                          count: "<NUMBER_OF_NFTS>",
                          totalPrice: "<SELECTED_PRICE>",
                          // your custom minting arguments...
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sec2">
            <div className="col-md-6">
              {/* <video className="video" loop autoPlay muted>
                <source src={video1} type="video/mp4"></source>
                Your browser does not support the video tag.
              </video> */}
              <img className="w-100 bod" src={Img4} />
              <div className="container mt-4">
                <div className="row  pt-3  mx-auto">
                  <div className="col-6">
                    <h5 className="text-center">Counter</h5>
                  </div>
                  <div className="col-6">
                    <h5 className="text-center">0.25Eth</h5>
                  </div>
                </div>

                <div className="row d-block mx-auto">
                  <div>
                    <div className="  pb-3 rounded-bottom">
                      <Mintbtn2 />
                      <CrossmintPayButton
                        className="mx-auto mt-2"
                        collectionTitle="<TITLE_FOR_YOUR_COLLECTION>"
                        collectionDescription="<DESCRIPTION_OF_YOUR_COLLECTION>"
                        collectionPhoto="<OPT_URL_TO_PHOTO_COVER>"
                        clientId="<YOUR_CLIENT_ID>"
                        environment="<YOUR_DESIRED_ENVIRONMENT>"
                        mintConfig={{
                          count: "<NUMBER_OF_NFTS>",
                          totalPrice: "<SELECTED_PRICE>",
                          // your custom minting arguments...
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row align-items-center">
                <div className="col-2">
                  <img className="w-100 Dr" src={Img2} />
                </div>
                <div className="col-10 text-left">
                  <h4>Space War: wei Kingdom</h4>
                </div>
              </div>
              <p className="pt-3">
                This is a collection of Shiba Space Warriors in the Wei Kingdom.
                They all have armours, weapons, background in blue colour,
                representing the element of “water”. You need these blue
                warriors to secure the defence of your army.
              </p>
              <h6 className="pt-3">NFT Description</h6>
              <p className="pt-3">
                WEI - Edition: 1000 Pieces
                <br />
                Minting price: 1.5 ETH
                <br />
                Inspired by the renowned Wei warriors: Xiaohou Dun and Cao Cao.
                <br />
              </p>
              <p className="pt-3">
                <i>
                  {" "}
                  “There usually are two ways to define the word perspective. It
                  may refer to the rendering or interpretation of a
                  three-dimensional object on a two-dimensional plane, or it may
                  refer to an attitude toward something, a point of view. Both
                  of these definitions come into play in this piece.
                  Historically, for the most part, our perspective has been
                  two-dimensional. Although we know that the world is not flat,
                  a true perspective on a three-dimensional, interrelated
                  reality is usually beyond our immediate awareness."
                </i>
              </p>
            </div>
          </div>
          <div className="row sec2">
            <div className="col-md-6">
              {/* <video className="video" loop autoPlay muted>
                <source src={video1} type="video/mp4"></source>
                Your browser does not support the video tag.
              </video> */}
              <img className="w-100 bod" src={Img3} />
              <div className="container mt-4">
                <div className="row  pt-3  mx-auto">
                  <div className="col-6">
                    <h5 className="text-center">Counter</h5>
                  </div>
                  <div className="col-6">
                    <h5 className="text-center">0.25Eth</h5>
                  </div>
                </div>

                <div className="row d-block mx-auto">
                  <div>
                    <div className="  pb-3 rounded-bottom">
                      <Mintbtn3 />
                      <CrossmintPayButton
                        className="mx-auto mt-2"
                        collectionTitle="<TITLE_FOR_YOUR_COLLECTION>"
                        collectionDescription="<DESCRIPTION_OF_YOUR_COLLECTION>"
                        collectionPhoto="<OPT_URL_TO_PHOTO_COVER>"
                        clientId="<YOUR_CLIENT_ID>"
                        environment="<YOUR_DESIRED_ENVIRONMENT>"
                        mintConfig={{
                          count: "<NUMBER_OF_NFTS>",
                          totalPrice: "<SELECTED_PRICE>",
                          // your custom minting arguments...
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h6 className="pt-3">Space War: wu Kingdom</h6>
              {/* <p className="pt-3">“I-SOAR” - Edition of 50</p> */}
              <p className="pt-3">
                This is a collection of Shiba Space Warriors in the Wu Kingdom.
                They all have armours, weapons, background in red colour,
                representing the element of “fire”. You need these red warriors
                to improve your army’s attacking skills and damage percentage.
              </p>
              <h6 className="pt-3">NFT Description</h6>
              <p className="pt-3">
                WU - Edition: 1000 Pieces Minting price: 0.5 ETH Inspired by the
                renowned Wu warriors: Lu Xun and Taishi Ci.
              </p>
              <p className="pt-3">
                One People - Traveling on One Planet - Toward One Common Future
              </p>
              <p className="pt-3">
                The title I-SOAR has many meanings including:
              </p>
              <li>
                In order to see this interdependent big picture, we have to soar
                to new heights—but we do not have to go to space to have this
                perspective.
              </li>
              <p className="pt-3">Webster Dictionary Definition: Soar (verb)</p>
              <li>To fly upward, as a bird</li>
              <li>To rise or aspire to a higher or more exalted level</li>
              <li>
                There are some who are subscribing to a new wave of
                ultra-nationalism and racism that would see this idea of one
                human family as an “eyesore”. This work flips that word eyesore
                on its head and reveals the power and beauty of I-SOAR
              </li>
              <li>
                I-SOAR stands for the Interrelated Structure of All Reality. It
                is a quote from Dr. Martin Luther King’s 1967 “Christmas Sermon
                on Peace”
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
