import { IoIosCheckmarkCircleOutline, IoIosSearch } from "react-icons/io";
import hero from "./home.module.css";
import { LuBadgeInfo, LuCircleAlert } from "react-icons/lu";
import { FiFileText } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";

export default function Hero() {

  const dataArray = [

    {id: 1, bgColor: '#EFF6FF', icon: < FiFileText/>, title: 'Total Reports Submitted', num: '12,458'},
    {id: 2, bgColor: '#FEF2F2', icon: < LuCircleAlert/>, title: 'Verified Stolen Vehicles', num: '1,893'},
    {id: 3, bgColor: '#FEF3C7', icon: < MdOutlineAccessTime/>, title: 'Reports Under Review', num: '246'},
    {id: 4, bgColor: '#F0FDF4', icon: < IoIosCheckmarkCircleOutline/>, title: 'Appeals Submitted', num: '89'},

  ];

  return (

    <div className={hero.container}>

      <div className={hero.header_cont}>

        <div className={hero.header}>

          <h1 className={hero.title}>Check Your Vehicle Status</h1>

          <p className={hero.description}>
            Verify vehicle plate numbers and report theft cases to the authorities.
          </p>

        </div>

        {/* <div className={hero.buttonContainer}>

          <button className={hero.primaryButton}>
            <IoIosSearch />
            <span>Check Plate Now</span>
          </button>

          <button className={hero.outlineButton}>
            <LuCircleAlert />
            <span>Report a Stolen Vehicle</span>
          </button>

        </div> */}

      </div>

      <div className={hero.statsGrid}>

        {dataArray.map((card, index) => <div key={index} className={hero.statsCard}>

          <div className={hero.iconContainer} style={{backgroundColor: card.bgColor}}>
            {card.icon}
          </div>

          <div className={hero.statsContent}>
            <p className={hero.statsLabel}>{card.title}</p>
            <h3 className={hero.statsValue}>{card.num}</h3>
          </div>

        </div>)}

      </div>

      <div className={hero.infoBox}>

        <div className={hero.infoIconContainer}>
          <LuBadgeInfo />
        </div>

        <p className={hero.infoText}>
          All reports are reviewed by authorized officers. You will receive updates via your account. Our platform is
          directly connected with law enforcement databases to ensure accurate and up-to-date information.
        </p>

      </div>

    </div>

  )

}