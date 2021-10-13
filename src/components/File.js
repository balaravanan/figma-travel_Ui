import { BsSearch } from "react-icons/bs";
import {CCard} from "@coreui/react";
import React from "react";
import male from "../assets/images/group.png";
import Grou from "../assets/images/Group 575.png";
import home from "../assets/images/Component 16.png";
import upcome from "../assets/images/Component 11.png";
import Navi from "../assets/images/Component 12.png";
import Profile from "../assets/images/Component 7.png";
import poto from "../assets/images/image 27.png"
import poto1 from "../assets/images/photos.png"
import poto2 from "../assets/images/photos (1).png"
import poto3 from "../assets/images/photos (2).png"
import poto4 from "../assets/images/photos (3).png"
import poto5 from "../assets/images/photos (4).png"
import Setting from "../assets/images/Component 9.png";
import Log from "../assets/images/Component 10.png";
// import Search from "../assets/images/Group 2.png";
import colimg from "../assets/images/Group 128.png";
import more from "../assets/images/more.png"
import comp from "../assets/images/compass.png";
import Searchico from "../assets/images/Filter.png";
import Vector from "../assets/images/Vector (1).png";
import propert from "../assets/images/used property.png"
import propert1 from "../assets/images/bed.png"
import propert2 from "../assets/images/area.png"
import icone from "../assets/images/icon 1.png";
import icone1 from "../assets/images/icon 2.png";
import icone2 from "../assets/images/icon 3.png";
import heart from "../assets/images/heart-shape-outline 1.png";
import MaskGroup from "../assets/images/Mask Group.png";
import Svgfor from "../assets/images/chevron_forward.svg";
import Svgdown from "../assets/images/chevron_forward (1).svg";
import Imgae1 from "../assets/images/Rectangle 5.png";
import Imgae2 from "../assets/images/Rectangle 5 (1).png";
import Imgae3 from "../assets/images/Rectangle 5 (2).png";
import smile from "../assets/images/Group 18.png";
import smile1 from "../assets/images/Group 19.png";
import Members from "../assets/images/Members.png";
import navi from "../assets/images/Vector.png";
import paste from "../assets/images/Group 8.png";
import { Container, Row, Col, Card, Input } from "reactstrap";

function File() {
  return (
    <div>
      <Container>
      <CCard
          className={"cardSave"}
          // style={{
          //   minHeight: `${window.innerHeight - 200}px`,
          //   maxHeight: `${window.innerHeight - 200}px`,
          //   overflow: "auto",
          //       margin:"50px",
          //       width:"505"
          // }}
        >
        <Row>
          <Col
            xs={2}
            style={{
              backgroundColor: "#E5E5E5",
              marginTop: "-4px",
              float: "left",
              overflow: "auto",
            }}
          >
            <img src={Grou} alt="toogle" className={"togell"} />
            <br />
            <img src={home} alt="home" className={"marginchn"} />
            <br />
            <img src={upcome} alt="upcome" className={"marginchn"} />
            <br />
            <img src={Navi} alt="Navi" className={"marginchn"} />
            <br />
            <img src={Profile} alt="Profile" className={"marginchn"} />
            <br />
            <img src={Setting} alt="Setting" className={"marginchn"} />
            <br />
            <img src={Log} alt="Logout" className={"marginchn-1"} />
          </Col>

          <Col md={6} style={{ float: "left", width: "62%" }}>
            <div className={"secondp"}>
              <h2>Shikra</h2>
              <img
                src={Searchico}
                alt="search filter"
                style={{ marginLeft: "790px", marginTop: "-60px" }}
              />

<div style={{marginTop:"-75px", marginLeft:"158px"}}>
<Input placeholder="Search" style={{ marginLeft: "458px", width:"180px", borderRadius:"25px", height:"30px",  border:"1px solid #a59494",  }}/>
</div>

<div style={{marginLeft:"772px", marginTop:"-28px"}}>
<BsSearch/>
            </div>
              {/* <img
                src={Search}
                alt="search Field"
               
              /> */}
            </div>

            <div>
              <img src={comp} alt="compass" className={"secondp-c"} />
            </div>
            <div className={"margin-1"}>Explore</div>
            <div>
              <img
                src={Svgdown}
                alt="Svgfor"
                style={{ marginLeft: "865px", marginTop: "-85px" }}
              />
            </div>
            <div style={{ marginTop: "-21px" }}>
              <img
                src={Svgfor}
                alt="Svgfor"
                style={{ marginLeft: "845px", marginTop: "-85px" }}
              />
            </div>
            <div className={"secondp-2"}>
              <img src={MaskGroup} alt="Mask Group" />
            </div>
            <div className="words">
              <span style={{ marginLeft: "-30px", opacity: "0.3" }}>
                Europe
              </span>
              <span style={{ color: "#FF6647", marginLeft: "30px" }}>
                Sights
              </span>
              <span style={{ marginLeft: "30px", opacity: "0.3" }}>
                America
              </span>
            </div>
            <Card className={"card-1"}>
              <img src={Imgae1} alt="img1" style={{ margin: "5px" }} />
              <div style={{ margin: "5px" }}>
                <b>Phi Phi Islands</b>
              </div>
              <img src={navi} alt="map" style={{ margin: "5px" }} />
              <div
                style={{
                  marginLeft: "25px",
                  marginTop: "-29px",
                  opacity: "0.3",
                }}
              >
                {" "}
                Thailand
              </div>
              <div style={{ marginTop: "-50px" }}>
                <img
                  src={paste}
                  alt="paste"
                  style={{ marginLeft: "210px", marginTop: "-100px" }}
                />
              </div>
              <div style={{ color: "#34A59F", marginLeft: "220px" }}>$1480</div>
            </Card>

            <Card className={"card-2"}>
              <img src={Imgae2} alt="img1" style={{ margin: "5px" }} />
              <div style={{ margin: "5px" }}>
                <b>Kudahuvadhoo Island</b>
              </div>
              <img src={navi} alt="map" style={{ margin: "5px" }} />
              <div
                style={{
                  marginLeft: "25px",
                  marginTop: "-29px",
                  opacity: "0.3",
                }}
              >
                {" "}
                Maldives
              </div>
              <div style={{ marginTop: "-50px" }}>
                <img
                  src={paste}
                  alt="paste"
                  style={{ marginLeft: "210px", marginTop: "-100px" }}
                />
              </div>
              <div style={{ color: "#34A59F", marginLeft: "220px" }}>$1480</div>
            </Card>

            <Card className={"card-3"}>
              <img src={Imgae3} alt="img1" style={{ margin: "5px" }} />
              <div style={{ margin: "5px" }}>
                <b>GreeceVillage</b>
              </div>
              <img src={navi} alt="map" style={{ margin: "5px" }} />
              <div
                style={{
                  marginLeft: "25px",
                  marginTop: "-29px",
                  opacity: "0.3",
                }}
              >
                {" "}
                Maldives
              </div>
              <div style={{ marginTop: "-50px" }}>
                <img
                  src={paste}
                  alt="paste"
                  style={{ marginLeft: "210px", marginTop: "-100px" }}
                />
              </div>
            </Card>

            <Card className={"card-4"}>
              <img src={male} alt="male icon" style={{ margin: "15px" }} />
              <div style={{ marginLeft: "50px", marginTop: "-40px" }}>
                <b>Invite Friends</b>
              </div>
              <img src={smile} alt="smile" className="smile" />
              <img src={smile1} alt="smile" className="smile" />
            </Card>
            <div style={{ marginTop: "-27px" }}>
              <img
                src={Members}
                alt="chart"
                style={{ marginLeft: "375px", marginTop: "-400px" }}
              />
            </div>
            <div className={'vector'}>
              <img src={Vector} alt="Vector (1)" />
              <img src={Vector} alt="Vector (1)" style={{marginLeft:"2px"}}/>
              <img src={Vector} alt="Vector (1)" style={{marginLeft:"2px"}}/>
            </div>
          </Col>
          <Col md={4} style={{ float: "left" }}>
            <Card className={"card-5"}>
                    <img src={colimg} alt="imager" style={{margin:"10px"}}/>
                    <div style={{opacity:"0.4"}}>
                    <div style={{marginLeft:"10px"}}>Apartment</div>
                    <div style={{marginLeft:"105px", marginTop:"-23px"}}>|</div>
                    <div style={{marginLeft:"125px", marginTop:"-23px"}}>by Robbin johnson</div>
                    <div style={{marginLeft:"340px", marginTop:"-15px"}}> <img src={heart} alt="heart"/> </div>
                </div>
                <div>
                <img src={icone} alt='icon'/>
                <img src={icone1} alt='icon' style={{marginLeft:"-40px"}}/>
                <img src={icone2} alt='icon' style={{marginLeft:"-40px"}}/>
                <div className={'amount'}><b>$ 2,900.00</b></div>
                </div>

                <div style={{marginTop:"30px"}}>
                <img src={propert} alt="property" style={{marginLeft:"20px"}}/>
                <img src={propert1} alt="property" style={{marginLeft:"40px"}}/>
                <img src={propert2} alt="property" style={{marginLeft:"50px"}}/>
                </div>
                <div>
             <iframe title="las-vegas, USA" src="https://www.google.com/maps?q=Las%20Vegas%2C%20NV%2C%20USA&z=14&t=k&ie=UTF8&output=embed" width="375" height="300" style={{marginLeft:"10px"}}>src="" width="100%" height="200" frameborder="0" allowfullscreen=""></iframe>
                </div>              
                <div>
                    <h3>Photos</h3>
                    <div style={{marginTop:"-40px"}}>
                    <img src={more} alt="mark" style={{marginLeft:"320px"}}/>
                    </div>
                    <div>
                    <img src={poto} alt="photos" style={{width:"110px", height:"110px", borderRadius:"10px"}}/>
                    <img src={poto1} alt="photos" style={{marginLeft:"10px"}}/>
                    <img src={poto2} alt="photos" style={{marginLeft:"10px"}}/>
                    <img src={poto3} alt="photos" />
                    <img src={poto4} alt="photos" style={{marginLeft:"10px"}}/>
                    <img src={poto5} alt="photos" style={{marginLeft:"10px"}}/>
                    </div>
                </div>
                </Card>
          </Col>
        </Row>
</CCard>
      </Container>
    </div>
  );
}

export default File;
