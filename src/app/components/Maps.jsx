import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import m from "../../sass/blocks/_maps.module.sass";
import { NavLink } from "react-router-dom";
import GoogleMapsLosAngeles from "./GoogleMap/GoogleMapsLosAngeles.jsx";
import GoogleMapsNewYork from "./GoogleMap/GoogleMapsNewYork.jsx";
import GoogleMapsBoston from "./GoogleMap/GoogleMapsBoston.jsx";
import GoogleMapsDetroit from "./GoogleMap/GoogleMapsDetroit.jsx";

function Maps() {
  const MapCity = (props) => {
    return (
      <div className={`${props.nameCity} ${m.cityContainer}`}>
        <NavLink to={props.to} activeClassName={m.active}>
          <div className="cityWrapper">
            <div className="cityMapIcon"></div>

            <div className="cityDescription">
              <p className="usa">{props.pName}</p>
              <h2>{props.labelName}</h2>
            </div>
          </div>
        </NavLink>
      </div>
    );
  };

  return (
    <div className="maps" id="contactus">
      <Router>
        <div className="container containerMaps">
          <div className="city">
            <div className="meet">
              <h1 className="meetUsh1">
                Meet Us <br /> in Your City
              </h1>
              <h2>
                2005 Stokes Isle Apt. 896, <br /> Venaville, New York 10010
              </h2>
            </div>
            <div className="meet-size">
              <h1 className="meetUsh1">Meet Us in Your City</h1>
              <h2>2005 Stokes Isle Apt. 896, Venaville, New York 10010</h2>
            </div>
            <div className="city-container-wrapper">
              <div className="city-container">
                <MapCity
                  nameCity="m.losAngeles"
                  to="/losangeles"
                  pName="Los Angeles, USA"
                  labelName="2005 Stokes Isle Apt. 896, Venaville, New York 10010"
                />
                <MapCity
                  nameCity="m.newYork"
                  to="/newyork"
                  pName="NewYork, USA"
                  labelName="2005 Stokes Isle Apt. 896, Venaville, New York 10010"
                />
                <MapCity
                  nameCity="m.boston"
                  to="/boston"
                  pName="Boston, USA"
                  labelName="2005 Stokes Isle Apt. 896, Venaville, New York 10010"
                />
                <MapCity
                  nameCity="m.detroit"
                  to="/detroit"
                  pName="Detroit, USA"
                  labelName="2005 Stokes Isle Apt. 896, Venaville, New York 10010"
                />
              </div>
            </div>
          </div>
          <div className="cityMaps">
            <Route path="/losangeles" component={LosAngeles} />
            <Route path="/newyork" component={NewYork} />
            <Route path="/boston" component={Boston} />
            <Route path="/detroit" component={Detroit} />
          </div>
        </div>
      </Router>
    </div>
  );
}

const ImgDescription = (props) => {
  return (
    <div className="mapImgDescriptionBlock">
      <div className="mapPos">
        <div className="mapImgDescription">
          <h1 className="mapDescription">{props.city}</h1>
          <h2>{props.cityh2}</h2>
        </div>
        <div className="mapInfo">
          <div className="infoHead">
            <div className="infoImg">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0195 1.59766C13.4831 0.699219 11.8099 0.25 10 0.25C8.1901 0.25 6.51693 0.699219 4.98047 1.59766C3.44401 2.48307 2.22656 3.69401 1.32812 5.23047C0.442708 6.76693 0 8.4401 0 10.25C0 12.0599 0.442708 13.7331 1.32812 15.2695C2.22656 16.806 3.44401 18.0234 4.98047 18.9219C6.51693 19.8073 8.1901 20.25 10 20.25C11.8099 20.25 13.4831 19.8073 15.0195 18.9219C16.556 18.0234 17.7669 16.806 18.6523 15.2695C19.5508 13.7331 20 12.0599 20 10.25C20 8.4401 19.5508 6.76693 18.6523 5.23047C17.7669 3.69401 16.556 2.48307 15.0195 1.59766ZM10 19.0195C9.04948 19.0195 8.125 18.8763 7.22656 18.5898C6.34115 18.2904 5.54036 17.8672 4.82422 17.3203C4.10807 16.7734 3.47656 16.1419 2.92969 15.4258C2.39583 14.7096 1.97917 13.9089 1.67969 13.0234C1.39323 12.125 1.25 11.2005 1.25 10.25C1.25 9.0651 1.47786 7.93229 1.93359 6.85156C2.40234 5.77083 3.02734 4.83984 3.80859 4.05859C4.58984 3.27734 5.52083 2.65885 6.60156 2.20312C7.68229 1.73438 8.8151 1.5 10 1.5C11.1849 1.5 12.3177 1.73438 13.3984 2.20312C14.4792 2.65885 15.4102 3.27734 16.1914 4.05859C16.9727 4.83984 17.5911 5.77083 18.0469 6.85156C18.5156 7.93229 18.75 9.0651 18.75 10.25C18.75 11.4349 18.5156 12.5677 18.0469 13.6484C17.5911 14.7292 16.9727 15.6667 16.1914 16.4609C15.4102 17.2422 14.4792 17.8672 13.3984 18.3359C12.3177 18.7917 11.1849 19.0195 10 19.0195ZM10.625 9.99609V4C10.625 3.83073 10.5599 3.6875 10.4297 3.57031C10.3125 3.4401 10.1693 3.375 10 3.375C9.83073 3.375 9.68099 3.4401 9.55078 3.57031C9.43359 3.6875 9.375 3.83073 9.375 4V10.25C9.375 10.4323 9.4401 10.582 9.57031 10.6992C9.57031 10.6992 9.57031 10.7057 9.57031 10.7188C9.58333 10.7318 9.58984 10.7383 9.58984 10.7383L12.6953 13.8242C12.8125 13.9544 12.9557 14.0195 13.125 14.0195C13.3073 14.0195 13.457 13.9609 13.5742 13.8438C13.6914 13.7135 13.75 13.5638 13.75 13.3945C13.75 13.2122 13.6914 13.0625 13.5742 12.9453L10.625 9.99609Z"
                  fill="#00A031"
                />
              </svg>
            </div>

            <h1 className="mapDescriptionSecond">
              {props.mapDescriptionSecond1}
            </h1>
          </div>
          <div className="listInfo">
            <h2>
              <b className="listInfoB">{props.day1}</b> {props.clock1}
            </h2>
            <h2>
              <b className="listInfoB">{props.day2}</b> {props.clock2}
            </h2>
          </div>
        </div>
        <div className="mapInfo">
          <div className="infoHead">
            <div className="infoImg">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3164 14.2539C19.2513 14.4102 19.1341 14.5208 18.9648 14.5859C18.8086 14.651 18.6523 14.6445 18.4961 14.5664C18.3398 14.5013 18.2292 14.3906 18.1641 14.2344C18.099 14.0651 18.1055 13.9023 18.1836 13.7461C18.418 13.2253 18.5677 12.6914 18.6328 12.1445C18.7109 11.5977 18.75 10.9661 18.75 10.25C18.75 9.03906 18.5156 7.90625 18.0469 6.85156C17.5911 5.78385 16.9661 4.85938 16.1719 4.07812C15.3906 3.28385 14.4661 2.65885 13.3984 2.20312C12.3438 1.73438 11.2109 1.5 10 1.5C8.78906 1.5 7.64974 1.73438 6.58203 2.20312C5.52734 2.65885 4.60286 3.28385 3.80859 4.07812C3.02734 4.85938 2.40234 5.78385 1.93359 6.85156C1.47786 7.90625 1.25 9.03906 1.25 10.25C1.25 11.4609 1.47786 12.6003 1.93359 13.668C2.40234 14.7227 3.02734 15.6471 3.80859 16.4414C4.60286 17.2227 5.52734 17.8477 6.58203 18.3164C7.64974 18.7721 8.78906 19 10 19C10.8333 19 11.6471 18.8828 12.4414 18.6484C13.2487 18.4141 14.0039 18.0755 14.707 17.6328C14.7331 17.6198 14.8242 17.5482 14.9805 17.418C15.1497 17.2878 15.2539 17.1055 15.293 16.8711C15.319 16.7148 15.293 16.5456 15.2148 16.3633C15.1497 16.181 15.0391 15.9857 14.8828 15.7773L14.6094 16.0898C14.5052 16.194 14.3685 16.2917 14.1992 16.3828C14.043 16.4609 13.8346 16.5 13.5742 16.5C13.2357 16.5 12.8385 16.4089 12.3828 16.2266C11.9271 16.0443 11.4323 15.7904 10.8984 15.4648C10.3776 15.1263 9.82422 14.7227 9.23828 14.2539C8.66536 13.7852 8.09245 13.2643 7.51953 12.6914C7.03776 12.1966 6.52344 11.6237 5.97656 10.9727C5.42969 10.3216 4.95443 9.66406 4.55078 9C4.16016 8.32292 3.89974 7.69141 3.76953 7.10547C3.65234 6.50651 3.76953 6.03125 4.12109 5.67969L5.83984 4.15625C5.90495 4.10417 5.97656 4.0651 6.05469 4.03906C6.13281 4.01302 6.21094 4 6.28906 4C6.36719 4 6.44531 4.01953 6.52344 4.05859C6.60156 4.09766 6.66667 4.14974 6.71875 4.21484L8.94531 6.77344C9.02344 6.86458 9.06901 6.97526 9.08203 7.10547C9.09505 7.22266 9.07552 7.33984 9.02344 7.45703L8.20312 9.09766L11.1523 12.0469L12.793 11.2266C12.8971 11.1745 13.0143 11.1549 13.1445 11.168C13.2747 11.181 13.3854 11.2266 13.4766 11.3047L16.0352 13.5117C16.1003 13.5638 16.1458 13.6289 16.1719 13.707C16.2109 13.7852 16.237 13.8633 16.25 13.9414C16.25 14.0195 16.237 14.1042 16.2109 14.1953C16.1849 14.2734 16.1458 14.3385 16.0938 14.3906L15.7227 14.8203C16.0352 15.2109 16.2565 15.5951 16.3867 15.9727C16.5299 16.3372 16.5755 16.7018 16.5234 17.0664C16.4453 17.6003 16.237 18.0039 15.8984 18.2773C15.5729 18.5378 15.3841 18.681 15.332 18.707C14.5508 19.2018 13.7044 19.5794 12.793 19.8398C11.8945 20.1133 10.9635 20.25 10 20.25C8.61979 20.25 7.32422 19.9831 6.11328 19.4492C4.90234 18.9284 3.84115 18.2188 2.92969 17.3203C2.03125 16.4089 1.3151 15.3477 0.78125 14.1367C0.260417 12.9258 0 11.6302 0 10.25C0 8.86979 0.260417 7.57422 0.78125 6.36328C1.3151 5.15234 2.03125 4.09766 2.92969 3.19922C3.84115 2.28776 4.90234 1.57161 6.11328 1.05078C7.32422 0.516927 8.61979 0.25 10 0.25C11.3802 0.25 12.6758 0.516927 13.8867 1.05078C15.0977 1.57161 16.1523 2.28776 17.0508 3.19922C17.9622 4.09766 18.6784 5.15234 19.1992 6.36328C19.7331 7.57422 20 8.86979 20 10.25C20 11.0312 19.9544 11.7409 19.8633 12.3789C19.7852 13.0169 19.6029 13.6419 19.3164 14.2539ZM12.9688 12.5352L11.3086 13.3555C11.1784 13.4206 11.0482 13.4466 10.918 13.4336C10.7878 13.4076 10.6771 13.3424 10.5859 13.2383L6.99219 9.66406C6.90104 9.57292 6.84245 9.46224 6.81641 9.33203C6.80339 9.20182 6.82943 9.07161 6.89453 8.94141L7.71484 7.28125L6.19141 5.50391L5.03906 6.53906C4.98698 6.63021 5 6.82552 5.07812 7.125C5.16927 7.42448 5.34505 7.80859 5.60547 8.27734C5.86589 8.73307 6.22396 9.26042 6.67969 9.85938C7.13542 10.4583 7.70833 11.1029 8.39844 11.793C8.95833 12.3529 9.4987 12.8477 10.0195 13.2773C10.5534 13.707 11.0482 14.0716 11.5039 14.3711C11.9596 14.6576 12.3633 14.8789 12.7148 15.0352C13.0794 15.1784 13.3659 15.25 13.5742 15.25C13.6263 15.25 13.6589 15.25 13.6719 15.25C13.6979 15.237 13.7109 15.2305 13.7109 15.2305L14.7461 14.0391L12.9688 12.5352Z"
                  fill="#00A031"
                />
              </svg>
            </div>

            <h1 className="mapDescriptionSecond">
              {props.mapDescriptionSecond2}
            </h1>
          </div>
          <div className="listInfo">
            <h2>{props.listInfo1}</h2>
            <h2>{props.listInfo2}</h2>
          </div>
        </div>
        <div className="mapInfo">
          <div className="infoHead">
            <div className="infoImg">
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.125 14.125H1.875C1.35417 14.125 0.911458 13.9427 0.546875 13.5781C0.182292 13.2135 0 12.7708 0 12.25V2.25C0 1.72917 0.182292 1.28646 0.546875 0.921875C0.911458 0.557292 1.35417 0.375 1.875 0.375H18.125C18.6458 0.375 19.0885 0.557292 19.4531 0.921875C19.8177 1.28646 20 1.72917 20 2.25V12.25C20 12.7708 19.8177 13.2135 19.4531 13.5781C19.0885 13.9427 18.6458 14.125 18.125 14.125ZM1.875 12.875H18.125C18.2943 12.875 18.4375 12.8164 18.5547 12.6992C18.6849 12.569 18.75 12.4193 18.75 12.25V2.44531L10.4102 9.59375C10.3451 9.64583 10.2799 9.6849 10.2148 9.71094C10.1497 9.73698 10.0781 9.75 10 9.75C9.92188 9.75 9.85026 9.73698 9.78516 9.71094C9.72005 9.6849 9.65495 9.64583 9.58984 9.59375L1.25 2.44531V12.25C1.25 12.4193 1.30859 12.569 1.42578 12.6992C1.55599 12.8164 1.70573 12.875 1.875 12.875ZM17.793 1.625H2.20703L10 8.30469L17.793 1.625Z"
                  fill="#00A031"
                />
              </svg>
            </div>

            <h1 className="mapDescriptionSecond">
              {props.mapDescriptionSecond3}
            </h1>
          </div>
          <div className="listInfo">
            <h2>{props.listInfo3}</h2>
            <h2>{props.listInfo4}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

function LosAngeles() {
  return (
    <div className="LosAngelesPath">
      <div className="mapImg">
        <GoogleMapsLosAngeles />
      </div>
      <ImgDescription
        city="LosAngeles"
        cityh2={["2005 Stokes Isle Apt. 896", <br />, "LosAngeles 10010"]}
        mapDescriptionSecond1="Work Schedule"
        day1="Mon - Sat: "
        clock1=" 11:00-19:00,"
        day2="Sun: "
        clock2=" 11:00-16:00,"
        mapDescriptionSecond2="Head Office"
        listInfo1="(0043) 568 456 902"
        listInfo2="(0041) 568 432 872"
        mapDescriptionSecond3="Head Office"
        listInfo3="hello@pad.architecture"
        listInfo4="support@pad.architecture"
      />
    </div>
  );
}

function NewYork() {
  return (
    <div>
      <div className="LosAngelesPath">
        <div className="mapImg">
          <GoogleMapsNewYork />
        </div>
        <ImgDescription
          city="NewYork"
          cityh2={["2005 Stokes Isle Apt. 896", <br />, "New York 10010"]}
          mapDescriptionSecond1="Work Schedule"
          day1="Mon - Sat: "
          clock1=" 11:00-19:00,"
          day2="Sun: "
          clock2=" 11:00-16:00,"
          mapDescriptionSecond2="Head Office"
          listInfo1="(0043) 568 456 902"
          listInfo2="(0041) 568 432 872"
          mapDescriptionSecond3="Head Office"
          listInfo3="hello@pad.architecture"
          listInfo4="support@pad.architecture"
        />
      </div>
    </div>
  );
}

function Boston() {
  return (
    <div>
      <div className="LosAngelesPath">
        <div className="mapImg">
          <GoogleMapsBoston />
        </div>
        <ImgDescription
          city="Boston"
          cityh2={["2005 Stokes Isle Apt. 896", <br />, "Boston 10010"]}
          mapDescriptionSecond1="Work Schedule"
          day1="Mon - Sat: "
          clock1=" 11:00-19:00,"
          day2="Sun: "
          clock2=" 11:00-16:00,"
          mapDescriptionSecond2="Head Office"
          listInfo1="(0043) 568 456 902"
          listInfo2="(0041) 568 432 872"
          mapDescriptionSecond3="Head Office"
          listInfo3="hello@pad.architecture"
          listInfo4="support@pad.architecture"
        />
      </div>
    </div>
  );
}

function Detroit() {
  return (
    <div>
      <div className="LosAngelesPath">
        <div className="mapImg">
          <GoogleMapsDetroit />
        </div>
        <ImgDescription
          city="Detroit"
          cityh2={["2005 Stokes Isle Apt. 896", <br />, "Detroit 10010"]}
          mapDescriptionSecond1="Work Schedule"
          day1="Mon - Sat: "
          clock1=" 11:00-19:00,"
          day2="Sun: "
          clock2=" 11:00-16:00,"
          mapDescriptionSecond2="Head Office"
          listInfo1="(0043) 568 456 902"
          listInfo2="(0041) 568 432 872"
          mapDescriptionSecond3="Head Office"
          listInfo3="hello@pad.architecture"
          listInfo4="support@pad.architecture"
        />
      </div>
    </div>
  );
}

export default Maps;
